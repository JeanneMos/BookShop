import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { administratorEdited } from "../../providers/administratorSlice";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";

export default function SectionAdministators() {
  const globalInfoState = useSelector((state) => state.globalInfo);
  const administratorState = useSelector((state) => state.administrator);
  const [civility, setCivility] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    setCivility(globalInfoState?.manager?.field_user_civility);
    setFirstName(globalInfoState?.manager?.field_user_name);
    setLastName(globalInfoState?.manager?.field_user_surname);
  }, [globalInfoState]);
  const handleModifyAdministrators = () => {
    dispatch(administratorEdited({ isEditingAdministator: true }));
  };
  return (
    <div>
      <p className="defunt-adiministator">Espace géré par</p>
      <p className="defunt-adiministator-name">
        {civility} <span className="info-firstname">{firstName}</span>{" "}
        <span className="info-lastname">{lastName}</span>
      </p>
      {administratorState.isAdmin && (
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
