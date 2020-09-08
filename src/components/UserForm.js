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
      <div className="wrapper__form--brand">
        <form>
          <div className="input">
            <div className="input-container">
              <input type="text" placeholder="Usuario" />
              <i className="user-icon"></i>
            </div>
          </div>
          <div className="input">
            <div className="input-container">
              <input type="text" placeholder="Contraseña" />
              <i className="pass-icon"></i>
            </div>
          </div>
          <a href="/" className="forgot__password">
            ¿Olvidaste tu contraseña?
          </a>
          <button className="login__button">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
};
