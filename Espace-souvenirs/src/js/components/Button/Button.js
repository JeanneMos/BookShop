import React from "react";
import PropTypes from "prop-types";

/* import './button.scss';
 */
export default function Button({
  children,
  type = "button",
  btnClass,
  onClickAction,
  dataTestid,
  ariaLabel,
}) {
  return (
    <button
      data-testid={dataTestid}
      type={type === "submit" ? "submit" : "button"}
      className={btnClass}
      onClick={onClickAction}
      aria-label={ariaLabel ? ariaLabel : null}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  btnClass: null,
};
Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  btnClass: PropTypes.string,
};
