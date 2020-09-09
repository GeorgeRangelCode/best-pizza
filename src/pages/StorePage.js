import React, { Fragment } from "react";
import { useGetStoreList } from "../hooks/useGetStoreList";
import { StoreList } from "../components/StoreList";
import "../styles/StorePage.scss";
import { Search } from "../components/Search";
import { Status } from "../components/Status";
import { useLoginForm } from "../hooks/useLoginForm";
import { useHistory } from "react-router-dom";

import closeSession from "../assets/images/ic_contrase§a.png";

export const StorePage = () => {
  const {
    loading,
    query,
    storeList,
    storeSearch,
    handleSearch,
  } = useGetStoreList();

  let history = useHistory();
  const { handleCloseSession } = useLoginForm({ history });

  const storeData = query === "" ? storeList : storeSearch;

  return (
    <Fragment>
      <header className="storePage__header">
        <span>Pizzerías</span>

        <button className="close__session" onClick={handleCloseSession}>
          <img src={closeSession} alt="salir" width="20" />
          Salir
        </button>
      </header>
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
