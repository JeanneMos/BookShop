import React from "react";

import MessageItem from "./MessageItem";

export default function MessagesWithoutPagination({ messages, listRef }) {
  return (
    <ul
      className="messages-list"
      data-testid="messagesList"
      ref={listRef}
      tabIndex={-1}
    >
      {messages.map((message) => {
        return <MessageItem key={message?.message_id} message={message} />;
      })}
    </ul>
  );
}
