import React from "react";
import "./footer.scss";

import Pinterest from "../../assets/pinterest.png";
import Instagram from "../../assets/instagram.png";
import Twitter from "../../assets/twitter.png";
import Facebook from "../../assets/facebook.png";

import HeartIcon from "../../assets/heart.png";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__social--links">
        <img src={Pinterest} alt="pinterest" className="footer__social--icon" />
        <img src={Instagram} alt="instagram" className="footer__social--icon" />
        <img src={Twitter} alt="twitter" className="footer__social--icon" />
        <img src={Facebook} alt="facebook" className="footer__social--icon" />
      </div>

      <p className="footer__main">
        Desarrollado con
        <img
          src={HeartIcon}
          alt="Hearth Icon"
          className="footer__heart--icon"
        />
        por<span className="footer__title--bold">Tomi Rodeghiero</span>
      </p>

      <div className="footer__copyright">
        Todos los Derechos Reservados - &copy; 2023
      </div>
    </div>
  );
};

export default Footer;
