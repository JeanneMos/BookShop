import img from "Images/profile-grey.jpg";
import React from "react";

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
