import React from "react";
import "../styles/Search.scss";

export const Search = ({ handleSearch }) => {
  return (
    <section className="search">
      <input
        onChange={handleSearch}
        type="text"
        className="search__input"
        placeholder="Buscar pizzería..."
      />
    </section>
  );
};
