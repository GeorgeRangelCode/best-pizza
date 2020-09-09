import React from "react";
import "../styles/Search.scss";

export const Search = () => {
  return (
    <section className="search">
      <h2 className="search__title">¿Qué quieres buscar hoy?</h2>
      <input type="text" className="search__input" placeholder="Buscar..." />
    </section>
  );
};
