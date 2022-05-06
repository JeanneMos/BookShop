import React from 'react';
import {
  EmailShareButton,
  FacebookMessengerShareButton,
  WhatsappShareButton,
} from "react-share";
import Icon from '../Icons/Icon';
/* import "./shareEspace.scss"; */

const bodyText = "Bonjour, \nVoici le lien"
export default function ShareSocialMedias() {
  return (
    <div>
      <p className="share-social-media-intro">Ou directement :</p>
      <div className='social-media-wrapper'>
        <div className='social-media-item'>
          <WhatsappShareButton url={"https://www.google.com"}>
            <Icon name="whatsapp" iconClass='share-icon' />
          </WhatsappShareButton>
          <span className="social-media-text">Whatsapp</span>
        </div>
        <div className='social-media-item'>
          <EmailShareButton body={bodyText} subject="hello from subject" url={"https://www.pfg.fr"}>
            <Icon name="share-email" iconClass='share-icon' />
          </EmailShareButton>
          <span className="social-media-text">Mail</span>
        </div>
      </div>
    </div>
  )
}
