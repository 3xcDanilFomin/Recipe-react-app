import { toHoursAndMinutes } from "../../utils/formatTime";
import styles from "./styles.module.scss";

interface RecipeDescriptionProps {
  kitchenType: string;
  totalCookingTime: number;
  activeCookingTime: number;
}

export const RecipeDescription: React.FC<RecipeDescriptionProps> = ({
  kitchenType,
  totalCookingTime,
  activeCookingTime,
}) => {
  const sharpness = 2;
  const level = 5;
  return (
    <div className={styles["description"]}>
      <div className={styles["description__row"]}>
        <div className={styles["description__wrapper"]}>
          <h3 className={styles["description__title"]}>Кухня</h3>
          <h4 className={styles["description__text"]}>{kitchenType}</h4>
        </div>
      </div>
      <div className={styles["description__row"]}>
        <div className={styles["description__wrapper"]}>
          <h3 className={styles["description__title"]}>Будет готово через</h3>
          <h4 className={styles["description__text"]}>
            {toHoursAndMinutes(totalCookingTime)}
          </h4>
        </div>
        <div className={styles["description__wrapper"]}>
          <h3 className={styles["description__title"]}>Время на кухне</h3>
          <h4 className={styles["description__text"]}>
            {`${activeCookingTime} минут`}
          </h4>
        </div>
      </div>
      <div className={styles["description__row"]}>
        <div className={styles["description__wrapper"]}>
          <div className={styles["description__header"]}>
            <h3 className={styles["description__title"]}>Острота</h3>
            <span className={styles["description__hint"]}>?</span>
          </div>
          <div className={styles["description__icons"]}>
            {new Array(5).fill(0).map((_, i) => (
              <svg
                key={i}
                className={
                  i <= sharpness
                    ? [
                        styles["icon-pepper"],
                        styles["icon-pepper-active"],
                      ].join(" ")
                    : styles["icon-cook"]
                }
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={styles["icon-pepper--gren"]}
                  d="m14.876 4.723-.72-.102v.002c.001-.005-2.237-.147-2.237-.143v-.003l-.728-.005c0-.028.012-.689.548-1.154.394-.341.945-.484 1.641-.424.497.025.883.194 1.15.505.453.528.358 1.244.346 1.324Z"
                />
                <path
                  className={styles["icon-pepper--gren"]}
                  d="M13.177 3.58a.357.357 0 0 1-.363-.33c0-.027-.035-.666.18-1.374.298-.985.93-1.63 1.824-1.864a.366.366 0 0 1 .447.246.348.348 0 0 1-.256.428c-.641.168-1.083.629-1.312 1.37-.184.595-.156 1.152-.156 1.158a.355.355 0 0 1-.344.366h-.02Z"
                />
                <path
                  className={styles["icon-pepper--red"]}
                  d="M5.87 16c-2.322 0-4.353-.917-5.79-2.635a.339.339 0 0 1-.023-.407.372.372 0 0 1 .395-.15c.01.002 1.007.237 2.311.25a9.435 9.435 0 0 0 2.12-.206c.797-.175 1.495-.463 2.077-.857.594-.4 1.077-.92 1.436-1.542.412-.712.672-1.579.775-2.575v-.002c.085-.77.228-1.4.436-1.923.213-.534.488-.947.842-1.263a2.75 2.75 0 0 1 1.246-.625c.434-.097.929-.121 1.512-.072a2.78 2.78 0 0 1 1.24.264c.368.177.68.439.926.777.405.554.62 1.307.625 2.178.004.89-.202 1.866-.614 2.902a.309.309 0 0 1-.015.032c-.824 1.565-2.085 2.943-3.646 3.985-.752.502-1.556.913-2.389 1.222-.843.312-1.7.514-2.55.6A8.872 8.872 0 0 1 5.87 16Z"
                />
              </svg>
            ))}
          </div>
        </div>
        <div className={styles["description__wrapper"]}>
          <div className={styles["description__header"]}>
            <h3 className={styles["description__title"]}>Сложность</h3>
            <span className={styles["description__hint"]}>?</span>
          </div>
          <div className={styles["description__icons"]}>
            {new Array(5).fill(0).map((_, i) => (
              <svg
                key={i}
                className={
                  i <= level
                    ? [styles["icon-cook"], styles["icon-cook-active"]].join(
                        " "
                      )
                    : styles["icon-cook"]
                }
                viewBox="0 0 512.001 512.001"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m401.903 120.522c-10.038-27.464-27.936-51.99-51.239-69.945-27.339-21.063-60.073-32.196-94.663-32.196s-67.325 11.133-94.664 32.196c-23.303 17.955-41.201 42.481-51.239 69.945-60.917 1.204-110.098 51.132-110.098 112.332 0 29.326 11.232 57.077 31.627 78.14 16.937 17.491 38.677 28.823 62.322 32.708v55.298h324.102v-55.298c23.646-3.885 45.386-15.217 62.322-32.708 20.395-21.063 31.627-48.814 31.627-78.14.001-61.2-49.18-111.128-110.097-112.332z" />
                <path d="m93.95 478.62c0 8.284 6.716 15 15 15h294.102c8.284 0 15-6.716 15-15v-49.62h-324.102z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <div className={styles["description__row"]}>
        <div className={styles["description__wrapper"]}>
          <div className={styles["description__header"]}>
            <h3 className={styles["description__title"]}>
              Распространенный аллерген
            </h3>
            <span className={styles["description__hint"]}>?</span>
          </div>
          <h4 className={styles["description__text"]}>Белок коровьего молока, Пищевые добавки, Яйцо</h4>
        </div>
      </div>
      <p className={styles["description__text"]}>
        Убедитесь, что у вас нет индивидуальной непереносимости других
        ингридиентов.
      </p>
    </div>
  );
};
