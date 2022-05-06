import React from "react";

import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import { useSelector, useReducer, useDispatch } from "react-redux";
import { administratorEdited } from "../../context/administratorSlice";

export default function SectionAdministators() {
  const userState = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const handleModifyAdministrators = () => {
    dispatch(administratorEdited({ isEditingAdministator: true }));
  };
  return (
    <div>
      <p className="defunt-adiministator">Espace géré par</p>
      <p className="defunt-adiministator-name">M. Richard ROCHEFOUCAULT</p>
      {userState.isAdmin && (
        <Button
          btnClass="edit-administators-button"
          type="button"
          dataTestid="administratorsEdit"
          onClickAction={handleModifyAdministrators}
        >
          <span>Liste des gestionnaires</span>
          <Icon name="edit-picture" iconClass="edit-administators-icon" />
        </Button>
      )}
    </div>
  );
}
