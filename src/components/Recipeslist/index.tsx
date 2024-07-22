import { RecipesItem } from "./RecipesItem";
import { IRecipe } from "../../types/types";
import styles from "./styles.module.scss";

const recipesItems: IRecipe[] = [
  {
    title: "Салат с козьей рикоттой и апельсинами",
    imgPath:
      "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNS81dHM4blYuanBlZw.jpg",
    cookingTime: "15 минут",
  },
  {
    title: "Узбекский салат «Ачик-чучук» к плову",
    imgPath:
      "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9Ob0Z5YnMuanBlZw.jpg",
    cookingTime: "1 час",
  },
  {
    title: "Салат с курицей, яблоком и вяленой клюквой",
    imgPath:
      "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC9rQWJUeTYuanBlZw.jpg",
    cookingTime: "50 минут",
  },
];

export const RecipesList = () => {
  return (
    <ul className={styles["recipes-list"]}>
      {recipesItems?.map((item) => (
        <RecipesItem recipe={item} key={item.title} />
      ))}
    </ul>
  );
};
