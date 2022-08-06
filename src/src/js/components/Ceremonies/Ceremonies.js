import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ButtonsWrapper from "../../layouts/ButtonsWrapper";
import { modalOpened } from "../../providers/modalSlice";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import CeremonyItem from "./CeremonyItem";

export default function Ceremonies() {
  const globalInfoState = useSelector((state) => state.globalInfo);
  const administratorState = useSelector((state) => state.administrator);

  const dispatch = useDispatch();
  const addNewCeremony = () => {
    dispatch(
      modalOpened({
        theme: "dark",
        hasCloseButton: true,
        modalType: "CeremonyModal",
      }),
    );
  };
  if (
    globalInfoState?.obituary?.ceremonies &&
    globalInfoState?.obituary?.ceremonies.length > 0
  ) {
    return (
      <div className="accueil-ceremonies-wrapper">
        <h2 className="content-heading-2" data-testid="ceremonies">
          Cérémonie
        </h2>
        {globalInfoState?.agency?.agency_name && (
          <p className="ceremonies-agency">
            <span>
              Cet hommage est organisé par l’agence{" "}
              {globalInfoState?.agency?.agency_name}
            </span>
            {globalInfoState?.marque?.logo?.url && (
              <>
                <span className="ceremony-agency-separator"></span>
                <span>
                  <img
                    className="ceremony-agency-logo"
                    src={globalInfoState?.marque?.logo?.url}
                    width="135"
                    height="50"
                  />
                </span>
              </>
            )}
          </p>
        )}
        <div className="ceremonies-wrapper">
          <ul className="ceremonies-list" data-testid="ceremonies-list">
            {globalInfoState?.obituary?.ceremonies.map((ceremony) => {
              return (
                <CeremonyItem key={ceremony.datelieu} ceremony={ceremony} />
              );
            })}
          </ul>
        </div>
        {administratorState.isAdmin && (
          <ButtonsWrapper btnWrapperClass="mt-30" position="left">
            <Button btnClass="bg-current" onClickAction={addNewCeremony}>
              <Icon name="plus" iconClass="white-icon" />
              <span className="separator">&nbsp;</span>
              <span className="button-text">ajouter un événement privé</span>
            </Button>
          </ButtonsWrapper>
        )}
      </div>
    );
  }
  return null;
}
