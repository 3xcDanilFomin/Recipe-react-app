import { IRecipe } from "../../types/types";
import { Ingridients } from "../Ingridients";
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
        kitchenType={recipe.kitchen_type}
        totalCookingTime={recipe.total_cooking_time}
        activeCookingTime={recipe.active_cooking_time}
      />
      <NutritionDetails nutritionDetails={recipe.nutritionDetails} />
      <Ingridients
        mainIngredientTitle={recipe.main_ingredient_title}
        mainIngredients={recipe.main_ingredients}
        optionalIngredientTitle={recipe.optional_ingredient_title}
        optionalIngredients={recipe.main_ingredients}
      />
      <Manual preparation={recipe.preparation} cooking={recipe.cooking} />
    </section>
  );
};
