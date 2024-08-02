import { Link } from "react-router-dom";

import styles from "./styles.module.scss";
import { Categories, InputSearch, TitlePage, TypesMeal } from "../../components";

export const SearchPage: React.FC = () => {
  return (
    <main className={styles["search"]}>
      <TitlePage title="Поиск">
        <InputSearch />
      </TitlePage>
      <section className={styles["search__content"]}>
        <div className={styles["search__wrapper"]}>
          <Link to="/filters" className={styles["filter-link"]}>
            <svg
              className={styles["filter-icon"]}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 5L10 5M10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5M14 5L20 5M4 12H16M16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12ZM8 19H20M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19Z" />
            </svg>
            Все фильтры
          </Link>
          <div className={styles["search__row"]}>
            <h2 className={styles["search__title"]}>Кaтегории рецептов</h2>
            <Categories />
          </div>
          <div className={styles["search__row"]}>
            <h2 className={styles["search__title"]}>Что хотите приготовить?</h2>
            <TypesMeal />
          </div>
        </div>
      </section>
    </main>
  );
};
