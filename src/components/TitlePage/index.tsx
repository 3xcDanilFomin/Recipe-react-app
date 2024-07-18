import { InputSearch } from "../UI/InputSearch";
import styles from "./styles.module.scss";

interface TitlePageProps {
  title: string;
}

export const TitlePage: React.FC<TitlePageProps> = ({ title }) => {
  return (
    <header className={styles["header"]}>
      <h1 className={styles["header__title"]}>{title}</h1>
      <InputSearch />
    </header>
  );
};
