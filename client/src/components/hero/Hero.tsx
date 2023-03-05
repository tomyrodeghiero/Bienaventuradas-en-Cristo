import React, { useContext, useEffect, useState } from "react";
import "./hero.scss";
import "../news/news.scss";

import BienaventuradasEnCristo_logotype from "../../assets/BienaventuradasEnCristo_logotype.png";
import SpainFlag from "../../assets/spain.png";
import EnglishFlag from "../../assets/great-britain.png";
import Post01 from "../../assets/post-01.png";
import Search from "../../assets/search.png";
import Administrator from "../../assets/administrator.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import MobileNavbar from "../mobile-navbar/MobileNavbar";
import UserContext from "../../context/UserContext";
import Navbar from "../navbar/Navbar";
import { NOTEBOOK } from "../../utils";
import NewPost from "../news/new-post/NewPost";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(navigator.language);
  const { userInfo } = useContext(UserContext);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    fetch("https://blog-v1-digf.onrender.com/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);

  let postsUpgrade: any = [];
  if (posts) {
    postsUpgrade = posts.map(({ _id, title, createdAt, cover }: any) => ({
      _id,
      title,
      createdAt,
      cover,
    }));
  }

  console.log("postsUpgrade", postsUpgrade);

  const handleSelection = (index: number) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  if (!postsUpgrade) return null;

  return (
    <main>
      {windowWidth < NOTEBOOK ? <MobileNavbar /> : <Navbar />}
      <div className="hero__content">
        <div className="post__image__container">
          <img src={Post01} className="post__image" alt="post" />
        </div>

        <div className="news__container">
          <div className="news__title__container">
            <h2 className="news__title__text">
              Embelleciendo nuestro interior
            </h2>
            <h3 className="see_entries__text">Recomendaciones Cristianas</h3>
          </div>

          {postsUpgrade.map((post: any, index: number) => (
            <NewPost
              date={post.createdAt}
              title={post.title}
              selected={selectedIndex === index}
              onSelection={() => handleSelection(index)}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Hero;
