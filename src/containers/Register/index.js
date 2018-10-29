import React, { Component } from "react";
import { connect } from 'react-redux';
import Form from "./Form";

import './styles.scss';

export default class Register extends Component {

  onSubmit(data) {
    console.log("ON SUBMIT", data);
  }

  render() {
    return(
      <div className='register-container'>
        <Form
          onSubmit = { data => this.onSubmit(data) }
          getLocality = { province_id => this.props.getLocality(province_id) }
          provinces = { this.props.provinces }
          locality = { this.props.locality }
        />
      </div>
    );
  }
}