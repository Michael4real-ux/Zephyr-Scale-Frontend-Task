import { render, screen } from "@testing-library/react";
import TestManager from "./TestManager";

test("example test", () => {
  render(<TestManager />);
  const header = screen.getByText(/Test manager app/i);
  expect(header).toBeInTheDocument();
});

test.todo("Should have a table showing all tests");

test.todo(
  "Should have a 'Create new test' button that adds a new entry into the state"
);

test.todo("Should be able to click on a table row to go to /edit-tests/");

test.todo("Should be able to modify a tests name via `@atlaskit/textfield`");

// To select a dropdown item, use:
//    await selectEvent.select(element, optionName);
test.todo(
  "Should be able to modify a test's execution status via `@atlaskit/select` dropdown menu"
);

test.todo("Should contain a button to delete the current test from the state.");
