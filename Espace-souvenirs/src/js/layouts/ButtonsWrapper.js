import React from "react";
import classNames from "classnames";
/* import  "../../scss/helpers.scss"; */

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
