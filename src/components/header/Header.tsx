import React from "react";
import "./header.scss";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="header__container">
      <h1 className="header__title">{t("Evangelization")}</h1>
      <h2 className="header__subtitle">{t("Subtitle of Evangelization")}</h2>
    </div>
  );
};

export default Header;
