import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

interface RecipeSubtitleProps {
  subtitle: string;
}

export const RecipeSubtitle: React.FC<RecipeSubtitleProps> = ({ subtitle }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSubtitleBig, setIsSubtitleBig] = useState<boolean>(false);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (subtitleRef.current) {
      const subtitleHeight = subtitleRef.current.offsetHeight;
      if (subtitleHeight > 80) {
        subtitleRef.current.style.maxHeight = "45px";
        setIsSubtitleBig(true);
      }
    }
  }, []);

  const toggleSubtitleHeight = (): void => {
    setIsOpen(!isOpen);
    if (subtitleRef.current) {
      subtitleRef.current.style.maxHeight = isOpen ? "45px" : "500px";
    }
  };

  return (
    <>
      <h2 className={styles["recipe__subtitle"]} ref={subtitleRef}>
        {subtitle}
      </h2>
      {isSubtitleBig && (
        <button
          className={styles["recipe__button"]}
          onClick={toggleSubtitleHeight}
        >
          {isOpen ? "Скрыть" : "Показать всё"}
        </button>
      )}
    </>
  );
};
