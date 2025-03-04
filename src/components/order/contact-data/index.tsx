import { Button } from "@/shared/ui/button";
import styles from "./style.module.css";
// import { usePizzaContext } from "@/context/pizza-povider";

export const ContactData = () => {
  // const { ings, price } = usePizzaContext();
  return (
    <div className={styles.contactData}>
      <form>
        <div className={styles.group}>
          <input className={styles.input} type="text" name="name" placeholder="Укажите ваше имя" />
        </div>
        <div className={styles.group}>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Укажите ваш email"
          />
        </div>
        <div className={styles.group}>
          <input
            className={styles.input}
            type="text"
            name="address"
            placeholder="Укажите ваш address"
          />
        </div>
        <div className={styles.group}>
          <input
            className={styles.input}
            type="text"
            name="phone"
            placeholder="Укажите ваш phone"
          />
        </div>
        <Button type="submit">Заказать</Button>
      </form>
    </div>
  );
};
