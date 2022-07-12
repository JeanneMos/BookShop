import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { modalOpened } from "../../context/modalSlice";
import { decoded, sanitizedText } from "../../services/formatting";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";

export default function Homage() {
  const globalInfoState = useSelector((state) => state.globalInfo);
  const administratorState = useSelector((state) => state.administrator);

  const parsedHomageText = globalInfoState?.homageText
    ? JSON.parse(globalInfoState?.homageText)
    : null;

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

  if (administratorState.isAdmin) {
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
        {parsedHomageText && (
          <div
            className="content-homage"
            dangerouslySetInnerHTML={sanitizedText(decoded(parsedHomageText))}
          />
        )}
      </div>
    );
  }
  if (!administratorState.isAdmin && globalInfoState?.homageText) {
    return (
      <div className="homage-wrapper">
        <div className="heading-button-wrapper">
          <h2 className="content-heading-2">Rendre Hommage</h2>
        </div>
        {parsedHomageText && (
          <div
            className="content-homage"
            dangerouslySetInnerHTML={sanitizedText(decoded(parsedHomageText))}
          />
        )}
      </div>
    );
  }
  return null;
}
