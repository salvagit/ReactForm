import React from "react";
import "./styles.scss";

const Steps = ({page}) =>
  <div className="container">
    <ul className="progressbar">
      <li className={ 1 <= page ? "active" : ""}></li>
      <li className={ 2 <= page ? "active" : ""}></li>
      <li className={ 3 <= page ? "active" : ""}></li>
    </ul>
  </div>;

Steps.propTypes = {
  page: PropTypes.number.isRequired
};

export default Steps;