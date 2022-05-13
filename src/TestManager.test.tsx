import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import TestManager from "./TestManager";
import selectEvent from "react-select-event";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";

afterEach(cleanup);

test("example test", () => {
  render(<TestManager />);
  fireEvent.click(screen.getByText("Open test manager"));
});

test("Should have a table showing all tests", () => {
  render(<TestManager />);
  const tableHead = screen.getByText("ID");
  expect(tableHead).toBeInTheDocument();
});

test("Should have a 'Create new test' button that adds a new entry into the state", () => {
  render(<TestManager />);
  const createButton = screen.getByText("Create new task");
  expect(createButton).toHaveTextContent("Create new task");
});

test("Should be able to click on a table row to go to /edit-tests/", () => {
  const history = createMemoryHistory();
  render(<TestManager />);
  fireEvent.click(screen.getAllByRole("row")[2]);
  history.push("/edit-tests/2");
});

test("Should be able to modify a tests name via `@atlaskit/textfield`", () => {
  interface testInput extends HTMLElement {
    value?: string;
  }
  const setup = () => {
    const utils = render(<TestManager />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const input: testInput = utils.getByLabelText("default text field");
    return {
      input,
      ...utils,
    };
  };

  const { input } = setup();
  fireEvent.change(input, { target: { value: "pass" } });
  expect(input.value).toBe("pass");
});

test("Should be able to modify a test's execution status via `@atlaskit/select", async () => {
  const { getByTestId, getByLabelText } = render(<TestManager />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByTestId("form")).toHaveFormValues({ status: "Fail" });
  // eslint-disable-next-line testing-library/prefer-screen-queries
  await selectEvent.select(getByLabelText("Execution Status"), "Fail");
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByTestId("form")).toHaveFormValues({ status: "Fail" });
});

test("Should contain a button to delete the current test from the state.", () => {
  render(<TestManager />);
  fireEvent.click(screen.getByText("Delete"));
});
