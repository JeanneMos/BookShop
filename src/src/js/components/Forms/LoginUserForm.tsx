import React, {
  MutableRefObject,
  RefObject,
  useContext,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { forgotPassword, postUserUrl, wrongCredentials } from "../../constants";
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
import { loginUserValidationValues } from "./FormValidationValues";

interface IInitialFormState {
  username: string;
  password: string;
}

const initialFormState: IInitialFormState = {
  username: "",
  password: "",
};

interface IState {
  administrator: {
    isAdmin: boolean;
  };
  modal: { isOpen: boolean };
}

interface IEvent {
  target: {
    [x: string]: string;
  };
}
interface IUseForm {
  inputValues: {
    username: string;
    password: string;
  };
  changeHandler: (e: IEvent) => void;
  errorHandler: (e: IEvent) => void;
  submitErrorsHandler: (fields: string[]) => void;
  errors?: {
    username?: string;
    password?: string;
  };
  isValid: boolean;
}

export default function LoginUserForm() {
  const params = useParams();
  const [isLoader, setIsLoader] = useState(false);
  const [wrongCredentialsMessage, setWrongCredentialsMessage] = useState<
    string | null
  >(null);
  const administratorState = useSelector(
    (state: IState) => state.administrator,
  );
  const modalState = useSelector((state: IState) => state.modal);
  const dispatch = useDispatch();
  const {
    inputValues,
    changeHandler,
    errorHandler,
    submitErrorsHandler,
    errors,
    isValid,
  }: IUseForm = useForm({
    initialFormState,
    validationValues: loginUserValidationValues,
  });
  const form = useRef<HTMLFormElement | null>(null);

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
          ([key, value]) =>
            loginUserValidationValues[key].isRequired && value === "",
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
              onSuccess: ({ data }) => {
                // check if data is not object.
                if (typeof data === "string") {
                  setWrongCredentialsMessage(wrongCredentials);
                } else {
                  setWrongCredentialsMessage(null);
                  const {
                    field_user_civility,
                    field_user_surname,
                    field_user_name,
                    field_user_email,
                    field_user_phone,
                    user_gp_entity,
                  } = data;
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
                  if (getMainAdminESEntities(user_gp_entity).length && params) {
                    dispatch(
                      isAdminSet({
                        isAdmin: getMainAdminESEntities(
                          user_gp_entity,
                        ).includes(params.espaceId),
                      }),
                    );
                  }
                  if (modalState.isOpen) dispatch(modalClosed());
                  if (administratorState.isAdmin) window.location.reload();
                }
              },
              onError: () => {
                setWrongCredentialsMessage(wrongCredentials);
              },
              onSettled: () => {
                setIsLoader(false);
              },
            },
          );
        } catch (err) {
          setIsLoader(false);
          setWrongCredentialsMessage(null);
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
          {`${forgotPassword}?`}
        </Button>
      </form>
    </>
  );
}
