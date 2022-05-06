import React, {useRef} from 'react';
import useForm from '../../services/useForm';
import { useSelector, useDispatch } from 'react-redux';
import { administratorPersonalInfoModified } from '../../context/administratorSlice';

import { postUserUpdateUrl } from '../../constants';
import usePostQuery from '../../services/usePostQuery';

import FormInput from './FormInput';
import ButtonsWrapper from '../../layouts/ButtonsWrapper';
import Button from '../Button/Button';
import scrollSmoothToElement from '../../services/scrollSmoothToElement';

/* import './forms.scss';
import '../../../scss/helpers.scss'; */

const validationValues = {
  surname: {
    pattern: {
      value: /^([a-zA-Z\u00C0-\u00FF '-])+$/,
      message: 'Merci de renseigner votre nom de famille correct',
    },
    isRequired: true,
    required: 'Merci de renseigner votre nom de famille',
  },
  name: {
    pattern: {
      value: /^([a-zA-Z\u00C0-\u00FF '-])+$/,
      message: 'Merci de renseigner votre prénom',
    },
    isRequired: true,
    required: 'Merci de renseigner votre prénom',
  },
  email: {
    isRequired: true,
    required: 'Merci de renseigner votre email',
  },
  phone: {
    pattern: {
      value: /^([0-9])+$/,
      message: 'Merci de renseigner le numéro de téléphone au format requis (ex. 0799999999)',
    },
    isRequired: false,
  },
  current_password: {
    isRequired: false,
  },
  new_password: {
    isRequired: false,
  },
 
};

export default function AdministratorPersonalInfoForm({closeForm}) {
  const administratorState = useSelector(state => state.administrator)

  const initialFormState = {
    surname : administratorState.currentAdministrator?.lastName?.toUpperCase() || "",
    name : administratorState.currentAdministrator?.firstName || "",
    phone : administratorState.currentAdministrator?.phone || "",
    email:administratorState.currentAdministrator?.email || "",
    current_password : "",
    new_password : "",
  };
  const {
    inputValues, changeHandler, errorHandler, submitErrorsHandler, errors, isValid,
  } = useForm({ initialFormState, validationValues });

  const updatePersonalInfo = usePostQuery();
  const hiddenGlobalError = useRef();
  const dispatch = useDispatch();

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
      } else {
        const infos_obj = {
          surname : inputValues.surname,
          name :inputValues.name,
          phone : inputValues.phone,
          current_password: inputValues.current_password
        }
        try {
          updatePersonalInfo.mutate({data: infos_obj, postApiUrl: postUserUpdateUrl }, {
            onSuccess: (data) => {
              console.log(data)
            /*  const structuredImages = compressedFiles.map(file => {
                const imgObject = {
                  url: window.URL.createObjectURL(file),
                  name: file.name
                }
                return imgObject
              }) */
              // const {field_bio_story, field_bio_custom} = JSON.parse(data?.data?.field_value)
              //dispatch(biographyPhotoAdded({biographyPhotos: structuredImages}))
              // dispatch(biographyUpdated({biography: field_bio_story, isBiographyEdited: field_bio_custom}))
              dispatch(administratorPersonalInfoModified({isEditingPersonalInfo: false, isEditingAdministator: true})) 
              closeForm({userUpdated:true})
            }
          })
        } catch {
          // Something went wrong
        }
      }
    }
  };

  const handleCloseForm = () => {
    dispatch(administratorPersonalInfoModified({isEditingPersonalInfo: false, isEditingAdministator: true})) 
  }

  return (
    <>
      <h2 className="content-heading-2">Modification des informations personnelles</h2>
      {!isValid && <p className="sr-only" tabIndex={0} ref={hiddenGlobalError}>Merci de corriger les erreurs</p>}
      <form noValidate onSubmit={handleSubmit} className="personal-info-form">
        <fieldset aria-describedby='personal-info'>
          <p className="fieldset-description" id="personal-info">Coordonnées</p>
          <FormInput
            id="surname"
            name="surname"
            labelText="Nom"
            type="text"
            isRequired
            inputClass="uppercase"
            autocomplete="family-name"
            value={inputValues.surname}
            inputPlaceholder="Nom"
            onInputChange={changeHandler}
            onInputBlur={errorHandler}
            error={errors.surname}
          />
          <FormInput
            id="name"
            name="name"
            labelText="Prénom"
            type="text"
            isRequired
            autocomplete="given-name"
            value={inputValues.name}
            inputPlaceholder="Prénom"
            onInputChange={changeHandler}
            onInputBlur={errorHandler}
            error={errors.name}
          />
          <FormInput
            id="email"
            name="email"
            labelText="Email"
            type="email"
            readOnly
            isRequired
            autocomplete="email"
            value={inputValues.email}
            inputPlaceholder="Email"
            onInputChange={changeHandler}
            onInputBlur={errorHandler}
            error={errors.email}
          />
          <FormInput
            id="phone"
            name="phone"
            labelText="Téléphone"
            type="tel"
            max={14}
            autocomplete="tel"
            value={inputValues.phone}
            inputPlaceholder="Téléphone"
            onInputChange={changeHandler}
            onInputBlur={errorHandler}
            error={errors.phone}
          />
          <FormInput
            type="checkbox"
            id="eventsOptin"
            name="eventsOptin"
            wrapperClass="mt-30"
            isRequired={false}
            labelText="Je souhaite être alerté des évènements privés ajoutés dans cet Espace Souvenirs"/>
        </fieldset>
        <fieldset aria-describedby='password-info' className='mt-30'>
          <p className="fieldset-description" id="password-info">Mot de passe</p>
          <FormInput
            id="current_password"
            name="current_password"
            labelText="Mot de passe actuel"
            type="password"
            autocomplete="current-password"
            value={inputValues.current_password}
            inputPlaceholder="Mot de passe actuel"
            onInputChange={changeHandler}
            onInputBlur={errorHandler}
            error={errors.current_password}
          />
          <FormInput
            id="new_password"
            name="new_password"
            labelText="Nouveau mot de passe"
            type="password"
            autocomplete="new-password"
            value={inputValues.new_password}
            inputPlaceholder="Nouveau mot de passe"
            onInputChange={changeHandler}
            onInputBlur={errorHandler}
            error={errors.new_password}
          />
          <FormInput
            id="repeat_new_password"
            name="repeat_new_password"
            labelText="Confirmer votre mot de passe"
            type="password"
            value={inputValues.repeat_new_password}
            inputPlaceholder="Confirmer votre mot de passe"
            onInputChange={changeHandler}
            onInputBlur={errorHandler}
            error={errors.repeat_new_password}
          />
          <p className="password-check">
            <span >Il faut un minimum de </span>
            <span >8 caractères avec au moins</span>
            <span >1 majuscule</span>
            <span >1 chiffre</span>
            <span >1 caractère spécial</span>
          </p>
        </fieldset>
        <ButtonsWrapper position="right" btnWrapperClass="mt-30">
          <Button type="button" btnClass="bg-transparent" onClickAction={handleCloseForm}>Annuler</Button>
          <Button type="submit" btnClass='bg-current' dataTestid="submitInfosForm">
            <span className="button-text">Entregistrer</span>
          </Button>
        </ButtonsWrapper>
      </form>
    </>
  )
}
