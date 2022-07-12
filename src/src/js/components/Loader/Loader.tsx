import classNames from "classnames";
import React from "react";

import LoaderIcon from "../../../assets/svg/loader.svg";

const Icon = React.lazy(
  () => import(/* webpackChunkName: "Icons" */ "../Icons/Icon"),
);

export default function Loader({ position = "right" }) {
  return (
    <span className={classNames("loader", position)}>
      <React.Suspense fallback={<LoaderIcon />}>
        <Icon name="loader" iconClass="current-icon" />
      </React.Suspense>
      <span className="sr-only">Chargement de la page</span>
    </span>
  );
}
