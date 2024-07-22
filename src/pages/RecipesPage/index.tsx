import { RecipesList } from "../../components/Recipeslist";
import { TitlePage } from "../../components/TitlePage";
import styles from "./styles.module.scss";

export const RecipesPage = () => {
  return (
    <main>
      <TitlePage title="Поиск" />
      <RecipesList />
    </main>
  );
};
