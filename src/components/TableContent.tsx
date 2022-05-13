import DynamicTable from "@atlaskit/dynamic-table";
import { useHistory } from "react-router-dom";
import { TestItem, Status } from "../types";


const testsHead = ["ID", "Name", "Status"];

export const initialTests: TestItem[] = [
  { id: 0, name: "Test 1", executionStatus: "Pass" },
  { id: 1, name: "Test 2", executionStatus: "Fail" },
  { id: 2, name: "Test 3", executionStatus: "Not executed" },
];

export const TableContent = ({ tests }) => {
  let history = useHistory();
  if (!tests || !tests.length) {
    return <div>No tests</div>;
  }

  const head = {
    cells: testsHead.map((test) => ({
      key: test,
      content: test,
    })),
  };

  const handleClick = (testId) => {
    history.push(`/edit-tests/${testId}`);
  };

  const rows = tests.map((elem: Status, index: number) => ({
    onClick: () => handleClick(elem.id),
    key: `row-${index}-${elem.name}`,
    cells: [
      {
        key: elem.id,
        content: elem.id,
      },
      {
        key: elem.name,
        content: elem.name,
      },

      {
        key: elem.executionStatus,
        content: elem.executionStatus,
      },
    ],
  }));

  return <DynamicTable head={head} rows={rows} />;
};
