import { IComment } from "@/interfaces/comment";
import { IPost } from "@/interfaces/post";
import { IUser } from "@/interfaces/user";
import ky from "ky";

const request = ky.create({ prefixUrl: import.meta.env.VITE_API_URL });

export const fetchPosts = (): Promise<IPost[]> => {
  return request.get("posts?_limit=3").json();
};

export const fetchUserById = (userId: number): Promise<IUser> => {
  return request.get(`users/${userId}`).json();
};

export const fetchCommentsByPostId = (postId: number): Promise<IComment[]> => {
  return request.get(`comments?postId=${postId}`).json();
};

//https://jsonplaceholder.typicode.com/users/1
