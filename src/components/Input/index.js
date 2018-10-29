import React, { Component } from "react"
import './styles.scss';

export default ({ placeholder, label, input, type, meta: { touched, error, valid }, ...inputProps }) =>
  <div className={["input-container", type].join(" ")}>
    <label>{label}</label>
    <div>
      <input
        {...inputProps}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        onChange={evt => input.value = evt.target.value}
        placeholder={placeholder || label}
        type={type}
      />

      {
        touched && (error &&
          <p className="input-error">{error}</p>)
      }

    </div>
  </div>