import { useState } from "react";

import styles from "./styles.module.scss";

export const InputSearch: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <div className={styles["field"]}>
      <input
        className={styles["field__input"]}
        type="text"
        placeholder="Поиск по рецептам"
        value={inputValue}
        onChange={handleInputChange}
      />
      <svg
        className={styles["field__icon--search"]}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17 17L21 21" />
        <path d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" />
      </svg>
      {inputValue && (
        <button className={styles["field__btn"]} onClick={clearInput}>
          <svg
            className={styles["field__icon--clear"]}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 9L15 15" />
            <path d="M15 9L9 15" />
            <circle cx="12" cy="12" r="9" />
          </svg>
        </button>
      )}
    </div>
  );
};
