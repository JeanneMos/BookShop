import classNames from "classnames";
import React, { useEffect, useState } from "react";

const FormTextarea = React.memo(function FormTextarea({
  id,
  name,
  labelText,
  labelHidden,
  value,
  min,
  max,
  wrapperClass,
  onInputChange,
  onInputBlur,
  inputPlaceholder,
  error,
  isRequired = false,
  disabled = false,
}) {
  const [ariaDescription, setAriaDescription] = useState(null);
  const [caracters, setCaracters] = useState(max);
  useEffect(() => {
    setAriaDescription(`${name}-requirement`);
    if (error) setAriaDescription(`${ariaDescription} error-${id}`);
  }, [error]);

  const handleInputChange = (e) => {
    onInputChange(e);

    if (max) {
      const newCaracters = Number(max) - e.target.value.length;
      setCaracters(newCaracters);
    }
  };
  return (
    <div className={classNames("input-wrapper", wrapperClass)}>
      <label
        htmlFor={id}
        className={classNames("label", {
          "label-error": error,
          "sr-only": labelHidden,
        })}
      >
        {labelText}
      </label>
      <textarea
        id={id}
        name={name}
        className={classNames("textarea", {
          "input-error": error,
        })}
        value={value}
        min={min}
        maxLength={max}
        rows={10}
        disabled={disabled}
        required={isRequired}
        aria-required={isRequired}
        aria-describedby={ariaDescription}
        onChange={handleInputChange}
        onBlur={onInputBlur}
        placeholder={inputPlaceholder || ""}
      />
      {error && (
        <p className="error-message" id={`error-${id}`} aria-live="polite">
          {error}
        </p>
      )}
      {max && (
        <p
          className="message-photo-requirements"
          data-testid="caractersCount"
          id={`${name}-requirement`}
        >
          {caracters} caractères restants.
        </p>
      )}
    </div>
  );
});

export default FormTextarea;
