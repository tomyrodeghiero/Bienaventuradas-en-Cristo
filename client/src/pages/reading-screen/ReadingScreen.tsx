import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./readingScreen.scss";
import { useTranslation } from "react-i18next";

import Read01 from "../../assets/read-01.png";
import Read02 from "../../assets/read-02.png";
import Community from "../../components/community/Community";
import Footer from "../../components/footer/Footer";
import ReadingPost from "../../components/readingPost/ReadingPost";

import Icon01 from "../../assets/icons/icon-01.png";
import Icon02 from "../../assets/icons/icon-02.png";
import Icon03 from "../../assets/icons/icon-03.png";
import Icon04 from "../../assets/icons/icon-04.png";
import Icon05 from "../../assets/icons/icon-05.png";
import Icon06 from "../../assets/icons/icon-06.png";
import Icon07 from "../../assets/icons/icon-07.png";
import Icon08 from "../../assets/icons/icon-08.png";
import { Link } from "react-router-dom";
import MobileNavbar from "../../components/mobile-navbar/MobileNavbar";
import { NOTEBOOK } from "../../utils";

const readingScreenDataset = [
  {
    author: "Rocío Juncos",
    title: "Evangelizing properly: fundental aspects of Evangelism",
    description:
      "Tips for the Evangelization process. which undoubtely be of great help to carry out this fantastic way.",
    image: Read01,
  },
  {
    author: "Rocío Juncos",
    title: "Sowing the field with the Good Seed every day in this world",
    description:
      "How Blessed we are that our Lord Jesus allows us to do so! Always ready to sow.",
    image: Read02,
  },
];

const ReadingScreen = () => {
  const { t } = useTranslation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main>
      {windowWidth < NOTEBOOK ? <MobileNavbar /> : <Navbar />}
      <Header title="Evangelization" description="Subtitle of Evangelization" />

      <h5 className="posts__pathname">
        {t("Home")} - {t("Reading list")} - {t("Posts")} -
        <span className="posts__pathname--bold"> {t("Reading")}</span>
      </h5>

      <div className="reading__container">
        <div className="reading-posts__grid">
          {readingScreenDataset.map((post) => (
            <ReadingPost
              author={post.author}
              title={post.title}
              description={post.description}
              image={post.image}
            />
          ))}
        </div>
      </div>

      <Community />
      <Footer />
    </main>
  );
};

export default ReadingScreen;
