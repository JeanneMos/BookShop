import React from "react";
import img from "Images/profile-grey.jpg";
import { useSelector } from "react-redux";

export default function ImagePlaceholder() {
  const userState = useSelector((state) => state.user);

  const userImage = userState?.defuntImage ? userState.defuntImage.url : img;
  return (
    <div className="image-preview-placeholder">
      <span>Photo</span>
      <div className="image-preview">
        <img
          alt=""
          className="image-preview-image"
          width="200"
          height="200"
          src={userImage}
        />
      </div>
    </div>
  );
}
