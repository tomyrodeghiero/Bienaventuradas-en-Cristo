import React, { useState } from "react";
import "./newPost.scss";

const NewPost = ({ date, title, selected, onSelection }: any) => {
  function formatDate(dateStr: string): string {
    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];

    const date = new Date(dateStr);
    const month = months[date.getMonth()];
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${month} ${day} ${year}`;
  }

  return (
    <div className="new-post__container" onClick={onSelection}>
      <div className="new-post__content">
        <h3 className="new-post__date">{formatDate(date)}</h3>
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
