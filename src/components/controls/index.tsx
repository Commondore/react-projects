import { Ings } from "@/interfaces/pizza";

import styles from "./style.module.css";
import { ControlItem } from "@/components/controls/control-item";
import { ActionButton } from "@/shared/ui/action-button";

interface Props {
  ings: Ings;
  addIng: (ingName: string) => void;
  removeIng: (ingName: string) => void;
  price: number;
  purchasable: boolean;
  onPurchasing: () => void;
}

const CONTROLS = {
  cheese: "Сыр",
  olives: "Оливки",
  sausage: "Пеперони",
  mushrooms: "Грибы",
};

export const Controls = ({ ings, addIng, removeIng, price, purchasable, onPurchasing }: Props) => {
  return (
    <div>
      <h3 className={styles.title}>Нажмите чтобы добавить</h3>
      <div className={styles.controls}>
        {Object.keys(ings).map((ingName) => {
          return (
            <ControlItem
              ingName={ingName}
              title={CONTROLS[ingName as keyof Ings]}
              count={ings[ingName as keyof Ings]}
              addIng={() => addIng(ingName)}
              removeIng={() => removeIng(ingName)}
            />
          );
        })}
      </div>
      <div className={styles.price}>
        Стоимость: <span>{price} сом</span>
      </div>
      <div className={styles.order}>
        <ActionButton disabled={!purchasable} click={onPurchasing}>
          Оформить заказ
        </ActionButton>
      </div>
    </div>
  );
};
