import { useEffect, useState } from "react";
import { Post } from "@/components/post";
import { Comments } from "@/components/comments";
import "./App.css";
import { fetchPosts, fetchUserById } from "@/api/request";

interface PostState {
  id: number;
  title: string;
  author: string;
}

function App() {
  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState<PostState[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<number>();

  useEffect(() => {
    fetchPosts()
      .then(async (posts) => {
        const result = posts.map(async (post) => {
          const user = await fetchUserById(post.userId);
          return {
            ...post,
            author: user.name,
          };
        });

        const data = await Promise.all(result);
        setPosts(data);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h1 style={{ textAlign: "center" }}>Loading....</h1>;

  return (
    <div className="text-center py-10">
      <h1 className="text-4xl">Hello react</h1>

      <div className="post-list">
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              onSelect={() => setSelected(post.id)}
            />
          );
        })}
      </div>

      <button
        className="bg-green-500 text-white px-8 py-2 rounded cursor-pointer"
        onClick={() => setShow(!show)}
      >
        Переключить
      </button>

      {show && <Comments postId={selected} />}
    </div>
  );
}

export default App;
