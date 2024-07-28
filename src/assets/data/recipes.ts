import { ICategoryRecipes } from "../../types/types";

export const recipes: ICategoryRecipes = {
  salads: [
    {
      id: 221481,
      active_cooking_time: 15,
      total_cooking_time: 15,
      difficulty_level: 2,
      title: "Салат с козьей рикоттой и апельсинами",
      subtitle:
        "Этот салат — отличный вариант легкого и быстрого ужина. За пикантность отвечает заправка на основе оливкового масла и меда. Мы дополнили блюдо дольками апельсина, чтобы вкус стал более интересным, с легкой кислинкой. Чтобы салат получился сытнее, добавьте к нему козью рикотту Galbani. С ней вкус блюда будет нежным и слегка солоноватым. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNS81dHM4blYuanBlZw.jpg",
      preparation: {
        content:
          "Помойте авокадо, апельсины и чеснок. Ополосните салат и обсушите бумажными полотенцами. Разрежьте авокадо пополам и уберите косточку. Очистите авокадо и апельсин, уберите шелуху с чеснока. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNS8zZTNQV1IuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Выложите на тарелку шпинат. Разделите апельсины на дольки. Уберите все косточки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwNS9YNzdIbjYuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description: "Нарежьте ломтиками мякоть авокадо.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwNS80Mm1DVEEuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Положите апельсины и авокадо на тарелку к шпинату, но не перемешивайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwNS80NUd1enguanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Пропустите чеснок через пресс, положите в небольшую пиалу. Смешайте его с медом, оливковым маслом и уксусом. Полейте этой смесью салат. Аккуратно перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwNS82VEhzYnIuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Выложите козью рикотту на тарелку к овощам при помощи ложки. Посыпьте семечками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNS8zbktwQU0uanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для заправки и подачи",
      main_ingredients: [
        {
          id: 1,
          weight: 200,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Авокадо",
        },
        {
          id: 6,
          weight: 250,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Апельсин",
        },
        {
          id: 447,
          weight: 80,
          custom_measure: "г",
          custom_measure_count: 80,
          title: "Шпинат",
        },
        {
          id: 485,
          weight: 36,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Подсолнечные семечки",
        },
        {
          id: 20599,
          weight: 75,
          custom_measure: "г",
          custom_measure_count: 75,
          title: "Козья рикотта Galbani",
        },
      ],
      optional_ingredients: [
        {
          id: 51,
          weight: 18,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Винный уксус белый",
        },
        {
          id: 240,
          weight: 34,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Оливковое масло",
        },
        {
          id: 204,
          weight: 7,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Мед",
        },
        {
          id: 440,
          weight: 5,
          custom_measure: "зубчик",
          custom_measure_count: 1,
          title: "Чеснок",
        },
        {
          id: 11758,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Микрозелень",
        },
      ],
      nutritionDetails: [
        { title: "Калории", value: 162.4 },
        { title: "Белки", value: 2.794 },
        { title: "Жиры", value: 17.56 },
        { title: "Углеводы", value: 6.53 },
      ],
    },
  ],
  // "first-courses": [],
  // "second-courses": [],
  // snacks: [],
  // garnish: [],
  // desserts: [],
  // bakery: [],
  // drinks: [],
  // preserves: [],
  // sauces: []
};
