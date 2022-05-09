import React from "react";
import { EmailShareButton, WhatsappShareButton } from "react-share";
import Icon from "../Icons/Icon";
import { useSelector } from "react-redux";
import { civilities } from "../../services/formatting";


const bodyText = "Bonjour, \nVoici le lien";
export default function ShareSocialMedias() {
  const userState = useSelector((state) => state.user);
  const { civility, firstName, lastName } = userState;

  const subjectWithUser = () => {
    const subject = userState?.isLogged
      ? `${civility ? civilities[civility] : ""} ${lastName ? lastName : ""} ${firstName ? firstName : ""} vous partage des informations`
      : "Un utilisateur vous partage des informations";
    return subject;
  };
  return (
    <div>
      <p className="share-social-media-intro">Ou directement :</p>
      <div className="social-media-wrapper">
        <div className="social-media-item">
          <WhatsappShareButton url={"https://www.google.com"}>
            <Icon name="whatsapp" iconClass="share-icon" />
          </WhatsappShareButton>
          <span className="social-media-text">Whatsapp</span>
        </div>
        <div className="social-media-item">
          <EmailShareButton body={bodyText}
            subject={subjectWithUser()}
            url={"https://www.pfg.fr"}>
            <Icon name="share-email" iconClass="share-icon" />
          </EmailShareButton>
          <span className="social-media-text">Mail</span>
        </div>
      </div>
    </div>
  );
}
