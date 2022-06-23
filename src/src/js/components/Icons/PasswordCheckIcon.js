import classNames from "classnames";
import React from "react";

import Icon from "./Icon";

const passwordErrors = {
  patternNumber: "Il manque un chiffre",
  patternLength: "Le mot de passe n'est pas assez long",
  patternMaj: "Il manque une majuscule",
  patternSpecialChar: "Il manque un caractère spécial",
};

export default function PasswordCheckIcon({ isValid, error }) {
  return (
    <span>
      <Icon
        name={isValid ? "check" : "cross"}
        iconClass={classNames(
          "password-validation-icon",
          isValid ? "green" : "red",
        )}
      ></Icon>
      {error && <span className="sr-only">{passwordErrors[error]}</span>}
    </span>
  );
}
