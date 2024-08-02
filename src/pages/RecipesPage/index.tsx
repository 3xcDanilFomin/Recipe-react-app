import { useParams } from "react-router-dom";

import { RecipesList, TitlePage } from "../../components";
import { recipes } from "../../assets/data/recipes";
import { ICategoryRecipes, IRecipe } from "../../types/types";
import styles from "./styles.module.scss";

type RecipeCategory = keyof ICategoryRecipes;

export const RecipesPage: React.FC = () => {
  const { recipesName } = useParams<{ recipesName: string }>();
  const selectedCategory: IRecipe[] = recipes[recipesName as RecipeCategory];

  return (
    <main className={styles["recipes"]}>
      <TitlePage title="Поиск" />
      <section className={styles["recipes__content"]}>
        <div className={styles["recipes__wrapper"]}>
          <RecipesList recipes={selectedCategory} />
        </div>
      </section>
    </main>
  );
};
