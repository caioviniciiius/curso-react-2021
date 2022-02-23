import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <App nome="Fulano de tal" idade={31} />,
  document.getElementById("root")
);
