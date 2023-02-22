import React from "react";
import "./readingPost.scss";

const ReadingPost = ({ author, title, description, image }: any) => {
  return (
    <section>
      <img src={image} alt="read" className="reading__image" />
      <p className="reading-author__container">
        By <span className="reading-autor__text">{author}</span>
      </p>

      <div className="reading-post__title">{title}</div>

      <p className="reading-post__description">{description}</p>
    </section>
  );
};

export default ReadingPost;
