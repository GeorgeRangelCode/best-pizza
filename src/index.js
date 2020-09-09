import React from "react";
import ReactDOM from "react-dom";
import { App } from "./routes/App";
import "bootstrap/dist/css/bootstrap.css";
import { ContextProvider } from "./Context";

const renderToDOM = () => {
  if (document.getElementById("root") !== null) {
    ReactDOM.render(
      <React.StrictMode>
        <ContextProvider>
          <App />
        </ContextProvider>
      </React.StrictMode>,
      document.getElementById("root")
    );
  }
};

renderToDOM();
export { renderToDOM };
