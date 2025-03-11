import { Logo } from "@/components/logo";
import styles from "./style.module.css";
import { Navigation } from "@/components/navigation";

export const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <Logo />
      <Navigation />
    </header>
  );
};
