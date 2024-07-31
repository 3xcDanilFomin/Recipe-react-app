import { ITypeMeal } from "../../types/types";
import { TypeMealItem } from "./TypeMealItem";
import breakfastImg from "../../assets/image/typesMeal/breakfast.webp";
import lunchImg from "../../assets/image/typesMeal/lunch.webp";
import dinnerImg from "../../assets/image/typesMeal/dinner.webp";
import styles from "./styles.module.scss";

const typesMeal: ITypeMeal[] = [
  {
    title: "Завтрак",
    imgPath: breakfastImg,
  },
  {
    title: "Обед",
    imgPath: lunchImg,
  },
  {
    title: "Ужин",
    imgPath: dinnerImg,
  },
];

export const TypesMeal: React.FC = () => {
  return (
    <ul className={styles["list"]}>
      {typesMeal.map((type) => (
        <li className={styles["list__item"]}>
          <TypeMealItem title={type.title} imgPath={type.imgPath} />
        </li>
      ))}
    </ul>
  );
};
