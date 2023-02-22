import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import MobileNavbar from "../../components/mobile-navbar/MobileNavbar";
import Navbar from "../../components/navbar/Navbar";
import "./postPage.scss";
import Community from "../../components/community/Community";
import Footer from "../../components/footer/Footer";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState<any>(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
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
      {windowWidth < 576 ? <MobileNavbar /> : <Navbar />}

      <div className="post-page__container">
        <section className="post-page__header">
          <h1>{postInfo.title}</h1>
        </section>

        {/* <time>{formatISO9075(new Date(postInfo.createAt))}</time> */}
        <div className="author">by @{postInfo.author.username}</div>
        <div>
          <img
            src={`http://localhost:4000/${postInfo.cover}`}
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
