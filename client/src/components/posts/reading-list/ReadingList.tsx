import React, { useEffect, useState } from "react";
import "./readingList.scss";

import Card01 from "../../../assets/card-01.png";
import Card02 from "../../../assets/card-02.png";
import Card03 from "../../../assets/card-03.png";
import Card04 from "../../../assets/card-04.png";
import Card05 from "../../../assets/card-05.png";

import ReadingListCard from "./reading-list-card/ReadingListCard";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

const ReadingList = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { t, i18n } = useTranslation();
  return (
    // <div className="reading-list__container">
    //   <div className="reading-list__title">{t("Reading List")}</div>

    //   <Link to="/reading" className="reading-list__grid">
    //     {readingListDataset.map((readingList) => (
    //       <ReadingListCard
    //         image={readingList.image}
    //         title={readingList.title}
    //       />
    //     ))}
    //   </Link>
    // </div>
    <div className="reading-list__container">
      <div className="reading-list__title">{t("Reading List")}</div>

      {windowWidth < 768 ? (
        <Link to="/reading">
          <Slider {...settings} className="reading-list__carousel">
            {readingListDataset.map((readingList) => (
              <ReadingListCard
                image={readingList.image}
                title={readingList.title}
              />
            ))}
          </Slider>
        </Link>
      ) : (
        <Link to="/reading" {...settings} className="reading-list__grid">
          {readingListDataset.map((readingList) => (
            <ReadingListCard
              image={readingList.image}
              title={readingList.title}
            />
          ))}
        </Link>
      )}
    </div>
  );
};

export default ReadingList;
