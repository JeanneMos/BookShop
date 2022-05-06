import React from 'react';
import classNames from 'classnames';
import { renderToStaticMarkup } from 'react-dom/server';
import Icon from '../Icons/Icon';

const FormInput = React.memo(function FormInput({
  id, name, imageName, labelText, labelImage, type, value, autocomplete, min, max, checked,inputClass, wrapperClass, onInputChange, onInputBlur, inputPlaceholder, error, isRequired, disabled, readOnly=false
}) {
  const svgString = encodeURIComponent(renderToStaticMarkup(<Icon name="cross-red" iconClass="input-error-icon" />));
  const dataUri = `url("data:image/svg+xml,${svgString}")`;
  const optionalInput = !isRequired && (<span className="optional-label">&nbsp;(facultatif)</span>);
  return (
    <div className={classNames('input-wrapper', wrapperClass)}>
      {/* Si type = text */}
      {!labelImage && type !== "checkbox" && (
        <label
          htmlFor={id}
          className={classNames('label', {
            'label-error': error,
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
        className={classNames('input', {
          'input-error': error,
          inputClass
        })}
        style={{
          backgroundImage: error ? dataUri : 'none',
        }}
        value={value}
        min={min}
        autoComplete={autocomplete ? autocomplete : null}
        maxLength={max ? max : null}
        disabled={disabled}
        required={isRequired}
        aria-required={isRequired}
        aria-describedby={error && `error-${id}`}
        onChange={onInputChange}
        onBlur={onInputBlur}
        checked={type === 'radio' ? checked : null}
        placeholder={inputPlaceholder || ''}
      />
      {/* Si type = radio avec image comme label */}
      {labelImage && (
        <label
          htmlFor={id}
          className={classNames('label', {
            'label-error': error,
          })}
        >
          <img src={labelImage} className="label-image" alt="" width="150" />
        </label>
      )}
      {/* Si type = checkbox sans images */}
      {type === "checkbox" && (
        <label
          htmlFor={id}
          className={classNames('label', {
            'label-error': error,
          })}
        >
          {labelText}
        </label>
      )}
      {error && <p className="error-message" id={`error-${id}`} aria-live="polite">{error}</p>}
    </div>
  );
});

export default FormInput;
