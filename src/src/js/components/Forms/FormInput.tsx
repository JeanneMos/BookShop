import classNames from "classnames";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import Icon from "../Icons/Icon";

interface IFormInput {
  id: string;
  name: string;
  labelText: string;
  imageName?: string;
  labelImage?: string;
  type: string;
  value: string;
  min?: number;
  max?: number;
  checked?: boolean;
  inputClass?: string;
  wrapperClass?: string;
  onInputChange: (e) => void;
  onInputBlur: (e) => void;
  inputPlaceholder?: string;
  ariaDescription?: string;
  error?: string;
  autocomplete?: string;
  isRequired?: boolean;
  displayErrorMessage?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
}

const FormInput = React.memo(function FormInput({
  id,
  name,
  imageName,
  labelText,
  labelImage,
  type,
  value,
  autocomplete,
  min,
  max,
  inputClass,
  checked = false,
  wrapperClass,
  onInputChange,
  onInputBlur,
  inputPlaceholder,
  error,
  displayErrorMessage = true,
  isRequired,
  disabled,
  readOnly = false,
  ariaDescription,
}: IFormInput) {
  const svgString = encodeURIComponent(
    renderToStaticMarkup(
      <Icon name="cross-red" iconClass="input-error-icon" />,
    ),
  );
  const dataUri = `url("data:image/svg+xml,${svgString}")`;
  const optionalInput = !isRequired && (
    <span className="optional-label">&nbsp;(facultatif)</span>
  );
  return (
    <div className={classNames("input-wrapper", wrapperClass)}>
      {!labelImage && type !== "checkbox" && (
        <label
          htmlFor={id}
          className={classNames("label", {
            "label-error": error,
          })}
        >
          {labelText}
          {optionalInput}
        </label>
      )}
      <input
        id={id}
        type={type}
        name={name}
        readOnly={readOnly}
        data-imagename={imageName}
        className={classNames("input", inputClass, {
          "input-error": error,
        })}
        style={{
          backgroundImage: error ? dataUri : "none",
        }}
        value={value}
        min={min}
        disabled={disabled}
        required={isRequired}
        aria-required={isRequired}
        aria-describedby={
          error ? `error-${id} ${ariaDescription}` : ariaDescription
        }
        maxLength={max && max}
        onChange={onInputChange}
        onBlur={onInputBlur}
        autoComplete={autocomplete}
        checked={type === "radio" && checked && checked}
        placeholder={inputPlaceholder || ""}
      />
      {/* Si type = radio avec image comme label */}
      {labelImage && (
        <label
          htmlFor={id}
          className={classNames("label", {
            "label-error": error,
          })}
        >
          <img src={labelImage} className="label-image" alt="" width="150" />
        </label>
      )}
      {/* Si type = checkbox sans images */}
      {type === "checkbox" && (
        <label
          htmlFor={id}
          className={classNames("label", {
            "label-error": error,
          })}
        >
          {labelText}
        </label>
      )}
      {error && displayErrorMessage && (
        <p className="error-message" id={`error-${id}`} aria-live="polite">
          {error}
        </p>
      )}
    </div>
  );
});

export default FormInput;
