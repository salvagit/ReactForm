import React from "react";
import { PropTypes } from "prop-types";
import MaskedInput from "react-text-mask";
import "./styles.scss";

const Input = ({ placeholder, label, input, type, meta: { touched, error, valid }, ...inputProps }) =>
  <div className={["input-container", type].join(" ")}>
    <label htmlFor={input.name}>{label}</label>
    <div>
      <MaskedInput
        id={input.name}
        {...inputProps}
        value={input.value}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        onChange={input.onChange}
        placeholder={placeholder || label}
        type={type}
      />

      {
        touched && (error &&
          <p className="input-error">{error}</p>)
      }

    </div>
  </div>;

Input.propTypes = {
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired
};

export default Input;