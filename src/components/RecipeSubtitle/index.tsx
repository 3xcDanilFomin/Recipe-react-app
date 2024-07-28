import { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";

interface RecipeSubtitleProps {
  subtitle: string;
}

export const RecipeSubtitle: React.FC<RecipeSubtitleProps> = ({
  subtitle,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [maxHeight, setMaxHeight] = useState<number | string>(65); 
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && descriptionRef.current) {
      setMaxHeight(descriptionRef.current.scrollHeight);
    }
  }, [isOpen]);

  const handleClickButton = (): void => {
    setIsOpen(true);
  };

  return (
    <div className={styles["recipe"]}>
      <h2
        className={styles["recipe__subtitle"]}
        ref={descriptionRef}
        style={{ maxHeight }}
      >
        {subtitle}
      </h2>
      {!isOpen && (
        <button
          className={styles["recipe__button"]}
          onClick={handleClickButton}
        >
          Показать всё
        </button>
      )}
    </div>
  );
};
