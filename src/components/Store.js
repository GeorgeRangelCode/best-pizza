import React from "react";
import panosPizza from "../assets/images/Panos_pizza.png";
import pizzeriaCamion from "../assets/images/pizzeria_camion.png";
import sbarro from "../assets/images/Sbarro.png";
import strollerPizza from "../assets/images/stroller_pizza.png";
import trulli from "../assets/images/trulli.png";
import "../styles/Store.scss";
import { Link } from "react-router-dom";

export const Store = ({ name, address, id }) => {
  return (
    <article className="store">
      <Link to={`/detail/${id}`}>
        {name === "Pizzeria Capitan America" && (
          <img src={panosPizza} alt="Under the Dome" />
        )}
        {name === "Pizzeria Iron Man" && (
          <img src={pizzeriaCamion} alt="Under the Dome" />
        )}
        {name === "Pizzeria Thor" && <img src={sbarro} alt="Under the Dome" />}
        {name === "Pizzeria Black Widow" && (
          <img src={strollerPizza} alt="Under the Dome" />
        )}
        {name === "Pizzeria Spider Man" && (
          <img src={trulli} alt="Under the Dome" />
        )}
        <h2 className="store__name">{name}</h2>
        <p className="store__address">{address}</p>
      </Link>
    </article>
  );
};
