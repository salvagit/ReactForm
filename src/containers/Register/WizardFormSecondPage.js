import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"
import validate from "./validate"
import Input from "../../components/Input"
import ProvinceLocality from "../../components/ProvinceLocality";

class WizardFormSecondPage extends Component {

  render() {
    let { handleSubmit, previousPage } = this.props;
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

        <ProvinceLocality />

        <div className="form-footer">
          <button type="button" className="previous" onClick={previousPage}>
            Atrás
        </button>
          <button type="submit" className="next blue">
            Siguiente
        </button>
        </div>
      </form>

    );
  }
}

export default reduxForm({
  form: "wizard", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormSecondPage);
