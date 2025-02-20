import { Ings } from "@/interfaces/pizza";
import { Ingredient } from "@/components/pizza/ingredient";

import styles from "./style.module.css";

interface Props {
  ings: Ings;
}

export const Pizza = ({ ings }: Props) => {
  const list = Object.keys(ings)
    .filter((ingName) => ings[ingName as keyof Ings] > 0)
    .map((ingName) => {
      return <Ingredient key={ingName} ingName={ingName} />;
    });

  return (
    <div className={styles.pizza}>
      {list.length ? list : <h1 className={styles.title}>Добавьте ингредиенты</h1>}
    </div>
  );
};
