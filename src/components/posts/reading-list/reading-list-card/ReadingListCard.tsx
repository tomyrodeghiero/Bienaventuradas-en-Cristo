import React from "react";
import "./readingListCard.scss";

const ReadingListCard = ({ image, title }: any) => {
  return (
    <div className="reading-list__grid-item">
      <img src={image} alt="card-image" className="card__image" />
      <h3 className="reading-list__grid-item--title">{title}</h3>
    </div>
  );
};

export default ReadingListCard;
