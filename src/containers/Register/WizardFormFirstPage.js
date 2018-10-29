import React from "react"
import { Field, reduxForm } from "redux-form"
import validate from "./validate"
import Input from "../../components/Input"

const WizardFormFirstPage = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit} className='register-form'>
      <Field
        name="name"
        type="text"
        component={Input}
        label="Nombre completo"
      />
      <Field
        name="cuil"
        type="number"
        component={Input}
        label="Nº de CUIL"
        placeholder="Ej,: 23-45678901-2"
      />
      <div className="form-footer flex-end">
        <button type="submit" className="next blue">
          Siguiente
        </button>
      </div>
    </form>
  )
}
export default reduxForm({
  form: "wizard", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFirstPage)
