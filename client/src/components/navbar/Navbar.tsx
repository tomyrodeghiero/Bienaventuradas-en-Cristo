import React, { useState } from "react";
import "./navbar.scss";

import BienaventuradasEnCristo_logotype from "../../assets/BienaventuradasEnCristo_logotype.png";
import SpainFlag from "../../assets/spain.png";
import EnglishFlag from "../../assets/great-britain.png";
import Search from "../../assets/search.png";
import i18next, { t } from "i18next";
import { Link, useLocation } from "react-router-dom";
import Administrator from "../../assets/administrator.png";

const Navbar = () => {
  const [language, setLanguage] = useState(i18next.language);

  const changeLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en";
    setLanguage(newLanguage);
    i18next.changeLanguage(newLanguage);
  };

  const NavLink = ({ to, children }: any) => {
    const location = useLocation();
    console.log(location.pathname);
    console.log("to", to);
    return (
      <Link
        to={to}
        className={
          location.pathname === to ? "navbar__link--active" : "navbar__link"
        }
      >
        {children}
      </Link>
    );
  };

  return (
    <div className="navbar__container">
      <div className="left-section__container">
        <div className="navbar__items--content">
          <NavLink to="/">
            <img
              src={BienaventuradasEnCristo_logotype}
              alt="BienaventuradasEnCristo_logotype"
              className="logotype"
            />
          </NavLink>

          <div className="navbar__inner__container">
            <div className="navbar__links">
              <NavLink to="/">
                <h2
                  className="link"
                  style={
                    location.pathname === "/"
                      ? { color: "white" }
                      : { fontWeight: "400" }
                  }
                >
                  {t("Home")}
                </h2>
              </NavLink>
              <NavLink to="/topics">
                <h2
                  className="link"
                  style={
                    location.pathname === "/topics"
                      ? { color: "white" }
                      : { fontWeight: 500 }
                  }
                >
                  {t("Topics")}
                </h2>
              </NavLink>
              <a className="navbar__link" href="#subscribe">
                <h2
                  className="link"
                  style={
                    location.pathname === "/subscribe"
                      ? { color: "white" }
                      : { fontWeight: "400" }
                  }
                >
                  {t("Subscribe")}
                </h2>
              </a>
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
        <div className="administrator__container">
          <img
            src={Administrator}
            className="administrator__img"
            alt="Administrator"
          />
          <p className="administrator__text">Rocío Juncos</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
