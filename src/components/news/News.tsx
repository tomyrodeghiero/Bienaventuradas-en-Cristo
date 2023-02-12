import React, { useState } from "react";
import "./news.scss";
import NewPost from "./new-post/NewPost";

const newPostDataset = [
  {
    date: "FEB 01 2023",
    title: "¿Qué dice la Biblia sobre las Primicias? | Preguntas Biblícas",
  },
  { date: "ENE 24 2023", title: "¿Qué hace que un Cristiano sea reformado?" },
  { date: "ENE 12 2023", title: "Renueva toda tu mente | Piensa podcast" },
  {
    date: "DIC 29 2022",
    title: "No dejes que la guerra cultural te robe el Gozo",
  },
];

const News = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelection = (index: number) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  return (
    <div className="news__container">
      <div className="news__title__container">
        <h2 className="news__title__text">Nuevo</h2>
        <h3 className="see_entries__text">Ver todas las entradas</h3>
      </div>

      {newPostDataset.map((post, index) => (
        <NewPost
          date={post.date}
          title={post.title}
          selected={selectedIndex === index}
          onSelection={() => handleSelection(index)}
        />
      ))}
    </div>
  );
};

export default News;
