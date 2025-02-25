import cn from "clsx";
import styles from "./style.module.css";

interface Props {
  children: React.ReactNode;
  show: boolean;
  close: () => void;
}

export const Modal = ({ children, show }: Props) => {
  return <div className={cn(styles.modal, show && styles.show)}>{children}</div>;
};
