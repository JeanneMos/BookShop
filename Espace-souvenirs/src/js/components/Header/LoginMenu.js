import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icons/Icon';
/* import './logMenu.scss'; */

export default function LoginMenu({ handleLogIn }) {
  return (
    <button type="button" onClick={handleLogIn} data-testid="loginMenu" className="dropdown-toggle">
      <Icon name="user" iconClass="user-icon" />
      <span className="user-login-connexion">Se connecter</span>
    </button>
  );
}

LoginMenu.propTypes = {
  handleLogIn: PropTypes.func.isRequired,
};
