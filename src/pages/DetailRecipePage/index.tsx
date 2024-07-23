import { useNavigate, useParams } from "react-router-dom";

import { ICategoryRecipe, IRecipe } from "../../types/types";
import { recipes } from "../../assets/data/recipes";
import styles from "./styles.module.scss";

type RecipeCategory = keyof ICategoryRecipe;

export const DetailRecipePage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { recipesName } = useParams<{ recipesName: string }>();
  const selectedCategory: IRecipe[] = recipes[recipesName as RecipeCategory];

  const recipe = selectedCategory.find((recipe) => recipe.id === Number(id));
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
            <div className={styles["page__description-wrapper"]}>
              <h3 className={styles["page__description-title"]}>Кухня</h3>
              <h4 className={styles["page__description-subtitle"]}>
                {recipe?.kitchen_type}
              </h4>
            </div>
          </div>
          <div className={styles["page__description-row"]}>
            <div className={styles["page__description-wrapper"]}>
              <h3 className={styles["page__description-title"]}>
                Будет готово через
              </h3>
              <h4 className={styles["page__description-subtitle"]}>
                {`${recipe?.total_cooking_time} минут`}
              </h4>
            </div>
            <div className={styles["page__description-wrapper"]}>
              <h3 className={styles["page__description-title"]}>
                Время на кухне
              </h3>
              <h4 className={styles["page__description-subtitle"]}>
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
            <svg
              className={styles["page__ingridients-icon"]}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.7499 13C8.7499 12.5858 8.41412 12.25 7.9999 12.25C7.58569 12.25 7.2499 12.5858 7.2499 13V17C7.2499 17.4142 7.58569 17.75 7.9999 17.75C8.41412 17.75 8.7499 17.4142 8.7499 17V13Z" />
              <path d="M15.9999 12.25C16.4141 12.25 16.7499 12.5858 16.7499 13V17C16.7499 17.4142 16.4141 17.75 15.9999 17.75C15.5857 17.75 15.2499 17.4142 15.2499 17V13C15.2499 12.5858 15.5857 12.25 15.9999 12.25Z" />
              <path d="M12.7499 13C12.7499 12.5858 12.4141 12.25 11.9999 12.25C11.5857 12.25 11.2499 12.5858 11.2499 13V17C11.2499 17.4142 11.5857 17.75 11.9999 17.75C12.4141 17.75 12.7499 17.4142 12.7499 17V13Z" />
              <path d="M17.2737 3.47298C16.7981 3.28712 16.2654 3.25574 15.5819 3.25077C15.3012 2.65912 14.6983 2.25 13.9999 2.25H9.9999C9.3015 2.25 8.69865 2.65912 8.41794 3.25077C7.7344 3.25574 7.20166 3.28712 6.72611 3.47298C6.15792 3.69505 5.66371 4.07255 5.29999 4.5623C4.93306 5.05639 4.76082 5.68968 4.52374 6.56133L3.89587 8.86426C3.50837 9.06269 3.16928 9.32992 2.88642 9.6922C2.26442 10.4888 2.15427 11.4377 2.26492 12.5261C2.37229 13.5822 2.70479 14.9121 3.121 16.5769L3.1474 16.6825C3.41058 17.7353 3.62426 18.5901 3.8784 19.2572C4.14337 19.9527 4.47977 20.5227 5.03439 20.9558C5.58901 21.3888 6.22365 21.5769 6.96266 21.6653C7.67148 21.75 8.55256 21.75 9.63774 21.75H14.362C15.4472 21.75 16.3282 21.75 17.0371 21.6653C17.7761 21.5769 18.4107 21.3888 18.9653 20.9558C19.5199 20.5227 19.8563 19.9527 20.1213 19.2572C20.3755 18.5901 20.5891 17.7353 20.8523 16.6825L20.8787 16.577C21.2949 14.9122 21.6274 13.5822 21.7348 12.5261C21.8454 11.4377 21.7353 10.4888 21.1133 9.6922C20.8305 9.32995 20.4914 9.06274 20.104 8.86431L19.4761 6.56133C19.239 5.68968 19.0667 5.05639 18.6998 4.5623C18.3361 4.07255 17.8419 3.69505 17.2737 3.47298ZM7.27214 4.87007C7.49194 4.78416 7.75752 4.75888 8.41935 4.75219C8.70067 5.34225 9.30267 5.75 9.9999 5.75H13.9999C14.6971 5.75 15.2991 5.34225 15.5805 4.75219C16.2423 4.75888 16.5079 4.78416 16.7277 4.87007C17.0336 4.98964 17.2997 5.19291 17.4956 5.45663C17.6717 5.69377 17.775 6.02508 18.0659 7.09194L18.4195 8.3887C17.3817 8.24996 16.0419 8.24998 14.3773 8.25H9.62246C7.95788 8.24998 6.61809 8.24996 5.5803 8.38868L5.93388 7.09195C6.22478 6.02508 6.32812 5.69376 6.50423 5.45662C6.70008 5.19291 6.96619 4.98964 7.27214 4.87007ZM9.9999 3.75C9.86183 3.75 9.7499 3.86193 9.7499 4C9.7499 4.13807 9.86183 4.25 9.9999 4.25H13.9999C14.138 4.25 14.2499 4.13807 14.2499 4C14.2499 3.86193 14.138 3.75 13.9999 3.75H9.9999ZM4.06873 10.6153C4.34756 10.2582 4.78854 10.0183 5.69971 9.88649C6.63034 9.75187 7.89217 9.75 9.68452 9.75H14.3152C16.1075 9.75 17.3694 9.75187 18.3 9.88649C19.2112 10.0183 19.6522 10.2582 19.931 10.6153C20.2098 10.9725 20.3356 11.4584 20.2425 12.3744C20.1474 13.3099 19.8432 14.5345 19.4084 16.2733C19.1312 17.3824 18.9381 18.1496 18.7196 18.7231C18.5083 19.2778 18.3014 19.5711 18.0422 19.7735C17.783 19.9758 17.4483 20.1054 16.859 20.1759C16.2496 20.2488 15.4584 20.25 14.3152 20.25H9.68452C8.54133 20.25 7.75015 20.2488 7.14076 20.1759C6.5514 20.1054 6.21667 19.9758 5.95751 19.7735C5.69835 19.5711 5.49144 19.2778 5.28013 18.7231C5.06163 18.1496 4.86853 17.3824 4.59127 16.2733C4.15656 14.5345 3.85233 13.3099 3.75723 12.3744C3.66411 11.4584 3.78989 10.9725 4.06873 10.6153Z" />
            </svg>
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
                  <span
                    className={styles["page__ingridients-item-description"]}
                  >
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
          <ul className={styles["page__manual-wrapper"]}>
            <h4 className={styles["page__manual-subtitle"]}>Подготовиться</h4>
            <li className={styles["page__manual-item"]}>
              <img
                className={styles["page__manual-img"]}
                src={recipe?.preparation?.image_path}
                alt="Подготовка необходимых продуктов"
              />
              <p className={styles["page__manual-descriptin"]}>
                {recipe?.preparation?.content}
              </p>
            </li>
          </ul>
          <ul className={styles["page__manual-wrapper"]}>
            <h4 className={styles["page__manual-subtitle"]}>Начать готовить</h4>
            {recipe?.cooking?.map((step, i) => (
              <li className={styles["page__manual-item"]} key={step.title}>
                <span className={styles["page__manual-step"]}>{i + 1}</span>
                <img
                  className={styles["page__manual-img"]}
                  src={step.image_path}
                  alt="Шаг приготовления"
                />
                <p className={styles["page__manual-descriptin"]}>
                  {step.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};
