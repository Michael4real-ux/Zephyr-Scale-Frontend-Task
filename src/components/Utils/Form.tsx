/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";
import Textfield from "@atlaskit/textfield";
import Select from "@atlaskit/select";
// @ts-ignore
import { LinkToInstructions } from "../Links.tsx";
// @ts-ignore
import ButtonPrimary from "../Button.tsx";
import { TestItem } from "../../types";

export const Form = ({testItemId, tests, setTests}) => {
    let history = useHistory();

    const [testName, setTestName] = useState("");
    const [status, setStatus] = useState({ label: "...", value: "..." });
  
    useEffect(() => {
      if (testItemId) {
        //console.log('selected id:', testItemId, tests)
        // eslint-disable-next-line eqeqeq
        const test = tests.find((elem) => elem.id == testItemId);
        setTestName(test.name);
        const statuses = {
          Pass: "Pass",
          Fail: "Fail",
          "Not executed": "Not executed",
        };
        setStatus({
          label: statuses[test.executionStatus],
          value: test.executionStatus,
        });
    
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    function handleChangeName(e) {
    //   console.log("changed name:", e.target);
      setTestName(e.target.value);
    }
    function handleChangeStatus(e) {
      console.log("changed value:", e);
      setStatus(e);
    }
    function handleSubmit(e) {
      if (testItemId) {
        // eslint-disable-next-line eqeqeq
        const testIndex = tests.findIndex((test) => test.id == testItemId);
  
        tests[testIndex].name = testName;
        tests[testIndex].executionStatus = status.value;
        setTests(tests);
      } else {
        e.preventDefault();
        const newId = tests.slice(-1)[0].id + 1;
        const newTest: TestItem = {
          id: newId,
          name: testName,
          executionStatus: status.value,
        };
        const updatedTests = [...tests, newTest];
        setTests(updatedTests);
        console.log("saved!");
      }
  
      history.push("/tests");
    }
  
    const handleDelete = () => {
      if (testItemId) {
        // eslint-disable-next-line eqeqeq
        setTests(tests.filter((item) => item.id != testItemId));
        history.push("/tests");
      }
    };
  return (
   <>
      <h4>Edit {testName}</h4>
      <form data-testid="form">
        <div>
          <label htmlFor='name'>Name</label>
          <Textfield
            id="name"
            onChange={handleChangeName}
            name="basic"
            aria-label="default text field"
            value={testName}
          />
        </div>
        <div>
          <label htmlFor='status'>Execution Status</label>
          <Select
            onChange={handleChangeStatus}
            inputId="status"
            className="single-select"
            name="status"
            classNamePrefix="react-select"
            value={status}
            options={[
              { label: "Pass", value: "Pass" },
              { label: "Fail", value: "Fail" },
              { label: "Not executed", value: "Not executed" },
            ]}
          />
        </div>
        <div
          css={css`
            display: flex;
            margin-top: 15px;
            float:right
          `}
        >
          <div>
            <LinkToInstructions linkName={"Back"} />
          </div>
          <div onClick={handleSubmit}>
            <ButtonPrimary
              buttonName={testItemId ? "Edit" : "Save"}
              data-testid="Create new test"
            />
          </div>
          {testItemId && (
            <div
              onClick={handleDelete}
              css={css`
                margin-left: 15px;
              `}
            >
              <ButtonPrimary buttonName={"Delete"} />
            </div>
          )}
        </div>
      </form></>
  )
}
