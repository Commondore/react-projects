import { useEffect, useState } from "react";
import "./App.css";
import { Post } from "@/components/post";
import { IPost } from "@/interfaces/post";

interface PostState {
  id: number;
  title: string;
  author: string;
}

function App() {
  const [posts, setPosts] = useState<PostState[]>([]);

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((res) => res.json())
      .then((data: IPost[]) => {
        const posts = data.map((post) => {
          return {
            ...post,
            author: "Mike Jefferson",
          };
        });
        setPosts(posts);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <h1 style={{ textAlign: "center" }}>Loading....</h1>;

  return (
    <div className="wrap">
      <h1>Hello react</h1>

      <div className="post-list">
        {posts.map((post) => {
          return <Post key={post.id} title={post.title} author={post.author} />;
        })}
      </div>

      <button onClick={() => setShow(!show)}>Переключить</button>

      {show && (
        <div>
          <h2>Комментарии</h2>
        </div>
      )}
    </div>
  );
}

export default App;
