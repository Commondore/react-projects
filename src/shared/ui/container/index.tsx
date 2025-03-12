import cn from "clsx";
import styles from "./style.module.css";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Container = ({ children, className }: Props) => {
  return <div className={cn(styles.container, className && className)}>{children}</div>;
};
