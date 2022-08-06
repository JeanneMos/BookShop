import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postUserUpdateUrl } from "../../constants";
import ButtonsWrapper from "../../layouts/ButtonsWrapper";
import {
  administratorPersonalInfoModified,
  currentUserSet,
} from "../../providers/administratorSlice";
import { espaceAdministratorUpdated } from "../../providers/globalInfoSlice";
import scrollSmoothToElement from "../../services/scrollSmoothToElement";
import useForm from "../../services/useForm";
import usePostQuery from "../../services/usePostQuery";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import Loader from "../Loader/Loader";
import FormInput from "./FormInput";
import { administratorValidationValues } from "./FormValidationValues";
import NewPasswordFieldset from "./NewPasswordFieldset";

export default function AdministratorPersonalInfoForm({ closeForm, heading }) {
  const administratorState = useSelector((state) => state.administrator);
  const globalInfoState = useSelector((state) => state.globalInfo);
  const dispatch = useDispatch();
  const [networkError, setNetworkError] = useState("");
  const [isLoader, setIsLoader] = useState(false);
  const networkErrorMessage = useRef(null);

  const initialFormState = {
    surname: administratorState.currentUser?.lastName?.toUpperCase() || "",
    name: administratorState.currentUser?.firstName || "",
    phone: administratorState.currentUser?.phone || "",
    email: administratorState.currentUser?.email || "",
    current_password: "",
    new_password: "",
    repeat_new_password: "",
  };
  const {
    inputValues,
    changeHandler,
    errorHandler,
    submitErrorsHandler,
    errors,
    isValid,
  } = useForm({
    initialFormState,
    validationValues: administratorValidationValues,
  });

  const updatePersonalInfo = usePostQuery();
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
            administratorValidationValues[key].isRequired && value === "",
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
          surname: inputValues.surname,
          name: inputValues.name,
          phone: inputValues.phone,
          mail: administratorState.currentUser?.email,
          brand: globalInfoState?.marque?.name || "pfg",
          current_password: inputValues.current_password,
          new_password: inputValues.new_password,
          repeat_new_password: inputValues.repeat_new_password,
        };
        try {
          setIsLoader(true);
          updatePersonalInfo.mutate(
            { data: infos_obj, apiUrl: postUserUpdateUrl },
            {
              onSuccess: ({ data }) => {
                if (data?.status && data?.status === 200) {
                  const {
                    field_user_surname: lastName,
                    field_user_name: firstName,
                    field_user_phone: phone,
                  } = data;
                  const updatedUserInfo = {
                    ...administratorState?.currentUser,
                    lastName,
                    firstName,
                    phone,
                  };

                  dispatch(currentUserSet({ user: updatedUserInfo }));
                  if (administratorState.isAdmin) {
                    dispatch(
                      espaceAdministratorUpdated({
                        firstName: updatedUserInfo.firstName,
                        lastName: updatedUserInfo.lastName,
                      }),
                    );
                  }
                  dispatch(
                    administratorPersonalInfoModified({
                      isEditingPersonalInfo: false,
                      isEditingAdministator: true,
                    }),
                  );
                  closeForm({ userUpdated: true });
                } else {
                  setIsLoader(false);
                  setNetworkError(
                    "Une erreur s'est produite. Veuillez reprendre ultérieurement.",
                  );
                  networkErrorMessage?.current &&
                    scrollSmoothToElement(networkErrorMessage.current);
                }
              },
              onError: () => {
                setIsLoader(false);
                setNetworkError(
                  "Une erreur s'est produite. Veuillez reprendre ultérieurement.",
                );
                networkErrorMessage?.current &&
                  scrollSmoothToElement(networkErrorMessage.current);
              },
            },
          );
        } catch {
          // Something went wrong
          setIsLoader(false);
          setNetworkError(
            "Une erreur s'est produite. Veuillez reprendre ultérieurement.",
          );
          networkErrorMessage?.current &&
            scrollSmoothToElement(networkErrorMessage.current);
        }
      }
    }
  };

  const handleCloseForm = () => {
    dispatch(
      administratorPersonalInfoModified({
        isEditingPersonalInfo: false,
        isEditingAdministator: true,
      }),
    );
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
        Modification des informations personnelles
      </h2>
      {!isValid && (
        <p className="sr-only" tabIndex={-1} ref={hiddenGlobalError}>
          Merci de corriger les erreurs
        </p>
      )}
      <form noValidate onSubmit={handleSubmit} className="personal-info-form">
        <fieldset aria-describedby="personal-info">
          <p className="fieldset-description" id="personal-info">
            Coordonnées
          </p>
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
            labelText="Je souhaite être alerté des évènements privés ajoutés dans cet Espace Hommage"
          />
        </fieldset>
        <fieldset aria-describedby="password-info" className="mt-30">
          <p className="fieldset-description" id="password-info">
            Mot de passe
          </p>
          <NewPasswordFieldset
            includeCurrentPassword={true}
            inputValues={inputValues}
            changeHandler={changeHandler}
            errorHandler={errorHandler}
            errors={errors}
          />
        </fieldset>
        <ButtonsWrapper position="right" btnWrapperClass="mt-30">
          <Button
            type="button"
            btnClass="bg-transparent"
            onClickAction={handleCloseForm}
          >
            Annuler
          </Button>
          <div className="button-loader-wrapper">
            <Button
              type="submit"
              btnClass="bg-current"
              dataTestid="submitInfosForm"
            >
              <span className="button-text">Entregistrer</span>
            </Button>
            {isLoader && <Loader position="relative" />}
          </div>
        </ButtonsWrapper>
      </form>
    </>
  );
}
