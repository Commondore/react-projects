import cn from "clsx";
import styles from "./style.module.css";

interface Props {
  children: React.ReactNode;
  click?: () => void;
  variant?: "success" | "danger" | "warning";
  size?: "xs" | "sm" | "lg" | "xl";
  type?: "button" | "submit" | "reset";
}

export const Button = ({ children, click, variant, size }: Props) => {
  return (
    <button
      className={cn(styles.btn, variant && styles[variant], size && styles[size])}
      onClick={click}
    >
      {children}
    </button>
  );
};
