import React from "react"
import { Field, reduxForm } from "redux-form"
import validate from "./validate"
import Input from "../../components/Input"
import Dropdown from "../../components/Dropdown"

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit} className='register-form'>

      <div className="row">
        <div className="col col-8">
          <Field
            name="street"
            type="text"
            component={Input}
            label="Calle"
            placeholder="Ej.: Av. de Mayo"
          />
        </div>
        <div className="col col-4">
          <Field
            name="streetNumber"
            type="text"
            component={Input}
            label="Número"
            placeholder="Ej.: 3651"
          />
        </div>
      </div>

      <div className="row">
        <div className="col col-6">
          <Field
            name="province"
            component={Dropdown}
            label="Provincia"
          >
            <option>a</option>
            <option>b</option>
            <option>c</option>
          </Field>
            {/* <Field name="sex" component={renderError} /> */}
        </div>
      
        <div className="col col-6">
          <Field
            name="locality"
            component={Dropdown}
            label="Localidad"
          >
            <option>a</option>
            <option>b</option>
            <option>c</option>
          </Field>
            {/* <Field name="sex" component={renderError} /> */}
        </div>
      </div>

      <div className="form-footer">
        <button type="button" className="previous" onClick={previousPage}>
          Atrás
        </button>
        <button type="submit" className="next blue">
          Siguiente
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
})(WizardFormSecondPage)
