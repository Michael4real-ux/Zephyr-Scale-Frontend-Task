/** @jsxImportSource @emotion/react */

import { useParams } from "react-router-dom";
// @ts-ignore
import { useTestManagerItems } from "../../context/TestManagerContextProvider.tsx";
// @ts-ignore
import { Form } from "./Form.tsx";

type JobPageRouteParams = {
  testItemId: string
};
export const EditText = () => {
  let { testItemId } = useParams<JobPageRouteParams>();
  const [tests, setTests] = useTestManagerItems();
  return (
    <>
      <Form testItemId={testItemId} tests={tests} setTests={setTests}/>
    </>
  );
};
