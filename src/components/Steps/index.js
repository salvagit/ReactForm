import React from "react";
import "./styles.scss";

export default ({page}) =>
  <div class="container">
    <ul class="progressbar">
      <li className={ 1 <= page ? "active" : ""}></li>
      <li className={ 2 <= page ? "active" : ""}></li>
      <li className={ 3 <= page ? "active" : ""}></li>
    </ul>
  </div>