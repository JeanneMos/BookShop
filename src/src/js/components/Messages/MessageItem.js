import classNames from "classnames";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  messageStatusMachineName,
  postStatusMessageApiUrl,
} from "../../constants";
import ButtonsWrapper from "../../layouts/ButtonsWrapper";
import {
  capitalisedName,
  dateHoursFormat,
  textWithBreaks,
  timeStampToDate,
} from "../../services/formatting";
import usePostQuery from "../../services/usePostQuery";
import Button from "../Button/Button";
import MailTo from "../MailTo/MailTo";
import Switch from "../Switch/Switch";
import NewMessageTag from "./NewMessageTag";

const MessageItem = React.memo(function MessageItem({ message }) {
  const {
    field_message_surname: lastName,
    field_message_name: firstName,
    field_message_date_created: dateTime,
    field_message_texte: body,
    field_message_email: email,
    field_message_photo: picture,
    field_message_status: published,
    field_message_banner: banner,
    isNew,
    message_id: id,
  } = message;

  const globalInfoState = useSelector((state) => state.globalInfo);
  const administratorState = useSelector((state) => state.administrator);
  const updateStatus = usePostQuery();

  const [showFullMessage, setShowFullMessage] = useState(false);
  const [isPublished, setIsPublished] = useState(published);

  const messageBody = useRef(null);
  const messageWrapper = useRef(null);

  const formattedDate = useMemo(() => {
    if (dateTime) return dateHoursFormat(timeStampToDate(dateTime));
  }, [dateTime]);

  const formattedPicture = (picture) => {
    if (typeof picture === "string") {
      return picture[0];
    }
    return picture[0].url;
  };

  const formatterBanner = (banner) => {
    return `${window.location.origin}/themes/custom/souvenirs/src/assets/images/bg-images/${banner}`;
  };

  const showText = () => {
    setShowFullMessage(true);
  };

  const subject = `Merci pour votre message en hommage à ${
    capitalisedName(globalInfoState?.defunt?.firstName) || ""
  } ${globalInfoState?.defunt?.lastName}`;

  const handleSwitch = () => {
    const statusObj = {
      field_value: !isPublished,
      field_machine_name: messageStatusMachineName,
      message_id: id,
    };
    try {
      updateStatus.mutate(
        { data: statusObj, apiUrl: postStatusMessageApiUrl },
        {
          onSuccess: ({ data }) => {
            setIsPublished(data?.field_value);
          },
        },
      );
    } catch {
      setIsPublished(published);
    }
  };

  useEffect(() => {
    if (messageBody.current && messageWrapper.current) {
      if (
        messageBody.current.clientHeight > messageWrapper.current.clientHeight
      ) {
        setShowFullMessage(false);
      } else {
        setShowFullMessage(true);
      }
    }
  }, []);

  return (
    <li
      className={classNames("message-item", {
        "message-item-long": picture || banner,
      })}
    >
      {isNew && <NewMessageTag />}
      {picture && (
        <div className="message-item-image-wrapper">
          <img
            alt=""
            className="message-item-image"
            loading="lazy"
            src={formattedPicture(picture)}
          />
        </div>
      )}
      {banner && (
        <div className="message-item-image-wrapper">
          <img
            alt=""
            className="message-item-image"
            loading="lazy"
            src={formatterBanner(banner)}
          />
        </div>
      )}
      <div
        className={classNames("message-author", {
          "mt-50": !picture,
          "mt-20": picture,
        })}
      >
        <p data-testid="writtenby-message">
          Ecrit par <span className="info-firstname">{firstName}</span>{" "}
          <span className="info-lastname">{lastName}</span>
        </p>
        <p>{formattedDate}</p>
      </div>
      {body && (
        <div
          ref={messageWrapper}
          className={classNames("message-body", {
            open: showFullMessage,
          })}
        >
          <p ref={messageBody}>{textWithBreaks(body)}</p>
        </div>
      )}

      {!showFullMessage && (
        <ButtonsWrapper>
          <Button
            type="button"
            onClickAction={showText}
            btnClass="bg-transparent"
          >
            Lire la suite
            <span className="sr-only">
              du message envoyé par {firstName} {lastName}
            </span>
          </Button>
        </ButtonsWrapper>
      )}

      {administratorState?.isAdmin && (
        <ButtonsWrapper position="space-between">
          <Switch
            isLoading={updateStatus.isLoading}
            handleSwitch={handleSwitch}
            messageId={dateTime}
            isChecked={isPublished}
          />
          <MailTo email={email} subject={subject} />
        </ButtonsWrapper>
      )}
    </li>
  );
});
export default MessageItem;
