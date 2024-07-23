import { useNavigate, useParams } from "react-router-dom";

import { recipes } from "../../assets/data/recipes";
import styles from "./styles.module.scss";

export const DetailRecipePage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const recipe = recipes.salads.find((recipe) => recipe.id === Number(id));
  console.log(recipe?.cooking);
  return (
    <main className={styles["page"]}>
      <header className={styles["header"]}>
        <ul className={styles["menu"]}>
          <li className={styles["menu__item"]}>
            <svg
              className={styles["menu__icon"]}
              onClick={() => navigate(-1)}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 12H19M5 12L11 6M5 12L11 18" />
            </svg>
          </li>
          <li className={styles["menu__item"]}>
            <div className={styles["menu__item-wrapper"]}>
              <svg
                className={styles["menu__icon"]}
                viewBox="-0.5 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.6001 3.91998C14.268 3.92397 12.9849 4.42297 12 5.32001C11.2277 4.61746 10.2676 4.15485 9.23679 3.98858C8.20602 3.82231 7.1491 3.95955 6.19498 4.3836C5.24087 4.80765 4.43081 5.50018 3.8635 6.37671C3.29619 7.25324 2.99614 8.27591 3.00004 9.32C3.00004 15.77 12 20.14 12 20.14C12 20.14 21 15.77 21 9.32C21 7.88784 20.4311 6.51434 19.4184 5.50165C18.4057 4.48895 17.0322 3.91998 15.6001 3.91998Z" />
              </svg>

              <svg
                className={[
                  styles["menu__icon"],
                  styles["menu__icon--fill"],
                ].join(" ")}
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="2" />
                <circle cx="16" cy="26" r="2" />
                <circle cx="16" cy="6" r="2" />
              </svg>
            </div>
          </li>
        </ul>
      </header>
      <img
        className={styles["page__banner"]}
        src={recipe?.image_path}
        alt={recipe?.title}
      />
      <section className={styles["page__content"]}>
        <h1 className={styles["page__title"]}>{recipe?.title}</h1>
        <h2 className={styles["page__subtitle"]}>{recipe?.subtitle}</h2>
        <div className={styles["page__description"]}>
          <div className={styles["page__description-row"]}>
            <h3 className={styles["page__description-title"]}>Кухня</h3>
            <h4 className={styles["page__description-title"]}>
              {recipe?.kitchen_type}
            </h4>
          </div>
          <div className={styles["page__description-row"]}>
            <div className={styles["page__description-wrapper"]}>
              <h3 className={styles["page__description-title"]}>
                Будет готово через
              </h3>
              <h4 className={styles["page__description-title"]}>
                {`${recipe?.total_cooking_time} минут`}
              </h4>
            </div>
            <div className={styles["page__description-wrapper"]}>
              <h3 className={styles["page__description-title"]}>
                Время на кухне
              </h3>
              <h4 className={styles["page__description-title"]}>
                {`${recipe?.active_cooking_time} минут`}
              </h4>
            </div>
          </div>
        </div>
        <div className={styles["page__nutrition"]}>
          <ul className={styles["page__nutrition-items"]}>
            <li className={styles["page__nutrition-item"]}>
              <h5 className={styles["page__nutrition-title"]}>Калории</h5>
              <div className={styles["page__nutrition-item-body"]}>
                <p className={styles["page__nutrition-text"]}>
                  {recipe?.calories}
                </p>
                <span className={styles["page__nutrition-weight"]}>кКал</span>
              </div>
            </li>
            <li className={styles["page__nutrition-item"]}>
              <h5 className={styles["page__nutrition-title"]}>Белки</h5>
              <div className={styles["page__nutrition-item-body"]}>
                <p className={styles["page__nutrition-text"]}>
                  {recipe?.proteins}
                </p>
                <span className={styles["page__nutrition-weight"]}>г</span>
              </div>
            </li>
            <li className={styles["page__nutrition-item"]}>
              <h5 className={styles["page__nutrition-title"]}>Жиры</h5>
              <div className={styles["page__nutrition-item-body"]}>
                <p className={styles["page__nutrition-text"]}>{recipe?.fats}</p>
                <span className={styles["page__nutrition-weight"]}>г</span>
              </div>
            </li>
            <li className={styles["page__nutrition-item"]}>
              <h5 className={styles["page__nutrition-title"]}>Углеводы</h5>
              <div className={styles["page__nutrition-item-body"]}>
                <p className={styles["page__nutrition-text"]}>
                  {recipe?.carbs}
                </p>
                <span className={styles["page__nutrition-weight"]}>г</span>
              </div>
            </li>
          </ul>
          <p className={styles["page__nutrition-description"]}>
            Пищевая ценность на 100 г. Калорийность рассчитана для сырых
            продуктов.
          </p>
        </div>
        <div className={styles["page__ingridients"]}>
          <header className={styles["page__ingridients-header"]}>
            <h3 className={styles["page__ingridients-title"]}>Продукты</h3>
          </header>
          <div className={styles["page__ingridients-body"]}>
            <h4 className={styles["page__ingridients-items-title"]}>
              {recipe?.main_ingredient_title}
            </h4>
            <ul className={styles["page__ingridients-items"]}>
              {recipe?.main_ingredients?.map((ingredient) => (
                <li
                  className={styles["page__ingridients-item"]}
                  key={ingredient.id}
                >
                  <h5 className={styles["page__ingridients-item-title"]}>
                    {ingredient.title}
                  </h5>
                  <span>
                    {ingredient.weight
                      ? `${ingredient.custom_measure_count} ${ingredient.custom_measure} = ${ingredient.weight} г`
                      : ingredient.custom_measure}
                  </span>
                </li>
              ))}
            </ul>
            <h4 className={styles["page__ingridients-items-title"]}>
              {recipe?.optional_ingredient_title}
            </h4>
            <ul className={styles["page__ingridients-items"]}>
              {recipe?.optional_ingredients?.map((ingredient) => (
                <li
                  className={styles["page__ingridients-item"]}
                  key={ingredient.id}
                >
                  <h5 className={styles["page__ingridients-item-title"]}>
                    {ingredient.title}
                  </h5>
                  <span>
                    {ingredient.weight
                      ? `${ingredient.custom_measure_count} ${ingredient.custom_measure} = ${ingredient.weight} г`
                      : ingredient.custom_measure}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles["page__manual"]}>
          <h3 className={styles["page__manual-title"]}>Пошаговый фоторецепт</h3>
          <div className={styles["page__manual-preparation"]}>
            <h4 className={styles["page__manual-preparation-title"]}>
              Подготовиться
            </h4>
            <img
              className={styles["page__manual-preparation-img"]}
              src={recipe?.preparation?.image_path}
              alt="Подготовка необходимых продуктов"
            />
            <p className={styles["page__manual-preparation-descriptin"]}>
              {recipe?.preparation?.content}
            </p>
          </div>
          <ul className={styles["page__manual-cooking"]}>
            <h4 className={styles["page__manual-cooking-title"]}>
              Начать готовить
            </h4>
            {recipe?.cooking?.map((step, i) => (
              <li className={styles["page__manual-item"]}>
                <span className={styles["page__manual-step"]}>{i + 1}</span>
                <img src={step.image_path} alt="Шаг приготовления" />
                <p>{step.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};
