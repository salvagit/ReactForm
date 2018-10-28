import React from "react"
import { Field, reduxForm } from "redux-form"
import validate from "./validate"
import Input from "../../components/Input"

const WizardFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props
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
        type="password"
        component={Input}
        label="Contraseña"
        placeholder="Debe ser alfanumérica de al menos 8 caracteres"
      />
      <Field
        name="showPassword"
        type="checkbox"
        component={Input}
        label="Mostrar Contraseña"
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
  )
}
export default reduxForm({
  form: "wizard", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormThirdPage)
