import { Button } from "@/shared/ui/button";
import styles from "./style.module.css";
import { useState } from "react";
import { usePizzaContext } from "@/context/pizza-povider";

export const ContactData = () => {
  const { ings, price } = usePizzaContext();
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomer((prevCustomer) => {
      return {
        ...prevCustomer,
        [event.target.name]: event.target.value,
      };
    });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("send data to firebase");
  };

  return (
    <div className={styles.contactData}>
      <form onSubmit={submitHandler}>
        <div className={styles.group}>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={customer.name}
            onChange={changeHandler}
            placeholder="Укажите ваше имя"
          />
        </div>
        <div className={styles.group}>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={customer.email}
            onChange={changeHandler}
            placeholder="Укажите ваш email"
          />
        </div>
        <div className={styles.group}>
          <input
            className={styles.input}
            type="text"
            name="address"
            value={customer.address}
            onChange={changeHandler}
            placeholder="Укажите ваш address"
          />
        </div>
        <div className={styles.group}>
          <input
            className={styles.input}
            type="text"
            name="phone"
            value={customer.phone}
            onChange={changeHandler}
            placeholder="Укажите ваш phone"
          />
        </div>
        <Button type="submit">Заказать</Button>
      </form>
    </div>
  );
};
