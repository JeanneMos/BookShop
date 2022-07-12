/* eslint-disable no-new */
import Compressor from "compressorjs";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

import ButtonsWrapper from "../../layouts/ButtonsWrapper";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import Loader from "../Loader/Loader";
import DefuntModalImagePlaceholder from "./DefuntModalImagePlaceholder";
import ImagePreview from "./ImagePreview";
import InputWithDescription from "./InputWithDescription";

export default function Upload({
  name,
  numberOfPhotos,
  closeModal,
  saveFile,
  isLoading = false,
  hasImageRequirement = true,
  dispatchCbAction,
  btnClass,
}) {
  const globalInfoState = useSelector((state) => state.globalInfo);
  const [compressedFiles, setcompressedFiles] = useState(
    globalInfoState?.defuntImage ? [globalInfoState?.defuntImage] : [],
  );
  const [errorMessage, setErrorMessage] = useState(null);
  const inputFile = useRef();

  const handleCompressedUpload = (e) => {
    const image = e.target.files[0];
    const fileNames = compressedFiles.map((file) => file.name);
    if (fileNames.length >= numberOfPhotos) {
      setErrorMessage(
        `Vous ne pouvez pas ajouter plus de ${numberOfPhotos} ${
          numberOfPhotos === 1 ? "photo" : "photos"
        }`,
      );
      return;
    }

    if (image.size >= 2097152) {
      setErrorMessage("Votre photo ne peut pas dépasser 2 Mo");
      return;
    }

    if (
      image.type !== "image/jpeg" &&
      image.type !== "image/png" &&
      image.type !== "image/bmp"
    ) {
      setErrorMessage(
        "Vous pouvez télécharge des photo au format PNG/JPG/JPEG/BMP uniquement",
      );
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

  const handleDeletePhoto = () => {
    if (inputFile.current) {
      inputFile.current.value = "";
    }
    setcompressedFiles([]);
    setErrorMessage(null);
  };

  const handleSaveFile = () => {
    saveFile(compressedFiles);
  };

  const handleImagePreview = (files) => {
    if (files && files.length > 0) {
      return files.map((file) => (
        <ImagePreview
          key={file.name}
          source={file.url || window.URL.createObjectURL(file)}
          imgName={file.name}
          imgSize={file.size}
          deletePhoto={handleDeletePhoto}
          modal={true}
        />
      ));
    }
    if (files && files.length === 0) {
      return <DefuntModalImagePlaceholder />;
    }
    return null;
  };
  return (
    <>
      {errorMessage && <p className="upload-error-message">{errorMessage}</p>}
      <div className="upload-defunt-image-wrapper">
        {handleImagePreview(compressedFiles)}
        <div className="modal-image-description">
          <p className="modal-photo-subtitle">
            Personnaliser l’Espace Hommage en y ajoutant une photo du défunt
          </p>
          <p className="input-file-description">
            Pour un affichage optimum, privilégier des photos au format portrait
          </p>
          <InputWithDescription
            inputName={name}
            handleCompressedUpload={handleCompressedUpload}
            btnClass="bg-current"
            inputFile={inputFile}
            hasImageRequirement={hasImageRequirement}
          />
        </div>
        <ButtonsWrapper position="right">
          <Button
            type="button"
            btnClass="bg-transparent cancel-button"
            onClickAction={closeModal}
          >
            Annuler
          </Button>
          <div className="button-loader-wrapper">
            <Button
              type="button"
              btnClass="bg-current"
              disabled={isLoading}
              onClickAction={handleSaveFile}
            >
              <Icon name="save" iconClass="white-icon book-icon" />
              <span className="separator">&nbsp;</span>
              <span className="button-text">enregistrer</span>
            </Button>
            {isLoading && <Loader position="relative" />}
          </div>
        </ButtonsWrapper>
      </div>
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
