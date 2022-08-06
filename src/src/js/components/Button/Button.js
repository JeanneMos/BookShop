import PropTypes from "prop-types";
import React from "react";

export default function Button({
  children,
  type = "button",
  disabled,
  btnClass,
  onClickAction,
  dataTestid,
  ariaLabel,
  id,
}) {
  return (
    <button
      data-testid={dataTestid}
      disabled={disabled}
      type={type === "submit" ? "submit" : "button"}
      className={btnClass}
      onClick={onClickAction}
      id={id ? id : null}
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
