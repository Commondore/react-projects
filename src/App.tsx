import { useState } from "react";
import { Post } from "@/components/post";
import { Comments } from "@/components/comments";
import { useFetch } from "@/hooks/useFetch";
import "./App.css";

interface PostState {
  id: number;
  title: string;
  author: string;
}

function App() {
  const [show, setShow] = useState(false);
  const [posts, loading] = useFetch<PostState[]>(
    [],
    "https://jsonplaceholder.typicode.com/posts?_limit=3"
  );

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

      {show && <Comments />}
    </div>
  );
}

export default App;
