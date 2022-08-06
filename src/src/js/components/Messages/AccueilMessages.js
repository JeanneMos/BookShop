import React from "react";

import { accueilPage, messagesPage } from "../../constants";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import MessagesList from "../Messages/MessagesList";

export default function AccueilMessages({ handleActiveTab }) {
  const handleActivetab = () => {
    handleActiveTab(messagesPage);
  };

  return (
    <div className="accueil-messages-wrapper">
      <div className="heading-button-wrapper between">
        <h2 className="content-heading-2">Derniers messages</h2>
        <Button
          type="button"
          btnClass="bg-current"
          onClickAction={handleActivetab}
        >
          <span className="button-text">Voir les messages</span>
          <span className="separator">&nbsp;</span>
          <Icon name="next" iconClass="white-icon" />
        </Button>
      </div>
      <MessagesList page={accueilPage} />
    </div>
  );
}
