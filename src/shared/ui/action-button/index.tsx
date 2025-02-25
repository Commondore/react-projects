import styles from "./style.module.css";

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  click: () => void;
}

export const ActionButton = ({ children, disabled, click }: Props) => {
  return (
    <button className={styles.btn} onClick={click} disabled={disabled}>
      {children}
    </button>
  );
};
