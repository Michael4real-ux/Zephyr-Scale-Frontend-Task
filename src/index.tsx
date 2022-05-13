import React from "react";
import ReactDOM from "react-dom";
import TestManager from "./TestManager.tsx";
import { css, Global } from "@emotion/react";

const globalCSS = css`
  body {
    margin: 0;
    padding: 10vh 30vw;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #e2e2e2;
  }

  tr {
    cursor: pointer;
  }
`;

ReactDOM.render(
  <>
    <Global styles={globalCSS} />
    <TestManager />
  </>,
  document.getElementById("root")
);
