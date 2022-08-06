import classNames from "classnames";
import React from "react";
import { useDispatch } from "react-redux";

import { administratorPersonalInfoModified } from "../../providers/administratorSlice";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";

export default function Administrator({ admin, current }) {
  const dispatch = useDispatch();
  const editingPersonalInfo = () => {
    dispatch(
      administratorPersonalInfoModified({
        isEditingPersonalInfo: true,
        isEditingAdministator: false,
      }),
    );
  };
  return (
    <li
      className={classNames(
        "administrator-item",
        current && "administrator-item-active",
      )}
    >
      <p className="administrator-info">
        <span className="administrator-name">
          <span className="info-firstname">{admin.firstName}</span>{" "}
          <span className="info-firstname">{admin.lastName}</span>
        </span>
        <span className="administrator-email">{admin.email}</span>
      </p>
      {current && (
        <Button btnClass="bg-current" onClickAction={editingPersonalInfo}>
          <Icon name="pencil" iconClass="white-icon book-icon" />
          <span className="separator">&nbsp;</span>
          <span className="button-text">modifier</span>
          <span className="sr-only">
            les informations de {admin.firstName} {admin.lastName}
          </span>
        </Button>
      )}
    </li>
  );
}
