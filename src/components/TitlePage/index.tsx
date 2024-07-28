import styles from "./styles.module.scss";

interface TitlePageProps {
  title: string;
}

export const TitlePage: React.FC<React.PropsWithChildren<TitlePageProps>> = ({
  title,
  children,
}) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>{title}</h1>
      {children}
    </header>
  );
};
