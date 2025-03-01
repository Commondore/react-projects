import { memo } from "react";
import styles from "./style.module.css";

interface Props {
  title: string;
  author: string;
  onSelect: () => void;
}

const PostComponent = ({ title, author, onSelect }: Props) => {
  return (
    <div className={styles.post} onClick={onSelect}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.author}>
        Автор: <span>{author}</span>
      </p>
    </div>
  );
};

export const Post = memo(PostComponent);
