/** @jsxImportSource @emotion/react */

import { useParams } from "react-router-dom";
// @ts-ignore
import { useTestManagerItems } from "../../context/TestManagerContextProvider.tsx";
// @ts-ignore
import { Form } from "./Form.tsx";
import {RouteParams} from '../../types'


export const EditText = () => {
  let { testItemId } = useParams<RouteParams>();
  const [tests, setTests] = useTestManagerItems();
  return (
    <>
      <Form testItemId={testItemId} tests={tests} setTests={setTests}/>
    </>
  );
};
