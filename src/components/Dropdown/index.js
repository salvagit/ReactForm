import React from "react";
import "./styles.scss";

export default ({ input, label, options = [], callback, meta: { touched, error }, ...props }) =>
  <div className="dropdown-container" >
    <label>{label}</label>
    <div>
      <select
        {...input}
        placeholder={label}
        onChange = { evt => {
          if( "function" === typeof callback) callback(evt.target.value);
          return input.onChange(evt);
        }}
      >
        <option value="-1">Seleccionar</option>
        {
          options.length &&
          options.map( el => <option value={el.id}>{ el.name }</option> )
        }
      </select>

      {
        touched && (error &&
          <p className="input-error">{error}</p>)
      }

    </div>
  </div>