import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";

interface RecipeSubtitleProps {
  subtitle: string;
}

export const RecipeSubtitle: React.FC<RecipeSubtitleProps> = ({ subtitle }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (descriptionRef.current && descriptionRef.current.scrollHeight > 80) {
      setIsOverflowing(true);
    }
  }, []);

  const handleClickButton = (): void => {
    setIsOpen(true);
  };

  return (
    <div className={styles.recipe}>
      <div
        className={styles.recipe__subtitle}
        ref={descriptionRef}
        style={{
          maxHeight: isOpen ? descriptionRef?.current?.scrollHeight : "65px",
          overflow: isOpen ? "visible" : "hidden",
        }}
      >
        {subtitle}
      </div>
      {isOverflowing && !isOpen && (
        <button className={styles.recipe__button} onClick={handleClickButton}>
          Показать всё
        </button>
      )}
    </div>
  );
};
