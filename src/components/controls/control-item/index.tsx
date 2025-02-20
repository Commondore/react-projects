import styles from "./style.module.css";

interface Props {
  ingName: string;
  title: string;
  count: number;
  addIng: () => void;
  removeIng: () => void;
}

export const ControlItem = ({ ingName, title, count, addIng, removeIng }: Props) => {
  const clickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    removeIng();
  };

  return (
    <div className={styles.item} onClick={addIng}>
      <img className={styles.image} src={`/img/${ingName}-icon.png`} alt={ingName} />
      <h4 className={styles.title}>{title}</h4>
      {count > 0 && (
        <div className={styles.count} onClick={clickHandler}>
          {count}
        </div>
      )}
    </div>
  );
};
