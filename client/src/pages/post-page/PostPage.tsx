import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import { useParams } from "react-router-dom";
import MobileNavbar from "../../components/mobile-navbar/MobileNavbar";
import Navbar from "../../components/navbar/Navbar";
import "./postPage.scss";
import Community from "../../components/community/Community";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useTranslation } from "react-i18next";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState<any>(null);
  const { userInfo } = useContext(UserContext);
  const { t } = useTranslation();
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://blog-v1-digf.onrender.com/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  console.log("post info", postInfo);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!postInfo) return null;

  return (
    <main>
      {windowWidth < 992 ? <MobileNavbar /> : <Navbar />}

      <Header
        title={postInfo.title}
        description={postInfo.summary}
        author={postInfo.author.username}
        createdAt={postInfo.createdAt}
      />

      <div className="post-page__container">
        <h5 className="post-page__pathname">
          {t("Inicio")} - {t("Lista de Lecturas")} -&nbsp;
          <span className="post-page__pathname--bold">{postInfo.title}</span>
        </h5>
        <div>
          <img
            src={`https://blog-v1-digf.onrender.com/${postInfo.cover}`}
            alt="Main Image"
            className="post-page__cover"
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postInfo.content }}></div>
      </div>

      <Community />
      <Footer />
    </main>
  );
};

export default PostPage;
