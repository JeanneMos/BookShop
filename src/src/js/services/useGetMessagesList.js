import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  messagesPage,
  photoMessagesFilter,
  textMessagesFilter,
} from "../constants";
import { messagesNumberReceived } from "../providers/messageSlice";
import scrollSmoothToElement from "../services/scrollSmoothToElement";
import useGetQuery from "../services/useGetQuery";

export default function useGetMessagesList({
  messagesApiKey,
  messagesApi,
  cachetimeForSearchQuery,
  numberMessagesKey,
  getNumberMessagesUrl,
  espaceId,
  page,
  userFilter,
  listRef,
}) {
  const administratorState = useSelector((state) => state.administrator);
  const [hasError, setHasError] = useState(false);
  const [messages, setMessagesToDisplay] = useState(null);
  const [messagesLength, setMessagesLength] = useState({ photos: 0, text: 0 });
  const dispatch = useDispatch();
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
      if (page === messagesPage && administratorState.isAdmin) {
        dispatch(messagesNumberReceived({ messagesNumber: 0 }));
      }
    };
  }, [numberMessagesData]);

  useEffect(() => {
    if (messagesData && messagesData?.result?.length > 0) {
      const arrayOfMessages = messagesData.result;
      const messagesToDisplay = administratorState?.isAdmin
        ? arrayOfMessages.map((message) => {
            return {
              ...message,
              isNew:
                messagesData?.msg_date_last_consult * 1000 <
                +message.field_message_date_created * 1000,
            };
          })
        : arrayOfMessages;
      const textArray = messagesToDisplay.filter(
        (message) =>
          !message.field_message_photo && !message.field_message_banner,
      );
      const photosArray = messagesToDisplay.filter(
        (message) =>
          message.field_message_photo || message.field_message_banner,
      );
      setMessagesLength({ photos: photosArray.length, text: textArray.length });
      if (userFilter && userFilter === textMessagesFilter) {
        setMessagesToDisplay(textArray);
      } else if (userFilter && userFilter === photoMessagesFilter) {
        setMessagesToDisplay(photosArray);
      } else {
        setMessagesToDisplay(messagesToDisplay);
      }
    }
    listRef && listRef.current && listRef?.current.focus();
  }, [userFilter, messagesData?.result]);

  return {
    messagesData,
    messagesError,
    messagesIsFetching,
    messagesLength,
    messages,
    hasError,
  };
}
