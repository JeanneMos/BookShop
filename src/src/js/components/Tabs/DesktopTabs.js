import PropTypes from "prop-types";
import React from "react";

/* import './navigation.scss'; */

export default function DesktopTabs({ children }) {
  return (
    <div role="tablist" className="tab-list" aria-label="Navigation principale">
      {children}
    </div>
  );
}

DesktopTabs.propTypes = {
  children: PropTypes.node.isRequired,
};
