import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { messagesPage } from "../../constants";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import MessagesList from "../Messages/MessagesList";
import NewMessagesNumber from "../Messages/NewMessagesNumber";

const MessageForm = React.lazy(() =>
  import(/* webpackChunkName: "MessageForm" */ "../Forms/MessageForm"),
);

export default function Messages() {
  const [isEditing, setIsEditing] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState(false);
  const form = useRef();
  const messagesTitle = useRef();
  const messagesState = useSelector((state) => state.messages);

  const handleOpenForm = () => {
    setIsEditing(true);
  };
  const handlCloseForm = ({ messageSent }) => {
    setMessageSuccess(messageSent);
    setIsEditing(false);
  };
  /*   useEffect(() => {
    if (form.current) {
      form.current.scrollIntoView();
    }
    if (messagesTitle.current) {
      messagesTitle.current.scrollIntoView();
    }
  }, [isEditing]); */

  if (isEditing) {
    return <MessageForm closeForm={handlCloseForm} reference={form} />;
  }

  return (
    <>
      {messageSuccess && (
        <p className="message-status mb-40">
          <Icon name="check" iconClass="message-status-icon" />
          <span>Votre message a bien été ajouté</span>
        </p>
      )}
      <div className="heading-button-wrapper between">
        <h2 className="content-heading-2" ref={messagesTitle}>
          <span>Messages</span>{" "}
          {messagesState?.messagesNumber &&
          messagesState?.messagesNumber > 0 ? (
            <NewMessagesNumber number={messagesState?.messagesNumber} />
          ) : null}
        </h2>
        <Button
          type="button"
          btnClass="bg-current"
          onClickAction={handleOpenForm}
        >
          <span className="button-text">Ecrire un message</span>
          <span className="separator">&nbsp;</span>
          <Icon name="next" iconClass="white-icon" />
        </Button>
      </div>
      <MessagesList page={messagesPage} />
    </>
  );
}
