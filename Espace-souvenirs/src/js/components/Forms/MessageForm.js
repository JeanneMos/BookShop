import React, {useRef, useEffect} from 'react';
import useForm from '../../services/useForm';

import { useSelector, useDispatch } from 'react-redux';
import { modalOpened } from '../../context/modalSlice';
import { messagePictureDeleted, messagePictureUpdated, messageAdded } from '../../context/messageSlice';
import scrollSmoothToElement from '../../services/scrollSmoothToElement';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import ButtonsWrapper from '../../layouts/ButtonsWrapper';
import Button from '../Button/Button';
import Icon from '../Icons/Icon';
import Upload from '../Upload/Upload';

/* import "./forms.scss"; */
import ImagePreview from '../Upload/ImagePreview';
import { nanoid } from 'nanoid';

const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
  photo: '',
  eventsOptin:''
};
const validationValues = {
  firstName: {
    pattern: {
      value: /^([0-9a-zA-Z\u00C0-\u00FF ',-])+$/,
      message: 'Merci de renseigner votre prénom',
    },
    isRequired: true,
    required: 'Merci de renseigner votre prénom',
  },
  lastName: {
    pattern: {
      value: /^([0-9a-zA-Z\u00C0-\u00FF ',-])+$/,
      message: 'Merci de renseigner votre nom de famille',
    },
    isRequired: true,
    required: 'Merci de renseigner votre nom de famille',
  },
  email: {
    pattern: {
      value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/,
      message: 'Merci de renseigner une adresse email valide',
    },
    isRequired: true,
    required: 'Merci de renseigner votre adresse email',
  },
  message: {
    isRequired: true,
    required: 'Merci de remplir le texte du message',
  },
  photo: {
    isRequired: false,
  },
  eventsOptin: {
    isRequired:false
  }
  
}
export default function MessageForm({reference, closeForm}) {
  const messagesState = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  const {
    inputValues, changeHandler, errorHandler, submitErrorsHandler, errors, isValid,
  } = useForm({ initialFormState, validationValues });



  const hiddenGlobalError = useRef();


  const openHeroBannerModal = () => {
    dispatch(modalOpened({ theme: 'dark', hasCloseButton: true, modalType: "MessagePictureHeroModal" }));
  }
  const handleDeletePhoto = () => {
    dispatch(messagePictureDeleted());
  }
  const saveDefuntPhoto = (files) => {
    dispatch(messagePictureUpdated({ messagePictures: [...files] }));
    /* const formData = new FormData();
      formData.append('file', compressedResult, compressedResult.name);
        axios.post('/path/to/upload', formData).then(() => {
        console.log('Upload success');
      }); */
    /* source={window.URL.createObjectURL(file)} */
  };

  const getUserAddedPictureUrl = () => {
    if (messagesState?.messagePictures) {
      return typeof messagesState?.messagePictures[0] === "string"
        ? messagesState.messagePictures[0] 
        : window.URL.createObjectURL(messagesState?.messagePictures[0])
    } 
    return null;
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const arrayOfErrors = Object.keys(errors);
    if (!isValid && hiddenGlobalError.current) {
      scrollSmoothToElement(hiddenGlobalError.current);
    }

    if (arrayOfErrors.length === 0) {
      const emptyFields = Object.entries(inputValues)
        .filter(([key, value]) => validationValues[key].isRequired && value === '')
        .map(([key]) => key);

      if (emptyFields.length) {
        submitErrorsHandler(emptyFields);
        if (hiddenGlobalError.current) scrollSmoothToElement(hiddenGlobalError.current);
      } else {
        const message = {
          author: `${inputValues.firstName} ${inputValues.lastName}`,
          body: inputValues.message,
          id: nanoid(),
          dateTime: new Date().getTime(),
          picture: getUserAddedPictureUrl(),
          email: inputValues.email,
          published: true
        }
        dispatch(messageAdded({message}))
        closeForm({messageSent:true})
      }
    }
  }
  
  useEffect(() => {
    return () =>  handleDeletePhoto();
  }, [])

  return (
    <>
      <h2 className="content-heading-2">Ecrire un message</h2>
      <div className='messages-form-wrapper'>
        <form noValidate ref={reference} onSubmit={handleSubmit} data-testid="messagesForm" className="messages-form">
          <h3 className='messages-form-title'>Quel message souhaitez-vous transmettre ?</h3>
          {!isValid && <p className="sr-only" tabIndex={0}>Merci de corriger les erreurs</p>}
          <FormInput
            id="lastName"
            name="lastName"
            labelText="Votre nom"
            type="text"
            isRequired
            value={inputValues.lastName}
            inputPlaceholder="Nom"
            onInputChange={changeHandler}
            onInputBlur={errorHandler}
            error={errors.lastName}/>
          <FormInput 
            id="firstName"
            name="firstName"
            labelText="Votre prénom"
            type="text"
            isRequired
            value={inputValues.firstName}
            inputPlaceholder="Prénom"
            onInputChange={changeHandler}
            onInputBlur={errorHandler}
            error={errors.firstName}/>
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
            error={errors.email}/>

          <fieldset className='message-photo-upload'>
            <legend>Souhaitez-vous ajouter une photo ?
              <span className="optional-label">&nbsp;(facultatif)</span>
              <span className='message-photo-requirements'>&nbsp;PNG/JPG/JPEG/BMP - 2 Mo maximum</span></legend>
            {!messagesState?.messagePictures && (
              <>
                <Upload 
                  name="message-image-custom" 
                  numberOfPhotos={1} 
                  dispatchCbAction={saveDefuntPhoto}
                  btnClass="bg-white"
                  hasImageRequirement={false}/>
                <Button type="button" btnClass='bg-white message-photo-button' onClickAction={openHeroBannerModal}>
                  <Icon name="picture" iconClass="current-icon" />
                  <span className="separator">&nbsp;</span>
                  <span className="button-text">Choisir une photo</span>
                </Button>
              </>
            )}

            {messagesState?.messagePictures && (
              messagesState.messagePictures.map((file) => (
                <ImagePreview
                  key={typeof file === "string" ? file : file.name}
                  source={typeof file === "string" ? file : window.URL.createObjectURL(file)}
                  imgName={file.name}
                  imgSize={file.size}
                  deletePhoto={handleDeletePhoto}
                  modal={false}
                />
              )))}

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
            labelText="Je souhaite être alerté des évènements privés ajoutés dans cet Espace Souvenirs"/>
          <ButtonsWrapper position="right">
            <Button type="button" btnClass="bg-transparent" onClickAction={() => closeForm({messageSent: false})}>Annuler</Button>
            <Button type="submit" btnClass='bg-current' dataTestid="submitMessageForm">
              <span className="button-text">Envoyer un message</span>
              <span className="separator">&nbsp;</span>
              <Icon name="next" iconClass="white-icon" />
            </Button>
          </ButtonsWrapper>
        </form>
      </div>
    </>
  )
}