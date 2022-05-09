import React from "react";
import img from "Images/profile-grey.jpg";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";

export default function DefuntImg({ handleModifyPicture }) {
  const userState = useSelector((state) => state.user);

  return (
    <div className="defunt-img">
      <div className="defunt-img-background">
        {userState?.defuntImage ? (
          <img
            alt=""
            src={userState.defuntImage.url}
            width="120"
            height="120"
          />
        ) : (
          <img alt="" src={img} width="120" height="120" />
        )}
        {userState.isAdmin && (
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
