import { Ings } from "@/interfaces/pizza";

import styles from "./style.module.css";
import { Button } from "@/shared/ui/button";
import { useNavigate } from "react-router";

interface Props {
  ings: Ings;
  price: number;
  cancel: () => void;
}

export const OrderInfo = ({ ings, price, cancel }: Props) => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/checkout");
  };

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
        <Button click={handleContinue} variant={"success"}>
          Продолжить
        </Button>
        <Button click={cancel} variant={"danger"}>
          Отмена
        </Button>
      </div>
    </div>
  );
};
