import React from "react";

import Loader from "./Loader";

export default function MessagesLoader() {
  return (
    <>
      {/* <div className="loader-title"></div> */}
      <div className="messages-loader-wrapper">
        <div className="loader-messages">
          <div></div>
          <div></div>
        </div>
        <Loader position="center" />
      </div>
    </>
  );
}
