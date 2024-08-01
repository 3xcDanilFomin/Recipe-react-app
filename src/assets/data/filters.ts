import { IFilterOption } from "../../types/types";

export const cookingTimeFilters: string[] = [
  "от 1 минуты",
  "до 15 минут",
  "до 30 минут",
  "до 45 минут",
  "до часа",
  "более часа",
];

export const calorieRangeFilters: IFilterOption[] = [
  { id: 1, value: "до 200 ккал" },
  { id: 2, value: "200 - 400 ккал" },
  { id: 3, value: "400 - 600 ккал" },
  { id: 4, value: "600 - 800 ккал" },
  { id: 5, value: "Более 800 ккал" },
];

export const typeMealFilters: IFilterOption[] = [
  { id: 1, value: "Завтрак" },
  { id: 2, value: "Обед" },
  { id: 3, value: "Полдник" },
  { id: 4, value: "Ужин" },
  { id: 5, value: "Перекус" },
];

export const typeDishFilters: IFilterOption[] = [
  { id: 1, value: "Первые блюда" },
  { id: 2, value: "Вторые блюда" },
  { id: 3, value: "Салаты" },
  { id: 4, value: "Закуски" },
  { id: 5, value: "Выпечка" },
  { id: 6, value: "Соусы и маринады" },
  { id: 7, value: "Заготовки" },
  { id: 8, value: "Напитки" },
  { id: 9, value: "Десерты" },
  { id: 10, value: "Гарниры" },
];

export const worldKitchensFilters = [
  { id: 1, value: "Русская кухня" },
  { id: 2, value: "Турецкая кухня" },
  { id: 3, value: "Азиатская кухня" },
  { id: 4, value: "Итальянская кухня" },
  { id: 5, value: "Грузинская кухня" },
  { id: 6, value: "Корейская кухня" },
  { id: 7, value: "Польская кухня" },
  { id: 8, value: "Дагестанская кухня" },
  { id: 9, value: "Скандинавская кухня" },
  { id: 10, value: "Голландская кухня" },
];
