import { INutritionDetail } from "../../types/types";
import styles from "./styles.module.scss";

interface NutritionDetailsProps {
  nutritionDetails: INutritionDetail[];
}

export const NutritionDetails: React.FC<NutritionDetailsProps> = ({
  nutritionDetails,
}) => {
  return (
    <div className={styles["nutrition"]}>
      <ul className={styles["nutrition__items"]}>
        {nutritionDetails.map((nutrition) => (
          <li className={styles["nutrition__item"]} key={nutrition.title}>
            <h5 className={styles["nutrition__item-title"]}>
              {nutrition.title}
            </h5>
            <div className={styles["nutrition__item-body"]}>
              <p className={styles["nutrition__item-text"]}>
                {nutrition.value}
              </p>
              <span className={styles["nutrition__item-weight"]}>
                {nutrition.title === "Калории" ? "кКал" : "г"}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <p className={styles["nutrition__description"]}>
        Пищевая ценность на 100 г. Калорийность рассчитана для сырых продуктов.
      </p>
    </div>
  );
};
