import { IRecipe } from "../../../types/types";
import { Description, Ingridients, Manual, Nutritions, Subtitle } from "../../index";
import styles from "./styles.module.scss";

interface RecipeDetailProps {
  recipe: IRecipe;
}

export const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe }) => {
  return (
    <section className={styles["page__content"]}>
      <h1 className={styles["page__title"]}>{recipe.title}</h1>
      <Subtitle subtitle={recipe.subtitle} />
      <Description
        kitchenType={recipe.kitchenType}
        totalCookingTime={recipe.totalCookingTime}
        activeCookingTime={recipe.activeCookingTime}
        allergens={recipe.allergens}
        acuityLevel={recipe.acuityLevel}
        difficultyLevel={recipe.difficultyLevel}
      />
      <Nutritions nutritionDetails={recipe.nutritionDetails} />
      <Ingridients
        mainIngredientTitle={recipe.mainIngredientTitle}
        mainIngredients={recipe.mainIngredients}
        optionalIngredientTitle={recipe.optionalIngredientTitle}
        optionalIngredients={recipe.optionalIngredients}
      />
      <Manual
        preparation={recipe.preparation}
        cooking={recipe.cooking}
        impression={recipe.impression}
      />
    </section>
  );
};
