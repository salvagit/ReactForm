import React, { Component } from "react"
import './styles.scss';

class Input extends Component {
  render() {
    let { input, placeholder, label, type, meta: { touched, error } } = this.props;
    return (
      <div className={["input-container", type].join(" ")}>
        <label>{label}</label>
        <div>
          <input
            onChange={(asd) => {
              input.onChange(asd);
              console.log(this, input, asd)
            }}
            placeholder={placeholder || label}
            type={type}
          />
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    )
  }
}

export default ({ placeholder, label, input, type, meta: { touched, error, valid }, ...inputProps }) => {
  return (
    <div className={["input-container", type].join(" ")}>
      <label>{label}</label>
      <input
        type="text"
        {...inputProps}
        // onChange={input.onChange}
        onChange={ (evt) => input.value = evt.target.value }
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        placeholder={placeholder || label}
      />
      {
        touched && (error &&
          <p style={{ color: "red" }}>{error}</p>)
      }
    </div>
  )
}