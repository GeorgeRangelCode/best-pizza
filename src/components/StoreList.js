import React from "react";
import "../styles/StoreList.scss";
import { Store } from "./Store";

export const StoreList = ({ storeList }) => {
  return (
    <section className="store__list">
      {storeList.map((store) => (
        <Store
          key={store.id}
          name={store.name}
          address={store.address}
          id={store.id}
        />
      ))}
    </section>
  );
};
