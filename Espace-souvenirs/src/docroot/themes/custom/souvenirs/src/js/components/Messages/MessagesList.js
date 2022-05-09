import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import EmptyMessagesList from "./EmptyMessagesList";
import { accueil } from "../../constants";

import MessageItem from "./MessageItem";
import MessagesWithPagination from "./MessagesWithPagination";

/* import "./messages.scss"; */

export default function MessagesList({ page }) {
  const [messages, setMessages] = useState([]);

  const messagesState = useSelector((state) => state.messages);
  const userState = useSelector((state) => state.user);

  useEffect(() => {
    const messages = [...messagesState.messages];
    const sortedByDate =
      messages?.length > 0
        ? messages.sort((a, b) => b.dateTime - a.dateTime)
        : [];
    const filteredArray = !userState?.isAdmin
      ? sortedByDate.filter((message) => message.published)
      : sortedByDate;
    const truncatedArray =
      filteredArray.length > 0 ? filteredArray.slice(0, 2) : [];
    if (page && page === accueil) {
      setMessages(truncatedArray);
    } else {
      setMessages(filteredArray);
    }
  }, [messagesState.messages, userState.isAdmin]);

  if (messages && messages.length === 0) return <EmptyMessagesList />;
  if (messages && messages.length > 8)
    return <MessagesWithPagination messages={messages} />;

  return (
    <div className="messages-wrapper">
      {messages && messages.length > 0 && (
        <ul className="messages-list" data-testid="messagesList">
          {messages.map((message) => {
            return <MessageItem key={message?.id} message={message} />;
          })}
        </ul>
      )}
    </div>
  );
}
