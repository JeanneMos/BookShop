import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Icon from "../Icons/Icon";


export default function MobileTabs({ activeTab, children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [activeTab]);
  return (
    <div className="tab-list-mobile">
      <button
        type="button"
        aria-expanded={isMenuOpen}
        className={classNames("tab-list-mobile__toggle", {
          active: isMenuOpen,
        })}
        onClick={handleMenuOpen}
      >
        <span className="tab-list-mobile__toggle-text">{activeTab}</span>
        <Icon
          name="chevron"
          iconClass={classNames("tab-list-mobile__toggle-icon", {
            open: isMenuOpen,
          })}
        />
      </button>
      <div
        role="tablist"
        className={classNames("tab-list-mobile__list", {
          open: isMenuOpen,
        })}
        aria-label="Navigation principale"
      >
        {children}
      </div>
    </div>
  );
}

MobileTabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
