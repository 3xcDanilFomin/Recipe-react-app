import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export const Navigation: React.FC = () => {
  return (
    <ul className={styles["menu"]}>
      <li className={styles["menu__item"]}>
        <Link className={styles["menu__link"]} to="/">
          Home
        </Link>
      </li>
      <li className={styles["menu__item"]}>
        <Link className={styles["menu__link"]} to="/search">
          Search
        </Link>
      </li>
      <li className={styles["menu__item"]}>
        <Link className={styles["menu__link"]} to="/favourites">
          favourites
        </Link>
      </li>
      <li className={styles["menu__item"]}>
        <Link className={styles["menu__link"]} to="/profile">
          profile
        </Link>
      </li>
    </ul>
  );
};
