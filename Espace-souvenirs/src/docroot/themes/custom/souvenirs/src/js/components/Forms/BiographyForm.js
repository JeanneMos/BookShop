import React, { useState } from "react";
import useForm from "../../services/useForm";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import usePostQuery from "../../services/usePostQuery";
import { postApiUrl, bioMachineName } from "../../constants";
import { decoded } from "../../services/formatting";
import {
  biographyPhotoAdded,
  biographyUpdated,
} from "../../context/biographySlice";
import FormTextarea from "./FormTextarea";
import ButtonsWrapper from "../../layouts/ButtonsWrapper";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import useUpload from "../Upload/useUpload";
import InputWithDescription from "../Upload/InputWithDescription";

import ImagePreview from "../Upload/ImagePreview";

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

  const [photos, setPhotos] = useState(biographyState?.biographyPhotos);
  const [isTooltipShown, setIsTooltipShown] = useState(false);
  const {
    handleCompressedUpload,
    compressedFiles,
    handleDeletePhoto,
    errorMessage,
  } = useUpload({
    numberOfPhotos: 3,
    uploadedPhotos: biographyState?.biographyPhotos,
    dispatchCbAction: setPhotos,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const biography_obj = {
      field_value: {
        field_bio_story: inputValues.biography,
        field_bio_photo: null,
      },
      field_machine_name: bioMachineName,
      entity_id: params.espaceId,
    };
    try {
      updateBiography.mutate(
        { data: biography_obj, postApiUrl },
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
        },
      );
    } catch {
      // Something went wrong
    }
  };
  const displayTooltip = () => {
    setIsTooltipShown(true);
  };
  const hideTooltip = () => {
    setIsTooltipShown(false);
  };
  return (
    <>
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

          <fieldset aria-describedby="biography-photo biography-photo-requirements">
            <div className="biography-photo-upload">
              <p className="biography-photo-title" id="biography-photo">
                Personnaliser la biographie en y ajoutant des photos du défunt
              </p>
              <p
                className="biography-photo-requirements"
                id="biography-photo-requirements"
                aria-live="polite"
              >
                <span>
                  Pour un affichage optimum, privilégier des photos au format
                  paysage
                </span>
                <button
                  type="button"
                  className="tooltip"
                  onMouseLeave={hideTooltip}
                  onBlur={hideTooltip}
                  onClick={displayTooltip}
                  onMouseEnter={displayTooltip}
                  aria-label="Information"
                  onFocus={displayTooltip}
                >
                  i
                </button>
                <span
                  className={classNames("biography-tooltip-text", {
                    open: isTooltipShown,
                  })}
                >
                  Le <b>«format paysage»</b> renvoie à un cadrage où la largeur
                  de la photo sera supérieure à sa hauteur :
                  <Icon
                    name="picture-placeholder"
                    iconClass="tooltip-picture-icon"
                  />
                </span>
              </p>

              {errorMessage && (
                <p className="upload-error-message" id="error-message">
                  {errorMessage}
                </p>
              )}
              <InputWithDescription
                inputName="biography-photos"
                handleCompressedUpload={handleCompressedUpload}
                btnClass="bg-current"
                inputDisabled={photos.length >= 3}
                describedBy={`${
                  errorMessage
                    ? "error-message"
                    : "biography-photo max-photo-number max-photo-size"
                }`}
              />
              <p className="biography-photo-description" id="max-photo-number">
                Dans la limite de 3 photos maximum
              </p>
              <p className="biography-photo-description" id="max-photo-size">
                PNG/JPG/JPEG - 2 Mo maximum
              </p>
            </div>
            <div aria-live="polite" data-testid="previewWrapper">
              {photos &&
                photos.map((file) => (
                  <ImagePreview
                    key={typeof file === "string" ? file : file.name}
                    source={
                      typeof file === "string"
                        ? file
                        : window.URL.createObjectURL(file)
                    }
                    imgName={file.name}
                    imgSize={file.size}
                    deletePhoto={handleDeletePhoto}
                    modal={false}
                  />
                ))}
            </div>
          </fieldset>

          <ButtonsWrapper position="right" btnWrapperClass="mt-30">
            <Button
              type="button"
              btnClass="bg-transparent"
              onClickAction={() => closeForm({ messageSent: false })}
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
