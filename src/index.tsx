import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { StoreProvider } from "./Context";
import RootStore from "./stores";

ReactDom.render(
  <StoreProvider value={new RootStore()}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
