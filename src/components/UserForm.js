import React from "react";
import "../styles/UserForm.scss";
import loginBestPizza from "../assets/images/Login-Best-Pizza.png";

export const UserForm = () => {
  return (
    <div className="wrapper__form">
      <div className="wrapper__form--brand">
        <img src={loginBestPizza} alt="logo" className="logo" />
        <h1 className="title">Bienvenido</h1>
        <p className="subtitle">A las mejores pizzas del pais</p>
      </div>
    </div>
  );
};
