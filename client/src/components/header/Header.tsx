import React from "react";
import "./header.scss";
import { useTranslation } from "react-i18next";
import Administrator from "../../assets/administrator.jpeg";

const Header = ({ title, description, author, createdAt }: any) => {
  const { t } = useTranslation();

  function formatDate(originalDate: any) {
    // Convertir la cadena de fecha a un objeto Date
    const date = new Date(originalDate);

    // Obtener el día del mes y agregar un cero al inicio si es menor que 10
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

    // Obtener el nombre completo del mes
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    const month = months[date.getMonth()];

    // Obtener el año
    const year = date.getFullYear();

    console.log("day", day, month, year);

    // Retornar la fecha formateada
    return `${day} de ${month} del ${year}`;
  }

  return (
    <div className="header__container">
      <h1 className="header__title">{t(title)}</h1>
      <h2 className="header__subtitle">{t(description)}</h2>

      {author && (
        <div className="header__author">
          <img
            src={Administrator}
            className="administrator__img"
            alt="Administrator"
          />
          <div className="header-content__author">
            Escrito por &nbsp;<span style={{ color: "black" }}>{author}</span>
            &nbsp;el&nbsp;
            <span style={{ color: "black" }}>{formatDate(createdAt)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
