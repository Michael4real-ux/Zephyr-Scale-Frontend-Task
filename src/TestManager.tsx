import { HashRouter, Route, Switch } from "react-router-dom";
// @ts-ignore
import { Instructions } from "./components/Instructions.tsx";
// @ts-ignore
import { LinkToTests } from "./components/Links.tsx";
// @ts-ignore
import { TestManagerContextProvider } from "./context/TestManagerContextProvider.tsx";

// @ts-ignore
import { DynamicTableData } from "./components/DynamicTable.tsx";
// @ts-ignore
import { EditText } from "./components/Utils/TextForm.tsx";
// @ts-ignore
import { initialTests } from "./components/TableContent.tsx";



function TestManager() {
  return (
    <TestManagerContextProvider initialTests={initialTests}>
      <h1>Test manager app</h1>
      <HashRouter>
        <Switch>
          <Route path="/" exact>
            <Instructions />
            <LinkToTests />
          </Route>

          <Route path="/tests">
            <DynamicTableData />
          </Route>

          <Route path="/create-test">
            <EditText />
          </Route>

          <Route path="/edit-tests/:testItemId">
            <EditText />
          </Route>

          {/*
            TODO: Routes to implement

              /tests
                Use @atlaskit/dynamic-table to display the data

              /edit-tests/:testItemId
                Use @atlaskit/select, @atlaskit/textfield & @atlaskit/button to create a form
                HINT: you will need useTestManagerItems and remember to use parseInt when extracting the ID from URL

          */}
        </Switch>
      </HashRouter>
    </TestManagerContextProvider>
  );
}

export default TestManager;

