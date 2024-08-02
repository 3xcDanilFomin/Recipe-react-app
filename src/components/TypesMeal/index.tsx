import { ITypeMeal } from "../../types/types";
import { TypeMealItem } from "./TypeMealItem";
import breakfastImg from "../../assets/image/typesMeal/breakfast.webp";
import lunchImg from "../../assets/image/typesMeal/lunch.webp";
import dinnerImg from "../../assets/image/typesMeal/dinner.webp";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const typesMeal: ITypeMeal[] = [
  {
    title: "Завтрак",
    imgPath: breakfastImg,
    urlPath: "breakfast"
  },
  {
    title: "Обед",
    imgPath: lunchImg,
    urlPath: "lunch"
  },
  {
    title: "Ужин",
    imgPath: dinnerImg,
    urlPath: "dinner"
  },
];

export const TypesMeal: React.FC = () => {
  return (
    <ul className={styles["list"]}>
      {typesMeal.map((type) => (
        <li className={styles["list__item"]}>
          <Link  to={`/recipes/${type.urlPath}`}>
            <TypeMealItem title={type.title} imgPath={type.imgPath} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
