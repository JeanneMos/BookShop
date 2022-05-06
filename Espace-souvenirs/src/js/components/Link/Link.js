import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* import './link.scss'; */

export default function StyledLink({
  children, linkClass, as = 'link', linkTo, target, dataTestid
}) {
  if (as === 'ahref') {
    return (
      <a href={linkTo} target={target} data-testid={dataTestid} className={linkClass}>{children}</a>
    );
  }

  return (
    <Link to={linkTo} className={linkClass}>{children}</Link>
  );
}

StyledLink.defaultProps = {
  linkClass: null,
};
StyledLink.propTypes = {
  children: PropTypes.node.isRequired,
  linkClass: PropTypes.string,
};
