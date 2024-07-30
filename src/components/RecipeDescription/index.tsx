import { useState } from "react";

import { toHoursAndMinutes } from "../../utils/formatTime";
import { IconsLine } from "../IconsLine";
import { Hints } from "../Hints";
import { HintButton } from "../UI/HintButton";
import {
  allergensHints,
  difficultyHints,
  sharpnessHints,
} from "../../assets/data/hints";
import styles from "./styles.module.scss";

interface RecipeDescriptionProps {
  kitchenType: string;
  totalCookingTime: number;
  activeCookingTime: number;
  allergens: string;
  acuityLevel: number;
  difficultyLevel: number;
}

export const RecipeDescription: React.FC<RecipeDescriptionProps> = ({
  kitchenType,
  totalCookingTime,
  activeCookingTime,
  allergens,
  acuityLevel,
  difficultyLevel,
}) => {
  const [isShowSharpnessHints, setIsShowSharpnessHints] =
    useState<boolean>(false);

  const [isShowDifficultyHints, setIsShowDifficultyHints] =
    useState<boolean>(false);

  const [isShowAllergensHints, setIsShowAllergensHints] =
    useState<boolean>(false);

  const handleClickSharpnessHints = () => {
    document.body.classList.add("open-drawer");
    setIsShowSharpnessHints(true);
  };

  const handleClickDifficultyHints = () => {
    document.body.classList.add("open-drawer");
    setIsShowDifficultyHints(true);
  };

  const handleClickAllergensHints = () => {
    document.body.classList.add("open-drawer");
    setIsShowAllergensHints(true);
  };

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
            <HintButton onClick={handleClickSharpnessHints} />
            <Hints
              isShow={isShowSharpnessHints}
              showHints={setIsShowSharpnessHints}
              hints={sharpnessHints}
              typeIcon="pepper"
            />
          </div>
          <IconsLine count={acuityLevel} type={"pepper"} />
        </div>
        <div className={styles["description__wrapper"]}>
          <div className={styles["description__header"]}>
            <h3 className={styles["description__title"]}>Сложность</h3>
            <HintButton onClick={handleClickDifficultyHints} />
            <Hints
              isShow={isShowDifficultyHints}
              showHints={setIsShowDifficultyHints}
              hints={difficultyHints}
              typeIcon="cook"
            />
          </div>
          <IconsLine type={"cook"} count={difficultyLevel} />
        </div>
      </div>
      <div className={styles["description__row"]}>
        <div className={styles["description__wrapper"]}>
          <div className={styles["description__header"]}>
            <h3 className={styles["description__title"]}>
              Распространенный аллерген
            </h3>
            <HintButton onClick={handleClickAllergensHints} />
            <Hints
              isShow={isShowAllergensHints}
              showHints={setIsShowAllergensHints}
              hints={allergensHints}
            />
          </div>
          <h4 className={styles["description__text"]}>{allergens}</h4>
        </div>
      </div>
      <p className={styles["description__text"]}>
        Убедитесь, что у вас нет индивидуальной непереносимости других
        ингридиентов.
      </p>
    </div>
  );
};
