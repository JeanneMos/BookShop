import PropTypes from "prop-types";
import React from "react";
import { Provider } from "react-redux";

import { store } from "../store/store";
import ViewportProvider from "./viewportProvider";

export default function GlobalProvider({ children }) {
  return (
    <Provider store={store}>
      <ViewportProvider>{children}</ViewportProvider>
    </Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
