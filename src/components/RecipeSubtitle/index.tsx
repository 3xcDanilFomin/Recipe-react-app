import React, { useState, useRef } from "react";
import styles from "./styles.module.scss";

interface RecipeSubtitleProps {
  subtitle: string;
}

export const RecipeSubtitle: React.FC<RecipeSubtitleProps> = ({ subtitle }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const descriptionRef = useRef<HTMLDivElement>(null);

  const handleClickButton = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles["recipe"]}>
      <h2
        className={styles["recipe__subtitle"]}
        ref={descriptionRef}
        style={{
          maxHeight: isOpen ? descriptionRef?.current?.scrollHeight : "65px",
          overflow: isOpen ? "visible" : "hidden",
        }}
      >
        {subtitle}
      </h2>
      {
        <div className={styles["recipe__wrapper"]}>
          <button
            className={styles["recipe__button"]}
            onClick={handleClickButton}
          >
            {isOpen ? "Скрыть" : "Показать всё"}
          </button>
        </div>
      }
    </div>
  );
};
