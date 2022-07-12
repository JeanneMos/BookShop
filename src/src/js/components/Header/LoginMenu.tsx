import React from "react";

import Icon from "../Icons/Icon";

export default function LoginMenu({ handleLogIn }) {
  return (
    <button
      type="button"
      onClick={handleLogIn}
      data-testid="loginMenu"
      className="dropdown-toggle"
    >
      <Icon name="user" iconClass="user-icon" />
      <span className="user-login-connexion">Se connecter</span>
    </button>
  );
}
