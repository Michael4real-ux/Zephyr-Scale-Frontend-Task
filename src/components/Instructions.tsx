import Button from "@atlaskit/button";

export const Instructions = () => {
  return (
    <>
      <h3>Requirements: </h3>
      <h4>### Page 1 (/tests)</h4>
      <ol>
        <li>
          Should have a table showing all tests via `@atlaskit/dynamic-table`
        </li>
        <li>
          Should have a 'Create new test' button that adds a new entry into the
          state
        </li>
        <li>Should be able to click on a table row to go to the next page:</li>
      </ol>
      <h4>### Page 2 (/edit-test/:testId)</h4>
      <ol>
        <li>Should be able to modify a tests name via `@atlaskit/textfield`</li>
        <li>
          Should be able to modify a test's execution status via
          `@atlaskit/select` dropdown menu
        </li>
        <li>
          Should contain a button to delete the current test from the state.
        </li>
      </ol>
      <br />
      Some documentation for the components can be found here:
      <br />
      <br />
      <Button
        appearance="link"
        href="https://atlassian.design/components/button/"
        target={"_blank"}
      >
        https://atlassian.design/components/button/
      </Button>
      <br />
      <Button
        appearance="link"
        href="https://atlassian.design/components/select/"
        target={"_blank"}
      >
        https://atlassian.design/components/select/
      </Button>
      <br />
      <Button
        appearance="link"
        href="https://atlassian.design/components/dynamic-table/"
        target={"_blank"}
      >
        https://atlassian.design/components/dynamic-table/
      </Button>
      <br />
      <Button
        appearance="link"
        href="https://atlassian.design/components/textfield/"
        target={"_blank"}
      >
        https://atlassian.design/components/textfield/
      </Button>
      <br />
      <br />
      Don't forget to test your application! See <b>src/TestManager.test.tsx</b>
      <br />
      <br />
    </>
  );
};
