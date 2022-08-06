import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
  defuntPhotoMachineName,
  errorMessageNetwork,
  postSaveFieldApiUrl,
} from "../../constants";
import { defuntImageUpdated } from "../../providers/globalInfoSlice";
import { modalClosed } from "../../providers/modalSlice";
import usePostQuery from "../../services/usePostQuery";
import Upload from "../Upload/Upload";
import ModalTitle from "./ModalTitle";

export default function DefuntPictureModal() {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();
  const handleCloseModal = () => {
    dispatch(modalClosed());
  };
  const updateDefuntPhoto = usePostQuery({
    parameters: {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
      credentials: "include",
    },
  });
  const saveDefuntPhoto = (files) => {
    const formData = new FormData();
    try {
      if (files.length > 0) {
        formData.append("file", files[0], files[0]?.name);
      } else {
        formData.append("file", false);
      }
      formData.append("field_machine_name", defuntPhotoMachineName);
      formData.append("entity_hash", params.espaceId);
      updateDefuntPhoto.mutate(
        {
          data: formData,
          apiUrl: postSaveFieldApiUrl,
        },
        {
          onSuccess: ({ data }) => {
            if (data.status === 200) {
              const defuntImgObject = {
                url: data?.field_value?.url,
                name: data?.field_value?.title,
              };
              dispatch(
                defuntImageUpdated({
                  defuntImage: data?.field_value ? defuntImgObject : null,
                }),
              );
              dispatch(modalClosed());
              setError(null);
            } else {
              setError(errorMessageNetwork);
            }
          },
          onError: (err) => {
            dispatch(defuntImageUpdated({ defuntImage: null }));
            dispatch(modalClosed());
          },
        },
      );
    } catch {
      // Something went wrong
    }
  };
  return (
    <>
      <ModalTitle>Sélectionner une photo</ModalTitle>
      {error && <p className="upload-error-message">{error}</p>}
      <Upload
        name="defunt-image"
        numberOfPhotos={1}
        isLoading={updateDefuntPhoto?.isLoading}
        closeModal={handleCloseModal}
        saveFile={saveDefuntPhoto}
      />
    </>
  );
}
