import { NoAuth } from "../../components/NoAuth";
import { TitlePage } from "../../components/TitlePage";
import styles from "./styles.module.scss";

export const FavouritesPage: React.FC = () => {
  return (
    <main className={styles["page-favourites"]}>
      <TitlePage title="Избранное" />
      <section className={styles["page-content"]}>
        <NoAuth title="Избранное" />
      </section>
    </main>
  );
};
