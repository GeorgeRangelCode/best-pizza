import React, { useContext } from "react";
import Context from "../Context";
import { Store } from "../components/Store";
import { Redirect } from "react-router-dom";
import panosPizza from "../assets/images/Panos_pizza.png";
import "../styles/StoreDetail.scss";
import { Header } from "../components/Header";

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
              <img
                src={panosPizza}
                alt="Under the Dome"
                className="product__image"
              />
              {product.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
