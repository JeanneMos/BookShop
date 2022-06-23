import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { bioMachineName, postSaveFieldApiUrl } from "../../constants";
import { biographyUpdated } from "../../context/biographySlice";
import ButtonsWrapper from "../../layouts/ButtonsWrapper";
import scrollSmoothToElement from "../../services/scrollSmoothToElement";
import usePostQuery from "../../services/usePostQuery";
import BiographyText from "../Biography/BiographyText";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";

const BiographyForm = React.lazy(() =>
  import(/* webpackChunkName: "BiographyForm" */ "../Forms/BiographyForm"),
);

export default function Biography() {
  const administratorState = useSelector((state) => state.administrator);
  const biographyState = useSelector((state) => state.biography);
  const dispatch = useDispatch();
  const params = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [biographySuccess, setBiographySuccess] = useState(false);
  const [networkError, setNetworkError] = useState(null);
  const deleteBiography = usePostQuery();
  const form = useRef();
  const messagesTitle = useRef();
  const networkErrorMessage = useRef(null);
  const handleOpenForm = () => {
    setIsEditing(true);
  };
  const handleDeleteBiography = async () => {
    const biography_obj = {
      field_value: {
        field_bio_story: "",
        field_bio_photo: null,
      },
      field_machine_name: bioMachineName,
      entity_hash: params.espaceId,
    };
    try {
      deleteBiography.mutate(
        { data: biography_obj, apiUrl: postSaveFieldApiUrl },
        {
          onSuccess: (data) => {
            const { field_bio_story, field_bio_custom } = JSON.parse(
              data?.data?.field_value,
            );
            dispatch(
              biographyUpdated({
                biography: field_bio_story,
                isBiographyEdited: field_bio_custom,
              }),
            );
          },
          onError: (err) => {
            setNetworkError(
              "Une erreur s'est produite. Merci de réessayer plus tard",
            );
            networkErrorMessage?.current &&
              scrollSmoothToElement(networkErrorMessage.current);
          },
        },
      );
    } catch {
      setNetworkError(
        "Une erreur s'est produite. Merci de réessayer plus tard",
      );
      networkErrorMessage?.current &&
        scrollSmoothToElement(networkErrorMessage.current);
      // Something went wrong
    }
  };

  const getBiographyAction = () => {
    if (
      biographyState?.isBiographyEdited &&
      biographyState?.biography &&
      administratorState?.isAdmin
    ) {
      return (
        <ButtonsWrapper btnWrapperClass="width-auto">
          <Button
            type="button"
            btnClass="bg-white"
            onClickAction={handleDeleteBiography}
          >
            <Icon name="corbeille" iconClass="current-icon" />
            <span className="separator">&nbsp;</span>
            <span className="button-text">Supprimer</span>
          </Button>
          <Button
            type="button"
            btnClass="bg-current"
            onClickAction={handleOpenForm}
          >
            <Icon name="pencil" iconClass="white-icon" />
            <span className="separator">&nbsp;</span>
            <span className="button-text">Modifier la biographie</span>
          </Button>
        </ButtonsWrapper>
      );
    }
    if (!biographyState?.isBiographyEdited && administratorState?.isAdmin) {
      return (
        <Button
          type="button"
          btnClass="bg-current"
          onClickAction={handleOpenForm}
        >
          <span className="button-text">Écrire la biographie</span>
          <span className="separator">&nbsp;</span>
          <Icon name="next" iconClass="white-icon" />
        </Button>
      );
    }
    return null;
  };

  const handlCloseForm = ({ messageSent }) => {
    setBiographySuccess(messageSent);
    setIsEditing(false);
  };

  /*   useEffect(() => {
    if (form.current) {
      form.current.scrollIntoView();
    }
    if (messagesTitle.current) {
      messagesTitle.current.scrollIntoView();
    }
  }, [isEditing]); */

  if (isEditing) {
    return <BiographyForm closeForm={handlCloseForm} reference={form} />;
  }

  return (
    <>
      {biographySuccess && (
        <p className="message-status mb-40">
          <Icon name="check" iconClass="message-status-icon" />
          <span>La biographie a bien été mise à jour.</span>
        </p>
      )}
      {networkError && (
        <p ref={networkErrorMessage} className="message-status mb-40">
          <Icon name="cross" iconClass="message-status-icon error-icon" />
          <span>{networkError}</span>
        </p>
      )}
      <div className="heading-button-wrapper between">
        <h2 className="content-heading-2" ref={messagesTitle}>
          Biographie
        </h2>
        {getBiographyAction()}
      </div>
      {biographyState?.biography && <BiographyText />}
    </>
  );
}
