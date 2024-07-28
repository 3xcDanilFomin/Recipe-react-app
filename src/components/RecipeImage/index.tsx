import { IRecipe } from "../../types/types";
import styles from "./styles.module.scss";

interface RecipeImageProps {
  recipe: IRecipe | undefined;
}

export const RecipeImage: React.FC<RecipeImageProps> = ({ recipe }) => {
  return (
    <img
      className={styles["banner"]}
      src={recipe?.imagePath}
      alt={recipe?.title}
    />
  );
};
