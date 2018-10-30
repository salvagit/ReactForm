import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { PropTypes } from "prop-types";
import validate from "../validate";
import Input from "../../../components/Input";

class ThirdPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showPass: true
    };
  }

  showPass = () => this.setState({ showPass: !this.state.showPass });

  render() {
    const { handleSubmit, pristine, previousPage, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit} className='register-form'>
        <Field
          name="email"
          type="text"
          component={Input}
          label="E-mail"
          placeholder="Ingresá tu dirección de correo"
        />
        <Field
          name="password"
          type = { this.state.showPass ? "password" : "text" }
          component={Input}
          label="Contraseña"
          placeholder="Debe ser alfanumérica de al menos 8 caracteres"
        />
        <Field
          name="showPassword"
          type="checkbox"
          component={Input}
          label="Mostrar Contraseña"
          onClick={ () => this.showPass() }
        />
        <div className="form-footer">
          <button type="button" className="previous" onClick={previousPage}>
            Atrás
          </button>
          <button type="submit" disabled={pristine || submitting} className="blue">
            Finalizar
          </button>
        </div>
      </form>
    );
  }
}

ThirdPage.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  pristine: PropTypes.object.isRequired,
};

export default reduxForm({
  form: "register-form", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(ThirdPage);