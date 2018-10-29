import React, { Component } from "react"
import './styles.scss';

export default ({ placeholder, label, input, type, meta: { touched, error, valid }, ...inputProps }) =>
  <div className={["input-container", type].join(" ")}>
    <label for={input.name}>{label}</label>
    <div>
      <input
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
  </div>