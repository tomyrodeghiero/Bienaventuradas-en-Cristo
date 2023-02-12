import React, { useState } from "react";
import "./hero.scss";

import BienaventuradasEnCristo_logotype from "../../assets/BienaventuradasEnCristo_logotype.png";
import SpainFlag from "../../assets/spain.png";
import EnglishFlag from "../../assets/great-britain.png";
import Post01 from "../../assets/post-01.png";
import Search from "../../assets/search.png";
import News from "../news/News";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(navigator.language);

  return (
    <div className="hero__container">
      <div className="left-section">
        <div className="navbar__items">
          <img
            src={BienaventuradasEnCristo_logotype}
            alt="BienaventuradasEnCristo_logotype"
            className="logotype"
          />
          <div className="navbar__inner__container">
            <div className="navbar__links">
              <div className="navbar__link--active">{t("Home")}</div>
              <div className="navbar__link">Temas</div>
              <div className="navbar__link">Suscribirse</div>
            </div>

            <img
              src={language === "en" ? EnglishFlag : SpainFlag}
              className="flag"
              alt="flag"
              onClick={() =>
                language === "en" ? setLanguage("es") : setLanguage("en")
              }
            />
          </div>
        </div>

        <div className="post__image__container">
          <img src={Post01} className="post__image" alt="post" />
        </div>
      </div>

      <div className="right-section">
        <div className="search__container">
          <img src={Search} className="search" alt="search" />
        </div>

        <News />
      </div>
    </div>
  );
};

export default Hero;
