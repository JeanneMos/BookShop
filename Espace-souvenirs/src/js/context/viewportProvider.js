import React, {
  createContext, useEffect, useState, useMemo,
} from 'react';
import PropTypes from 'prop-types';

export const ViewportContext = createContext({});

export default function ViewportProvider({ children }) {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };
  const debounce = (func, time) => {
    let timeoutID;
    const timeout = time || 200;
    return function debouncer(...args) {
      const scope = this;
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        func.apply(scope, Array.prototype.slice.call(args));
      }, timeout);
    };
  };

  useEffect(() => {
    window.addEventListener('resize', debounce(() => handleWindowResize(), 1000));
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [width]);

  const viewportValues = useMemo(() => ({
    width,
  }), [width]);
  return (
    <ViewportContext.Provider value={viewportValues}>
      {children}
    </ViewportContext.Provider>
  );
}
ViewportProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
