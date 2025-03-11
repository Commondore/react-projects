import { Logo } from "@/components/logo";
import styles from "./style.module.css";

export const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <Logo />
      <nav>nav will be here</nav>
    </header>
  );
};
