import React from "react";
import classNames from "classnames";
import Icon from "../Icons/Icon";
/* import './loader.scss'; */

export default function Loader({ position = "right" }) {
  return (
    <span className={classNames("loader", position)}>
      <Icon name="loader" iconClass="current-icon" />
      <span className="sr-only">Chargement de la page</span>
    </span>
  );
}
