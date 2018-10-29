import React from "react";
import Form from "./Form";

import './styles.scss';

export default () =>
<div className='register-container'>
  <Form
    onSubmit = { (data) => {
      console.log("ON SUBMIT", data)
    } }
  />
</div>