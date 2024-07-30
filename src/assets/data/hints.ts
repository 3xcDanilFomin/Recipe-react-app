import { IHints } from "../../types/types";

export const sharpnessHints: IHints = {
  title: "Острота",
  subtitle:
    "Оцениваем, на сколько острым получится блюдо, в которое по рецепту добавляются перец или специи.",
  hintsList: [
    {
      countIcons: 1,
      level: "1",
      description: "Еду поперчили совсем чуть-чуть.",
    },
    {
      countIcons: 2,
      level: "2",
      description: "Перец ощущается, но у блюда нет острого послевкусия.",
    },
    {
      countIcons: 3,
      level: "3",
      description: "Появляется небольшое «острое» послевкусие.",
    },
    {
      countIcons: 4,
      level: "4",
      description:
        "Перец ярко чувствуется, но блюдо все еще можно есть, не запивая.",
    },
    {
      countIcons: 5,
      level: "5",
      description: "Очень острая еда, не каждый такое ест!",
    },
  ],
};

export const difficultyHints: IHints = {
  title: "Сложность",
  subtitle:
    "Оцениваем трудоемкость рецептов, чтобы вы могли рассчитать свое время и силы.",
  hintsList: [
    {
      countIcons: 2,
      level: "1-2",
      description: "Очень простые блюда.",
    },
    {
      countIcons: 3,
      level: "3",
      description:
        "Готовится понятно, но нужен опыт, с первого раза может не получиться.",
    },
    {
      countIcons: 5,
      level: "4-5",
      description: "Понадобится особая техника, сноровка и время.",
    },
  ],
};

export const allergensHints: IHints = {
  title: "Распространенный аллерген",
  subtitle: `Здесь мы обращаем ваше внимание на то, есть ли в блюде распространенные и опасные аллергены. Перед тем как готовить, убедитесь, что у вас нет индивидуальной непереносимости других продуктов из списка ингридиентов.`,
};
