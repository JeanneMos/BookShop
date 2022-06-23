import classNames from "classnames";
import React from "react";

export default function NewMessagesNumber({ number, numberClass }) {
  return (
    <span className={classNames("new-messages-number", numberClass)}>
      {number}
      <span className="sr-only">nouveaux messages</span>
    </span>
  );
}
