/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useHistory } from "react-router-dom";
// @ts-ignore
import { TableContent } from "./TableContent.tsx";
// @ts-ignore
import { LinkToInstructions } from "./Links.tsx";
// @ts-ignore
import ButtonPrimary from "./Button.tsx";
// @ts-ignore
import { useTestManagerItems } from "../context/TestManagerContextProvider.tsx";

export const DynamicTableData = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push("/create-test");
  };
  const [tests] = useTestManagerItems();

  return (
    <>
      <div>
        <div onClick={handleClick}>
          <ButtonPrimary buttonName={"Create new task"} />
        </div>

        <div
          css={css`
            margin-top: 20px;
          `}
        >
          <TableContent data-testid="test-table" tests={tests} />
        </div>
        <LinkToInstructions linkName={"Back to instructions"} />
      </div>
    </>
  );
};
