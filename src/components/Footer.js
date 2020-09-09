import React from "react";
import "../styles/Footer.scss";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import bestPizza from "../assets/images/Best_Pizza.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a href="https://www.facebook.com/diarioMUY/">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/muyrestaurantecol/">
          <img src={instagram} alt="instagram" />
        </a>
      </div>
      <div className="footer__logo">
        <img width="50" src={bestPizza} alt="Best Pizza" />
      </div>
    </footer>
  );
};
