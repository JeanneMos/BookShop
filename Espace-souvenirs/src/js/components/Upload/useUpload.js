import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Compressor from 'compressorjs';

/* import './upload.scss'; */


export default function useUpload({
  numberOfPhotos, dispatchCbAction, uploadedPhotos
}) {
  const [compressedFiles, setcompressedFiles] = useState(uploadedPhotos || []);

  const [errorMessage, setErrorMessage] = useState(null);

  const handleCompressedUpload = (e) => {

    const image = e.target.files[0];

    const fileNames = compressedFiles.map((file) => file.name);
    if (fileNames.length >= numberOfPhotos) {

      setErrorMessage(`Vous ne pouvez pas ajouter plus de ${numberOfPhotos} photos`);
      return;
    }

    if (image.size >= 2097152) {
      setErrorMessage('Votre photo ne peut pas dépasser 2 Mo');
      return;
    }

    if (fileNames.length === 0 || (fileNames.length > 0 && !fileNames.includes(image.name))) {
      setErrorMessage(null);
      new Compressor(image, {
        quality: 0.8,
        success: (compressedResult) => {
          setcompressedFiles([...compressedFiles, compressedResult]);
          dispatchCbAction && dispatchCbAction([...compressedFiles, compressedResult])
        },
        error(e) {
          console.error(e);
        },
      });
    }
  };

  const handleDeletePhoto = (imageName) => {
    const filteredImages = compressedFiles.filter((image) => image.name !== imageName);
    setcompressedFiles(filteredImages);
    setErrorMessage(null);
    dispatchCbAction && dispatchCbAction(filteredImages)
  };
  return {handleCompressedUpload, compressedFiles, handleDeletePhoto, errorMessage};
}

useUpload.defaultProps = {
  numberOfPhotos: 1,
};
useUpload.propTypes = {
  name: PropTypes.string.isRequired,
  numberOfPhotos: PropTypes.number,
};
