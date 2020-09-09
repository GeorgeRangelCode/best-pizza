import React from "react";
import "../styles/Footer.scss";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import bestPizza from "../assets/images/Best_Pizza.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <img width="20" src={facebook} alt="facebook" />
        <img width="20" src={instagram} alt="instagram" />
      </div>
      <div className="footer__logo">
        <img width="20" src={bestPizza} alt="Best Pizza" />
      </div>
    </footer>
  );
};
