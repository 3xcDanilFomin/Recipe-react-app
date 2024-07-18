import { memo } from "react";

import { Categories } from "../../components/Categories";
import styles from "./styles.module.scss";

export const HomePage: React.FC = memo(() => {
  return (
    <main className={styles["home-page"]}>
      <Categories />
      HomePage
    </main>
  );
});
