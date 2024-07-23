import { ICategoryRecipe } from "../../types/types";

export const recipes: ICategoryRecipe = {
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
      proteins: 2.79,
      fats: 17.56,
      carbs: 6.53,
      calories: 162.4,
    },
    {
      id: 219118,
      active_cooking_time: 20,
      total_cooking_time: 60,
      difficulty_level: 2,
      title: "Узбекский салат «Ачик-чучук» к плову",
      subtitle:
        "Традиционный узбекский салат «Ачик-чучук» из помидоров, красного лука и жгучего перца балансирует вкус калорийного плова и смягчает его жирность остро-сладким соком овощей. Для салата нужно нарезать овощи так тонко, насколько это возможно, и обязательно дать им настояться и пропитаться вкусами друг друга. Чеснок, зелень и виноградный уксус в классический рецепт не входят, но они делают салат еще пикантнее и ароматнее, превращают его из дополнения к плову в самостоятельную закуску.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9Ob0Z5YnMuanBlZw.jpg",
      preparation: {
        content:
          "Помойте помидоры, петрушку, укроп и кинзу. Промокните овощи и зелень от влаги бумажными салфетками. Вымойте и почистите лук, чеснок и красный жгучий перец. Подготовьте разделочную доску и салатник.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy80Q1c4TkYuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Нарежьте красный лук очень тонкими полукольцами. Слегка помните их руками, чтобы лук размягчился. Вырежьте у помидоров места крепления плодоножки и нарежьте мякоть тонкими полукольцами.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy80NHdjNGIuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Нарежьте чеснок на тонкие слайсы. Измельчите жгучий перец тонкой соломкой или колечками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zSnhUS1YuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Отделите листочки кинзы, петрушки и кисточки укропа от стеблей. Мелко нарежьте листочки зелени.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zZmZqZjUuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Положите нарезанные помидоры, лук, чеснок, жгучий перец и рубленую зелень в салатник.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy80UEJ6djkuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Посолите овощи в салатнике, полейте их виноградным уксусом.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9ETjJrUmouanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Аккуратно перемешайте овощи и поставьте миску в холодильник на 30-40 минут, чтобы овощи выделили сок, а сам салат настоялся и охладился.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9zZHZSa3guanBlZw.jpg",
        },
      ],
      kitchen_type: "Узбекская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 272,
          weight: 240,
          custom_measure: "шт.",
          custom_measure_count: 3,
          title: "Помидор",
        },
        {
          id: 152,
          weight: 75,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Красный лук",
        },
        {
          id: 153,
          weight: 90,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Красный жгучий перец",
        },
        {
          id: 440,
          weight: 5,
          custom_measure: "зубчик",
          custom_measure_count: 1,
          title: "Чеснок",
        },
        {
          id: 260,
          weight: 2,
          custom_measure: "веточка",
          custom_measure_count: 1,
          title: "Петрушка",
        },
        {
          id: 116,
          weight: 3,
          custom_measure: "веточка",
          custom_measure_count: 1,
          title: "Кинза",
        },
        {
          id: 418,
          weight: 2,
          custom_measure: "веточка",
          custom_measure_count: 1,
          title: "Укроп",
        },
        {
          id: 352,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Соль",
        },
        {
          id: 12327,
          weight: 18,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Виноградный уксус 6%",
        },
      ],
      optional_ingredients: [
        {
          id: 281,
          weight: 80,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Пшеничная лепешка",
        },
      ],
      proteins: 2.23,
      fats: 1.44,
      carbs: 12.63,
      calories: 71.48,
    },
    {
      id: 222137,
      active_cooking_time: 20,
      total_cooking_time: 50,
      difficulty_level: 2,
      title: "Салат с курицей, яблоком и вяленой клюквой",
      subtitle:
        "В салате с курицей, яблоком и вяленой клюквой гармонично сочетаются разнообразные вкусы и текстуры. Куриное филе придает ему нежность и сытость. Приготовьте курицу для салата любым способом: отварите, пожарьте или запеките. Яблоко и клюква добавляют салату сладость. Кроме того, в него входят хрустящий жареный бекон, нарезанный кубиками пикантный сельдерей и ароматный розмарин.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC9rQWJUeTYuanBlZw.jpg",
      preparation: {
        content:
          "Разморозьте куриное филе на нижней полке холодильника, помойте его и обсушите. Помойте яблоко и сельдерей. Вырежьте у яблока сердцевину. Помойте и почистите красный лук. Подготовьте кастрюлю. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC8zUjJ5MnMuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Положите куриное филе в кастрюлю, залейте водой и поставьте на средний огонь, посолите. Доведите до кипения и снимите пену. Варите под крышкой на слабом огне 20 минут. Остудите курицу.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC8zbUI0NnkuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Разогрейте сухую сковороду на среднем огне. Обжарьте бекон по 1-2 минуты с каждой стороны.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC8zekpyODMuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Нарежьте небольшими кубиками яблоко, сельдерей и куриное филе. Мелко покрошите красный лук. Поломайте бекон на маленькие кусочки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC80OXJ1SmYuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Положите в миску курицу, яблоки, вяленую клюкву, бекон, сельдерей и красный лук. Добавьте майонез и розмарин, перец и соль. Хорошенько перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC9aQUVKb2IuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 14692,
          weight: 50,
          custom_measure: "г",
          custom_measure_count: 50,
          title: "Вяленая клюква",
        },
        {
          id: 168,
          weight: 200,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное филе",
        },
        {
          id: 19,
          weight: 51,
          custom_measure: "ломтик",
          custom_measure_count: 3,
          title: "Бекон",
        },
        {
          id: 451,
          weight: 125,
          custom_measure: "шт.",
          custom_measure_count: 0.5,
          title: "Яблоки",
        },
        {
          id: 361,
          weight: 45,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Стебель сельдерея",
        },
        {
          id: 152,
          weight: 75,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Красный лук",
        },
        {
          id: 802,
          weight: 2,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Сушеный розмарин",
        },
        {
          id: 194,
          weight: 105,
          custom_measure: "стакан",
          custom_measure_count: 0.5,
          title: "Майонез",
        },
        {
          id: 352,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Соль",
        },
        {
          id: 439,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Черный перец молотый",
        },
      ],
      optional_ingredients: [
        {
          id: 252,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Пекан",
        },
        {
          id: 309,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Салат «романо» / «ромэн»",
        },
      ],
      proteins: 9.57,
      fats: 14.73,
      carbs: 9.96,
      calories: 209.44,
    },
    {
      id: 219311,
      active_cooking_time: 40,
      total_cooking_time: 40,
      difficulty_level: 2,
      title: "Цезарь с беконом под домашним соусом",
      subtitle:
        "Существует множество способов приготовления соуса для «Цезаря». В этом рецепте мы выбрали самый простой вариант. Для этого все ингредиенты складываются в чашу блендера и пробиваются до однородности. Получается вкусная и ароматная заправка для сытного салата. Кстати, сам салат будет без сухариков. Вместо него — обжаренный до хруста бекон.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC80aHQyZUQuanBlZw.jpg",
      preparation: {
        content:
          "Помойте овощи и зелень. Почистите чеснок. Достаньте бекон из упаковки.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9MdWJxZGMuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Натрите сыр на крупной терке. Взбейте в блендере до однородности греческий йогурт, творожный сыр, чеснок, анчоусы, сладкий соус чили, каперсы и тертый сыр. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zRUFzdDMuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Обжарьте бекон на сковороде до появления хрустящей корочки. Переложите на тарелку, дайте остыть и нарежьте маленькими кусочками. \n",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zYlVGN2cuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Нарвите листья салата романо и айсберг крупными кусочками, положите в салатник. Разрежьте помидоры черри пополам, добавьте к блюду.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zaXkzUnUuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description: "Выложите в салатник обжаренный бекон. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9udWxs.jpg",
        },
      ],
      kitchen_type: "Авторская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для соуса",
      main_ingredients: [
        {
          id: 309,
          weight: 150,
          custom_measure: "г",
          custom_measure_count: 150,
          title: "Салат «романо» / «ромэн»",
        },
        {
          id: 308,
          weight: 150,
          custom_measure: "г",
          custom_measure_count: 150,
          title: "Салат «айсберг»",
        },
        {
          id: 275,
          weight: 80,
          custom_measure: "г",
          custom_measure_count: 80,
          title: "Помидоры черри",
        },
        {
          id: 20102,
          weight: 80,
          custom_measure: "г",
          custom_measure_count: 80,
          title: "Варено-копченый бекон",
        },
      ],
      optional_ingredients: [
        {
          id: 5775,
          weight: 80,
          custom_measure: "г",
          custom_measure_count: 80,
          title: "Греческий йогурт",
        },
        {
          id: 398,
          weight: 50,
          custom_measure: "г",
          custom_measure_count: 50,
          title: "Творожный сыр",
        },
        {
          id: 440,
          weight: 5,
          custom_measure: "зубчик",
          custom_measure_count: 1,
          title: "Чеснок",
        },
        {
          id: 135,
          weight: 12,
          custom_measure: "г",
          custom_measure_count: 12,
          title: "Консервированный анчоус",
        },
        {
          id: 19847,
          weight: 12,
          custom_measure: "г",
          custom_measure_count: 12,
          title: "Консервированные каперсы",
        },
        {
          id: 393,
          weight: 35,
          custom_measure: "г",
          custom_measure_count: 35,
          title: "Твердый сыр",
        },
        {
          id: 623,
          weight: 25,
          custom_measure: "г",
          custom_measure_count: 25,
          title: "Сладкий соус чили",
        },
      ],
      proteins: 5.15,
      fats: 7.73,
      carbs: 3.28,
      calories: 105.04,
    },
    {
      id: 217059,
      active_cooking_time: 20,
      total_cooking_time: 20,
      difficulty_level: 2,
      title: "Салат из овощей на мангале",
      subtitle:
        "Жарите шашлык или колбаски на мангале? Тогда приготовьте сразу и овощи. После этого их останется только нарезать и заправить, и у вас получится вкусный гарнир к жареному мясу. У кабачков, перца и лука при обжарке на открытом огне появляется приятный карамельный привкус и сильный аромат, а подпеченные помидоры заменят любой соус. Овощи жарятся быстро, поэтому следите, чтобы они не обгорели. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi80VFFjTDMuanBlZw.jpg",
      preparation: {
        content:
          "Помойте цукини, помидоры черри, болгарский перец, петрушку и базилик. Промокните их бумажными полотенцами от влаги. Извлеките из перца сердцевину с семенами. Вымойте и почистите лук-шалот и чеснок. Подготовьте мангал с углями и решеткой, разделочную доску и салатник. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi92Z003alcuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Разрежьте цукини, болгарский перец и лук-шалот пополам. Выложите цукини, перец, лук-шалот и помидоры черри на решетку мангала.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi80Nlo2VWUuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Раскалите угли в мангале. Поставьте на мангал решетку с овощами, жарьте их 30-40 секунд. Снимите помидоры с решетки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi9ISzc1WGEuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Жарьте остальные овощи в течение 1-2 минут, периодически переворачивая решетку. Уберите с решетки перец и лук-шалот.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi9nNms4VFEuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Поджарьте цукини еще 1-2 минуты и тоже снимите с огня. Дайте всем овощам немного остыть.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi8zeXBwM3EuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Нарежьте болгарский перец и лук-шалот полукольцами. Нарежьте цукини крупными брусочками или полукруглыми ломтиками. Мелко порубите чеснок, петрушку и базилик.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi8zYVF6c28uanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Соедините в салатнике цукини, болгарский перец, лук-шалот, чеснок и зелень. Аккуратно перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi8zYmpTRFguanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Выложите в салат помидоры черри. Посыпьте салат солью, красным и душистым перцем, полейте оливковым маслом и красным уксусом. Перемешайте и оставьте салат на 4-5 минут настояться.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi8zaG85S1AuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 100,
          weight: 200,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Кабачок цукини",
        },
        {
          id: 12402,
          weight: 150,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Красный болгарский перец",
        },
        {
          id: 192,
          weight: 30,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Лук-шалот",
        },
        {
          id: 275,
          weight: 120,
          custom_measure: "шт.",
          custom_measure_count: 6,
          title: "Помидоры черри",
        },
        {
          id: 260,
          weight: 4,
          custom_measure: "г",
          custom_measure_count: 4,
          title: "Петрушка",
        },
        {
          id: 12,
          weight: 7,
          custom_measure: "г",
          custom_measure_count: 7,
          title: "Базилик",
        },
        {
          id: 440,
          weight: 5,
          custom_measure: "зубчик",
          custom_measure_count: 1,
          title: "Чеснок",
        },
        {
          id: 352,
          weight: 1.5,
          custom_measure: "г",
          custom_measure_count: 1.5,
          title: "Соль",
        },
        {
          id: 86,
          weight: 1,
          custom_measure: "г",
          custom_measure_count: 1,
          title: "Душистый перец молотый",
        },
        {
          id: 5798,
          weight: 0.5,
          custom_measure: "г",
          custom_measure_count: 0.5,
          title: "Розовый (красный) перец",
        },
        {
          id: 241,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Оливковое масло Extra Virgin",
        },
        {
          id: 52,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Винный уксус красный",
        },
      ],
      optional_ingredients: [
        {
          id: 12,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Базилик",
        },
        {
          id: 10,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Армянский лаваш",
        },
      ],
      proteins: 1.43,
      fats: 3.72,
      carbs: 4.84,
      calories: 53.67,
    },
    {
      id: 217284,
      active_cooking_time: 40,
      total_cooking_time: 40,
      difficulty_level: 2,
      title: "Салат «Цезарь» с курицей и ананасом",
      subtitle:
        "Курица идеально сочетается с ананасом. Экзотический фрукт дополняет нейтральный вкус птицы сладкой ноткой, одновременно хорошо размягчая волокна мяса. Часто ананас добавляют к куриному филе при жарке или запекании. Но и в таком привычном салате как «Цезарь» фрукт придется как нельзя кстати.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi80TFRkZ2suanBlZw.jpg",
      preparation: {
        content: "Вымойте куриное филе. Помойте и почистите зубчик чеснока.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi8zVllGVnQuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Нарежьте куриное филе на небольшие кусочки одинакового размера. Обмажьте специями: паприкой, сушеным чесноком, черным перцем и солью.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi8zY1JzeEIuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Поджарьте филе на сковороде с 1 ч.л оливкового масла с двух сторон до румяной корочки. Готовое филе снимите с огня и остудите.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi9YRkU4dVMuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Подготовьте ингредиенты для соуса. Положите в блендер желток, 20 г пармезана, горчицу, соль, масло и измельченный чеснок. Взбейте до однородного состояния.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi9ianVtaEMuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Нарежьте остывшую грудку на небольшие кусочки. Порубите ананас на кубики.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi80TlVrbVQuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Выложите на дно тарелки нарезанные листья салата. Полейте соусом.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi9FV1J4Z1IuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Разложите кусочки курицы, нарезанные пополам черри и ананас. Добавьте сухарики. Натрите 80 г пармезана и посыпьте салат.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi80RlVuRlIuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для соуса",
      main_ingredients: [
        {
          id: 168,
          weight: 300,
          custom_measure: "г",
          custom_measure_count: 300,
          title: "Куриное филе",
        },
        {
          id: 308,
          weight: 250,
          custom_measure: "г",
          custom_measure_count: 250,
          title: "Салат «айсберг»",
        },
        {
          id: 275,
          weight: 200,
          custom_measure: "г",
          custom_measure_count: 200,
          title: "Помидоры черри",
        },
        {
          id: 367,
          weight: 40,
          custom_measure: "г",
          custom_measure_count: 40,
          title: "Сухарики",
        },
        {
          id: 352,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Соль",
        },
        {
          id: 439,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Черный перец молотый",
        },
        {
          id: 247,
          weight: 3,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Паприка",
        },
        {
          id: 386,
          weight: 1.5,
          custom_measure: "г",
          custom_measure_count: 1.5,
          title: "Сушеный чеснок",
        },
        {
          id: 240,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Оливковое масло",
        },
        {
          id: 248,
          weight: 80,
          custom_measure: "г",
          custom_measure_count: 80,
          title: "Пармезан",
        },
        {
          id: 132,
          weight: 70,
          custom_measure: "г",
          custom_measure_count: 70,
          title: "Консервированный ананас",
        },
      ],
      optional_ingredients: [
        {
          id: 241,
          weight: 60,
          custom_measure: "мл",
          custom_measure_count: 60,
          title: "Оливковое масло Extra Virgin",
        },
        {
          id: 87,
          weight: 17,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Желток куриного яйца",
        },
        {
          id: 67,
          weight: 16,
          custom_measure: "ч. л.",
          custom_measure_count: 2,
          title: "Горчица",
        },
        {
          id: 440,
          weight: 5,
          custom_measure: "зубчик",
          custom_measure_count: 1,
          title: "Чеснок",
        },
        {
          id: 352,
          weight: 3.5,
          custom_measure: "г",
          custom_measure_count: 3.5,
          title: "Соль",
        },
        {
          id: 248,
          weight: 20,
          custom_measure: "г",
          custom_measure_count: 20,
          title: "Пармезан",
        },
      ],
      proteins: 11,
      fats: 10.01,
      carbs: 5.38,
      calories: 155.66,
    },
    {
      id: 218078,
      active_cooking_time: 20,
      total_cooking_time: 20,
      difficulty_level: 2,
      title: "Салат с лососем и слайсами цукини",
      subtitle:
        "Этот салат прекрасно подойдет для легкого романтического ужина. Свежий шпинат и руколу отлично дополнят тонкие полоски цукини и дольки помидоров черри. А слабосоленая семга станет основой блюда и будет отвечать за его сытность. Не добавляйте в салат соль — ее будет достаточно в рыбе. Заправка из свежей зелени и лимонного сока на основе оливкового масла добавит блюду едва заметную кислинку.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwNC9oellTRUwuanBlZw.jpg",
      preparation: {
        content:
          "Вымойте овощи и зелень. Вам понадобятся овощечистка, блендер и салатник.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwNC9la1dNUnguanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Отделите листья базилика и кинзы от стеблей. Сложите их в чашу блендера.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwNC8zSEhOa0QuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Натрите цедру четвертинки лимона на мелкой терке и добавьте к зелени. Выжмите туда же лимонный сок.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwNC8zeWJkYXouanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Влейте в чашу блендера оливковое масло, всыпьте сахар и взбейте до однородной текстуры.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwNC8zM3A3aFcuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Разделите семгу на рельефные ломтики. Разрежьте помидоры черри вдоль пополам. Нарежьте цукини овощечисткой на тонкие слайсы.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwNC9ZbnNoZ3UuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Смешайте в салатнике руколу, шпинат, черри, цукини и семгу. Добавьте кедровые орешки, заправьте все соусом.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwNC80M3IzVnkuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для соуса",
      main_ingredients: [
        {
          id: 599,
          weight: 150,
          custom_measure: "г",
          custom_measure_count: 150,
          title: "Филе семги",
        },
        {
          id: 100,
          weight: 300,
          custom_measure: "шт.",
          custom_measure_count: 1.5,
          title: "Кабачок цукини",
        },
        {
          id: 447,
          weight: 30,
          custom_measure: "пучок",
          custom_measure_count: 1,
          title: "Шпинат",
        },
        {
          id: 303,
          weight: 20,
          custom_measure: "пучок",
          custom_measure_count: 1,
          title: "Рукола",
        },
        {
          id: 275,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 3,
          title: "Помидоры черри",
        },
        {
          id: 111,
          weight: 20,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Кедровые орехи",
        },
      ],
      optional_ingredients: [
        {
          id: 240,
          weight: 30,
          custom_measure: "ч. л.",
          custom_measure_count: 6,
          title: "Оливковое масло",
        },
        {
          id: 12,
          weight: 7,
          custom_measure: "веточка",
          custom_measure_count: 1,
          title: "Базилик",
        },
        {
          id: 116,
          weight: 9,
          custom_measure: "пучок",
          custom_measure_count: 0.3,
          title: "Кинза",
        },
        {
          id: 183,
          weight: 30,
          custom_measure: "шт.",
          custom_measure_count: 0.25,
          title: "Лимон",
        },
        {
          id: 312,
          weight: 20,
          custom_measure: "ч. л.",
          custom_measure_count: 2,
          title: "Сахар",
        },
      ],
      proteins: 5.87,
      fats: 8.54,
      carbs: 5.31,
      calories: 117.52,
    },
  ],
};
