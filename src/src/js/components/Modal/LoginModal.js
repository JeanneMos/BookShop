import React from "react";

import LoginUserForm from "../Forms/LoginUserForm";
import ModalTitle from "./ModalTitle";

export default function LoginModal() {
  return (
    <>
      <ModalTitle titleModalClass="login-modal-title">
        MON ESPACE SOUVENIRS
      </ModalTitle>
      <LoginUserForm />
    </>
  );
}
