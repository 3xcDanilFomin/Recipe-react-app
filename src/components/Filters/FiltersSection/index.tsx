import { InputRange } from "../../UI/InputRange";
import { IFilterOption } from "../../../types/types";
import styles from "./styles.module.scss";
import { useState } from "react";

interface FiltersSectionProps {
  filterType: "list" | "range";
  filterTitle: string;
  filterOptions?: IFilterOption[];
  rangeFilterValues?: string[];
  multiple?: boolean;
}

export const FiltersSection: React.FC<FiltersSectionProps> = ({
  filterType,
  filterTitle,
  filterOptions,
  rangeFilterValues,
  multiple = false,
}) => {
  const [isActive, setIsActive] = useState<number | null>(null);
  const [activeElements, setActiveElements] = useState<number[]>([]);

  const hendleClickButton = (indexElement: number): void => {
    if (multiple) {
      if (activeElements.includes(indexElement)) {
        setActiveElements(activeElements.filter((el) => el !== indexElement));
      } else {
        setActiveElements([...activeElements, indexElement]);
      }
    } else {
      setIsActive(isActive === indexElement ? null : indexElement);
    }
  };

  return (
    <div className={styles["filter"]}>
      <h2 className={styles["filter__title"]}>{filterTitle}</h2>
      {filterType === "range" && rangeFilterValues?.length ? (
        <InputRange
          values={rangeFilterValues}
          min={0}
          max={rangeFilterValues.length - 1}
          step={0.1}
        />
      ) : (
        <ul className={styles["filter__list"]}>
          {filterOptions?.map((option, index) => (
            <li
              onClick={() => hendleClickButton(index)}
              key={option.id}
              className={
                multiple
                  ? activeElements.includes(index)
                    ? [styles["filter__list-item"], styles["active"]].join(" ")
                    : styles["filter__list-item"]
                  : isActive === index
                  ? [styles["filter__list-item"], styles["active"]].join(" ")
                  : styles["filter__list-item"]
              }
            >
              <button className={styles["filter__list-btn"]}>
                {option.value}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
