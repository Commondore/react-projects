import { useState } from "react";
import styles from "../App.module.css";
import { Ings } from "@/interfaces/pizza";
import { Pizza } from "@/components/pizza";
import { Controls } from "@/components/controls";

export const PizzaBuilder = () => {
  const [ings, setIngs] = useState<Ings>({
    cheese: 0,
    olives: 0,
    sausage: 0,
    mushrooms: 0,
  });

  const addIng = (ingName: string) => {
    setIngs((ings) => {
      return {
        ...ings,
        [ingName]: ings[ingName as keyof Ings] + 1,
      };
    });
  };

  const removeIng = (ingName: string) => {
    setIngs((ings) => {
      return {
        ...ings,
        [ingName]: 0,
      };
    });
  };

  return (
    <div className={styles.pizzaWrap}>
      <Pizza ings={ings} />
      <Controls ings={ings} addIng={addIng} removeIng={removeIng} />
    </div>
  );
};
