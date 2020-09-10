import React, { useContext } from "react";
import Context from "../Context";
import { Store } from "../components/Store";
import { Header } from "../components/Header";
import { Redirect } from "react-router-dom";
import "../styles/StoreDetail.scss";
import panos from "../assets/images/panos_pizza_1.png";
import trulli from "../assets/images/trulli_pizza.png";
import stroller from "../assets/images/stroller_pizza_1.png";
import sbarro from "../assets/images/sbarro_pizza.png";
import camion from "../assets/images/pizzeria_camion_pizza.png";
import vogliadipizza from "../assets/images/vogliadipizza_pizza.png";

export const StoreDetail = ({ location }) => {
  const id = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  );

  const { storeList } = useContext(Context);

  const storeDetail = storeList.find((store) => store.id == id);

  if (typeof storeDetail === "undefined") {
    return <Redirect to="/store" />;
  }

  return (
    <div>
      <Header />
      <Store
        id={storeDetail.id}
        name={storeDetail.name}
        address={storeDetail.address}
      />
      <div className="container mt-2">
        <h4>Productos</h4>
        <ul className="list-group">
          {storeDetail.products.map((product) => (
            <li key={product.id} className="list-group-item">
              {product.name === "Pizza de Pollo" && (
                <img src={panos} alt="panos" className="product__image" />
              )}
              {product.name === "Piza Pollo y Champiñones" && (
                <img src={trulli} alt="trulli" className="product__image" />
              )}
              {product.name === "Pizza Vegetales" && (
                <img src={stroller} alt="stroller" className="product__image" />
              )}
              {product.name === "Pizza Vegetales y Atun " && (
                <img src={sbarro} alt="sbarro" className="product__image" />
              )}
              {product.name === "Pizza 3 Quesos con Champiñones" && (
                <img src={camion} alt="camion" className="product__image" />
              )}
              {product.name === "Pizza Jamon y Queso" && (
                <img
                  src={vogliadipizza}
                  alt="vogliadipizza"
                  className="product__image"
                />
              )}
              {product.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
