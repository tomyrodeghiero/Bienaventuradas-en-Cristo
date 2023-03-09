import "./posts.scss";
import Card from "./card/Card";

import ReadingList from "./reading-list/ReadingList";
import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    fetch("https://blog-project-red-seven.vercel.app/api/post").then(
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
