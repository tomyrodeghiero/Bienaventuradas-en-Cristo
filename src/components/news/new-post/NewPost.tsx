import React, { useState } from "react";
import "./newPost.scss";

const NewPost = ({ date, title, selected, onSelection }: any) => {
  return (
    <div className="new-post__container" onClick={onSelection}>
      <div className="new-post__content">
        <h3 className="new-post__date">{date}</h3>
        <h2
          className={selected ? "new-post__title--active" : "new-post__title"}
        >
          {title}
        </h2>

        {selected && (
          <div className="new-post__container-btn--selected">
            <button className="new-post__btn--selected">Leer</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewPost;
