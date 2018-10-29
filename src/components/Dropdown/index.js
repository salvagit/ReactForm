import React from "react";
import "./styles.scss";

export default ({ input, label, children, meta: { touched, error } }) =>
  <div className="dropdown-container" >
    <label>{label}</label>
    <div>
      <select {...input} placeholder={label}>
        { children }
      </select>

      {
        touched && (error &&
          <p className="input-error">{error}</p>)
      }

    </div>
  </div>