import PropTypes from "prop-types";
import React from "react";

/* import './button.scss';
 */
export default function Button({
  children,
  type = "button",
  disabled,
  btnClass,
  onClickAction,
  dataTestid,
  ariaLabel,
}) {
  return (
    <button
      data-testid={dataTestid}
      disabled={disabled}
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
