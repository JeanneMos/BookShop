import classNames from "classnames";
import FocusTrap from "focus-trap-react";
import React, { useCallback, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";

import { modalClosed } from "../../providers/modalSlice";
import Icon from "../Icons/Icon";
import CeremonyModal from "./CeremonyModal";
import DefuntPictureModal from "./DefuntPictureModal";
import ForgotPasswordModal from "./ForgotPasswordModal";
import HeroBannerModal from "./HeroBannerModal";
import HomageModal from "./HomageModal";
import LoginModal from "./LoginModal";
import MessagePictureHeroModal from "./MessagePictureHeroModal";
import ShareModal from "./ShareModal";

export default function Modal() {
  const modalState = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const closeButton = useRef(null);

  const handleUserKeyPress = useCallback((event) => {
    const { key, keyCode } = event;
    if (keyCode === 27 || key === "Escape") {
      dispatch(modalClosed());
    }
  }, []);

  const closeModal = () => {
    dispatch(modalClosed());
  };

  useEffect(() => {
    if (closeButton.current) closeButton.current.focus();
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      dispatch(modalClosed());
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, []);

  const MODAL_COMPONENTS = {
    HomageModal,
    LoginModal,
    MessagePictureHeroModal,
    HeroBannerModal,
    DefuntPictureModal,
    ShareModal,
    ForgotPasswordModal,
    CeremonyModal,
  };
  const modalContent = () => {
    if (!modalState.modalType) return null;

    const SpecificModal = MODAL_COMPONENTS[modalState.modalType];
    return <SpecificModal />;
  };

  if (!modalState.isOpen) return null;
  return ReactDOM.createPortal(
    <FocusTrap>
      <div>
        <div className="modal-overlay" onClick={closeModal} />
        <div className="modal-wrapper" role="dialog" data-testid="modalTest">
          <div className={classNames("modal", modalState.theme)}>
            {(modalState.hasCloseButton || !modalState.modalType) && (
              <button
                type="button"
                className="modal-close"
                ref={closeButton}
                onClick={closeModal}
              >
                <Icon name="cross" iconClass="close-icon" />
                <span className="sr-only">Fermer la popin</span>
              </button>
            )}
            <div role="document">{modalContent()}</div>
          </div>
        </div>
      </div>
    </FocusTrap>,
    document.getElementById("react-portal"),
  );
}
