import { Categories } from "../../components/Categories";
import { TitlePage } from "../../components/TitlePage";

import styles from "./styles.module.scss";

export const SearchPage: React.FC = () => {
  return (
    <main>
      <TitlePage title="Поиск" />
      <section className={styles["content-page"]}></section>
      <Categories />
    </main>
  );
};
