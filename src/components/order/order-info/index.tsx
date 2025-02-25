import { Ings } from "@/interfaces/pizza";

import styles from "./style.module.css";
import { Button } from "@/shared/ui/button";

interface Props {
  ings: Ings;
  price: number;
  cancel: () => void;
}

export const OrderInfo = ({ ings, price }: Props) => {
  return (
    <div>
      <h2 className={styles.title}>Вы выбрали следующие ингредиенты</h2>
      <ul className={styles.list}>
        {Object.keys(ings).map((ingName) => {
          return (
            <li key={ingName} className={styles.item}>
              <span className={styles.name}>{ingName}</span>
              <span className={styles.count}>{ings[ingName as keyof Ings]}</span>
            </li>
          );
        })}
      </ul>
      <div className={styles.price}>
        Сумма заказа: <span>{price}</span>
      </div>
      <div className={styles.controls}>
        <Button click={() => {}} variant={"success"} size="lg">
          Продолжить
        </Button>
        <Button click={() => {}} variant={"danger"} size="xs">
          Отмена
        </Button>
      </div>
    </div>
  );
};
