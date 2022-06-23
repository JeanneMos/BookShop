import classNames from "classnames";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Icon from "../Icons/Icon";
import ImagePreview from "../Upload/ImagePreview";
import InputWithDescription from "../Upload/InputWithDescription";
import useUpload from "../Upload/useUpload";

export default function BiographyPhotosFieldset() {
  const biographyState = useSelector((state) => state.biography);
  const dispatch = useDispatch();

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

  const displayTooltip = () => {
    setIsTooltipShown(true);
  };
  const hideTooltip = () => {
    setIsTooltipShown(false);
  };
  return (
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
            Pour un affichage optimum, privilégier des photos au format paysage
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
            Le <b>«format paysage»</b> renvoie à un cadrage où la largeur de la
            photo sera supérieure à sa hauteur :
            <Icon name="picture-placeholder" iconClass="tooltip-picture-icon" />
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
  );
}
