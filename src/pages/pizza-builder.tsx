import { useState } from "react";
import styles from "../App.module.css";
import { Ings } from "@/interfaces/pizza";

export const PizzaBuilder = () => {
  const [ings, setIngs] = useState<Ings>({
    cheese: 1,
    olives: 1,
    sausage: 1,
    mushrooms: 1,
  });
  return (
    <div className={styles.pizzaWrap}>
      <div>Pizza here</div>
      <div>Controls</div>
    </div>
  );
};
