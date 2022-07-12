import React from "react";

interface IButton {
  children?: React.ReactNode;
  type?: string;
  disabled?: boolean;
  btnClass?: string;
  onClickAction?: () => void;
  dataTestid?: string;
  ariaLabel?: string;
}

export default function Button({
  children,
  type = "button",
  disabled,
  btnClass,
  onClickAction,
  dataTestid,
  ariaLabel,
}: IButton) {
  return (
    <button
      data-testid={dataTestid}
      disabled={disabled}
      type={type === "submit" ? "submit" : "button"}
      className={btnClass}
      onClick={onClickAction}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
