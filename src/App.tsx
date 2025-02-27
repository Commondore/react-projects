import { useState } from "react";
import "./App.css";
import { Post } from "@/components/post";

interface PostState {
  id: number;
  title: string;
  author: string;
}

function App() {
  const [posts, setPosts] = useState<PostState[]>([
    { id: 1, title: "Post 1", author: "Mike Johnson" },
    { id: 2, title: "Post 2", author: "Mike Johnson" },
    { id: 3, title: "Post 3", author: "Mike Johnson" },
  ]);
  return (
    <div className="wrap">
      <h1>Hello react</h1>

      <div className="post-list">
        {posts.map((post) => {
          return <Post key={post.id} title={post.title} author={post.author} />;
        })}
      </div>
    </div>
  );
}

export default App;
