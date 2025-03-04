import { useState } from "react";
import styles from "../App.module.css";
import { Pizza } from "@/components/pizza";
import { Controls } from "@/components/controls";
import { Modal } from "@/shared/ui/modal";
import { OrderInfo } from "@/components/order/order-info";
import { usePizzaContext } from "@/context/pizza-povider";

export const PizzaBuilder = () => {
  const { ings, price, addIng, removeIng } = usePizzaContext();
  const [purchasing, setPurchasing] = useState(false);

  const isPurchasable = () => {
    const count = Object.values(ings).reduce((acc, ingCount) => acc + ingCount, 0);

    return count > 0;
  };

  const purchasingOn = () => setPurchasing(true);
  const purchasingOff = () => setPurchasing(false);

  return (
    <div className={styles.pizzaWrap}>
      <Modal show={purchasing} close={purchasingOff}>
        <OrderInfo ings={ings} price={price} cancel={purchasingOff} />
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
