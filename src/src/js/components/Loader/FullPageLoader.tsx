import img from "Images/profile-grey.jpg";
import React from "react";

import Loader from "./Loader";

export default function FullPageLoader() {
  return (
    <div className="full-page-loader-wrapper">
      <div className="loader-header">
        <div></div>
        <div></div>
      </div>
      <div className="loader-banner">
        <div className="loader-defunt-photo">
          <img alt="" width="130" height="130" src={img} />
        </div>
      </div>
      <div className="loader-tabs">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Loader position="absolute" />
    </div>
  );
}
