import {
  calorieRangeFilters,
  cookingTimeFilters,
  typeDishFilters,
  typeMealFilters,
  worldKitchensFilters,
} from "../../assets/data/filters";
import { FiltersSection } from "../index";
import styles from "./styles.module.scss";

export const Filters: React.FC = () => {
  return (
    <div className={styles["filters-wrapper"]}>
      <FiltersSection
        filterTitle={"Время приготовления"}
        filterType="range"
        rangeFilterValues={cookingTimeFilters}
      />
      <FiltersSection
        filterTitle={"Калорийность на 100г."}
        filterType="list"
        filterOptions={calorieRangeFilters}
      />
      <FiltersSection
        filterTitle={"Тип приема пищи"}
        filterType="list"
        filterOptions={typeMealFilters}
        multiple={true}
      />
      <FiltersSection
        filterTitle={"Тип блюда"}
        filterType="list"
        filterOptions={typeDishFilters}
        multiple={true}
      />
      <FiltersSection
        filterTitle={"Кухня мира"}
        filterType="list"
        filterOptions={worldKitchensFilters}
        multiple={true}
      />
    </div>
  );
};
