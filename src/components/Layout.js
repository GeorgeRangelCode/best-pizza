import React from "react";
import "../styles/Layout.scss";
import pizzaImage from "../assets/images/Pizza.png";

export const Layout = ({ children }) => {
  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-5 px-0 d-none d-sm-block">
            <div className="layout">
              <img
                src={pizzaImage}
                alt="imagen de pizza"
                className="layout__img"
                width="200"
              />
            </div>
          </div>
          <div className="col-sm-7  layout__section">{children}</div>
        </div>
      </div>
    </main>
  );
};
