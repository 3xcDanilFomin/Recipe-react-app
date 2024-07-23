import { IRecipe } from "../../types/types";
import { RecipesItem } from "./RecipesItem";
import styles from "./styles.module.scss";

interface RecipesListProps {
  recipes: IRecipe[];
}

export const RecipesList: React.FC<RecipesListProps> = ({ recipes }) => {
  return (
    <ul className={styles["recipes-list"]}>
      {recipes?.map((recipe) => (
        <RecipesItem recipe={recipe} key={recipe.id} />
      ))}
    </ul>
  );
};
