import { ITypeMeal } from "../../../types/types";
import styles from "./styles.module.scss";

type TypeMealItemProps = Pick<ITypeMeal, "title" | "imgPath"> 

export const TypeMealItem: React.FC<TypeMealItemProps> = ({ title, imgPath }) => {
  return (
    <div className={styles["card"]}>
      <h3 className={styles["card__title"]}>{title}</h3>
      <img className={styles["card__img"]} src={imgPath} alt={title} />
    </div>
  );
};
