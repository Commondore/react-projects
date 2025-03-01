import { fetchCommentsByPostId } from "@/api/request";
import { IComment } from "@/interfaces/comment";
import { useEffect, useState } from "react";

interface Props {
  postId?: number;
}

export const Comments = ({ postId }: Props) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (postId) {
      setLoading(true);
      fetchCommentsByPostId(postId)
        .then((comments) => {
          setComments(comments);
        })
        .finally(() => setLoading(false));
    }
  }, [postId]);

  if (loading) return <div className="text-center text-2xl">Загрузка...</div>;

  if (!postId) return <h2 className="mt-4 text-2xl">Выберите пост</h2>;

  return (
    <div className="max-w-1/2 mx-auto mt-4">
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="p-2 bg-amber-100 mb-4 rounded-2xl shadow">
            <h3>
              Email <span className="font-bold">{comment.email}</span>
            </h3>
            <p>{comment.body}</p>
          </div>
        );
      })}
    </div>
  );
};
