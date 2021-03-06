import React from "react";
import { Field, reduxForm } from "redux-form";
import { PropTypes } from "prop-types";
import validate from "../validate";
import Input from "../../../components/Input";
import MaskedInput from "../../../components/MaskedInput";

const FirstPage = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className="register-form">
      <Field
        name="name"
        type="text"
        component={Input}
        label="Nombre completo"
      />
      <Field
        name="cuil"
        mask={[/[1-9]/, /\d/, "-", /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/]}
        component={MaskedInput}
        label="Nº de CUIL"
        placeholder="Ej,: 23-45678901-2"
      />
      <div className="form-footer flex-end">
        <button type="submit" className="next blue">
          Siguiente
        </button>
      </div>
    </form>
  );
};

FirstPage.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: "register-form", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(FirstPage);
