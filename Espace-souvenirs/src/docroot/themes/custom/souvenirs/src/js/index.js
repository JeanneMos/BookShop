import React from "react";
import ReactDOM from "react-dom";

import GlobalProvider from "./context/provider";
import AppQuery from "./queries/queryClient";

import RouterComponent from "./router/RouterComponent";

function MainComponent() {
  return (
    <GlobalProvider>
      <AppQuery>
        <RouterComponent />
      </AppQuery>
    </GlobalProvider>
  );
}

const reactRoot = document.getElementById("react-app");

// eslint-disable-next-line function-paren-newline
if (reactRoot) {
  ReactDOM.render(
    <React.StrictMode>
      <MainComponent />
    </React.StrictMode>,
    reactRoot,
  );
}
