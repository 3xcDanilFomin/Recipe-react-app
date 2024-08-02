import { NoAuth, TitlePage } from "../../components";
import styles from "./styles.module.scss";

export const FavouritesPage: React.FC = () => {
  return (
    <main className={styles["favourites"]}>
      <TitlePage title="Избранное" />
      <section className={styles["favourites__content"]}>
        <div className={styles["favourites__wrapper"]}>
          <NoAuth title="Избранное" />
        </div>
      </section>
    </main>
  );
};
