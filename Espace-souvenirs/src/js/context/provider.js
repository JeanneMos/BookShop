import React from 'react';
import PropTypes from 'prop-types';

import ViewportProvider from './viewportProvider';

import { store } from '../store/store';
import { Provider } from 'react-redux'

export default function GlobalProvider({ children }) {
  return (
    <Provider store={store}>
      <ViewportProvider>
        {children}
      </ViewportProvider>
    </Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
