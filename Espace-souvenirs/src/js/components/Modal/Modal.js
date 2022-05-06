import React, {
  useRef, useEffect, useCallback,
} from 'react';
import ReactDOM from 'react-dom';
import FocusTrap from 'focus-trap-react';
import classNames from 'classnames';
import { modalClosed } from '../../context/modalSlice';

import { useSelector, useDispatch } from 'react-redux';
import Icon from '../Icons/Icon';
import HomageModal from './HomageModal';
import LoginModal from './LoginModal';
import MessagePictureHeroModal from './MessagePictureHeroModal';
import HeroBannerModal from './HeroBannerModal';
import DefuntPictureModal from './DefuntPictureModal';
import ShareModal from "./ShareModal";

/* import './modal.scss'; */

export default function Modal() {
  const modalState = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const closeButton = useRef(null);

  const handleUserKeyPress = useCallback((event) => {
    const { key, keyCode } = event;
    if (keyCode === 27 || key === 'Escape') {
      dispatch(modalClosed());
    }
  }, []);

  const closeModal = () => {
    dispatch(modalClosed())
  }

  useEffect(() => {
    if (closeButton.current) closeButton.current.focus();
    window.addEventListener('keydown', handleUserKeyPress);
    return () => {
      dispatch(modalClosed());
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, []);

  const MODAL_COMPONENTS = {
    HomageModal,
    LoginModal,
    MessagePictureHeroModal,
    HeroBannerModal,
    DefuntPictureModal,
    ShareModal
  }
  const modalContent = () => {
    if(!modalState.modalType) return null; 
   
    const SpecificModal = MODAL_COMPONENTS[modalState.modalType];
    return <SpecificModal />
  }

  if (!modalState.isOpen) return null;
  return ReactDOM.createPortal(
    <FocusTrap>
      <div>
        <div className="modal-overlay" onClick={closeModal} />
        <div className="modal-wrapper" role="dialog" data-testid="modalTest">
          <div className={classNames('modal', modalState.theme)}>
            {modalState.hasCloseButton && (
              <button type="button" className="modal-close" ref={closeButton} onClick={closeModal}>
                <Icon name="cross" iconClass="close-icon" />
                <span className="sr-only">Fermer la popin</span>
              </button>
            )}
            <div role="document">{modalContent()}</div>
          </div>
        </div>
      </div>
    </FocusTrap>,
    document.getElementById('react-portal'),
  );
}
