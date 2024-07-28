import { ICooking, IPreparation } from "../../types/types";
import styles from "./styles.module.scss";

interface ManualProps {
  preparation: IPreparation;
  cooking: ICooking[];
}

export const Manual: React.FC<ManualProps> = ({ preparation, cooking }) => {
  return (
    <div className={styles["manual"]}>
      <h3 className={styles["manual__title"]}>Пошаговый фоторецепт</h3>
      <ul className={styles["manual__wrapper"]}>
        <h4 className={styles["manual__subtitle"]}>Подготовиться</h4>
        <li className={styles["manual__item"]}>
          {preparation.image_path && (
            <img
              className={styles["manual__img"]}
              src={preparation.image_path}
              alt="Подготовка необходимых продуктов"
            />
          )}
          <p className={styles["manual__descriptin"]}>{preparation.content}</p>
        </li>
      </ul>
      <ul className={styles["manual__wrapper"]}>
        <h4 className={styles["manual__subtitle"]}>Начать готовить</h4>
        {cooking.map((step, i) => (
          <li className={styles["manual__item"]} key={step.title}>
            <div className={styles["manual__step"]}>{`Шаг ${i + 1}`}</div>
            <img
              className={styles["manual__img"]}
              src={step.image_path}
              alt="Шаг приготовления"
            />
            <p className={styles["manual__descriptin"]}>{step.description}</p>
          </li>
        ))}
      </ul>
      <ul className={styles["manual__wrapper"]}>
        <h4 className={styles["manual__subtitle"]}>Произвести впечатление</h4>
        <li className={styles["manual__item"]}>
          {preparation.image_path && (
            <img
              className={styles["manual__img"]}
              src={preparation.image_path}
              alt="Произвести впечатление"
            />
          )}
          <p className={styles["manual__descriptin"]}>{preparation.content}</p>
        </li>
      </ul>
    </div>
  );
};
