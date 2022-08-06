import React from "react";

import Loader from "./Loader";

export default function BiographyLoader() {
  return (
    <>
      {/* <div className="loader-title"></div> */}
      <div className="biography-loader-wrapper">
        <div className="loader-biography">
          <div></div>
        </div>
        <Loader position="center" />
      </div>
    </>
  );
}
