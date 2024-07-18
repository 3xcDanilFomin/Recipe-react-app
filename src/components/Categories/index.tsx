import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { memo, useState } from "react";

interface ICategory {
  title: string;
  path: string;
}

const categories: ICategory[] = [
  {
    title: "Все рецепты",
    path: "",
  },
  {
    title: "Первые блюда",
    path: "",
  },
  {
    title: "Вторые блюда",
    path: "",
  },
  {
    title: "Гарниры",
    path: "",
  },
  {
    title: "Соусы",
    path: "",
  },
  {
    title: "Салаты",
    path: "",
  },
  {
    title: "Закуски",
    path: "",
  },
  {
    title: "Десерты",
    path: "",
  },
  {
    title: "Напитки",
    path: "",
  },
];

export const Categories: React.FC = memo(() => {
  const [activeCategory, setActiveCategory] = useState<string>(
    categories[0].title
  );

  const hendleActiveCategory = (title: string) => {
    setActiveCategory(title);
  };

  return (
    <ul className={styles["menu"]}>
      {categories.map((category) => (
        <li
          className={
            category.title === activeCategory
              ? [styles["menu__item"], styles["menu__item--active"]].join(" ")
              : styles["menu__item"]
          }
          onClick={() => hendleActiveCategory(category.title)}
          key={category.title}
        >
          <Link className={styles["menu__link"]} to={category.path}>
            {category.title}
          </Link>
        </li>
      ))}
    </ul>
  );
});
