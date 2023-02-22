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
      <p className="footer__main">
        &copy; 2023 - Desarrollado con
        <img
          src={HeartIcon}
          alt="Hearth Icon"
          className="footer__heart--icon"
        />
        por<span className="footer__title--bold">Tomi Rodeghiero</span>
      </p>
    </div>
  );
};

export default Footer;
