import React, { useState } from "react";

interface IEvent {
  target: {
    [x: string]: string;
  };
}

export default function useForm({ initialFormState, validationValues }) {
  const [inputValues, setValues] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  /** on vérifie au onBlur si le pattern correspond à la saisie,
   * si ce n'est pas le cas, retourne le message d'erreur, sinon on retourne null  */
  const getError = (target) => {
    if (target.value !== "") {
      const { pattern } = validationValues[target.name];
      const { patterns } = validationValues[target.name];
      if (pattern?.value && !RegExp(pattern.value).test(target.value)) {
        return pattern?.message;
      }
      if (patterns) {
        const arrayOfPatterns = patterns.map((pattern) => {
          if (pattern.value && !RegExp(pattern.value).test(target.value)) {
            return pattern.name;
          }
        });
        const noNullValues = arrayOfPatterns.filter((value) => !!value);
        if (noNullValues.length) {
          return noNullValues;
        } else {
          return null;
        }
      }
      return null;
    }
    if (target.getAttribute("required") !== null && target.value === "") {
      const { required } = validationValues[target.name];
      return required;
    }
    return null;
  };

  const changeHandler = (e: IEvent) => {
    const newValues = { ...inputValues, [e.target.name]: e.target.value };
    if (!getError(e.target)) {
      if (Object.prototype.hasOwnProperty.call(errors, e.target.name)) {
        const { [e.target.name]: newProp, ...rest }: { [key: string]: string } =
          errors;
        setErrors(rest);
      }
    }
    if (Object.keys(errors).length === 0) setIsValid(true);
    setValues(newValues);
  };

  const errorHandler = ({ target }) => {
    let newErrors = {};
    if (getError(target)) {
      setIsValid(false);
      newErrors = { ...errors, [target.name]: getError(target) };
    } else {
      newErrors = { ...errors };
    }
    setErrors(newErrors);
  };

  const submitErrorsHandler = (fields) => {
    const newErrors = {};
    let requiredMessage = null;
    fields.forEach((field) => {
      if (field.requiredMessage) {
        requiredMessage = field.requiredMessage;
      } else {
        requiredMessage = validationValues[field]?.required;
      }
      !field.requiredMessage
        ? (newErrors[field] = requiredMessage)
        : (newErrors[field.name] = requiredMessage);
    });
    setIsValid(false);
    setErrors(newErrors);
  };

  return {
    inputValues,
    changeHandler,
    errorHandler,
    submitErrorsHandler,
    errors,
    isValid,
  };
}
