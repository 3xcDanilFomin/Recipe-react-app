import { useNavigate } from "react-router-dom";

import { Filters } from "../../components";
import styles from "./styles.module.scss";

export const FiltersPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles["filters"]}>
      <header className={styles["header"]}>
        <svg
          className={styles["header__icon"]}
          onClick={() => navigate(-1)}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 12H19M5 12L11 6M5 12L11 18" />
        </svg>
        <h1 className={styles["header__title"]}>Поиск</h1>
      </header>
      <section className={styles["content"]}>
        <div className={styles["content__wrapper"]}>
          <Filters />
        </div>
      </section>
      <footer className={styles["footer"]}>
        <button className={styles["footer__btn--default"]}>Сбросить</button>
        <button className={styles["footer__btn--primary"]}>Применить</button>
      </footer>
    </div>
  );
};
