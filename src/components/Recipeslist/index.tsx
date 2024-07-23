import { recipes } from "../../assets/data/recipes";
import { RecipesItem } from "./RecipesItem";
import styles from "./styles.module.scss";

export const RecipesList = () => {
  return (
    <ul className={styles["recipes-list"]}>
      {recipes.salads?.map((recipe) => (
        <RecipesItem recipe={recipe} key={recipe.id} />
      ))}
    </ul>
  );
};
