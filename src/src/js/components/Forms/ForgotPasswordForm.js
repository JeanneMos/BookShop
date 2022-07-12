import React, { useRef, useState } from "react";

import { errorMessageNetwork, postResetPasswordUrl } from "../../constants";
import useForm from "../../services/useForm";
import usePostQuery from "../../services/usePostQuery";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import Loader from "../Loader/Loader";
import FormInput from "./FormInput";
import { forgotPasswordVlidationValues } from "./FormValidationValues";

const initialFormState = {
  email: "",
};

export default function ForgotPasswordForm({ handleConfirmationMessage }) {
  const [isLoader, setIsLoader] = useState(false);
  const form = useRef(null);
  const [wrongCredentialsMessage, setWrongCredentialsMessage] = useState(null);
  const postResetPassword = usePostQuery();
  const {
    inputValues,
    changeHandler,
    errorHandler,
    submitErrorsHandler,
    errors,
    isValid,
  } = useForm({
    initialFormState,
    validationValues: forgotPasswordVlidationValues,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const arrayOfErrors = Object.keys(errors);

    if (arrayOfErrors.length === 0) {
      const emptyFields = Object.entries(inputValues)
        .filter(
          ([key, value]) =>
            forgotPasswordVlidationValues[key].isRequired && value === "",
        )
        .map(([key]) => key);

      if (emptyFields.length) {
        submitErrorsHandler(emptyFields);
      } else {
        const user_obj = {
          email: inputValues.email,
        };
        try {
          setIsLoader(true);
          postResetPassword.mutate(
            { data: user_obj, apiUrl: postResetPasswordUrl },
            {
              onSuccess: async ({ data }) => {
                if (data?.status === 200) {
                  // check if data is not object.
                  if (typeof data === "string") {
                    setWrongCredentialsMessage("Merci de vérifier votre email");
                    setIsLoader(false);
                  } else {
                    setWrongCredentialsMessage(null);
                    setIsLoader(false);
                    handleConfirmationMessage();
                  }
                } else if (data?.status === 500) {
                  setWrongCredentialsMessage("Merci de vérifier votre email");
                  setIsLoader(false);
                } else {
                  setIsLoader(false);
                  setWrongCredentialsMessage(errorMessageNetwork);
                }
              },
              onError: () => {
                setIsLoader(false);
                setWrongCredentialsMessage(errorMessageNetwork);
              },
            },
          );
        } catch (err) {
          setIsLoader(false);
          setWrongCredentialsMessage(errorMessageNetwork);
        }
      }
    }
  };

  return (
    <>
      {wrongCredentialsMessage && (
        <p className="wrong-credentials-message">{wrongCredentialsMessage}</p>
      )}
      <form ref={form} noValidate id="user-login-form" onSubmit={handleSubmit}>
        <FormInput
          id="email"
          name="email"
          labelText="E-mail"
          type="text"
          autocomplete="email"
          value={inputValues.email}
          onInputChange={changeHandler}
          onInputBlur={errorHandler}
          error={errors.email}
          isRequired
        />
        <input type="hidden" name="form_id" value="user_login_form" />
        <input type="hidden" name="op" value="se connecter" />
        <p>
          Saisissez votre email afin de recevoir un nouveau mot de passe qui
          vous permettra de vous connecter à Votre Espace Hommage.
        </p>
        <p>
          Par la suite, vous serez invité à le modifier pout vos prochaines
          connexions.
        </p>
        <div className="button-loader-wrapper">
          <Button type="submit" btnClass="bg-current center">
            <span className="button-text">Envoyer</span>
            <span className="separator">&nbsp;</span>
            <Icon name="next" iconClass="white-icon" />
          </Button>
          {isLoader && <Loader />}
        </div>
      </form>
    </>
  );
}
