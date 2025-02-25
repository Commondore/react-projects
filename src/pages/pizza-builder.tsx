import { useState } from "react";
import styles from "../App.module.css";
import { Ings } from "@/interfaces/pizza";
import { Pizza } from "@/components/pizza";
import { Controls } from "@/components/controls";
import { Modal } from "@/shared/ui/modal";
import { OrderInfo } from "@/components/order/order-info";

const PRICES = {
  cheese: 30,
  olives: 40,
  sausage: 50,
  mushrooms: 20,
};

export const PizzaBuilder = () => {
  const [ings, setIngs] = useState<Ings>({
    cheese: 0,
    olives: 0,
    sausage: 0,
    mushrooms: 0,
  });
  const [price, setPrice] = useState(100);
  const [purchasing, setPurchasing] = useState(false);

  const addIng = (ingName: string) => {
    setIngs((ings) => {
      return {
        ...ings,
        [ingName]: ings[ingName as keyof Ings] + 1,
      };
    });

    setPrice((price) => price + PRICES[ingName as keyof Ings]);
  };

  const removeIng = (ingName: string) => {
    setIngs((ings) => {
      return {
        ...ings,
        [ingName]: 0,
      };
    });

    setPrice((price) => price - ings[ingName as keyof Ings] * PRICES[ingName as keyof Ings]);
  };

  const isPurchasable = () => {
    const count = Object.values(ings).reduce((acc, ingCount) => acc + ingCount, 0);

    return count > 0;
  };

  const purchasingOn = () => setPurchasing(true);
  const purchasingOff = () => setPurchasing(false);

  return (
    <div className={styles.pizzaWrap}>
      <Modal show={purchasing} close={purchasingOff}>
        <OrderInfo ings={ings} price={price} cancel={() => {}} />
      </Modal>
      <Pizza ings={ings} />
      <Controls
        ings={ings}
        addIng={addIng}
        removeIng={removeIng}
        price={price}
        purchasable={isPurchasable()}
        onPurchasing={purchasingOn}
      />
    </div>
  );
};
