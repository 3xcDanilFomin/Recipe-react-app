import { IRecipe } from "../../types/types";
import { RecipeIngridients } from "../RecipeIngridients";
import { Manual } from "../Manual";
import { NutritionDetails } from "../NutritionDetails";
import { RecipeDescription } from "../RecipeDescription";
import { RecipeSubtitle } from "../RecipeSubtitle";
import styles from "./styles.module.scss";

interface RecipeDetailProps {
  recipe: IRecipe;
}

export const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe }) => {
  return (
    <section className={styles["page__content"]}>
      <h1 className={styles["page__title"]}>{recipe.title}</h1>
      <RecipeSubtitle subtitle={recipe.subtitle} />
      <RecipeDescription
        kitchenType={recipe.kitchenType}
        totalCookingTime={recipe.totalCookingTime}
        activeCookingTime={recipe.activeCookingTime}
        allergens={recipe.allergens}
        acuityLevel={recipe.acuityLevel}
        difficultyLevel={recipe.difficultyLevel}
      />
      <NutritionDetails nutritionDetails={recipe.nutritionDetails} />
      <RecipeIngridients
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
