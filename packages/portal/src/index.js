import { StrictMode } from "react";
import { render } from "react-dom";
import { App } from "./App";
import "./index.css";

const rootEl = document.getElementById("root");
render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootEl
);
