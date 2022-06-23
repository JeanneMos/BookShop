import { arrayOf } from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  accueil,
  cachetimeForSearchQuery,
  getMessagesApi,
  getNumberMessagesUrl,
  messagesAccueilKey,
  messagesListKey,
  numberMessagesKey,
} from "../../constants";
import { messagesNumberReceived } from "../../context/messageSlice";
import scrollSmoothToElement from "../../services/scrollSmoothToElement";
import useGetQuery from "../../services/useGetQuery";
import Icon from "../Icons/Icon";
import MessagesLoader from "../Loader/MessagesLoader";
import EmptyMessagesList from "./EmptyMessagesList";
import MessageItem from "./MessageItem";
import MessagesWithPagination from "./MessagesWithPagination";

export default function MessagesList({ page }) {
  const [hasError, setHasError] = useState(false);
  const administratorState = useSelector((state) => state.administrator);
  const { espaceId } = useParams();
  const dispatch = useDispatch();

  const messagesApi =
    page === accueil
      ? `${getMessagesApi}?entity_hash=${espaceId}&msg_number=2`
      : `${getMessagesApi}?entity_hash=${espaceId}`;
  const messagesApiKey =
    page === accueil ? messagesAccueilKey : messagesListKey;

  const {
    data: messagesData,
    error: messagesError,
    isFetching: messagesIsFetching,
  } = useGetQuery({
    key: messagesApiKey,
    API: messagesApi,
    staleTime: administratorState.isAdmin ? 500 : 50000,
    cacheTime: administratorState.isAdmin ? 0 : cachetimeForSearchQuery,
    refetchOnMount: administratorState.isAdmin,
  });

  const { data: numberMessagesData } = useGetQuery({
    key: numberMessagesKey,
    API: `${getNumberMessagesUrl}?entity_hash=${espaceId}`,
    staleTime: 0,
    cacheTime: 0,
    enabled: administratorState.isAdmin,
  });

  useEffect(() => {
    if (administratorState.isAdmin) {
      dispatch(
        messagesNumberReceived({
          messagesNumber: +numberMessagesData?.new_message_number,
        }),
      );
    }
    if (messagesData?.error) {
      setHasError(true);
    }
    return () => {
      if (page !== accueil && administratorState.isAdmin) {
        dispatch(messagesNumberReceived({ messagesNumber: 0 }));
      }
    };
  }, [numberMessagesData]);

  if (messagesIsFetching) return <MessagesLoader />;

  if (messagesError || hasError) {
    return (
      <div className="messages-wrapper">
        <p className="message-status">
          <Icon name="cross" iconClass="message-status-icon error-icon" />
          <span>
            Une erreur s&apos;est produite. Nous vous invitons à réessayer plus
            tard.
          </span>
        </p>
      </div>
    );
  }

  if (messagesData && messagesData?.result) {
    const arrayOfMessages = messagesData.result;
    const newMessagesArray = administratorState?.isAdmin
      ? arrayOfMessages.map((message) => {
          return {
            ...message,
            isNew:
              messagesData?.msg_date_last_consult * 1000 <
              +message.field_message_date_created * 1000,
          };
        })
      : arrayOfMessages;
    if (newMessagesArray && newMessagesArray.length > 8) {
      return <MessagesWithPagination messages={newMessagesArray} />;
    }
    if (messagesData?.result?.length === 0 || newMessagesArray?.length === 0) {
      return <EmptyMessagesList />;
    }
    return (
      <div className="messages-wrapper">
        <ul className="messages-list" data-testid="messagesList">
          {newMessagesArray.map((message) => {
            return <MessageItem key={message?.message_id} message={message} />;
          })}
        </ul>
      </div>
    );
  }

  return (
    <div className="messages-wrapper">
      <MessagesLoader />
    </div>
  );
}
