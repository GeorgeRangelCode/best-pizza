import React, { Fragment } from "react";
import { useGetStoreList } from "../hooks/useGetStoreList";
import { StoreList } from "../components/StoreList";
import "../styles/StorePage.scss";
import { Footer } from "../components/Footer";

export const StorePage = () => {
  const { loading, error, storeList } = useGetStoreList();
  console.log("Store -> storeList", storeList);
  console.log("Store -> error", error);
  console.log("Store -> loading", loading);
  return (
    <Fragment>
      <header className="storePage__header">
        <span>Pizzerías</span>
      </header>
      <section className="storePage">
        <h1 className="storePage__title">Tiendas</h1>
        <p className="storePage__subtitle">Escoge tu pizzería favorita</p>
        <StoreList storeList={storeList} />
      </section>
      <Footer />
    </Fragment>
  );
};
