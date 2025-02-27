import styles from "./style.module.css";

interface Props {
  title: string;
  author: string;
}

export const Post = ({ title, author }: Props) => {
  return (
    <div className={styles.post}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.author}>
        Автор: <span>{author}</span>
      </p>
    </div>
  );
};
