import { Ings } from "@/interfaces/pizza";

import styles from "./style.module.css";

interface Props {
  ings: Ings;
}

export const Pizza = ({ ings }: Props) => {
  return <div className={styles.pizza}>Pizza</div>;
};
