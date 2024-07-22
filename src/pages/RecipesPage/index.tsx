import { RecipesList } from "../../components/Recipeslist";
import { TitlePage } from "../../components/TitlePage";

export const RecipesPage = () => {
  return (
    <main>
      <TitlePage title="Поиск" />
      <RecipesList />
    </main>
  );
};
