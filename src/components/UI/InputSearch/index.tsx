import styles from "./styles.module.scss";

export const InputSearch: React.FC = () => {
  return (
    <div className={styles["field"]}>
      <input
        className={styles["field__input"]}
        type="text"
        placeholder="Поиск по рецептам"
      />
      <svg
        className={styles["field__icon"]}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17 17L21 21" />
        <path d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" />
      </svg>
    </div>
  );
};
