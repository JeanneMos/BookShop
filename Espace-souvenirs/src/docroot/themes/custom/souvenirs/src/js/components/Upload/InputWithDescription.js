import React from "react";
import classNames from "classnames";
import Icon from "../Icons/Icon";

export default function InputWithDescription({
  inputName,
  handleCompressedUpload,
  hasImageRequirement,
  btnClass,
  inputDisabled = false,
  describedBy,
}) {
  return (
    <div className="input-file-wrapper">
      <input
        accept="image/png, image/jpeg, image/jpg"
        type="file"
        id={inputName}
        name={inputName}
        onChange={handleCompressedUpload}
        disabled={inputDisabled}
        aria-describedby={`input-file-description ${describedBy}`}
      />
      <label
        htmlFor={inputName}
        className={classNames("file-input-label", btnClass)}
      >
        <Icon
          name="upload"
          iconClass={
            btnClass && btnClass === "bg-current"
              ? "white-icon"
              : "current-icon"
          }
        />
        <span className="separator">&nbsp;</span>
        Déposer votre photo
      </label>
      {hasImageRequirement && (
        <p id="input-file-description" className="input-file-description">
          Les formats supportés : PNG/JPG/JPEG/BMP - 2 Mo maximum
        </p>
      )}
    </div>
  );
}
