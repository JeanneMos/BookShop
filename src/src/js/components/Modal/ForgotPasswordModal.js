import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { modalClosed } from "../../context/modalSlice";
import ButtonsWrapper from "../../layouts/ButtonsWrapper";
import Button from "../Button/Button";
import ForgotPasswordForm from "../Forms/ForgotPasswordForm";
import ModalSubTitle from "./ModalSubTitle";
import ModalTitle from "./ModalTitle";

export default function ForgotPasswordModal() {
  const dispatch = useDispatch();
  const [isEmailSent, setEmailSent] = useState(false);

  const handleCloseModal = () => {
    dispatch(modalClosed());
  };
  const handleConfirmationMessage = () => {
    setEmailSent(true);
  };

  if (isEmailSent) {
    return (
      <>
        <ModalTitle titleModalClass="login-modal-title">
          MOT DE PASSE oublié
        </ModalTitle>
        <ModalSubTitle>
          Un e-mail a été envoyé à l&apos;adresse indiquée. Merci de vérifier
          votre boîte e-mail.
        </ModalSubTitle>
        <ButtonsWrapper btnWrapperClass="width-auto mb-30 mt-30">
          <Button
            type="button"
            onClickAction={handleCloseModal}
            btnClass="bg-current center"
          >
            <span className="button-text">Fermer la fenêtre</span>
          </Button>
        </ButtonsWrapper>
      </>
    );
  }

  return (
    <>
      <ModalTitle titleModalClass="login-modal-title">
        MOT DE PASSE oublié
      </ModalTitle>
      <ModalSubTitle>
        Renseigner votre email, un lien de connexion vous sera envoyé.
      </ModalSubTitle>
      <ForgotPasswordForm
        handleCloseModal={handleCloseModal}
        handleConfirmationMessage={handleConfirmationMessage}
      />
    </>
  );
}
