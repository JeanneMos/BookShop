import React from 'react';
import { useDispatch } from 'react-redux';
import ModalTitle from './ModalTitle';
import Upload from '../Upload/Upload';

import { modalClosed } from '../../context/modalSlice';

import { defuntImageUpdated } from '../../context/userSlice';

export default function DefuntPictureModal() {

  const dispatch = useDispatch();

  const saveDefuntPhoto = (files) => {
    const defuntImgObject = {
      url: window.URL.createObjectURL(files[0]),
      name: files[0].name
    }
    dispatch(defuntImageUpdated({ defuntImage: {...defuntImgObject} }));
    dispatch(modalClosed());
    /* const formData = new FormData();
formData.append('file', compressedResult, compressedResult.name);
  axios.post('/path/to/upload', formData).then(() => {
  console.log('Upload success');
}); */
    /* source={window.URL.createObjectURL(file)} */
  };
  return (
    <>
      <ModalTitle>Sélectionner une photo</ModalTitle>
      <Upload
        name="defunt-image" 
        numberOfPhotos={1} 
        uploadType="defuntImage" 
        closeModal={() => dispatch(modalClosed())} 
        saveFile={saveDefuntPhoto} />
    </>
  );
}
