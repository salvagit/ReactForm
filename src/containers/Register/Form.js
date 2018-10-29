import React, { Component } from "react";
import { PropTypes } from "prop-types";
import WizardFormFirstPage from "./WizardFormFirstPage"
import WizardFormSecondPage from "./WizardFormSecondPage"
import WizardFormThirdPage from "./WizardFormThirdPage"
import Steps from '../../components/Steps';

class WizardForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (
      <div className='form-container'>
        <div className="form-header">
          <h2>Registro</h2>
          <Steps page={page} />
        </div>
        {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
        {page === 2 &&
          <WizardFormSecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
            provinces={this.props.provinces}
            getLocality={this.props.getLocality}
            locality={this.props.locality}
          />
        }
        {page === 3 && <WizardFormThirdPage previousPage={this.previousPage} onSubmit={onSubmit} />}
      </div>
    )
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default WizardForm