import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";
import { InputRange } from "../../components/UI/InputRange";

export const FiltersPage: React.FC = () => {
  const navigate = useNavigate();
  const arr = [
    "от 1 минуты",
    "до 15 минут",
    "до 30 минут",
    "до 45 минут",
    "до часа",
    "более часа",
  ];
  return (
    <div className={styles["filters"]}>
      <header className={styles["header"]}>
        <svg
          className={styles["header__icon"]}
          onClick={() => navigate(-1)}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 12H19M5 12L11 6M5 12L11 18" />
        </svg>
        <h1 className={styles["header__title"]}>Поиск</h1>
      </header>
      <section className={styles["content"]}>
        <div className={styles["content__row"]}>
          <h2 className={styles["content__title"]}>Время приготовления</h2>
          <InputRange values={arr} min={0} max={arr.length - 1} step={0.1} />

        </div>
        <div className={styles["content__row"]}>
          <h2 className={styles["content__title"]}>Калорийность на 100г.</h2>
          <ul className={styles["list"]}>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>до 200 ккал</button>
            </li>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>200 - 400 ккал</button>
            </li>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>400 - 600 ккал</button>
            </li>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>600 - 800 ккал</button>
            </li>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>Более 800 ккал</button>
            </li>
          </ul>
        </div>
        <div className={styles["content__row"]}>
          <h2 className={styles["content__title"]}>Тип приема пищи</h2>
          <ul className={styles["list"]}>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>Завтрак</button>
            </li>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>Обед</button>
            </li>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>Полдник</button>
            </li>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>Ужин</button>
            </li>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>Перекус</button>
            </li>
          </ul>
        </div>
        <div className={styles["content__row"]}>
          <h2 className={styles["content__title"]}>Тип блюда</h2>
          <ul className={styles["list"]}>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>Первые блюда</button>
            </li>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>Вторые блюда</button>
            </li>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>Салаты</button>
            </li>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>Закуски</button>
            </li>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>Выпечка</button>
            </li>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>Соусы и маринады</button>
            </li>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>Заготовки</button>
            </li>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>Напити</button>
            </li>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>Десерты</button>
            </li>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>Гарниры</button>
            </li>
          </ul>
        </div>
        <div className={styles["content__row"]}>
          <h2 className={styles["content__title"]}>Кухня мира</h2>
          <ul className={styles["list"]}>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>Русская кухня</button>
            </li>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>Турецкая кухня</button>
            </li>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>Азиатская кухня</button>
            </li>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>Итальянская кухня</button>
            </li>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>Грузинская кухня</button>
            </li>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>Корейская кухня</button>
            </li>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>Польская кухня</button>
            </li>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>
                Дагестанская кухня
              </button>
            </li>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>
                Скандинавская кухня
              </button>
            </li>
            <li className={styles["list__item"]}>
              <button className={styles["list__btn"]}>Голландская кухня</button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
