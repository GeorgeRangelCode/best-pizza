import React, { useContext } from "react";
import Context from "../Context";
import { Store } from "../components/Store";
import { Redirect } from "react-router-dom";
import panosPizza from "../assets/images/Panos_pizza.png";
import "../styles/StoreDetail.scss";

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
      <Store
        id={storeDetail.id}
        name={storeDetail.name}
        address={storeDetail.address}
      />
      <div class="container mt-2">
        <h4>Productos</h4>
        <ul class="list-group">
          {storeDetail.products.map((product) => (
            <li key={product.id} class="list-group-item">
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
