import { Link } from "react-router-dom";

import { TitlePage } from "../../components";
import { recipes } from "../../assets/data/recipes";
import styles from "./styles.module.scss";

export const HomePage: React.FC = () => {
  const newRecipe = recipes.newRecipes.slice(0, 10);
  const popularRecipes = recipes.popularRecipes.slice(0, 10);
  const cookNow = recipes.cookNow.slice(0, 10);

  return (
    <main className={styles["home"]}>
      <TitlePage title={"Главная"} />
      <section className={styles["home__content"]}>
        <div className={styles["home__wrapper"]}>
          <div className={styles["home__row"]}>
            <div className={styles["list__header"]}>
              <h2 className={styles["list__title"]}>Новые рецепты</h2>
              <Link to={`/search/recipes/newRecipes`} className={styles["list__link"]}>
                <span className={styles["list__link-text"]}>Все</span>
                <svg
                  className={styles["list__link-icon"]}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" />
                </svg>
              </Link>
            </div>
            <ul className={styles["list"]}>
              {newRecipe.map((recipe) => (
                <li key={recipe.id} className={styles["list__item"]}>
                  <Link to={`/search/recipes/newRecipes/${recipe.id}`}>
                    <div className={styles["card"]}>
                      <img
                        className={styles["card__img"]}
                        src={recipe.imagePath}
                        alt={recipe.title}
                      />
                      <h3 className={styles["card__title"]}>{recipe.title}</h3>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles["home__row"]}>
            <div className={styles["list__header"]}>
              <h2 className={styles["list__title"]}>Популярные рецепты</h2>
              <Link
                to={`/search/recipes/popularRecipes`}
                className={styles["list__link"]}
              >
                <span className={styles["list__link-text"]}>Все</span>
                <svg
                  className={styles["list__link-icon"]}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" />
                </svg>
              </Link>
            </div>
            <ul className={styles["list"]}>
              {popularRecipes.map((recipe) => (
                <li key={recipe.id} className={styles["list__item"]}>
                  <Link to={`/search/recipes/popularRecipes/${recipe.id}`}>
                    <div className={styles["card"]}>
                      <img
                        className={styles["card__img"]}
                        src={recipe.imagePath}
                        alt={recipe.title}
                      />
                      <h3 className={styles["card__title"]}>{recipe.title}</h3>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles["home__row"]}>
            <div className={styles["list__header"]}>
              <h2 className={styles["list__title"]}>Приготовить сейчас</h2>
              <Link to={`/search/recipes/cookNow`} className={styles["list__link"]}>
                <span className={styles["list__link-text"]}>Все</span>
                <svg
                  className={styles["list__link-icon"]}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" />
                </svg>
              </Link>
            </div>
            <ul className={styles["list"]}>
              {cookNow.map((recipe) => (
                <li key={recipe.id} className={styles["list__item"]}>
                  <Link to={`/search/recipes/cookNow/${recipe.id}`}>
                    <div className={styles["card"]}>
                      <img
                        className={styles["card__img"]}
                        src={recipe.imagePath}
                        alt={recipe.title}
                      />
                      <h3 className={styles["card__title"]}>{recipe.title}</h3>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};
