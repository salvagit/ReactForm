import React from "react";
import { PropTypes } from "prop-types";
import "./styles.scss";

const Dropdown = ({ input, label, options = [], callback, meta: { touched, error }, ...props }) =>
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
          options.map( el =>
            <option key={el.id} value={el.id}>{ el.name }</option>
          )
        }
      </select>

      {
        touched && (error &&
          <p className="input-error">{error}</p>)
      }

    </div>
  </div>;

Dropdown.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  callback: PropTypes.func.isRequired,
  meta: PropTypes.object.isRequired
};

export default Dropdown;