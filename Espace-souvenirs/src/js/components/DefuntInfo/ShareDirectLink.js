import React, { useRef } from 'react'
import Icon from '../Icons/Icon';
import useViewport from '../../services/useViewport';
import { mobileBreakpoint } from '../../constants';
import Button from '../Button/Button';
import ButtonsWrapper from "../../layouts/ButtonsWrapper"
/* import './shareEspace.scss'; */

const directLink = window.location.href;
export default function ShareDirectLink() {
  const { width } = useViewport();
  const linkText = useRef(null);

  const hanleCopyLink = () => {
    if (navigator.clipboard) return navigator.clipboard.writeText(directLink);
    if (linkText.current) linkText.current.select();
    const copied = document.execCommand("copy");
  }
  return (
    <div className='share-direct-link-wrapper'>
      <p className='share-direct-link-text'>Partager les informations de votre espace en copiant ce lien :</p>
      <div className='share-direct-link'>
        <input readOnly className='share-direct-link-input' ref={linkText} value={directLink}/>
        {width > mobileBreakpoint && (
          <Button btnClass="bg-transparent copy-link-btn" type="button" onClickAction={hanleCopyLink} >
            <Icon name="link" iconClass='current-icon' />
            <span className="separator">&nbsp;</span>
            <span className="button-text">copier le lien</span>
          </Button>
        )}
      </div>
      {width <= mobileBreakpoint && (
        <ButtonsWrapper position="center" btnWrapperClass="mt-10">
          <Button btnClass="bg-transparent copy-link-btn" type="button" onClickAction={hanleCopyLink} >
            <Icon name="link" iconClass='current-icon' />
            <span className="separator">&nbsp;</span>
            <span className="button-text">copier le lien</span>
          </Button>
        </ButtonsWrapper>
      )}
    </div>
  )
}
