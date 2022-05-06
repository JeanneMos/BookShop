/* eslint-disable no-new */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Compressor from "compressorjs";
import ImagePreview from "./ImagePreview";
import ImagePlaceholder from "./ImagePlaceholder";
import InputWithDescription from "./InputWithDescription";
import Button from "../Button/Button";
import ButtonsWrapper from "../../layouts/ButtonsWrapper";
import Icon from "../Icons/Icon";
/* import './upload.scss'; */

export default function Upload({
  name,
  numberOfPhotos,
  uploadType,
  closeModal,
  saveFile,
  hasImageRequirement = true,
  dispatchCbAction,
  btnClass,
}) {
  const [compressedFiles, setcompressedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleCompressedUpload = (e) => {
    const image = e.target.files[0];
    const fileNames = compressedFiles.map((file) => file.name);

    if (fileNames.length >= numberOfPhotos) {
      setErrorMessage(
        `Vous ne pouvez pas ajouter plus de ${numberOfPhotos} photos`,
      );
      return;
    }

    if (image.size >= 2097152) {
      setErrorMessage("Votre photo ne peut pas dépasser 2 Mo");
      return;
    }

    if (
      fileNames.length === 0 ||
      (fileNames.length > 0 && !fileNames.includes(image.name))
    ) {
      setErrorMessage(null);

      new Compressor(image, {
        quality: 0.8,
        success: (compressedResult) => {
          setcompressedFiles([...compressedFiles, compressedResult]);
          dispatchCbAction &&
            dispatchCbAction([...compressedFiles, compressedResult]);
        },
      });
    }
  };

  const handleDeletePhoto = (imageName) => {
    const filteredImages = compressedFiles.filter(
      (image) => image.name !== imageName,
    );
    setcompressedFiles(filteredImages);
    setErrorMessage(null);
  };
  const handleImagePreview = (files) => {
    if (files && files.length > 0) {
      return files.map((file) => (
        <ImagePreview
          key={file.name}
          source={window.URL.createObjectURL(file)}
          imgName={file.name}
          imgSize={file.size}
          deletePhoto={handleDeletePhoto}
          modal={uploadType === "defuntImage"}
        />
      ));
    }
    if (files && files.length === 0 && uploadType === "defuntImage")
      return <ImagePlaceholder />;
    return null;
  };
  return (
    <>
      {errorMessage && <p className="upload-error-message">{errorMessage}</p>}
      {uploadType === "defuntImage" ? (
        <div className="upload-defunt-image-wrapper">
          {handleImagePreview(compressedFiles)}
          <div className="modal-image-description">
            <p className="modal-photo-subtitle">
              Personnaliser l’Espace Souvenirs en y ajoutant une photo du défunt
            </p>
            <p className="input-file-description">
              Pour un affichage optimum, privilégier des photos au format
              portrait
            </p>
            <InputWithDescription
              inputName={name}
              handleCompressedUpload={handleCompressedUpload}
              btnClass="bg-current"
              hasImageRequirement={hasImageRequirement}
            />
          </div>
          <ButtonsWrapper position="right">
            <Button
              type="button"
              btnClass="bg-transparent"
              onClickAction={closeModal}
            >
              Annuler
            </Button>
            <Button
              type="button"
              btnClass="bg-current"
              onClickAction={() => saveFile(compressedFiles)}
            >
              <Icon name="save" iconClass="white-icon book-icon" />
              <span className="separator">&nbsp;</span>
              <span className="button-text">enregistrer</span>
            </Button>
          </ButtonsWrapper>
        </div>
      ) : (
        <>
          <InputWithDescription
            inputName={name}
            btnClass={btnClass}
            hasImageRequirement={hasImageRequirement}
            handleCompressedUpload={handleCompressedUpload}
          />
        </>
      )}
    </>
  );
}

Upload.defaultProps = {
  numberOfPhotos: 1,
};
Upload.propTypes = {
  name: PropTypes.string.isRequired,
  numberOfPhotos: PropTypes.number,
};
