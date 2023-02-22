import { useEffect, useRef, useState } from "react";
import "./mobileNavbar.scss";

import SpainFlag from "../../assets/spain.png";
import EnglishFlag from "../../assets/great-britain.png";
import BienaventuradasEnCristo_logotype from "../../assets/BienaventuradasEnCristo_logotype.png";
import BlessedInChrist_logotype from "../../assets/BienaventuradasEnCristo_logotype.png";
import i18next from "i18next";
import { useLocation } from "react-router-dom";

const MobileNavbar = () => {
  const [language, setLanguage] = useState(i18next.language);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<any>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en";
    setLanguage(newLanguage);
    i18next.changeLanguage(newLanguage);
  };

  useEffect(() => {
    const handleDocumentClick = (event: any) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const location = useLocation(); // Obtener la ruta actual

  return (
    <main style={{ position: "relative" }}>
      <nav className="mobile-navbar__container" role="navigation" ref={navRef}>
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={handleClick}
        >
          <span />
          <span />
          <span />
        </div>

        <img
          src={
            i18next.language === "en"
              ? BlessedInChrist_logotype
              : BienaventuradasEnCristo_logotype
          }
          className="mobile-navbar__logotype"
          alt="Flag"
          onClick={changeLanguage}
        />
        <img
          src={i18next.language === "en" ? EnglishFlag : SpainFlag}
          className="mobile-navbar__flag"
          alt="Flag"
          onClick={changeLanguage}
        />
      </nav>

      <div className={`mobile-sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a
              href="/"
              className={
                location.pathname === "/"
                  ? "mobile-navbar__active"
                  : "mobile-navbar__inactive"
              }
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/topics"
              className={
                location.pathname === "/topics" ||
                location.pathname === "/reading"
                  ? "mobile-navbar__active"
                  : "mobile-navbar__inactive"
              }
            >
              Topics
            </a>
          </li>
          <li>
            <a
              href="#subscribe"
              className={
                location.pathname === "/subscribe"
                  ? "mobile-navbar__active"
                  : "mobile-navbar__inactive"
              }
            >
              Subscribe
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default MobileNavbar;
