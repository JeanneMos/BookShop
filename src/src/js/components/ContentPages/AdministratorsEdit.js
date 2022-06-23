import React, { useState } from "react";
import { useSelector } from "react-redux";

import AdministratorsList from "../Administrators/AdministratorsList";
import Icon from "../Icons/Icon";

const AdministratorPersonalInfoForm = React.lazy(() =>
  import(
    /* webpackChunkName: "PersonalInfoForm" */ "../Forms/AdministratorPersonalInfoForm"
  ),
);

export default function AdministratorsEdit() {
  const [messageSuccess, setMessageSuccess] = useState(false);
  const administratorState = useSelector((state) => state.administrator);

  const handleCloseForm = ({ userUpdated }) => {
    setMessageSuccess(userUpdated);
  };

  if (administratorState.isEditingPersonalInfo)
    return <AdministratorPersonalInfoForm closeForm={handleCloseForm} />;

  return (
    <>
      {messageSuccess && (
        <p className="message-status mb-40">
          <Icon name="check" iconClass="message-status-icon" />
          <span>Vos modifications ont bien été enregistrées.</span>
        </p>
      )}
      <h2 className="content-heading-2">Liste des gestionnaires</h2>
      {administratorState?.currentUser && administratorState?.isAdmin && (
        <AdministratorsList />
      )}
      <></>
    </>
  );
}
