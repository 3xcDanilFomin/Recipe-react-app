import { Link, useParams } from "react-router-dom";

import { IRecipe } from "../../../../types/types";
import { toHoursAndMinutes } from "../../../../utils/formatTime";
import styles from "./styles.module.scss";

export const RecipesItem: React.FC<{ recipe: IRecipe }> = ({ recipe }) => {
  const { id, title, imagePath, totalCookingTime } = recipe;
  const { recipesName } = useParams();
  return (
    <li className={styles["card"]}>
      <Link
        className={styles["card__link"]}
        to={`/search/recipes/${recipesName}/${id}`}
      >
        <img className={styles["card__img"]} src={imagePath} alt={title} />
        <div className={styles["card__content"]}>
          <h3 className={styles["card__title"]}>{title}</h3>
          <div className={styles["card__description"]}>
            <svg
              className={styles["card__icon"]}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" />
              <path d="M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2343 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.5459 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z" />
            </svg>
            <span className={styles["card__description-text"]}>
              {toHoursAndMinutes(totalCookingTime)}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
};
