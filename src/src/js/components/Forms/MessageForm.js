import React, { useEffect, useRef, useState } from "react";
import { useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  errorMessageNetwork,
  messagesAccueilKey,
  messagesListKey,
  mobileBreakpoint,
  numberMessagesKey,
  postMessageSendUrl,
} from "../../constants";
import ButtonsWrapper from "../../layouts/ButtonsWrapper";
import {
  messagePictureDeleted,
  messagePictureUpdated,
} from "../../providers/messageSlice";
import { modalOpened } from "../../providers/modalSlice";
import { isEmptyArray } from "../../services/formatting";
import scrollSmoothToElement from "../../services/scrollSmoothToElement";
import useForm from "../../services/useForm";
import usePostQuery from "../../services/usePostQuery";
import useViewport from "../../services/useViewport";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import Loader from "../Loader/Loader";
import ImagePreview from "../Upload/ImagePreview";
import InputWithDescription from "../Upload/InputWithDescription";
import useUpload from "../Upload/useUpload";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import { messageValidationValues } from "./FormValidationValues";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  photo: "",
  eventsOptin: "",
};

export default function MessageForm({ reference, closeForm }) {
  const messagesState = useSelector((state) => state.messages);
  const [error, setError] = useState(null);
  const [userPhoto, setUserPhoto] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();
  const sendMessage = usePostQuery();
  const queryClient = useQueryClient();
  const hiddenGlobalError = useRef();
  const { width } = useViewport();
  const {
    inputValues,
    changeHandler,
    errorHandler,
    submitErrorsHandler,
    errors,
    isValid,
  } = useForm({
    initialFormState,
    validationValues: messageValidationValues,
  });

  const {
    handleCompressedUpload,
    compressedFiles,
    handleDeletePhoto,
    errorMessage,
  } = useUpload({
    numberOfPhotos: 3,
    dispatchCbAction: saveDefuntPhoto,
  });

  function saveDefuntPhoto(files) {
    if (!isEmptyArray(files)) {
      const defuntImgObject = {
        url: window.URL.createObjectURL(files[0]),
        name: files[0].name,
      };
      dispatch(
        messagePictureUpdated({
          messagePictures: [defuntImgObject],
          customMessagePicture: true,
        }),
      );
      setUserPhoto(files[0]);
    } else {
      dispatch(messagePictureDeleted());
    }
  }

  const openHeroBannerModal = () => {
    dispatch(
      modalOpened({
        theme: "dark",
        hasCloseButton: true,
        modalType: "MessagePictureHeroModal",
      }),
    );
  };

  const handleCloseForm = () => {
    closeForm({ messageSent: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const arrayOfErrors = Object.keys(errors);
    if (!isValid && hiddenGlobalError.current) {
      scrollSmoothToElement(hiddenGlobalError.current);
    }

    if (arrayOfErrors.length === 0) {
      const emptyFields = Object.entries(inputValues)
        .filter(
          ([key, value]) =>
            messageValidationValues[key].isRequired && value === "",
        )
        .map(([key]) => key);

      if (emptyFields.length) {
        submitErrorsHandler(emptyFields);
        if (hiddenGlobalError.current)
          scrollSmoothToElement(hiddenGlobalError.current);
      } else {
        const formData = new FormData();
        if (userPhoto?.name && messagesState?.customMessagePicture) {
          formData.append("file", userPhoto, userPhoto?.name);
        }
        if (
          !messagesState?.customMessagePicture &&
          messagesState?.messagePictures
        ) {
          formData.append(
            "field_message_banner",
            messagesState?.messagePictures[0]?.name,
          );
        }
        formData.append("field_message_name", inputValues?.firstName);
        formData.append("field_message_surname", inputValues?.lastName);
        formData.append("field_message_email", inputValues?.email);
        formData.append("field_message_texte", inputValues?.message);
        formData.append("field_message_status", true);
        formData.append("entity_hash", params.espaceId);
        sendMessage.mutate(
          {
            data: formData,
            apiUrl: postMessageSendUrl,
          },
          {
            onSuccess: ({ data }) => {
              if (data.status === 200) {
                setTimeout(() => {
                  queryClient.refetchQueries([messagesListKey]);
                  queryClient.refetchQueries([messagesAccueilKey]);
                  queryClient.refetchQueries([numberMessagesKey]);
                  closeForm({ messageSent: true });
                }, 1000);
              } else {
                setError(errorMessageNetwork);
              }
            },
            onError: (err) => {
              setError(errorMessageNetwork);
            },
          },
        );
      }
    }
  };

  useEffect(() => {
    return () => handleDeletePhoto();
  }, []);

  return (
    <>
      <h2 className="content-heading-2">Ecrire un message</h2>
      <div className="messages-form-wrapper">
        <form
          noValidate
          ref={reference}
          onSubmit={handleSubmit}
          data-testid="messagesForm"
          className="messages-form"
        >
          <h3 className="messages-form-title">
            Quel message souhaitez-vous transmettre ?
          </h3>
          {!isValid && (
            <p className="sr-only" tabIndex={0}>
              Merci de corriger les erreurs
            </p>
          )}
          {error && <p className="upload-error-message">{error}</p>}
          <FormInput
            id="lastName"
            name="lastName"
            labelText="Votre nom"
            type="text"
            inputClass="uppercase"
            isRequired
            value={inputValues.lastName}
            inputPlaceholder="Nom"
            onInputChange={changeHandler}
            onInputBlur={errorHandler}
            error={errors.lastName}
          />
          <FormInput
            id="firstName"
            name="firstName"
            labelText="Votre prénom"
            type="text"
            inputClass="capitalize"
            isRequired
            value={inputValues.firstName}
            inputPlaceholder="Prénom"
            onInputChange={changeHandler}
            onInputBlur={errorHandler}
            error={errors.firstName}
          />
          <FormInput
            id="email"
            name="email"
            labelText="Votre email"
            type="email"
            isRequired
            value={inputValues.email}
            inputPlaceholder="Email"
            onInputChange={changeHandler}
            onInputBlur={errorHandler}
            error={errors.email}
          />

          <fieldset className="message-photo-upload">
            <legend>
              Souhaitez-vous ajouter une photo ?
              <span className="optional-label">&nbsp;(facultatif)</span>
              <span className="message-photo-requirements">
                &nbsp;PNG/JPG/JPEG/BMP - 2 Mo maximum
              </span>
            </legend>
            {errorMessage && (
              <p className="upload-error-message">{errorMessage}</p>
            )}
            {!messagesState?.messagePictures && (
              <>
                <InputWithDescription
                  inputName="message-photos"
                  handleCompressedUpload={handleCompressedUpload}
                  btnClass="bg-current"
                  describedBy={`${
                    errorMessage
                      ? "error-message"
                      : "message-photo max-photo-number max-photo-size"
                  }`}
                />
                <Button
                  type="button"
                  btnClass="bg-white message-photo-button"
                  onClickAction={openHeroBannerModal}
                >
                  <Icon name="picture" iconClass="current-icon" />
                  <span className="separator">&nbsp;</span>
                  <span className="button-text">Choisir une photo</span>
                </Button>
              </>
            )}

            {messagesState?.messagePictures &&
              messagesState.messagePictures.map((file) => (
                <ImagePreview
                  key={typeof file === "string" ? file : file.name}
                  source={typeof file === "string" ? file : file.url}
                  imgName={file.name}
                  imgSize={file.size}
                  deletePhoto={handleDeletePhoto}
                  modal={false}
                />
              ))}
          </fieldset>

          <FormTextarea
            labelText="Votre message"
            isRequired
            id="message"
            name="message"
            max={1000}
            value={inputValues.message}
            inputPlaceholder="Votre message"
            onInputChange={changeHandler}
            onInputBlur={errorHandler}
            error={errors.message}
          />
          <FormInput
            type="checkbox"
            id="eventsOptin"
            name="eventsOptin"
            isRequired={false}
            labelText="Je souhaite être alerté des évènements privés ajoutés dans cet Espace Hommage"
          />
          <ButtonsWrapper position="right">
            <div className="button-loader-wrapper">
              {width > mobileBreakpoint ? (
                <>
                  <Button
                    type="button"
                    btnClass="bg-transparent"
                    onClickAction={handleCloseForm}
                  >
                    Annuler
                  </Button>
                  <Button
                    type="submit"
                    disabled={sendMessage?.isLoading}
                    btnClass="bg-current"
                    dataTestid="submitMessageForm"
                    onClickAction={handleSubmit}
                  >
                    <span className="button-text">Envoyer un message</span>
                    <span className="separator">&nbsp;</span>
                    <Icon name="next" iconClass="white-icon" />
                  </Button>
                  {sendMessage?.isLoading && <Loader position="relative" />}
                </>
              ) : (
                <>
                  <Button
                    type="submit"
                    disabled={sendMessage?.isLoading}
                    btnClass="bg-current"
                    dataTestid="submitMessageForm"
                    onClickAction={handleSubmit}
                  >
                    <span className="button-text">Envoyer un message</span>
                    <span className="separator">&nbsp;</span>
                    <Icon name="next" iconClass="white-icon" />
                  </Button>
                  {sendMessage?.isLoading && <Loader position="relative" />}
                  <Button
                    type="button"
                    btnClass="bg-transparent"
                    onClickAction={handleCloseForm}
                  >
                    Annuler
                  </Button>
                </>
              )}
            </div>
          </ButtonsWrapper>
        </form>
      </div>
    </>
  );
}
