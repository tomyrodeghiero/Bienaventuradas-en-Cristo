import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./readingScreen.scss";
import { useTranslation } from "react-i18next";

import Read01 from "../../assets/read-01.png";
import Read02 from "../../assets/read-02.png";
import ReadingPost from "../../components/readingPost/readingPost";
import Community from "../../components/community/Community";
import Footer from "../../components/footer/Footer";

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

  return (
    <main>
      <Navbar />
      <Header />

      <div className="reading__container">
        <h5 className="posts__pathname">
          {t("Home")} - {t("Reading list")} - {t("Posts")} -
          <span className="posts__pathname--bold"> {t("Reading")}</span>
        </h5>

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

        <div className="load-more__container">
          <button className="load-more__btn">{t("Load more")}</button>
        </div>
      </div>

      <Community />
      <Footer />
    </main>
  );
};

export default ReadingScreen;
