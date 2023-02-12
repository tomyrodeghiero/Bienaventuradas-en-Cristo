import React, { useState } from "react";
import "./navbar.scss";

import BienaventuradasEnCristo_logotype from "../../assets/BienaventuradasEnCristo_logotype.png";
import SpainFlag from "../../assets/spain.png";
import EnglishFlag from "../../assets/great-britain.png";
import Search from "../../assets/search.png";
import i18next, { t } from "i18next";

const Navbar = () => {
  const [language, setLanguage] = useState(i18next.language);

  const changeLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en";
    setLanguage(newLanguage);
    i18next.changeLanguage(newLanguage);
  };

  return (
    <div className="navbar__container">
      <div className="left-section__container">
        <div className="navbar__items--content">
          <img
            src={BienaventuradasEnCristo_logotype}
            alt="BienaventuradasEnCristo_logotype"
            className="logotype"
          />
          <div className="navbar__inner__container">
            <div className="navbar__links">
              <div className="navbar__link--active">{t("Home")}</div>
              <div className="navbar__link">{t("Topics")}</div>
              <div className="navbar__link">{t("Subscribe")}</div>
            </div>

            <img
              src={i18next.language === "en" ? EnglishFlag : SpainFlag}
              className="flag"
              alt="flag"
              onClick={changeLanguage}
            />
          </div>
        </div>
      </div>

      <div className="right-section__container">
        <div className="search__container">
          <img src={Search} className="search" alt="search" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
