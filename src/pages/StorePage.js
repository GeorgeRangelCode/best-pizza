import React, { Fragment } from "react";
import { useGetStoreList } from "../hooks/useGetStoreList";
import { StoreList } from "../components/StoreList";
import "../styles/StorePage.scss";
import { Search } from "../components/Search";
import { Status } from "../components/Status";
import { Header } from "../components/Header";

export const StorePage = () => {
  const {
    loading,
    query,
    storeList,
    storeSearch,
    handleSearch,
  } = useGetStoreList();

  const storeData = query === "" ? storeList : storeSearch;

  return (
    <Fragment>
      <Header />
      <Search handleSearch={handleSearch} />
      <section className="storePage">
        <h1 className="storePage__title">Tiendas</h1>
        <p className="storePage__subtitle">Escoge tu pizzería favorita</p>
        {loading ? (
          <Status title="Cargando..." />
        ) : storeData.length > 0 ? (
          <StoreList storeList={storeData} />
        ) : (
          <Status title="No hay registros" />
        )}
      </section>
    </Fragment>
  );
};
