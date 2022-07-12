import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { postUserUrl } from "../../constants";
import {
  currentUserSet,
  isAdminSet,
  userLoggedIn,
} from "../../context/administratorSlice";
import { modalClosed, modalOpened } from "../../context/modalSlice";
import { getMainAdminESEntities } from "../../services/getGestionnairePrincipalES";
import useForm from "../../services/useForm";
import usePostQuery from "../../services/usePostQuery";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import Loader from "../Loader/Loader";
import FormInput from "./FormInput";

const initialFormState = {
  username: "",
  password: "",
};

const validationValues = {
  username: {
    pattern: {
      value: /^([^<>()[\],"])+$/,
      message: "Merci de renseigner votre identifiant",
    },
    isRequired: true,
    required: "Merci de renseigner votre identifiant",
  },
  password: {
    isRequired: true,
    required: "Merci de renseigner votre mot de passe",
  },
};
export default function LoginUserForm() {
  const params = useParams();
  const [isLoader, setIsLoader] = useState(false);
  const [wrongCredentialsMessage, setWrongCredentialsMessage] = useState(null);
  const administratorState = useSelector((state) => state.administrator);
  const modalState = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const {
    inputValues,
    changeHandler,
    errorHandler,
    submitErrorsHandler,
    errors,
    isValid,
  } = useForm({
    initialFormState,
    validationValues,
  });
  const form = useRef(null);

  const postUser = usePostQuery();

  const openForgotPasswordPopin = () => {
    dispatch(modalClosed());
    dispatch(
      modalOpened({
        theme: "dark",
        hasCloseButton: true,
        modalType: "ForgotPasswordModal",
      }),
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const arrayOfErrors = Object.keys(errors);

    if (arrayOfErrors.length === 0) {
      const emptyFields = Object.entries(inputValues)
        .filter(
          ([key, value]) => validationValues[key].isRequired && value === "",
        )
        .map(([key]) => key);

      if (emptyFields.length) {
        submitErrorsHandler(emptyFields);
      } else {
        const user_obj = {
          username: inputValues.username,
          password: inputValues.password,
        };
        try {
          setIsLoader(true);
          postUser.mutate(
            { data: user_obj, apiUrl: postUserUrl },
            {
              onSuccess: async (data) => {
                // const token = await axios.get('/session/token');
                if (!data.data.code) {
                  // check if data is not object.
                  if (typeof data.data === "string") {
                    setWrongCredentialsMessage(
                      "Merci de vérifier vos identifiants",
                    );
                    setIsLoader(false);
                  } else {
                    setWrongCredentialsMessage(null);
                    const {
                      field_user_civility,
                      field_user_surname,
                      field_user_name,
                      field_user_email,
                      field_user_phone,
                      user_gp_entity,
                    } = data.data;
                    const user = {
                      isLogged: true,
                      lastName: field_user_surname,
                      firstName: field_user_name,
                      email: field_user_email,
                      phone: field_user_phone,
                      civility: field_user_civility,
                      gp_entities: user_gp_entity,
                    };
                    dispatch(userLoggedIn());
                    dispatch(currentUserSet({ user }));
                    if (
                      getMainAdminESEntities(user_gp_entity).length &&
                      params
                    ) {
                      dispatch(
                        isAdminSet({
                          isAdmin: getMainAdminESEntities(
                            user_gp_entity,
                          ).includes(params.espaceId),
                        }),
                      );
                    }
                    setIsLoader(false);
                    if (modalState.isOpen) dispatch(modalClosed());
                    if (administratorState.isAdmin) window.location.reload();
                  }
                } else {
                  setWrongCredentialsMessage(
                    "Merci de vérifier vos identifiants",
                  );
                  setIsLoader(false);
                }
              },
              onError: () => {
                setIsLoader(false);
                setWrongCredentialsMessage(
                  "Merci de vérifier vos identifiants",
                );
              },
            },
          );
        } catch (err) {
          setIsLoader(false);
          setWrongCredentialsMessage(null);
          console.error(err);
        }
      }
    }
  };

  return (
    <>
      <p className="wrong-credentials-message">{wrongCredentialsMessage}</p>
      <form ref={form} noValidate id="user-login-form" onSubmit={handleSubmit}>
        <FormInput
          id="username"
          name="username"
          labelText="E-mail"
          type="text"
          autocomplete="username"
          value={inputValues.username}
          onInputChange={changeHandler}
          onInputBlur={errorHandler}
          error={errors.username}
          isRequired
        />
        <FormInput
          id="password"
          name="password"
          labelText="Mot de passe"
          type="password"
          autocomplete="current-password"
          value={inputValues.password}
          onInputChange={changeHandler}
          onInputBlur={errorHandler}
          error={errors.password}
          isRequired
        />
        <input type="hidden" name="form_id" value="user_login_form" />
        <input type="hidden" name="op" value="se connecter" />
        <div className="button-loader-wrapper">
          <Button type="submit" btnClass="bg-current center">
            <span className="button-text">Se connecter</span>
            <span className="separator">&nbsp;</span>
            <Icon name="next" iconClass="white-icon" />
          </Button>
          {isLoader && <Loader />}
        </div>
        <Button
          btnClass="forgot-password-link bg-transparent center"
          onClickAction={openForgotPasswordPopin}
        >
          Mot de passe oublié?
        </Button>
      </form>
    </>
  );
}