import { Categories } from "../../components/Categories";
import { TitlePage } from "../../components/TitlePage";

import styles from "./styles.module.scss";

export const SearchPage: React.FC = () => {
  return (
    <main className={styles["content-wrapper"]}>
      <TitlePage title="Поиск" />
      <section className={styles["content-page"]}>
        <div className={styles["content-page__row"]}>
          <h2 className={styles["content-page__title"]}>Кaтегории рецептов</h2>
          <Categories />
        </div>
        <div className={styles["content-page__row"]}>
          <h2 className={styles["content-page__title"]}>Кaтегории рецептов</h2>
          <Categories />
        </div>
        <div className={styles["content-page__row"]}>
          <h2 className={styles["content-page__title"]}>Кaтегории рецептов</h2>
          <Categories />
        </div>
        <div className={styles["content-page__row"]}>
          <h2 className={styles["content-page__title"]}>Кaтегории рецептов</h2>
          <Categories />
        </div>
        <div className={styles["content-page__row"]}>
          <h2 className={styles["content-page__title"]}>Кaтегории рецептов</h2>
          <Categories />
        </div>
      </section>
    </main>
  );
};
