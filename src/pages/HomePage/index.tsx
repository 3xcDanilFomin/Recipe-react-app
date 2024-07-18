import { memo } from "react";

import styles from "./styles.module.scss";

export const HomePage: React.FC = memo(() => {
  return (
    <main className={styles["home-page"]}>

      HomePage
    </main>
  );
});
