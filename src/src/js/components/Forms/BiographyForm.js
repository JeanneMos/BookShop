import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { bioMachineName, postSaveFieldApiUrl } from "../../constants";
import { biographyUpdated } from "../../context/biographySlice";
import ButtonsWrapper from "../../layouts/ButtonsWrapper";
import { decoded } from "../../services/formatting";
import scrollSmoothToElement from "../../services/scrollSmoothToElement";
import useForm from "../../services/useForm";
import usePostQuery from "../../services/usePostQuery";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";
/* import BiographyPhotosFieldset from "./BiographyPhotosFieldset"; */
import FormTextarea from "./FormTextarea";

const validationValues = {
  biography: {
    isRequired: false,
  },
  photos: {
    isRequired: false,
  },
};
export default function BiographyForm({ reference, closeForm }) {
  const params = useParams();
  const biographyState = useSelector((state) => state.biography);
  const dispatch = useDispatch();
  const initialFormState = {
    biography: biographyState?.isBiographyEdited
      ? decoded(biographyState?.biography)
      : "",
    photos: null,
  };

  const { inputValues, changeHandler, errorHandler, errors, isValid } = useForm(
    { initialFormState, validationValues },
  );

  const updateBiography = usePostQuery();

  const [networkError, setNetworkError] = useState("");
  const networkErrorMessage = useRef(null);

  const handleCloseForm = () => {
    closeForm({ messageSent: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const biography_obj = {
      field_value: {
        field_bio_story: inputValues.biography,
        field_bio_photo: null,
      },
      field_machine_name: bioMachineName,
      entity_hash: params.espaceId,
    };
    try {
      updateBiography.mutate(
        { data: biography_obj, apiUrl: postSaveFieldApiUrl },
        {
          onSuccess: (data) => {
            /*           const structuredImages = compressedFiles.map(file => {
            const imgObject = {
              url: window.URL.createObjectURL(file),
              name: file.name
            }
            return imgObject
          }) */
            const { field_bio_story, field_bio_custom } = JSON.parse(
              data?.data?.field_value,
            );
            //dispatch(biographyPhotoAdded({biographyPhotos: structuredImages}))
            dispatch(
              biographyUpdated({
                biography: field_bio_story,
                isBiographyEdited: field_bio_custom,
              }),
            );
            closeForm({ messageSent: true });
          },
          onError: (err) => {
            setNetworkError(
              "Une erreur s'est produite. Veuillez reprendre ultérieurement.",
            );
            networkErrorMessage?.current &&
              scrollSmoothToElement(networkErrorMessage.current);
          },
        },
      );
    } catch {
      setNetworkError(
        "Une erreur s'est produite. Veuillez reprendre ultérieurement.",
      );
      networkErrorMessage?.current &&
        scrollSmoothToElement(networkErrorMessage.current);
    }
  };

  return (
    <>
      {networkError && (
        <p ref={networkErrorMessage} className="message-status mb-40">
          <Icon name="cross" iconClass="message-status-icon error-icon" />
          <span>{networkError}</span>
        </p>
      )}
      <h2 className="content-heading-2">Écrire la biographie</h2>
      <div className="biography-wrapper">
        <form
          noValidate
          ref={reference}
          onSubmit={handleSubmit}
          data-testid="biographyForm"
          className="biography-form"
        >
          {!isValid && (
            <p className="sr-only" tabIndex={0}>
              Merci de corriger les erreurs
            </p>
          )}
          <div className="biography-textarea">
            <FormTextarea
              labelText="biographie"
              labelHidden
              isRequired
              id="biography"
              name="biography"
              max={1000}
              value={inputValues.biography}
              inputPlaceholder="Biographie"
              onInputChange={changeHandler}
              onInputBlur={errorHandler}
              error={errors.biography}
            />
          </div>
          {/* <BiographyPhotosFieldset /> */}

          <ButtonsWrapper position="right" btnWrapperClass="mt-30">
            <Button
              type="button"
              btnClass="bg-transparent"
              onClickAction={handleCloseForm}
            >
              Annuler
            </Button>
            <Button
              type="submit"
              btnClass="bg-current"
              dataTestid="submitBiographyForm"
            >
              <Icon name="save" iconClass="white-icon" />
              <span className="separator">&nbsp;</span>
              <span className="button-text">Enregistrer</span>
            </Button>
          </ButtonsWrapper>
        </form>
      </div>
    </>
  );
}
