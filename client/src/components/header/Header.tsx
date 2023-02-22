import React from "react";
import "./header.scss";
import { useTranslation } from "react-i18next";

const Header = ({ title, description }: any) => {
  const { t } = useTranslation();

  return (
    <div className="header__container">
      <h1 className="header__title">{t(title)}</h1>
      <h2 className="header__subtitle">{t(description)}</h2>
    </div>
  );
};

export default Header;
