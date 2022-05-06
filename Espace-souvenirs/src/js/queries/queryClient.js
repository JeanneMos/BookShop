import React from 'react';
import PropTypes from 'prop-types';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function AppQuery({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

AppQuery.propTypes = {
  children: PropTypes.node.isRequired,
};
