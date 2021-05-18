import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App2 from "./App2";
import {Provider} from "react-redux";
import {store} from "./store.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App2 />
    </StrictMode>
  </Provider>,
  rootElement
);
