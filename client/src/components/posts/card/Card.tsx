import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

const Card = ({ _id, cover, number, title, summary }: any) => {
  return (
    <Link to={`/post/${_id}`} className="card__container">
      <div className="card__left-section">
        <h3 className="card__number">{number}</h3>
        <h2 className="card__title">{title}</h2>
        <h4 className="card__description">{summary}</h4>
      </div>

      <div className="card__right-section">
        <img
          src={`https://bienaventuradas-en-cristo-rest-api.vercel.app/${cover}`}
          alt="card-post"
          className="card__image"
        />
      </div>
    </Link>
  );
};

export default Card;
