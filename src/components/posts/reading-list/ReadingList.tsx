import React from "react";
import "./readingList.scss";

import Card01 from "../../../assets/card-01.png";
import Card02 from "../../../assets/card-02.png";
import Card03 from "../../../assets/card-03.png";
import Card04 from "../../../assets/card-04.png";
import Card05 from "../../../assets/card-05.png";

import ReadingListCard from "./reading-list-card/ReadingListCard";
import { Link } from "react-router-dom";

const readingListDataset = [
  {
    image: Card01,
    title: "Iglesias Sanas",
  },
  {
    image: Card02,
    title: "Apologética",
  },
  {
    image: Card03,
    title: "Teología",
  },
  {
    image: Card04,
    title: "Vida Cristiana",
  },
  {
    image: Card05,
    title: "Evangelización",
  },
];

const ReadingList = () => {
  return (
    <div className="reading-list__container">
      <div className="reading-list__title">Lista de lecturas</div>

      <Link to="/reading" className="reading-list__grid">
        {readingListDataset.map((readingList) => (
          <ReadingListCard
            image={readingList.image}
            title={readingList.title}
          />
        ))}
      </Link>
    </div>
  );
};

export default ReadingList;
