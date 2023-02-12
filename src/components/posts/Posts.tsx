import "./posts.scss";
import Card from "./card/Card";

import PostSection01 from "../../assets/posts-section-01.png";
import PostSection02 from "../../assets/posts-section-02.png";
import PostSection03 from "../../assets/posts-section-03.png";
import ReadingList from "./reading-list/ReadingList";

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
  return (
    <div className="posts__container">
      <h5 className="posts__pathname">
        Inicio - Lista de Lecturas -
        <span className="posts__pathname--bold"> Posts</span>
      </h5>

      {cardDataset.map((post) => (
        <Card
          number={post.number}
          title={post.title}
          description={post.description}
          image={post.image}
        />
      ))}

      <ReadingList />
    </div>
  );
};

export default Posts;
