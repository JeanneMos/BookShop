import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";

import { userLoggedIn, isAdminSet } from "../../context/userSlice";
import { currentAdministratorSet } from "../../context/administratorSlice";
import { modalClosed } from "../../context/modalSlice";
import usePostQuery from "../../services/usePostQuery";
import useForm from "../../services/useForm";
import { postUserUrl } from "../../constants";
import { getMainAdminESEntities } from "../../services/getGestionnairePrincipalES";

import FormInput from "./FormInput";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import Loader from "../Loader/Loader";

/* import './forms.scss'; */

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
  const userState = useSelector((state) => state.user);
  const modalState = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const {
    inputValues,
    changeHandler,
    errorHandler,
    submitErrorsHandler,
    errors,
    isValid,
  } = useForm({ initialFormState, validationValues });
  const form = useRef(null);

  const postUser = usePostQuery();

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
        e.preventDefault();
        const user_obj = {
          username: inputValues.username,
          password: inputValues.password,
        };
        try {
          setIsLoader(true);
          postUser.mutate(
            { data: user_obj, postApiUrl: postUserUrl },
            {
              onSuccess: async (data) => {
                // const token = await axios.get('/session/token');
                if (!data.data.code) {
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
                  Cookies.set("userInfo", JSON.stringify(user), {
                    expires: 24,
                  });
                  dispatch(userLoggedIn({ isLogged: true }));
                  dispatch(currentAdministratorSet({ administrator: user }));
                  if (getMainAdminESEntities().length && params) {
                    dispatch(
                      isAdminSet({
                        isAdmin: getMainAdminESEntities().includes(
                          params.espaceId,
                        ),
                      }),
                    );
                  }
                  setIsLoader(false);
                  if (modalState.isOpen) dispatch(modalClosed());
                  if (userState.isAdmin) window.location.reload();
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

        /*
        .then(
            axios.get('/session/token')
          .then(res => {
            console.log("session tocken", res)
            })
          )
          .catch(function (error) {
            console.error(error);
          }); */
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
          labelText="Identifiant"
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
        <a href="/user/password" className="forgot-password-link">
          Mot de pass oublié?
        </a>
      </form>
    </>
  );
}
