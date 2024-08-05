import { useId, useState, useCallback } from "react";
import styles from "./styles.module.scss";

interface HeaderProps {
  onNavigateBack: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigateBack }) => {
  const [state, setState] = useState<{ isFavourites: boolean; isOverlay: string | null }>({
    isFavourites: false,
    isOverlay: null,
  });
  const buttonId = useId();

  const handleClick = useCallback(
    (id?: string) => {
      if (id === `${buttonId}-back`) {
        onNavigateBack();
        setState((prevState) => ({
          ...prevState,
          isOverlay: `${buttonId}-back`,
        }));
      } else if (id === `${buttonId}-favourites`) {
        setState((prevState) => ({
          ...prevState,
          isFavourites: !prevState.isFavourites,
          isOverlay: `${buttonId}-favourites`,
        }));
      } else {
        setState((prevState) => ({
          ...prevState,
          isOverlay: `${buttonId}-other`,
        }));
      }

      setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          isOverlay: null,
        }));
      }, 400);
    },
    [buttonId, onNavigateBack]
  );

  const getMenuClasses = (itemId: string) =>
    [
      styles["menu__item"],
      state.isOverlay === itemId ? styles["menu__item--overlay"] : "",
    ].join(" ").trim();

  const getIconClasses = (itemId: string) =>
    [
      styles["menu__icon"],
      itemId === `${buttonId}-favourites` && state.isFavourites
        ? styles["menu__icon--fill"]
        : "",
    ].join(" ").trim();

  return (
    <header className={styles["header"]}>
      <ul className={styles["menu"]}>
        <li onClick={() => handleClick(`${buttonId}-back`)} className={getMenuClasses(`${buttonId}-back`)}>
          <div className={styles["overlay"]} />
          <svg className={styles["menu__icon"]} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M5 12L11 6M5 12L11 18" />
          </svg>
        </li>
        <div className={styles["menu__wrapper"]}>
          <li onClick={() => handleClick(`${buttonId}-favourites`)} className={getMenuClasses(`${buttonId}-favourites`)}>
            <div className={styles["overlay"]} />
            <svg className={getIconClasses(`${buttonId}-favourites`)} viewBox="-0.5 0 25 25" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.6001 3.91998C14.268 3.92397 12.9849 4.42297 12 5.32001C11.2277 4.61746 10.2676 4.15485 9.23679 3.98858C8.20602 3.82231 7.1491 3.95955 6.19498 4.3836C5.24087 4.80765 4.43081 5.50018 3.8635 6.37671C3.29619 7.25324 2.99614 8.27591 3.00004 9.32C3.00004 15.77 12 20.14 12 20.14C12 20.14 21 15.77 21 9.32C21 7.88784 20.4311 6.51434 19.4184 5.50165C18.4057 4.48895 17.0322 3.91998 15.6001 3.91998Z" />
            </svg>
          </li>
          <li onClick={() => handleClick(`${buttonId}-other`)} className={getMenuClasses(`${buttonId}-other`)}>
            <div className={styles["overlay"]} />
            <svg className={[styles["menu__icon"], styles["menu__icon--fill"]].join(" ").trim()} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="2" />
              <circle cx="16" cy="26" r="2" />
              <circle cx="16" cy="6" r="2" />
            </svg>
          </li>
        </div>
      </ul>
    </header>
  );
};
