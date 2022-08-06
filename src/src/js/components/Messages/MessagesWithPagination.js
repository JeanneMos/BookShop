import React, { useEffect, useState } from "react";

import { messagesPerPage } from "../../constants";
import ButtonsWrapper from "../../layouts/ButtonsWrapper";
import { slicedArray } from "../../services/formatting";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import MessageItem from "./MessageItem";

export default function MessagesWithPagination({ messages, listRef }) {
  const [messagesList, setMessagesList] = useState(
    slicedArray(messages, 0, messagesPerPage),
  );

  useEffect(() => {
    setMessagesList(slicedArray(messages, 0, messagesPerPage));
  }, [messages]);

  const viewMoreMessages = () => {
    let begin = messagesList.length;
    let end = begin + messagesPerPage;
    const newMessagesArray = [
      ...messagesList,
      ...slicedArray(messages, begin, end),
    ];

    setMessagesList(newMessagesArray);
  };

  return (
    <>
      <ul
        className="messages-list"
        data-testid="messagesWithPaginationList"
        ref={listRef}
        tabIndex={-1}
      >
        {messagesList.map((message) => {
          return <MessageItem key={message?.message_id} message={message} />;
        })}
      </ul>
      <p className="messages-number-view">
        <label htmlFor="messages-progress">
          Vous avez vu {messagesList.length} messages sur {messages.length}
        </label>

        <progress
          id="messages-progress"
          className="messages-progress"
          max={messages.length}
          value={messagesList.length}
        ></progress>
      </p>
      {messages.length > messagesList.length && (
        <ButtonsWrapper position="center" btnWrapperClass="mt-30">
          <Button
            type="button"
            btnClass="bg-white"
            onClickAction={viewMoreMessages}
          >
            <span className="button-text">voir plus de messages</span>
            <span className="separator">&nbsp;</span>
            <Icon name="next" iconClass="current-icon" />
          </Button>
        </ButtonsWrapper>
      )}
    </>
  );
}
