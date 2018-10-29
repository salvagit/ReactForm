import React from "react";
import { connect } from 'react-redux';
import Form from "./Form";
import { register } from '../../actions/register.action';

import './styles.scss';

const Register = ({register, getLocality, provinces, locality }) =>
  <div className='register-container'>
    <Form
      onSubmit = { data => register(data) }
      getLocality = { province_id => getLocality(province_id) }
      provinces = { provinces }
      locality = { locality }
    />
  </div>

const mapStateTopProps = state => ({
  registerData: state.register.data
});

const mapDispatchTopProps = dispatch => ({
  register: data => dispatch(register(data))
});

export default connect(mapStateTopProps, mapDispatchTopProps)(Register);