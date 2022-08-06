import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { bioMachineName, postSaveFieldApiUrl } from "../../constants";
import ButtonsWrapper from "../../layouts/ButtonsWrapper";
import { biographyUpdated } from "../../providers/biographySlice";
import { decoded } from "../../services/formatting";
import scrollSmoothToElement from "../../services/scrollSmoothToElement";
import usePostQuery from "../../services/usePostQuery";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import Loader from "../Loader/Loader";
import CKEditorCustom from "./CKEditorCustom";
/* import BiographyPhotosFieldset from "./BiographyPhotosFieldset"; */

export default function BiographyForm({ reference, closeForm }) {
  const params = useParams();
  const biographyState = useSelector((state) => state.biography);
  /*   const globalState = useSelector((state) => state.globalInfo); */
  const dispatch = useDispatch();
  const initialFormState = {
    biography: biographyState?.isBiographyEdited
      ? decoded(biographyState?.biography)
      : null,
    photos: null,
  };
  const max = 1000;

  const updateBiography = usePostQuery();
  const [editorValue, setEditorValue] = useState(
    biographyState?.isBiographyEdited ? decoded(biographyState?.biography) : "",
  );
  const [networkError, setNetworkError] = useState("");
  const [characters, setCaracters] = useState(
    (initialFormState?.biography &&
      max -
        decoded(initialFormState?.biography).replace(/<[^>]*>/g, "").length) ||
      max,
  );
  const networkErrorMessage = useRef(null);
  const editorRef = useRef(null);
  const heading = useRef(null);

  const handleCloseForm = () => {
    closeForm({ messageSent: false });
  };
  const changeHandler = (text, characters) => {
    setEditorValue(text);
    if (max) {
      const newCaracters = Number(max) - characters.length;
      setCaracters(newCaracters);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const biography_obj = {
      field_value: {
        field_bio_story: editorValue,
        field_bio_photo: null,
      },
      field_machine_name: bioMachineName,
      entity_hash: params.espaceId,
    };
    try {
      updateBiography.mutate(
        { data: biography_obj, apiUrl: postSaveFieldApiUrl },
        {
          onSuccess: ({ data }) => {
            /*           const structuredImages = compressedFiles.map(file => {
            const imgObject = {
              url: window.URL.createObjectURL(file),
              name: file.name
            }
            return imgObject
          }) */
            const { field_bio_story, field_bio_custom } = JSON.parse(
              data?.field_value,
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

  useEffect(() => {
    if (heading?.current) {
      heading.current.focus();
    }
  }, [heading]);

  return (
    <>
      {networkError && (
        <p ref={networkErrorMessage} className="message-status mb-40">
          <Icon name="cross" iconClass="message-status-icon error-icon" />
          <span>{networkError}</span>
        </p>
      )}
      <h2 className="content-heading-2" ref={heading} tabIndex={-1}>
        Écrire la biographie
      </h2>
      <div className="biography-wrapper">
        <form
          noValidate
          ref={reference}
          onSubmit={handleSubmit}
          data-testid="biographyForm"
          className="biography-form"
        >
          <div className="biography-textarea">
            <CKEditorCustom
              value={editorValue}
              editorRef={editorRef}
              id="biography"
              onInputChange={changeHandler}
              /*  siteBrand={globalState?.marque?.name} */
            />
            {max && (
              <p
                className="characters-count"
                data-testid="caractersCount"
                id={`${name}-requirement`}
              >
                {characters} caractères restants.
              </p>
            )}
          </div>
          {/* <BiographyPhotosFieldset /> */}

          <ButtonsWrapper position="right" btnWrapperClass="mt-30">
            <div className="button-loader-wrapper">
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
              {updateBiography?.isLoading && <Loader position="relative" />}
            </div>
          </ButtonsWrapper>
        </form>
      </div>
    </>
  );
}
