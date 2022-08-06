import React from "react";

export default function EmptyMessagesList({ message, listRef }) {
  return (
    <p
      ref={listRef}
      className="messages-empty-text"
      data-testid="emptyMessageList"
      tabIndex={-1}
    >
      {message}
    </p>
  );
}
