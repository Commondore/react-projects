import { Ings } from "@/interfaces/pizza";

import styles from "./style.module.css";
import { ControlItem } from "@/components/controls/control-item";

interface Props {
  ings: Ings;
  addIng: (ingName: string) => void;
  removeIng: (ingName: string) => void;
}

const CONTROLS = {
  cheese: "Сыр",
  olives: "Оливки",
  sausage: "Пеперони",
  mushrooms: "Грибы",
};

export const Controls = ({ ings, addIng, removeIng }: Props) => {
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
    </div>
  );
};
