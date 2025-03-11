import { NavLink } from "react-router";
import cn from "clsx";
import styles from "./style.module.css";
import { FaPizzaSlice, FaShoppingBasket } from "react-icons/fa";

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={({ isActive }) => cn(styles.link, isActive && styles.active)}>
        <FaPizzaSlice />
        <span>Конструктор Пиццы</span>
      </NavLink>
      <NavLink
        to="/orders"
        className={({ isActive }) => cn(styles.link, isActive && styles.active)}
      >
        <FaShoppingBasket />
        <span>Заказа</span>
      </NavLink>
    </nav>
  );
};
