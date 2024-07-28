import { ICooking, IImpression, IPreparation } from "../../types/types";
import styles from "./styles.module.scss";

interface ManualProps {
  preparation: IPreparation;
  cooking: ICooking[];
  impression: IImpression[];
}

export const Manual: React.FC<ManualProps> = ({ preparation, cooking, impression }) => {
  return (
    <div className={styles["manual"]}>
      <h3 className={styles["manual__title"]}>Пошаговый фоторецепт</h3>
      <ul className={styles["manual__wrapper"]}>
        <h4 className={styles["manual__subtitle"]}>Подготовиться</h4>
        <li className={styles["manual__item"]}>
          {preparation.imagePath && (
            <img
              className={styles["manual__img"]}
              src={preparation.imagePath}
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
              src={step.imagePath}
              alt="Шаг приготовления"
            />
            <p className={styles["manual__descriptin"]}>{step.description}</p>
          </li>
        ))}
      </ul>
      <ul className={styles["manual__wrapper"]}>
        <h4 className={styles["manual__subtitle"]}>Произвести впечатление</h4>
        <li className={styles["manual__item"]}>
          {preparation.imagePath && (
            <img
              className={styles["manual__img"]}
              src={impression[0].imagePath}
              alt="Произвести впечатление"
            />
          )}
          <p className={styles["manual__descriptin"]}>{impression[0].description}</p>
        </li>
      </ul>
    </div>
  );
};
