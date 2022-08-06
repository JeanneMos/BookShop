import React from "react";

import img from "../../../assets/images/profile-grey.jpg";

export default function DefuntModalImagePlaceholder() {
  return (
    <div className="image-preview-placeholder">
      <span>Photo</span>
      <div className="image-preview">
        <img
          alt=""
          className="image-preview-image"
          width="200"
          height="200"
          src={img}
        />
      </div>
    </div>
  );
}
