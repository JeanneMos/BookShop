import React, { useRef } from "react";

import scrollSmoothToElement from "../../services/scrollSmoothToElement";
import useForm from "../../services/useForm";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import FormInput from "./FormInput";
import { ceremonyValidationValues } from "./FormValidationValues";

const initialFormState = {
  eventName: "",
  eventPlace: "",
  eventDate: "",
  eventTime: "",
  address: "",
  address2: "",
  city: "",
  zipCode: "",
};

export default function CeremonyForm() {
  const {
    inputValues,
    changeHandler,
    errorHandler,
    submitErrorsHandler,
    errors,
    isValid,
  } = useForm({
    initialFormState,
    validationValues: ceremonyValidationValues,
  });

  const hiddenGlobalError = useRef();

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
            ceremonyValidationValues[key].isRequired && value === "",
        )
        .map(([key]) => key);

      if (emptyFields.length) {
        submitErrorsHandler(emptyFields);
      }
    }
  };
  return (
    <>
      <form noValidate onSubmit={handleSubmit}>
        {!isValid && (
          <p className="sr-only" tabIndex={0} ref={hiddenGlobalError}>
            Merci de corriger les erreurs
          </p>
        )}
        <FormInput
          id="eventName"
          name="eventName"
          labelText="Titre de l'événement"
          type="text"
          isRequired
          value={inputValues.eventName}
          inputPlaceholder="Titre de l'événement"
          onInputChange={changeHandler}
          onInputBlur={errorHandler}
          error={errors.eventName}
        />
        <div className="date-time-wrapper">
          <FormInput
            id="eventDate"
            name="eventDate"
            labelText="Date"
            type="date"
            isRequired
            wrapperClass="date-input-wrapper"
            value={inputValues.eventDate}
            onInputChange={changeHandler}
            onInputBlur={errorHandler}
            error={errors.eventDate}
            min={new Date().toISOString().split("T")[0]}
          />
          <FormInput
            id="eventTime"
            name="eventTime"
            labelText="Heure"
            type="time"
            isRequired
            wrapperClass="time-input-wrapper"
            value={inputValues.eventTime}
            onInputChange={changeHandler}
            onInputBlur={errorHandler}
            error={errors.eventTime}
          />
        </div>
        <FormInput
          id="eventPlace"
          name="eventPlace"
          labelText="Lieu de l'événement"
          type="text"
          isRequired
          value={inputValues.eventPlace}
          inputPlaceholder="Lieu de l'événement"
          onInputChange={changeHandler}
          onInputBlur={errorHandler}
          error={errors.eventPlace}
        />
        <FormInput
          id="firstName"
          name="address"
          labelText="Adresse"
          type="text"
          isRequired
          value={inputValues.address}
          inputPlaceholder="10 rue des Feuilles"
          onInputChange={changeHandler}
          onInputBlur={errorHandler}
          error={errors.address}
        />
        <FormInput
          id="firstName"
          name="address2"
          labelText="Complément d'adresse"
          type="text"
          value={inputValues.address2}
          onInputChange={changeHandler}
          onInputBlur={errorHandler}
          error={errors.address2}
        />
        <FormInput
          id="firstName"
          name="zipCode"
          labelText="Code postal"
          type="text"
          isRequired
          value={inputValues.zipCode}
          inputPlaceholder="75001"
          onInputChange={changeHandler}
          onInputBlur={errorHandler}
          error={errors.zipCode}
        />
        <FormInput
          id="firstName"
          name="city"
          labelText="Ville"
          type="text"
          isRequired
          disabled
          value={inputValues.city}
          onInputChange={changeHandler}
          onInputBlur={errorHandler}
          error={errors.city}
        />
        <Button type="submit" btnClass="bg-current">
          <Icon name="save" iconClass="white-icon" />
          <span className="separator">&nbsp;</span>
          <span className="button-text">Enregistrer l&apos;événement</span>
        </Button>
      </form>
    </>
  );
}
