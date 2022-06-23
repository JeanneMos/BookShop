import classNames from "classnames";
import React from "react";

export default function ButtonsWrapper({
  position,
  children,
  btnWrapperClass,
}) {
  return (
    <div className={classNames("buttons-wrapper", position, btnWrapperClass)}>
      {children}
    </div>
  );
}
