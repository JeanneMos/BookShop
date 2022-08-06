import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";

import {
  accueilPage,
  allMessagesFilter,
  cachetimeForSearchQuery,
  emptyMessageFilter,
  emptyMessageList,
  errorMessageNetwork,
  getMessagesApi,
  getNumberMessagesUrl,
  messagesAccueilKey,
  messagesListKey,
  messagesPage,
  numberMessagesKey,
} from "../../constants";
import useGetMessagesList from "../../services/useGetMessagesList";
import Icon from "../Icons/Icon";
import MessagesLoader from "../Loader/MessagesLoader";
import EmptyMessagesList from "./EmptyMessagesList";
import MessagesFilters from "./MessagesFilters";
import MessagesWithoutPagination from "./MessagesWithoutPagination";
import MessagesWithPagination from "./MessagesWithPagination";

export default function MessagesList({ page }) {
  const [userFilter, setUserFilter] = useState(allMessagesFilter);
  const { espaceId } = useParams();

  const listRef = useRef();

  const messagesApi =
    page === accueilPage
      ? `${getMessagesApi}?entity_hash=${espaceId}&msg_number=2`
      : `${getMessagesApi}?entity_hash=${espaceId}`;
  const messagesApiKey =
    page === accueilPage ? messagesAccueilKey : messagesListKey;

  const {
    messagesData,
    messagesError,
    messagesIsFetching,
    messagesLength,
    messages,
    hasError,
  } = useGetMessagesList({
    messagesApiKey,
    messagesApi,
    cachetimeForSearchQuery,
    numberMessagesKey,
    getNumberMessagesUrl,
    espaceId,
    page,
    userFilter,
    listRef,
  });

  const handleFilterMessages = (id) => {
    setUserFilter(id);
  };

  if (messagesIsFetching) return <MessagesLoader />;

  if (messagesError || hasError) {
    return (
      <div className="messages-wrapper">
        <p className="message-status">
          <Icon name="cross" iconClass="message-status-icon error-icon" />
          <span>{errorMessageNetwork}</span>
        </p>
      </div>
    );
  }

  if (!messagesData || messagesData?.result?.length === 0) {
    return (
      <div className="messages-wrapper">
        <EmptyMessagesList message={emptyMessageList} />
      </div>
    );
  }

  return (
    <div className="messages-wrapper">
      {page === messagesPage && (
        <MessagesFilters
          handleFilterMessages={handleFilterMessages}
          userFilter={userFilter}
          messagesLength={messagesLength}
        />
      )}
      {!messages ||
        (messages.length === 0 && (
          <EmptyMessagesList listRef={listRef} message={emptyMessageFilter} />
        ))}
      {messages && messages.length > 8 && (
        <MessagesWithPagination listRef={listRef} messages={messages} />
      )}
      {messages && messages.length <= 8 && (
        <MessagesWithoutPagination listRef={listRef} messages={messages} />
      )}
    </div>
  );
}
