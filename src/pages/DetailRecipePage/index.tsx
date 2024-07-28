import { useLayoutEffect, useRef } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import { IRecipe, ICategoryRecipes } from "../../types/types";
import { recipes } from "../../assets/data/recipes";
import { RecipeHeader } from "../../components/RecipeHeader";
import { RecipeDetail } from "../../components/RecipeDetail";
import { RecipeImage } from "../../components/RecipeImage";
import styles from "./styles.module.scss";

type RecipeCategory = keyof ICategoryRecipes;

export const DetailRecipePage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { recipesName } = useParams<{ recipesName: string }>();
  const selectedCategory: IRecipe[] = recipes[recipesName as RecipeCategory];
  const recipe = selectedCategory.find((recipe) => recipe.id === Number(id));
  const location = useLocation();
  const pageRef = useRef<HTMLElement>(null);

  const handleNavigateBack = () => {
    navigate(-1);
  };

  useLayoutEffect(() => {
    if (pageRef.current) pageRef.current.scrollIntoView();
  }, [location]);

  if (!recipe) {
    return (
      <main className={styles["page"]} ref={pageRef}>
        <RecipeHeader onNavigateBack={handleNavigateBack} />
        <div>Рецепт не найден</div>
      </main>
    );
  }

  return (
    <main className={styles["page"]} ref={pageRef}>
      <RecipeHeader onNavigateBack={handleNavigateBack} />
      <RecipeImage recipe={recipe} />
      <RecipeDetail recipe={recipe} />
    </main>
  );
};
