import React from "react";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import loginBestPizza from "../assets/images/Login-Best-Pizza.png";
import { LoginSchema } from "../schema/LoginSchema";
import { useLoginForm } from "../hooks/useLoginForm";
import { useHistory } from "react-router-dom";
import "../styles/UserForm.scss";

export const UserForm = () => {
  let history = useHistory();
  const { onSubmit } = useLoginForm({ history });

  return (
    <div className="wrapper__form">
      <div className="wrapper__form--brand">
        <img src={loginBestPizza} alt="logo" className="logo" />
        <h1 className="title">Bienvenido</h1>
        <p className="subtitle">A las mejores pizzas del pais</p>
      </div>
      <div className="wrapper__form--brand">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <div className="input">
                <div className="input-container">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Usuario"
                    autoComplete="off"
                  />
                  <i className="user-icon"></i>
                </div>
              </div>
              {errors.email && touched.email ? (
                <small className="form-text text-danger mb-2">
                  {errors.email}
                </small>
              ) : null}
              <div className="input">
                <div className="input-container">
                  <Field
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    autoComplete="off"
                  />
                  <i className="pass-icon"></i>
                </div>
              </div>
              {errors.password && touched.password ? (
                <small className="form-text text-danger mb-2">
                  {errors.password}
                </small>
              ) : null}

              <Link to="/" className="forgot__password">
                ¿Olvidaste tu contraseña?
              </Link>

              <button
                type="submit"
                className="login__button"
                disabled={isSubmitting}
              >
                Iniciar sesión
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
