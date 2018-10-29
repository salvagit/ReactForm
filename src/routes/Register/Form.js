import React, { Component } from "react";
import { PropTypes } from "prop-types";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import Steps from "../../components/Steps";

class RegisterForm extends Component {

  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div className='form-container'>
        <div className="form-header">
          <h2>Registro</h2>
          <Steps page={page} />
        </div>
        {page === 1 && <FirstPage onSubmit={this.nextPage} />}
        {page === 2 &&
          <SecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
            provinces={this.props.provinces}
            getLocality={this.props.getLocality}
            locality={this.props.locality}
          />
        }
        {page === 3 && <ThirdPage previousPage={this.previousPage} onSubmit={onSubmit} />}
      </div>
    );
  }
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  getLocality: PropTypes.func.isRequired,
  locality: PropTypes.array.isRequired,
  provinces: PropTypes.array.isRequired
};

export default RegisterForm;