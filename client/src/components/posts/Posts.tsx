import "./posts.scss";
import Card from "./card/Card";

import PostSection01 from "../../assets/posts-section-01.png";
import PostSection02 from "../../assets/posts-section-02.png";
import PostSection03 from "../../assets/posts-section-03.png";
import ReadingList from "./reading-list/ReadingList";
import { useEffect, useState } from "react";

const cardDataset = [
  {
    number: "01",
    title:
      "¿Cómo era el estilo de vida de los primeros Cristianos? Un vistazo al pasado",
    description:
      "Remontémonos juntos al pasado y veamos cómo el estilo de vida de los primeros Creyentes era basada en la Oración, la Lectura de la Palabra y la práctica del amor.",
    image: PostSection01,
  },
  {
    number: "02",
    title: "No soy misionero. ¿Estoy poniendo excusas?",
    description:
      "Hay razones válidas para no ser misionero, pero también hay excusas pobres. Asegúrate de que tu decisión se basa en los motivos correctos.",
    image: PostSection02,
  },
  {
    number: "03",
    title:
      "Libro Gratis: Respuestas claras a preguntas comunes sobre la Biblia",
    description:
      "¡Descarga, lee y comparte este recurso gratuito que Bienaventuradas en Cristo ha preparado para ti!",
    image: PostSection03,
  },
];

const Posts = () => {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    fetch("https://bienaventuradas-en-cristo-rest-api.vercel.app/post").then(
      (response) => {
        response.json().then((posts) => {
          setPosts(posts);
          console.log(posts);
        });
      }
    );
  }, []);

  return (
    <section>
      <h5 className="posts__pathname">
        Inicio - Lista de Lecturas -
        <span className="posts__pathname--bold"> Posts</span>
      </h5>
      {posts.length > 0 &&
        posts.map((post: any, index: number) => (
          <div className="posts__container">
            <Card
              _id={post._id}
              cover={post.cover}
              title={post.title}
              number={index}
              author={post.author}
              createdAt={post.createdAt}
              summary={post.summary}
            />
          </div>
        ))}

      <ReadingList />
    </section>
  );
};

export default Posts;
