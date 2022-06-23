import React from "react";

import PasswordCheckIcon from "../Icons/PasswordCheckIcon";
import FormInput from "./FormInput";

export default function NewPasswordFieldset({
  inputValues,
  changeHandler,
  errorHandler,
  errors,
  includeCurrentPassword = false,
  requiredNewPassword = false,
}) {
  const isIncorrectValue = (pattern) => {
    if (inputValues.new_password === "") {
      return null;
    }
    if (!errors?.new_password || errors?.new_password?.length === 0)
      return <PasswordCheckIcon isValid={true} />;

    return (
      <PasswordCheckIcon
        isValid={!errors.new_password.includes(pattern)}
        error={errors.new_password.includes(pattern) && pattern}
      />
    );
  };

  const handleNewPassword = (e) => {
    errorHandler(e);
    changeHandler(e);
  };
  return (
    <>
      {includeCurrentPassword && (
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
      )}
      <FormInput
        id="new_password"
        name="new_password"
        labelText="Nouveau mot de passe"
        type="password"
        autocomplete="new-password"
        value={inputValues.new_password}
        inputPlaceholder="Nouveau mot de passe"
        onInputChange={handleNewPassword}
        onInputBlur={errorHandler}
        displayErrorMessage={false}
        isRequired={requiredNewPassword}
        error={errors.new_password}
        ariaDescription="new_password_requirement"
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
        isRequired={requiredNewPassword}
        error={errors.repeat_new_password}
      />
      <span className="sr-only" id="new_password_requirement">
        l faut un minimum de 8 caractères avec au moins une majuscule, un
        chiffre et un caractère spécial.
      </span>
      <p
        className="password-check"
        aria-live="polite"
        id="error-new_password"
        aria-relevant="additions"
      >
        <span aria-hidden="true">Il faut un minimum de </span>
        <span className="password-check-item">
          <span aria-hidden="true">8 caractères avec au moins</span>{" "}
          {isIncorrectValue("patternLength")}
        </span>
        <span className="password-check-item">
          <span aria-hidden="true">1 majuscule</span>{" "}
          {isIncorrectValue("patternMaj")}
        </span>
        <span className="password-check-item">
          <span aria-hidden="true">1 chiffre</span>{" "}
          {isIncorrectValue("patternNumber")}
        </span>
        <span className="password-check-item">
          <span aria-hidden="true">1 caractère spécial</span>{" "}
          {isIncorrectValue("patternSpecialChar")}
        </span>
      </p>
    </>
  );
}
