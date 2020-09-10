import React from "react";
import { useLoginForm } from "../hooks/useLoginForm";
import { useHistory, Link } from "react-router-dom";
import closeSession from "../assets/images/ic_contrase§a.png";

export const Header = () => {
  let history = useHistory();
  const { handleCloseSession } = useLoginForm({ history });
  return (
    <header className="storePage__header">
      <Link to="/store">
        <span>Pizzerías</span>
      </Link>

      <button className="close__session" onClick={handleCloseSession}>
        <img src={closeSession} alt="salir" width="20" />
        Salir
      </button>
    </header>
  );
};
