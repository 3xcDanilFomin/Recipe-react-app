import { AnimatedOutlet, Navigation } from "../index";
import styles from "./styles.module.scss";

export const Layout: React.FC = () => {
  return (
    <div className={styles["layout"]}>
      <div className={styles["layout__content"]}>
        <AnimatedOutlet />
      </div>
      <Navigation />
    </div>
  );
};
