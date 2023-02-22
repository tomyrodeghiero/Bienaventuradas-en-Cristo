import React from "react";
import "./mainCard.scss";

const MainCard = ({ icon, title, description }: any) => {
  return (
    <div className="main-card__container">
      <div className="main-card__header">
        <img src={icon} alt="Main Card - Icon" className="main-card__icon" />
        <h2 className="main-card__title">{title}</h2>
      </div>

      <p className="main-card__description">{description}</p>
    </div>
  );
};

export default MainCard;
