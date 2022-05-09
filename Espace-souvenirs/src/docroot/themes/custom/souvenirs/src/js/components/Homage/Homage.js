import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { textWithBreaks } from "../../services/formatting";
import { decoded } from "../../services/formatting";

import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import { modalOpened } from "../../context/modalSlice";


/* import './homage.scss'; */

export default function Homage() {
  const userState = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const handleEditModal = () => {
    dispatch(
      modalOpened({
        theme: "dark",
        hasCloseButton: true,
        modalType: "HomageModal",
      }),
    );
  };

  if (userState.isAdmin) {
    return (
      <div className="homage-wrapper" data-testid="homage">
        <div className="heading-button-wrapper">
          <h2 className="content-heading-2">Rendre Hommage</h2>

          <Button
            type="button"
            btnClass="edit-text-button bg-current"
            onClickAction={handleEditModal}
          >
            <Icon name="pencil" iconClass="edit-text-icon" />
          </Button>
        </div>
        <div className="content-homage">
          {textWithBreaks(decoded(userState?.homageText))}
        </div>
      </div>
    );
  }
  if (!userState.isAdmin && userState?.homageText) {
    return (
      <div className="homage-wrapper">
        <div className="heading-button-wrapper">
          <h2 className="content-heading-2">Rendre Hommage</h2>
        </div>
        <div className="content-homage">
          {textWithBreaks(decoded(userState?.homageText))}
        </div>
      </div>
    );
  }
  return null;
}
