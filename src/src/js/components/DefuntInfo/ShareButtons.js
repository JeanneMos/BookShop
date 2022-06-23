import React from "react";
import { useDispatch } from "react-redux";

import { modalOpened } from "../../context/modalSlice";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";

export default function ShareButtons() {
  const dispatch = useDispatch();
  const handleModalOpen = () => {
    dispatch(
      modalOpened({
        theme: "dark",
        hasCloseButton: true,
        modalType: "ShareModal",
      }),
    );
  };
  return (
    <div className="share-buttons-wrapper">
      <Button
        type="button"
        btnClass="bg-current share-button"
        onClickAction={handleModalOpen}
      >
        <Icon name="share" iconClass="white-icon book-icon" />
        <span className="separator">&nbsp;</span>
        <span className="button-text">Partager l&apos;espace</span>
      </Button>
    </div>
  );
}
