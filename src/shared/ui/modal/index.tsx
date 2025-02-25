import cn from "clsx";
import styles from "./style.module.css";
import { Backdrop } from "@/shared/ui/backdrop";

interface Props {
  children: React.ReactNode;
  show: boolean;
  close: () => void;
}

export const Modal = ({ children, show, close }: Props) => {
  return (
    <>
      <Backdrop show={show} close={close} />
      <div className={cn(styles.modal, show && styles.show)}>{children}</div>
    </>
  );
};
