import React from "react";
import "./styles.scss";
import check from "./check.svg";

const Home = () =>
  <div className="home-container">
    <img src = { check } />
    <h2>¡Te registraste exitosamente!</h2>
  </div>;

export default Home;
