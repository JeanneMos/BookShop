import React, { useRef, useState } from "react";

import ButtonsWrapper from "../../layouts/ButtonsWrapper";
import scrollSmoothToElement from "../../services/scrollSmoothToElement";
import useForm from "../../services/useForm";
import usePostQuery from "../../services/usePostQuery";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import { resetPasswordValidationValues } from "./FormValidationValues";
import NewPasswordFieldset from "./NewPasswordFieldset";

const initialFormState = {
  new_password: "",
  repeat_new_password: "",
};

export default function ResetPasswordForm() {
  const [isLoader, setIsLoader] = useState(false);
  const [networkErrorMessage, setNetworkErrorMessage] = useState(null);
  const hiddenGlobalError = useRef();
  const networkError = useRef();
  const resetPassword = usePostQuery();
  const {
    inputValues,
    changeHandler,
    errorHandler,
    submitErrorsHandler,
    errors,
    isValid,
  } = useForm({
    initialFormState,
    validationValues: resetPasswordValidationValues,
  });

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
            resetPasswordValidationValues[key].isRequired && value === "",
        )
        .map(([key]) => key);

      if (emptyFields.length) {
        submitErrorsHandler(emptyFields);
      } else if (
        inputValues.new_password !== "" &&
        inputValues.repeat_new_password === ""
      ) {
        // Check if new password is not empty but confirm new password is empty
        submitErrorsHandler([
          ...emptyFields,
          {
            name: "repeat_new_password",
            requiredMessage: "Merci de confirmer votre mot de passe",
          },
        ]);
      } else if (
        inputValues.new_password !== "" &&
        inputValues.repeat_new_password !== inputValues.new_password
      ) {
        // Check the correspondance between new password and confirm new password
        submitErrorsHandler([
          ...emptyFields,
          {
            name: "repeat_new_password",
            requiredMessage: "Les mots de passes ne sont pas identiques",
          },
        ]);
      } else if (
        inputValues.new_password !== "" &&
        inputValues.current_password === ""
      ) {
        // Check if new password is not empty but current password is empty
        submitErrorsHandler([
          ...emptyFields,
          {
            name: "current_password",
            requiredMessage: "Merci de confirmer votre mot de passe actuel",
          },
        ]);
      } else {
        const infos_obj = {
          new_password: inputValues.new_password,
          repeat_new_password: inputValues.repeat_new_password,
        };
        try {
          setIsLoader(true);

          resetPassword.mutate(
            { data: infos_obj, apiUrl: "///////" },
            {
              /* onSuccess: ({ data }) => {}, */
              onError: () => {
                setIsLoader(false);
              },
            },
          );
        } catch {
          // Something went wrong
          setIsLoader(false);
          setNetworkErrorMessage(
            "Une erreur s'est produite. Veuillez reprendre ultérieurement.",
          );
          networkErrorMessage?.current &&
            scrollSmoothToElement(networkErrorMessage.current);
        }
      }
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit} className="reset-password-form">
      <p>Bienvenue,</p>
      <p>Vous pouvez désormais vous connecter à votre Espace Hommage.</p>
      <p>Personnaliser votre mot de passe pour vos prochaines connexions.</p>
      {networkErrorMessage && (
        <p ref={networkError} className="message-status mb-40">
          <Icon name="cross" iconClass="message-status-icon error-icon" />
          <span>{networkErrorMessage}</span>
        </p>
      )}
      {!isValid && (
        <p className="sr-only" tabIndex={0} ref={hiddenGlobalError}>
          Merci de corriger les erreurs
        </p>
      )}
      <fieldset className="mt-30">
        <NewPasswordFieldset
          inputValues={inputValues}
          changeHandler={changeHandler}
          errorHandler={errorHandler}
          requiredNewPassword={true}
          errors={errors}
        />
      </fieldset>
      <ButtonsWrapper position="mt-30">
        <Button type="submit" btnClass="bg-current">
          <span className="button-text">accéder à l&apos;Espace Hommage</span>
          <span className="separator">&nbsp;</span>
          <Icon name="next" iconClass="white-icon" />
        </Button>
      </ButtonsWrapper>
    </form>
  );
}
