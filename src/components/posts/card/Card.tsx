import React from "react";
import "./card.scss";

const Card = ({ number, title, description, image }: any) => {
  return (
    <div className="card__container">
      <div className="card__left-section">
        <h3 className="card__number">{number}</h3>
        <h2 className="card__title">{title}</h2>
        <h4 className="card__description">{description}</h4>
      </div>

      <div className="card__right-section">
        <img src={image} alt="card-post" className="card__image" />
      </div>
    </div>
  );
};

export default Card;
