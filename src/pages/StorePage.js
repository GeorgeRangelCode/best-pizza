import React, { Fragment } from "react";
import { useGetStoreList } from "../hooks/useGetStoreList";
import { StoreList } from "../components/StoreList";
import "../styles/StorePage.scss";
import { Search } from "../components/Search";

export const StorePage = () => {
  const { storeList } = useGetStoreList();
  return (
    <Fragment>
      <header className="storePage__header">
        <span>Pizzerías</span>
      </header>
      <Search />
      <section className="storePage">
        <h1 className="storePage__title">Tiendas</h1>
        <p className="storePage__subtitle">Escoge tu pizzería favorita</p>
        <StoreList storeList={storeList} />
      </section>
    </Fragment>
  );
};
