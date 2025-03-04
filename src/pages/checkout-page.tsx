import { Ings } from "@/interfaces/pizza";
import { useState } from "react";

import styles from "../App.module.css";
import { CheckoutSummary } from "@/components/order/checkout-summary";

export const CheckoutPage = () => {
  const [ings, setIngs] = useState<Ings>({
    cheese: 1,
    olives: 0,
    sausage: 1,
    mushrooms: 0,
  });
  return (
    <div className={styles.checkout}>
      <CheckoutSummary ings={ings} />
    </div>
  );
};
