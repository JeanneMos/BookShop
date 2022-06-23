import img from "Images/profile-grey.jpg";
import React from "react";
import { useSelector } from "react-redux";

import Button from "../Button/Button";
import Icon from "../Icons/Icon";

export default function DefuntImg({ handleModifyPicture }) {
  const globalInfoState = useSelector((state) => state.globalInfo);
  const administratorState = useSelector((state) => state.administrator);

  return (
    <div className="defunt-img">
      <div className="defunt-img-background">
        {globalInfoState.defuntImage?.url ? (
          <img
            data-testid="defunt-image"
            alt=""
            src={globalInfoState.defuntImage.url}
            width="120"
            height="120"
          />
        ) : (
          <img
            data-testid="placeholder-defunt-image"
            alt=""
            src={img}
            width="120"
            height="120"
          />
        )}
        {administratorState.isAdmin && (
          <Button
            dataTestid="defuntImageEdit"
            btnClass="edit-picture-button"
            type="button"
            onClickAction={handleModifyPicture}
          >
            <Icon name="edit-picture" iconClass="edit-picture-icon" />
          </Button>
        )}
      </div>
    </div>
  );
}
