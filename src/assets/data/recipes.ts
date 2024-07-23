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
      id: 222136,
      active_cooking_time: 10,
      total_cooking_time: 30,
      difficulty_level: 2,
      title: "Пряный боул с тунцом",
      subtitle:
        "Это блюдо готовится быстро и просто, особенно если у вас есть заранее отваренный рис. Чтобы сделать вкус тунца ярче, его смешивают с майонезом, соусом шрирача, а также с уксусом, маслом и соевым соусом. Получается пряная рыбная паста, которая прекрасно сочетается с вареным рисом. Дополните боул по вкусу авокадо, свежим огурцом, зеленью, красной икрой или водорослями.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC9zTmdQcDUuanBlZw.jpg",
      preparation: {
        content:
          "Промойте под проточной водой рис. Слейте с тунца жидкость, если она есть. Предварительно замочите рис в течение 10-15 мину в теплой воде.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC8zbWVyZ1UuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Насыпьте рис в кастрюлю. Залейте 1,25 стаканом воды и поставьте на средний огонь. Доведите до кипения, посолите. Варите на слабом огне под крышкой 15 минут. После этого влейте в рис половину кунжутного масла масла, перемешайте его и отставьте в сторону остывать.\n",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9FemdlZjguanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Смешайте в небольшой миске тунец, майонез, соус шрирача, рисовый винный уксус,второю половину кунжутного масла и соевый соус.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC9GYlVTc24uanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Положите в миску отваренный рис. Сверху по центру выложите тунца, смешанного с соусами.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8zSjJnS2ouanBlZw.jpg",
        },
      ],
      kitchen_type: "Азиатская, гавайская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 54,
          weight: 250,
          custom_measure: "стакан",
          custom_measure_count: 1.25,
          title: "Вода",
        },
        {
          id: 194,
          weight: 50,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Майонез",
        },
        {
          id: 570,
          weight: 10,
          custom_measure: "ч. л.",
          custom_measure_count: 2,
          title: "Шрирача",
        },
        {
          id: 162,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Кунжутное масло",
        },
        {
          id: 350,
          weight: 4,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Соевый соус",
        },
        {
          id: 352,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Соль",
        },
        {
          id: 294,
          weight: 90,
          custom_measure: "стакан",
          custom_measure_count: 0.5,
          title: "Рис длиннозерный",
        },
        {
          id: 415,
          weight: 150,
          custom_measure: "банка / 150 г",
          custom_measure_count: 1,
          title: "Тунец кусочками в собственном соку",
        },
      ],
      optional_ingredients: [
        {
          id: 1,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Авокадо",
        },
        {
          id: 461,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Нори",
        },
        {
          id: 25,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Белый кунжут",
        },
        {
          id: 460,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Маринованный имбирь",
        },
        {
          id: 180,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Лайм",
        },
        {
          id: 91,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Зеленый лук",
        },
        {
          id: 350,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Соевый соус",
        },
      ],
      proteins: 4.94,
      fats: 7.11,
      carbs: 13.56,
      calories: 141.88,
    },
    {
      id: 222133,
      active_cooking_time: 10,
      total_cooking_time: 30,
      difficulty_level: 2,
      title: "Рисовый салат с кукурузой и фасолью",
      subtitle:
        "Сочетание красной фасоли, кукурузы и авокадо с сытным рисом и ароматной заправкой создает невероятный вкус. Такой салат подают как закуску, но он может заменить собой гарнир к мясному или рыбному блюду. Если вы решите приготовить этот салат заранее, добавьте авокадо непосредственно перед подачей. Иначе оно может потемнеть. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC80Q0NoelguanBlZw.jpg",
      preparation: {
        content:
          "Промойте под проточной водой рис и консервированную фасоль. Слейте жидкость с кукурузы. Помойте авокадо и кинзу. Почистите красный лук.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC9WM0hNNzguanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Насыпьте рис в кастрюлю, залейте 1,25 стакана воды и поставьте на средний огонь. После закипания посолите, уменьшите нагрев до минимального. Варите рис под крышкой 15 минут. Потом еще раз перемешайте и дайте полностью остыть.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC80Vm9ITXguanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Смешайте в небольшой миске вилкой оливковое масло, сок и цедру лайма, мед, порошок чили и сушеный чеснок.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC95Wm0zdFUuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Разрежьте авокадо пополам, уберите косточку. Извлеките мякоть и нарежьте ее на небольшие кубики.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC80SmpOZGguanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description: "Мелко покрошите красный лук и кинзу.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9UdjRpTTUuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Положите в миску рис, фасоль, кукурузу, авокадо, лук и кинзу. Добавьте заправку и тщательно перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC9oR1FzMnkuanBlZw.jpg",
        },
      ],
      kitchen_type: "Ближневосточная",
      main_ingredient_title: "Для блюда и заправки",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 54,
          weight: 250,
          custom_measure: "стакан",
          custom_measure_count: 1.25,
          title: "Вода",
        },
        {
          id: 127,
          weight: 340,
          custom_measure: "г",
          custom_measure_count: 340,
          title: "Консервированная кукуруза",
        },
        {
          id: 126,
          weight: 400,
          custom_measure: "банка / 400 г",
          custom_measure_count: 1,
          title: "Консервированная красная фасоль",
        },
        {
          id: 1,
          weight: 230,
          custom_measure: "г",
          custom_measure_count: 230,
          title: "Авокадо",
        },
        {
          id: 152,
          weight: 37.5,
          custom_measure: "шт.",
          custom_measure_count: 0.5,
          title: "Красный лук",
        },
        {
          id: 116,
          weight: 15,
          custom_measure: "пучок",
          custom_measure_count: 0.5,
          title: "Кинза",
        },
        {
          id: 352,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Соль",
        },
        {
          id: 439,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Черный перец молотый",
        },
        {
          id: 240,
          weight: 47.5,
          custom_measure: "стакан",
          custom_measure_count: 0.25,
          title: "Оливковое масло",
        },
        {
          id: 585,
          weight: 20,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Сок лайма",
        },
        {
          id: 1641,
          weight: 2,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Цедра лайма",
        },
        {
          id: 204,
          weight: 7,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Мед",
        },
        {
          id: 386,
          weight: 0.75,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Сушеный чеснок",
        },
        {
          id: 294,
          weight: 90,
          custom_measure: "стакан",
          custom_measure_count: 0.5,
          title: "Рис длиннозерный",
        },
      ],
      optional_ingredients: [
        {
          id: 180,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Лайм",
        },
        {
          id: 25,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Белый кунжут",
        },
        {
          id: 116,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Кинза",
        },
        {
          id: 256,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Перец чили",
        },
      ],
      proteins: 2.83,
      fats: 6.67,
      carbs: 13.86,
      calories: 127.53,
    },
    {
      id: 218560,
      active_cooking_time: 30,
      total_cooking_time: 760,
      difficulty_level: 3,
      title: "Салат «Зимний король»",
      subtitle:
        "Эта заготовка на зиму настолько вкусная, что ее съедают сразу, как только она появляется на столе. Именно поэтому ее и назвали «Зимний король». Из ингредиентов в ней всего лишь огурцы, лук и укроп, а также уксус и приправы. Закуска прекрасно сочетается с мясом или рыбой, а также ее можно использовать в качестве заправки к рассольнику или солянке.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMi9BOERESEsuanBlZw.jpg",
      preparation: {
        content:
          "Вымойте и обсушите огурцы, укроп и лук. Снимите с лука шелуху. Подготовьте стерильные банки и крышки.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMi84ajRXUVAuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Нарежьте огурцы полукольцами. Измельчите укроп. Нашинкуйте лук перьями. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMi81aHZ4MnMuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Соедините все нарезанные ингредиенты в кастрюле и перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMi9tSzR5SkIuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Влейте в кастрюлю растительное масло, уксус. Добавьте соль, сахар, лавровый лист и горошины перца, хорошо перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMi80UFF5M3EuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Поставьте кастрюлю на слабый огонь. Дождитесь, когда огурцы поменяют цвет. Снимите кастрюлю с плиты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMi8zYnFjVG4uanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Выложите огурцы в стерильные банки. Закатайте крышки. Переверните банки вверх дном и укутайте в одеяло. Оставьте до полного остывания.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMi9leVp6RlguanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 237,
          weight: 500,
          custom_measure: "г",
          custom_measure_count: 500,
          title: "Огурец",
        },
        {
          id: 290,
          weight: 480,
          custom_measure: "г",
          custom_measure_count: 480,
          title: "Репчатый лук",
        },
        {
          id: 418,
          weight: 75,
          custom_measure: "пучок",
          custom_measure_count: 5,
          title: "Укроп",
        },
        {
          id: 287,
          weight: 250,
          custom_measure: "мл",
          custom_measure_count: 250,
          title: "Растительное масло",
        },
        {
          id: 363,
          weight: 50,
          custom_measure: "мл",
          custom_measure_count: 50,
          title: "Столовый уксус",
        },
        {
          id: 312,
          weight: 50,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Сахар",
        },
        {
          id: 352,
          weight: 50,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Соль",
        },
        {
          id: 179,
          weight: 2,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Лавровый лист",
        },
        {
          id: 438,
          weight: 2.5,
          custom_measure: "шт.",
          custom_measure_count: 5,
          title: "Черный перец горошком",
        },
      ],
      optional_ingredients: [],
      proteins: 0.86,
      fats: 17.21,
      carbs: 8.63,
      calories: 187.75,
    },
    {
      id: 218468,
      active_cooking_time: 10,
      total_cooking_time: 20,
      difficulty_level: 1,
      title: "Закуска из огурцов с медом",
      subtitle:
        "Эту необычную закуску из огурцов определенно стоит попробовать хотя бы раз. Пусть это не самое распространенное сочетание продуктов, но оно точно заслуживает внимания. Свежий хрустящий огурец в сладкой медовой заправке напоминает спелую дыню. Чтобы сделать вкус блюда еще интереснее, добавьте лимонный сок, мяту, соль и перец. Подайте такие огурцы как закуску, салат или в качестве гарнира к мясу.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC80SEZadnEuanBlZw.jpg",
      preparation: {
        content:
          "Помойте огурцы, отрежьте кончики. Подготовьте глубокую миску.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC83bmdHSjkuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Немного нагрейте мед в микроволновке, чтобы он стал жидким, и смешайте его с растительным маслом.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC9kdEFWTDguanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description: "Нарежьте огурцы кружочками. Положите в миску.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC9ESjlDZ0EuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Залейте огурцы смесью меда и масла. Тщательно перемешайте, чтобы заправка равномерно распределилась по каждому кусочку. Оставьте мариноваться на 10-15 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC9rdW1uc2suanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 237,
          weight: 300,
          custom_measure: "шт.",
          custom_measure_count: 3,
          title: "Огурец",
        },
        {
          id: 204,
          weight: 56,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Мед",
        },
        {
          id: 287,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Растительное масло",
        },
      ],
      optional_ingredients: [
        {
          id: 25,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Белый кунжут",
        },
        {
          id: 153,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Красный жгучий перец",
        },
      ],
      proteins: 0.61,
      fats: 4.64,
      carbs: 15.27,
      calories: 101.42,
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
      id: 217980,
      active_cooking_time: 30,
      total_cooking_time: 45,
      difficulty_level: 2,
      title: "Салат с курицей в медово-горчичном соусе",
      subtitle:
        "Мед и горчица — настолько классические сочетание, что оно безотказно работает и в маринадах, и в соусах, и в закусках. Приготовьте на его основе сытный и очень вкусный салат с курицей, виноградом и брокколи. А чтобы добавить аромата, проколите миндаль на огне и посыпьте им каждую отдельную порцию. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwMy8zWUNmcEEuanBlZw.jpg",
      preparation: {
        content:
          "Помойте и просушите мясо и брокколи. Вымойте виноград и зелень. Подготовьте блендер.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwMy9LTjVMeGEuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Разрежьте куриную грудку вдоль на две части, чтобы получилось два тонких филе. Натрите солью, тимьяном и горчицей.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwMy8zWmtZVkIuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Обжарьте филе на сливочном масле по 2 минуты с каждой стороны до золотистой корочки, а затем снимите мясо с огня. Дайте полностью остыть и нарежьте поперек волокон ломтиками толщиной 1,5 см.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwMy9ZVkZ1eW4uanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Смешайте все компоненты для соуса венчиком до однородности. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwMy8zaEtrNW4uanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Отварите на пару соцветия брокколи в течение 3 минут. Затем охладите их под проточной водой. Нарежьте крупные соцветия на четверти, а средние соцветия пополам.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwMy8zNmpOdGEuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Нашинкуйте зелень соломкой. Обжарьте на сухой сковороде миндаль или подсушите его в духовке при 160°С в режиме конвекции до появления аромата жареного ореха.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwMy90c3ZrREguanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description: "Раздробите миндаль широкой стороной ножа.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwMy80V3ZqUU0uanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description: "Разрежьте виноград на половинки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwMy80SmFyU0YuanBlZw.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Влейте в салат половину соуса, нашинкованную зелень, виноград, брокколи и часть миндаля. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwMy8zdFBiNVAuanBlZw.jpg",
        },
        {
          title: "Шаг 9",
          description:
            "Выложите смешанный салат в тарелку, разложите поверх ломтики курицы. Сделайте на салате узор оставшимся соусом и присыпьте миндалем.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwMy9QbzhqYzkuanBlZw.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для соуса и подачи",
      main_ingredients: [
        {
          id: 35,
          weight: 80,
          custom_measure: "г",
          custom_measure_count: 80,
          title: "Брокколи",
        },
        {
          id: 168,
          weight: 200,
          custom_measure: "г",
          custom_measure_count: 200,
          title: "Куриное филе",
        },
        {
          id: 447,
          weight: 40,
          custom_measure: "г",
          custom_measure_count: 40,
          title: "Шпинат",
        },
        {
          id: 207,
          weight: 20,
          custom_measure: "г",
          custom_measure_count: 20,
          title: "Миндаль",
        },
        {
          id: 338,
          weight: 15,
          custom_measure: "г",
          custom_measure_count: 15,
          title: "Сливочное масло",
        },
        {
          id: 402,
          weight: 1,
          custom_measure: "г",
          custom_measure_count: 1,
          title: "Тимьян / чабрец",
        },
        {
          id: 82,
          weight: 2.64,
          custom_measure: "ч. л.",
          custom_measure_count: 0.33,
          title: "Дижонская горчица",
        },
        {
          id: 13261,
          weight: 50,
          custom_measure: "г",
          custom_measure_count: 50,
          title: "Зеленый виноград",
        },
      ],
      optional_ingredients: [
        {
          id: 431,
          weight: 28,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Цветочный мед",
        },
        {
          id: 240,
          weight: 51,
          custom_measure: "ст. л.",
          custom_measure_count: 3,
          title: "Оливковое масло",
        },
        {
          id: 439,
          weight: 1,
          custom_measure: "г",
          custom_measure_count: 1,
          title: "Черный перец молотый",
        },
        {
          id: 180,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Лайм",
        },
        {
          id: 82,
          weight: 25,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Дижонская горчица",
        },
      ],
      proteins: 11.1,
      fats: 15.9,
      carbs: 7.59,
      calories: 216.9,
    },
    {
      id: 218450,
      active_cooking_time: 30,
      total_cooking_time: 65,
      difficulty_level: 2,
      title: "Запеченный редис",
      subtitle:
        "Подайте запеченный редис в качестве оригинального гарнира. Его вкус будет чуть мягче, чем у свежего, и немного сладковатый — примерно таким, как у запеченной брюссельской или цветной капусты. Редис станет отличным дополнением к рыбе, например, к лососю, а также к лазанье или пасте. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC8zZEpjdGUuanBlZw.jpg",
      preparation: {
        content:
          "Вымойте редис и чеснок. Снимите с чеснока шелуху. Уберите у редиса хвостики. Подготовьте форму для запекания. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC80UVd1RjIuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Разрежьте редис пополам. Пропустите чеснок через пресс. Смешайте овощи в миске. Полейте маслом, посыпьте солью и перцем. Перемешайте. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC80VTc4eFkuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Разогрейте духовку до 220°C. Смажьте форму для запекания маслом. Разложите половинки редиса на дно формы срезом вниз. Отправьте в духовку на 20 минут. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC9CeE03UHYuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description: "Выложите редис на тарелку и сбрызните лимонным соком. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC9RN3k5dEsuanBlZw.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 288,
          weight: 400,
          custom_measure: "шт.",
          custom_measure_count: 20,
          title: "Редис",
        },
        {
          id: 440,
          weight: 5,
          custom_measure: "зубчик",
          custom_measure_count: 1,
          title: "Чеснок",
        },
        {
          id: 240,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Оливковое масло",
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
          id: 185,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Лимонный сок",
        },
      ],
      optional_ingredients: [
        {
          id: 12,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Базилик",
        },
      ],
      proteins: 1.21,
      fats: 4.07,
      carbs: 3.57,
      calories: 56.43,
    },
    {
      id: 218550,
      active_cooking_time: 30,
      total_cooking_time: 65,
      difficulty_level: 2,
      title: "Картофельный салат с редисом и песто",
      subtitle:
        "Картофель и редис в одном салате вряд ли можно назвать привычным сочетанием. Но это очень удачное соседство для тех, кто любит пробовать необычные комбинации вкусов и текстур. Чтобы сделать блюдо еще более интересным, мы добавили соус песто, приготовленный с руколой. Она придала легкую остринку, которую мы немного смягчили медом. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMS9KYXhvekMuanBlZw.jpg",
      preparation: {
        content:
          "Тщательно вымойте беби-картофель, но не снимайте с него кожицу. Помойте и почистите лук и чеснок. Промойте и обсушите зелень.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9hdFFLQVIuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Разогрейте духовку до 220°C. Застелите форму для запекания пергаментом. Разрежьте беби-картофель на половинки и выложите в форму.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS8zeDQydnAuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Сбрызните картофель оливковым маслом, приправьте солью и перцем. Перемешайте, чтобы каждый кусочек покрылся маслом и специями. Разровняйте и отправьте в духовку на 15 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS8za1FiWlkuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Нашинкуйте лук полукольцами. Равномерно распределите его на картофеле и запекайте еще 25 минут. Оставьте на 10 минут остывать.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS8zWDh4ZXguanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Измельчите зеленый лук. Нарежьте редис тонкими слайсами. Выложите зеленый лук, 2 пучка руколы и редис в салатник.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS92WFZLcFcuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Приготовьте песто. Положите в чашу блендера 2 пучка руколы, базилик, чеснок, натертый сыр пекорино и кедровые орешки. Добавьте лимонный сок, цедру и мед. Измельчите до однородной массы. Влейте оливковое масло и перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS80VkRwREcuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Положите песто в салатник. Добавьте туда же картофель с луком. Перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS80TjNpN3guanBlZw.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для песто из руколы",
      main_ingredients: [
        {
          id: 12996,
          weight: 500,
          custom_measure: "г",
          custom_measure_count: 500,
          title: "Беби-картофель",
        },
        {
          id: 240,
          weight: 68,
          custom_measure: "ст. л.",
          custom_measure_count: 4,
          title: "Оливковое масло",
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
          id: 152,
          weight: 160,
          custom_measure: "г",
          custom_measure_count: 160,
          title: "Красный лук",
        },
        {
          id: 91,
          weight: 20,
          custom_measure: "г",
          custom_measure_count: 20,
          title: "Зеленый лук",
        },
        {
          id: 303,
          weight: 40,
          custom_measure: "г",
          custom_measure_count: 40,
          title: "Рукола",
        },
        {
          id: 288,
          weight: 120,
          custom_measure: "г",
          custom_measure_count: 120,
          title: "Редис",
        },
      ],
      optional_ingredients: [
        {
          id: 303,
          weight: 40,
          custom_measure: "г",
          custom_measure_count: 40,
          title: "Рукола",
        },
        {
          id: 12,
          weight: 40,
          custom_measure: "г",
          custom_measure_count: 40,
          title: "Базилик",
        },
        {
          id: 440,
          weight: 25,
          custom_measure: "зубчик",
          custom_measure_count: 5,
          title: "Чеснок",
        },
        {
          id: 111,
          weight: 50,
          custom_measure: "г",
          custom_measure_count: 50,
          title: "Кедровые орехи",
        },
        {
          id: 706,
          weight: 25,
          custom_measure: "г",
          custom_measure_count: 25,
          title: "Сыр пекорино",
        },
        {
          id: 5773,
          weight: 1,
          custom_measure: "г",
          custom_measure_count: 1,
          title: "Цедра лимона",
        },
        {
          id: 185,
          weight: 36,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Лимонный сок",
        },
        {
          id: 204,
          weight: 28,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Мед",
        },
        {
          id: 240,
          weight: 140,
          custom_measure: "мл",
          custom_measure_count: 140,
          title: "Оливковое масло",
        },
      ],
      proteins: 2.44,
      fats: 19.37,
      carbs: 12.86,
      calories: 234.9,
    },
    {
      id: 217203,
      active_cooking_time: 10,
      total_cooking_time: 15,
      difficulty_level: 1,
      title: "Салат из щавеля с яйцами",
      subtitle:
        "Очень легкий салат, который идеально готовить летом из свежего щавеля. Основной ингредиент можно дополнить и другой зеленью. Например, щавель будет хорошо сочетаться с руколой или кресс-салатом, корном или шпинатом. Добавьте также зеленый лук и петрушку. Чтобы салат не был слишком пресным, заправьте его майонезом с добавлением горчицы. Эта смесь добавит салату легкую пикантность.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNC9DZkcydmouanBlZw.jpg",
      preparation: {
        content: "Помойте зелень. Вымойте яйца.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNC80MmNiVFUuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Отварите перепелиные яйца вкрутую. Остудите в ледяной воде и почистите. Разрежьте одно яйцо пополам и оставьте для украшения салата. Измельчите три оставшихся яйца.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNC8zY2VpSDQuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Нарвите или нарежьте щавель. Положите его в миску. Сверху выложите измельченные яйца.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNC9UMlNDY2EuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description: "Мелко нарежьте укроп и посыпьте салат.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNC9qYTVBdjUuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description: "Положите поверх порций салата майонез и горчицу.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNC80RFd0OEIuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 597,
          weight: 20,
          custom_measure: "г",
          custom_measure_count: 20,
          title: "Щавель",
        },
        {
          id: 254,
          weight: 36,
          custom_measure: "шт.",
          custom_measure_count: 4,
          title: "Перепелиное яйцо",
        },
        {
          id: 14698,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Зернистая горчица",
        },
        {
          id: 194,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Майонез",
        },
        {
          id: 314,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Свежая зелень",
        },
        {
          id: 418,
          weight: 6,
          custom_measure: "веточка",
          custom_measure_count: 3,
          title: "Укроп",
        },
      ],
      optional_ingredients: [],
      proteins: 7.64,
      fats: 7.75,
      carbs: 1.89,
      calories: 98.65,
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
      id: 216879,
      active_cooking_time: 10,
      total_cooking_time: 10,
      difficulty_level: 1,
      title: "Салат с огурцом и тунцом",
      subtitle:
        "Салат получается не только сытным, но и красивым. Ведь тонкие слайсы огурца ложатся прямо как волны! Кроме тунца и огурца понадобится только немного свежей зелени и лимонного сока. Возьмите тунец, консервированный в масле. Это масло и послужит заправкой. Оно уже пропитано ароматом рыбы и отлично дополнит вкус всего салата. Если у вас тунец в собственном соку, возьмите для заправки любое растительное масло. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS9SNTVnMnAuanBlZw.jpg",
      preparation: {
        content:
          "Помойте огурец. Откройте консервы. Подготовьте салатник, нож и овощечистку.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS8zcnVrVUsuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Нарежьте огурец тонкими слайсами при помощи овощечистки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS9BUGZ2TFEuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description: "Мелко покрошите петрушку.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS80MkJDemsuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Нарвите крупно листья салата. Сложите их в глубокую миску, а сверху добавьте петрушку. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS80TVFxYmouanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Сверху выложите полоски огурца, красиво закручивая их в кольца.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS80NUs0SG8uanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "На огурцы ложкой равномерно положите тунец вместе с маслом.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS80TjJRNnYuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description: "Полейте салат лимонным соком, посолите и поперчите.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS8zNnpzUm4uanBlZw.jpg",
        },
      ],
      kitchen_type: "Средиземноморская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 237,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Огурец",
        },
        {
          id: 260,
          weight: 10,
          custom_measure: "пучок",
          custom_measure_count: 0.5,
          title: "Петрушка",
        },
        {
          id: 606,
          weight: 16,
          custom_measure: "лист",
          custom_measure_count: 2,
          title: "Салатные листья",
        },
        {
          id: 185,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Лимонный сок",
        },
        {
          id: 439,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Черный перец молотый",
        },
        {
          id: 352,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Соль",
        },
        {
          id: 414,
          weight: 180,
          custom_measure: "банка / 180 г",
          custom_measure_count: 1,
          title: "Тунец в масле рубленый",
        },
      ],
      optional_ingredients: [
        {
          id: 183,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Лимон",
        },
        {
          id: 71,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Гранат",
        },
      ],
      proteins: 14.18,
      fats: 2.3,
      carbs: 1.64,
      calories: 82.9,
    },
    {
      id: 216867,
      active_cooking_time: 10,
      total_cooking_time: 10,
      difficulty_level: 1,
      title: "Салат с помидорами, руколой и шпинатом",
      subtitle:
        "Этот салат не только очень вкусный и полезный, у него еще и невероятный аромат. При этом в блюде очень мало калорий, поэтому его смело можно есть даже поздно вечером. Если хотите сделать салат еще более диетическим, уберите из состава сыр и не заправляйте маслом. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS80OVE5M3guanBlZw.jpg",
      preparation: {
        content:
          "Помойте и обсушите зелень. Вымойте помидор и чеснок. Снимите с чеснока шелуху. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS8zZHl6NzcuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Выложите на широкое блюдо шпинат и руколу. Перемешайте зелень руками и распределите по тарелке равномерным слоем. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS80V3Y5TDkuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Нарежьте небольшими дольками помидор и положите поверх зелени.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS8zRHJLTlAuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Смешайте в миске бальзамический уксус с оливковым маслом. Пропустите чеснок через пресс и добавьте в миску. Всыпьте соль и перец. Перемешайте. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS9EanZMMmcuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Полейте салат заправкой. Натрите сыр на мелкой терке и украсьте им готовое блюдо.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS8zb2p5d1QuanBlZw.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 447,
          weight: 30,
          custom_measure: "г",
          custom_measure_count: 30,
          title: "Шпинат",
        },
        {
          id: 303,
          weight: 20,
          custom_measure: "г",
          custom_measure_count: 20,
          title: "Рукола",
        },
        {
          id: 272,
          weight: 80,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Помидор",
        },
        {
          id: 440,
          weight: 5,
          custom_measure: "зубчик",
          custom_measure_count: 1,
          title: "Чеснок",
        },
        {
          id: 388,
          weight: 20,
          custom_measure: "г",
          custom_measure_count: 20,
          title: "Сыр",
        },
        {
          id: 240,
          weight: 68,
          custom_measure: "ст. л.",
          custom_measure_count: 4,
          title: "Оливковое масло",
        },
        {
          id: 15,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Бальзамический уксус темный",
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
      ],
      optional_ingredients: [
        {
          id: 111,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Кедровые орехи",
        },
      ],
      proteins: 3.6,
      fats: 32.94,
      carbs: 3.61,
      calories: 312.08,
    },
    {
      id: 216853,
      active_cooking_time: 10,
      total_cooking_time: 10,
      difficulty_level: 1,
      title: "Салат с тунцом и овощами",
      subtitle:
        "Этот легкий салат состоит из свежих летних овощей и тунца. Для заправки смешайте лимонный сок, специи и растительное масло. Из приправ подойдут любой молотый перец, чеснок или паприка. Консервированный тунец не только является недорогим, здоровым источником белка, полезных жиров и омега-3, но и обладает довольно приятным вкусом. Чтобы сделать салат сытнее, добавьте нут, киноа или фету. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS8zemZ6ancuanBlZw.jpg",
      preparation: {
        content:
          "Помойте помидоры, огурец и петрушку. Откройте банку с тунцом и слейте жидкость.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS9xVGtGc2guanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description: "Нарежьте помидор тонкими дольками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS9aRkhrQ1MuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Разрежьте огурец вдоль пополам и нарежьте тонкими слайсами.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS83ekFQOXEuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description: "Измельчите петрушку.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS93Q2FnNEouanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Смешайте в небольшой миске растительное масло с лимонным соком, солью и перцем.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS8zUTdVQkYuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Выложите в миску тунец. Добавьте помидоры, огурец, петрушку и заправку. Хорошо перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS80UWZrejcuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 272,
          weight: 160,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Помидор",
        },
        {
          id: 237,
          weight: 100,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Огурец",
        },
        {
          id: 287,
          weight: 10,
          custom_measure: "ч. л.",
          custom_measure_count: 2,
          title: "Растительное масло",
        },
        {
          id: 185,
          weight: 18,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Лимонный сок",
        },
        {
          id: 260,
          weight: 15,
          custom_measure: "г",
          custom_measure_count: 15,
          title: "Петрушка",
        },
        {
          id: 352,
          weight: 1.75,
          custom_measure: "г",
          custom_measure_count: 1.75,
          title: "Соль",
        },
        {
          id: 439,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Черный перец молотый",
        },
        {
          id: 416,
          weight: 240,
          custom_measure: "банка / 240 г",
          custom_measure_count: 1,
          title: "Тунец рубленый в собственном соку",
        },
      ],
      optional_ingredients: [
        {
          id: 183,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Лимон",
        },
        {
          id: 606,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Салатные листья",
        },
        {
          id: 12,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Базилик",
        },
      ],
      proteins: 1.17,
      fats: 2.15,
      carbs: 2.14,
      calories: 53.4,
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
    {
      id: 218373,
      active_cooking_time: 30,
      total_cooking_time: 40,
      difficulty_level: 2,
      title: "Салат с яблоком, клюквой и фундуком",
      subtitle:
        "Смешайте два сорта яблок, чтобы разнообразить вкус и текстуру салата. Лучше всего подойдут «Голден» и «Гренни Смит». Орех добавит легкую сладость, клюква — кислинку, а рукола — свежую остринку. Остается только дополнить это ароматным сыром с плесенью. Можно заменить его адыгейским сыром или сухой фетой. Главное, не берите фетаксу — она сильно поменяет текстуру салата. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwOC8zOXE1MksuanBlZw.jpg",
      preparation: {
        content:
          "Вымойте яблоки. Промойте и просушите зелень и лук. Если клюква слишком сухая, замочите ее предварительно в горячей воде на 6-10 минут, а затем дайте ей высохнуть. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwOC80SlF6RTYuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Прогрейте духовку на 180°С и выложите на противень фундук. Подсушите его в течение 8-10 минут, затем достаньте и остудите. Снимите шелуху и раздробите ядра ножом на половинки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwOC80QVVOb1kuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description: "Измельчите как можно мельче лук шалот для заправки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwOC8zWlBteVguanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Смешайте уксус и сироп, взбивая венчиком. Добавьте оливковое масло. Когда эмульсия будет готова, всыпьте лук, соль и корицу.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwOC9zYXZIbjguanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Нарежьте яблоки на четвертинки, удалите сердцевину. Затем нарежьте их тонкими ломтиками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwOC8zSGpLd3EuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Выложите яблоки в боул и добавьте к ним заправку. Аккуратно перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwOC9hZTQ3YmYuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Крупно порубите клюкву. Разломайте сыр на крупные крошки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwOC81NDRYQkwuanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Смешайте всю зелень, орехи, клюкву и сыр, выложите на сервировочную тарелку. Выложите замаринованные яблоки, сдобрив соусом со дна миски поверхность всего салата.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwOC81OUg3WkguanBlZw.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для заправки",
      main_ingredients: [
        {
          id: 19853,
          weight: 250,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Зеленое яблоко",
        },
        {
          id: 14606,
          weight: 180,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Яблоки «голден»",
        },
        {
          id: 426,
          weight: 70,
          custom_measure: "г",
          custom_measure_count: 70,
          title: "Фундук",
        },
        {
          id: 303,
          weight: 30,
          custom_measure: "пучок",
          custom_measure_count: 1.5,
          title: "Рукола",
        },
        {
          id: 12521,
          weight: 30,
          custom_measure: "г",
          custom_measure_count: 30,
          title: "Мангольд",
        },
        {
          id: 14692,
          weight: 34,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Вяленая клюква",
        },
        {
          id: 12577,
          weight: 40,
          custom_measure: "г",
          custom_measure_count: 40,
          title: "Сыр с голубой плесенью",
        },
      ],
      optional_ingredients: [
        {
          id: 192,
          weight: 15,
          custom_measure: "шт.",
          custom_measure_count: 0.5,
          title: "Лук-шалот",
        },
        {
          id: 240,
          weight: 51,
          custom_measure: "ст. л.",
          custom_measure_count: 3,
          title: "Оливковое масло",
        },
        {
          id: 52,
          weight: 18,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Винный уксус красный",
        },
        {
          id: 642,
          weight: 12,
          custom_measure: "ч. л.",
          custom_measure_count: 2,
          title: "Кленовый сироп",
        },
        {
          id: 610,
          weight: 1,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Молотая корица",
        },
      ],
      proteins: 1.42,
      fats: 8.93,
      carbs: 11.71,
      calories: 133.08,
    },
    {
      id: 216697,
      active_cooking_time: 15,
      total_cooking_time: 15,
      difficulty_level: 1,
      title: "Летний салат с базиликом и авокадо",
      subtitle:
        "Яркий, красивый, полный овощного сока и хруста. Именно таким и должен быть настоящий летний салат из сезонных овощей. Салат хорош и для гарнира, и для легкого ужина в летнюю жару. А чтобы было сытно, положите в салатник свежее авокадо.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy8zSnNIYnkuanBlZw.jpg",
      preparation: {
        content:
          "Помойте салатные листья, огурец, помидоры, редис, авокадо, лимон и базилик. Отделите листочки базилика от стеблей. Разрежьте авокадо пополам, удалите косточку. Достаньте миску, разделочную доску и салатник.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy80TFMzckguanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Выжмите сок из трети лимона. Мелко порубите базилик. Соедините в миске сок лимона, оливковое масло, соль, перец и базилик. Хорошо перемешайте заправку.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy80NlB4U3QuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Извлеките из половинок авокадо мякоть ложкой, нарежьте ее кубиками со стороной 1-1,5 см. Разрежьте помидоры черри пополам. Нарежьте редис и огурец полукруглыми ломтиками. Нарвите салатные листья руками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy8zYWd3SnMuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Выложите в салатник салатные листья, кубики авокадо, помидоры черри, редис и огурец. Полейте салат заправкой, аккуратно перемешайте и подайте на стол.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy8zR0xveUouanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 237,
          weight: 100,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Огурец",
        },
        {
          id: 275,
          weight: 120,
          custom_measure: "шт.",
          custom_measure_count: 6,
          title: "Помидоры черри",
        },
        {
          id: 288,
          weight: 80,
          custom_measure: "шт.",
          custom_measure_count: 4,
          title: "Редис",
        },
        {
          id: 1,
          weight: 200,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Авокадо",
        },
        {
          id: 606,
          weight: 24,
          custom_measure: "шт.",
          custom_measure_count: 3,
          title: "Салатные листья",
        },
        {
          id: 12,
          weight: 14,
          custom_measure: "веточка",
          custom_measure_count: 2,
          title: "Базилик",
        },
        {
          id: 183,
          weight: 36,
          custom_measure: "шт.",
          custom_measure_count: 0.3,
          title: "Лимон",
        },
        {
          id: 240,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Оливковое масло",
        },
        {
          id: 352,
          weight: 3,
          custom_measure: "ч. л.",
          custom_measure_count: 0.3,
          title: "Соль",
        },
        {
          id: 439,
          weight: 1.25,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Черный перец молотый",
        },
      ],
      optional_ingredients: [
        {
          id: 202,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Маслины",
        },
        {
          id: 19933,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Смесь семян для салата",
        },
      ],
      proteins: 1.36,
      fats: 10.04,
      carbs: 4.26,
      calories: 110.63,
    },
  ],
  "first-courses": [
    {
      id: 221962,
      active_cooking_time: 30,
      total_cooking_time: 40,
      difficulty_level: 2,
      title: "Ароматный суп с минтаем",
      subtitle:
        "Домашний рыбный суп из филе белой рыбы варится чуть дольше, чем полчаса. И основная часть времени уйдет на доведение до готовности картофеля. Подойдет филе трески, минтая или пикши, которое нужно заранее разморозить. Рыбный бульон будет наваристее и ароматнее с корнем пастернака и лавровым листом, но при желании добавьте любые другие специи.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zRVJKYzQuanBlZw.jpg",
      preparation: {
        content:
          "Разморозьте филе, помойте и промокните его бумажными полотенцами. Вымойте и почистите картофель, морковь, лук и корень пастернака. Ополосните укроп. Подготовьте кастрюлю подходящего размера, сито, сковороду и глубокие порционные тарелки.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS9Rb0N1TEEuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Разрежьте филе рыбы на 3-4 части. Нарежьте корень сельдерея кубиками. Вскипятите воду в кастрюле. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zbmZTbnAuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Уменьшите огонь до среднего. Положите в кастрюлю рыбное филе, корень сельдерея, лавровый лист и перец горошком. Варите бульон до готовности рыбы в течение 10-15 минут. Достаньте минтай из бульона, в сам бульон процедите через сито и перелейте обратно в кастрюлю.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zeWR4QzguanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Нарежьте картофель кубиками со стороной около 1 см. Нашинкуйте лук тонкими четвертинками колец. Нарежьте морковь полукруглыми ломтиками толщиной около 3 мм. Отделите кисточки укропа от стеблей, мелко порубите их.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zWHNNUHUuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Снова доведите бульон до кипения на среднем огне. Положите в него картофель и варите его в течение 10-15 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zTTdIUFouanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Растопите в горячей сковороде сливочное масло. Добавьте к нему растительное, положите в смесь масел лук. Постоянно помешивая, обжарьте его в течение 1-2 минуты до светло-бежевого цвета. Положите к луку морковь. Пожарьте все вместе, периодически перемешивая, еще 3-4 минуты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zU1haTWsuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Переложите обжаренные овощи в бульон с картофелем. Всыпьте соль и поварите все около 5-6 минут. Выложите в суп ломтики отварной рыбы, прогрейте все вместе еще 2-3 минуты. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS9NcGJMbjIuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская, русская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 108,
          weight: 260,
          custom_measure: "г",
          custom_measure_count: 260,
          title: "Картошка",
        },
        {
          id: 219,
          weight: 80,
          custom_measure: "г",
          custom_measure_count: 80,
          title: "Морковь",
        },
        {
          id: 290,
          weight: 40,
          custom_measure: "г",
          custom_measure_count: 40,
          title: "Репчатый лук",
        },
        {
          id: 338,
          weight: 40,
          custom_measure: "г",
          custom_measure_count: 40,
          title: "Сливочное масло",
        },
        {
          id: 270,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Подсолнечное масло рафинированное",
        },
        {
          id: 54,
          weight: 1400,
          custom_measure: "л",
          custom_measure_count: 1.4,
          title: "Вода",
        },
        {
          id: 179,
          weight: 1,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Лавровый лист",
        },
        {
          id: 438,
          weight: 1.5,
          custom_measure: "шт.",
          custom_measure_count: 3,
          title: "Черный перец горошком",
        },
        {
          id: 141,
          weight: 45,
          custom_measure: "г",
          custom_measure_count: 45,
          title: "Корень сельдерея",
        },
        {
          id: 418,
          weight: 4,
          custom_measure: "веточка",
          custom_measure_count: 2,
          title: "Укроп",
        },
        {
          id: 352,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Соль",
        },
        {
          id: 613,
          weight: 300,
          custom_measure: "г",
          custom_measure_count: 300,
          title: "Филе минтая",
        },
      ],
      optional_ingredients: [
        {
          id: 91,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Зеленый лук",
        },
        {
          id: 260,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Петрушка",
        },
      ],
      proteins: 2.54,
      fats: 2.47,
      carbs: 2.58,
      calories: 42.99,
    },
    {
      id: 219099,
      active_cooking_time: 35,
      total_cooking_time: 75,
      difficulty_level: 2,
      title: "Риболлита с корнеплодами",
      subtitle:
        "Рецепт риболлиты пришел к нам из итальянского региона Тоскана. Это густой суп, приготовленный из бобов и сезонных корнеплодов. Секрет риболлиты заключается во времени приготовления. Чтобы добиться нужной текстуры, ингредиенты тушат до состояния каши, а в конце добавляют хлеб. Благодаря этому блюдо получается еще более густым. Чтобы сэкономить время, мы выбрали консервированный нут, но можно взять и вареный, добавив к нему ароматные специи.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zSlRwTVQuanBlZw.jpg",
      preparation: {
        content:
          "Помойте и почистите корнеплоды, овощи и зелень. Подготовьте глубокую кастрюлю.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9NQ1FXZXIuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Измельчите чеснок. Выложите его в кастрюлю вместе с оливковым маслом и поставьте на средний огонь. Обжаривайте 1-2 минуты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zZ292U1QuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Нарежьте маленькими кубиками морковь, два вида лука, тыкву, репу и сельдерей. Добавьте в кастрюлю к чесноку и хорошо перемешайте. Готовьте 5 минут, помешивая.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8za2c3a2ouanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Залейте содержимое кастрюли водой так, чтобы она слегка покрыла корнеплоды. Увеличьте огонь и доведите блюдо до кипения. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80WE1lWTguanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Убавьте нагрев до среднего, чтобы поддерживать кипение. Готовьте овощи в течение 25 минут, периодически помешивая.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zdU45R2kuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Добавьте в блюдо консервированный нут, нарезанный кубиками хлеб и 1 стакан воды. Хорошо перемешайте. Тушите блюдо 15 минут. В конце посыпьте его солью и перцем по вкусу и снимите с плиты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9jZ2RpVjUuanBlZw.jpg",
        },
      ],
      kitchen_type: "Итальянская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 240,
          weight: 51,
          custom_measure: "ст. л.",
          custom_measure_count: 3,
          title: "Оливковое масло",
        },
        {
          id: 440,
          weight: 15,
          custom_measure: "зубчик",
          custom_measure_count: 3,
          title: "Чеснок",
        },
        {
          id: 290,
          weight: 80,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Репчатый лук",
        },
        {
          id: 191,
          weight: 150,
          custom_measure: "г",
          custom_measure_count: 150,
          title: "Лук-порей",
        },
        {
          id: 219,
          weight: 180,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Морковь",
        },
        {
          id: 417,
          weight: 450,
          custom_measure: "г",
          custom_measure_count: 450,
          title: "Тыква",
        },
        {
          id: 799,
          weight: 150,
          custom_measure: "г",
          custom_measure_count: 150,
          title: "Репа",
        },
        {
          id: 361,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Стебель сельдерея",
        },
        {
          id: 758,
          weight: 200,
          custom_measure: "г",
          custom_measure_count: 200,
          title: "Нут консервированный",
        },
        {
          id: 30,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Белый хлеб",
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
      ],
      optional_ingredients: [
        {
          id: 427,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Хлебцы",
        },
      ],
      proteins: 4.29,
      fats: 4.69,
      carbs: 17.09,
      calories: 122.46,
    },
    {
      id: 218809,
      active_cooking_time: 40,
      total_cooking_time: 130,
      difficulty_level: 3,
      title: "Густой грибной суп с мясом",
      subtitle:
        "Вкусный густой грибной суп с мясом по консистенции напоминает рагу, поэтому насытит и согреет во время обеда. Он готовится на наваристом мясном бульоне с большим количеством овощей, перловкой, ароматными шампиньонами и кусочками мяса. Грибы сюда подойдут любые, например, свежие или консервированные шампиньоны, а также замороженные лесные грибы. Сварите суп той консистенции, которая вам больше нравится. Добавьте больше воды для жидкого супа или загустите его, положив в зажарку 1-2 ложки муки.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC82eHF6a2kuanBlZw.jpg",
      preparation: {
        content:
          "Разморозьте, помойте и обсушите на бумажных полотенцах свинину. Ополосните водой грибы. Помойте и почистите картофель, репчатый лук и чеснок. Промойте перловку под проточной водой.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9hY1IyNUsuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Положите кусок свинины в кастрюлю, залейте водой и поставьте на средний огонь. После закипания снимите пену и посолите. Уменьшите нагрев до слабого, варите 1 час под крышкой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9kN3lTWmEuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Нарежьте картошку небольшими брусочками. Мелко покрошите репчатый лук. Натрите морковь на средней терке. Нарежьте шампиньоны пластинками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zQWkya24uanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Достаньте мясо из бульона, нарежьте на маленькие кусочки. Процедите бульон и верните его на плиту. Снова доведите до кипения на среднем огне. Положите в кипящий бульон перловку и картошку. Варите 15 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80R2FzUlIuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Разогрейте в сковороде растительное масло. Обжарьте шампиньоны, морковь и лук на среднем огне в течение 7 минут, регулярно перемешивая.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80SmY4dVYuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Положите в суп зажарку и мясо. Приправьте черным молотым перцем и сушеным укропом. Варите еще 5 минут. Потом выключите огонь и дайте супу настояться под крышкой 10 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zbmZNZWYuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 323,
          weight: 250,
          custom_measure: "г",
          custom_measure_count: 250,
          title: "Свинина",
        },
        {
          id: 445,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Шампиньоны",
        },
        {
          id: 54,
          weight: 1000,
          custom_measure: "л",
          custom_measure_count: 1,
          title: "Вода",
        },
        {
          id: 258,
          weight: 45,
          custom_measure: "г",
          custom_measure_count: 45,
          title: "Перловка",
        },
        {
          id: 108,
          weight: 130,
          custom_measure: "г",
          custom_measure_count: 130,
          title: "Картошка",
        },
        {
          id: 290,
          weight: 40,
          custom_measure: "г",
          custom_measure_count: 40,
          title: "Репчатый лук",
        },
        {
          id: 219,
          weight: 40,
          custom_measure: "г",
          custom_measure_count: 40,
          title: "Морковь",
        },
        {
          id: 287,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Растительное масло",
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
        {
          id: 385,
          weight: 2,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Сушеный укроп",
        },
      ],
      optional_ingredients: [
        {
          id: 500,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Ржаной хлеб",
        },
      ],
      proteins: 3.14,
      fats: 4.44,
      carbs: 3.98,
      calories: 67.67,
    },
    {
      id: 218705,
      active_cooking_time: 30,
      total_cooking_time: 80,
      difficulty_level: 2,
      title: "Картофельный суп с курицей",
      subtitle:
        "Приготовьте густой, сытный и нежный картофельный суп с кусочками курицы для семейного обеда. Это недорогое и простое блюдо, которое можно сварить как на плите, так и в мультиварке. Картофель хорошо разваривается и делает суп густым. Для этого выбирайте белые крахмалистые сорта и нарезайте овощ на тонкие небольшие брусочки. Вместе с луком, чесноком и морковью положите в суп и другие овощи, например, шпинат или кукурузу.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy9jaHZFVWIuanBlZw.jpg",
      preparation: {
        content:
          "Разморозьте, помойте и обсушите на бумажных полотенцах курицу. Вымойте и почистите картошку, морковку, чеснок и репчатый лук.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zNlkzeWsuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Положите курицу в кастрюлю, залейте водой и поставьте на средний огонь. Доведите до кипения, снимите пенку. Посолите. Уменьшите нагрев до слабого. Варите курицу 30 минут под крышкой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy9LWkRkYXAuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Достаньте курицу из бульона, остудите и отделите мясо от костей. Нарежьте мясо на небольшие кусочки. Процедите бульон и верните его на огонь.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy9DSGkzRmguanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Нарежьте картофель небольшими брусочками. Положите в кипящий бульон. Варите 20 минут на среднем огне.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy9nN3Znd1ouanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Нарежьте репчатый лук полукольцами. Натрите морковь на средней терке. Пропустите чеснок через пресс.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zV0xMd3YuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Разогрейте в сковороде растительное масло. Обжарьте лук, морковь и чеснок на среднем огне в течение 5 минут, регулярно перемешивая.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zZTdmWEcuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Добавьте в суп морковно-луковую зажарку, кусочки куриного мяса и приправу для курицы. Перемешайте. Варите еще 5 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy82MmRVNHcuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 175,
          weight: 300,
          custom_measure: "г",
          custom_measure_count: 300,
          title: "Куриный окорочок",
        },
        {
          id: 108,
          weight: 360,
          custom_measure: "шт.",
          custom_measure_count: 3,
          title: "Картошка",
        },
        {
          id: 290,
          weight: 80,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Репчатый лук",
        },
        {
          id: 219,
          weight: 90,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Морковь",
        },
        {
          id: 440,
          weight: 10,
          custom_measure: "зубчик",
          custom_measure_count: 2,
          title: "Чеснок",
        },
        {
          id: 287,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Растительное масло",
        },
        {
          id: 54,
          weight: 1000,
          custom_measure: "л",
          custom_measure_count: 1,
          title: "Вода",
        },
        {
          id: 352,
          weight: 10,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Соль",
        },
        {
          id: 12056,
          weight: 4,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Приправа для птицы",
        },
      ],
      optional_ingredients: [
        {
          id: 343,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Сметана",
        },
        {
          id: 314,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Свежая зелень",
        },
      ],
      proteins: 3.24,
      fats: 2.66,
      carbs: 4.15,
      calories: 53.1,
    },
    {
      id: 218547,
      active_cooking_time: 35,
      total_cooking_time: 35,
      difficulty_level: 2,
      title: "Мидии в соусе Том Ям",
      subtitle:
        "Благодаря пасте Том Ям самые популярные блюда тайской кухни легко готовить дома. Сделайте на ее основе пряный и ароматный соус для мидий в тайском стиле. Обжарьте пасту Том Ям с чесноком, затем прокипятите все с кокосовым молоком. Добавьте сок лайма и прогрейте в соусе заранее отваренные мидии: в ракушках или уже очищенные.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS8zQUhFZE0uanBlZw.jpg",
      preparation: {
        content:
          "Помойте лайм, оботрите его от влаги бумажными полотенцами. Вымойте и почистите чеснок. Подготовьте кастрюлю, миску и сотейник. Очистите мидии.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9SazdrVzUuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Налейте в кастрюлю 1-1,5 литра воды. Поставьте на сильный огонь и дайте воде закипеть. Опустите в воду мидии в ракушках. Проварите их в течение 5 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS80NFdVUncuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Достаньте мидии из воды шумовкой и переложите в миску. Прикройте миску крышкой или тарелкой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS8zWlJ1cHguanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Выжмите сок из половины лайма. Пропустите чеснок через пресс или мелко его натрите.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9qeHNoaVEuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Поставьте чистую кастрюлю на средний огонь. Налейте в нее растительное масло и хорошо разогрейте. Положите чеснок в горячее масло. Обжарьте его, помешивая, 1-2 минуты до золотистого цвета.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9kM3JDM2EuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Положите в кастрюлю к чесноку пасту Том Ям. Прогрейте все вместе, помешивая, 1-2 минуты. Влейте в кастрюлю кокосовое молоко, всыпьте сушеную кинзу.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS80RGdOUHQuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Тщательно перемешайте получившийся соус и дождитесь, когда он закипит. Добавьте в кастрюлю сок лайма и выложите отваренные мидии. Хорошо размешайте, чтобы все мидии равномерно покрылись соусом. Прогрейте 2-3 минуты и снимите сотейник с огня.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS8zQVRLTHYuanBlZw.jpg",
        },
      ],
      kitchen_type: "Тайская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 735,
          weight: 27,
          custom_measure: "ст. л.",
          custom_measure_count: 1.5,
          title: "Паста Том Ям",
        },
        {
          id: 123,
          weight: 100,
          custom_measure: "мл",
          custom_measure_count: 100,
          title: "Кокосовое молоко",
        },
        {
          id: 440,
          weight: 5,
          custom_measure: "зубчик",
          custom_measure_count: 1,
          title: "Чеснок",
        },
        {
          id: 371,
          weight: 1,
          custom_measure: "г",
          custom_measure_count: 1,
          title: "Сушеная кинза",
        },
        {
          id: 180,
          weight: 30,
          custom_measure: "г",
          custom_measure_count: 30,
          title: "Лайм",
        },
        {
          id: 270,
          weight: 10,
          custom_measure: "ч. л.",
          custom_measure_count: 2,
          title: "Подсолнечное масло рафинированное",
        },
        {
          id: 786,
          weight: 250,
          custom_measure: "г",
          custom_measure_count: 250,
          title: "Мидии в раковинах",
        },
      ],
      optional_ingredients: [
        {
          id: 116,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Кинза",
        },
      ],
      proteins: 7.58,
      fats: 10.23,
      carbs: 5.54,
      calories: 143.34,
    },
    {
      id: 218456,
      active_cooking_time: 45,
      total_cooking_time: 95,
      difficulty_level: 2,
      title: "Суп-пюре из репы",
      subtitle:
        "Отварите репу в овощном бульоне, измельчите блендером и смешайте со сливками. Получится вкусный суп-пюре с мягким сладковатым вкусом. Это хорошее решение для вегетарианцев или тех, кто придерживается поста. Чтобы сократить время готовки супа, приготовьте овощной бульон заранее. Для него также можно взять готовый бульонный кубик. Получится так же вкусно и при этом быстро. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC96Zm9kQ1MuanBlZw.jpg",
      preparation: {
        content:
          "Вымойте и очистите овощи. Ополосните зелень. Подготовьте кастрюлю, блендер и сито.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC9hTWQ2RWIuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Нарежьте овощи для бульона произвольными кусочками. Отделите веточки петрушки от стеблей.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC93ZTVhTVkuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Поставьте кастрюлю с маслом на огонь. Выложите овощи. Обжаривайте их 4-5 минут, помешивая. Затем влейте воду комнатной температуры, чтобы она покрыла овощи на 2-3 см.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC91Njg3S1UuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Добавьте зелень. Доведите бульон до кипения, убавьте огонь и проварите в течение 30-40 минут. Процедите готовый бульон.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC9pdFFrZEQuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Нарежьте репу средними дольками. Измельчите лук и чеснок.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC95RFBLSmUuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Разогрейте кастрюлю с оливковым маслом на умеренном огне. Выложите лук и чеснок и добавьте немного соли. Обжаривайте 3 минуты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC90a2lvSGcuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Верните овощной бульон в кастрюлю и добавьте репу. Поставьте на сильный огонь и дождитесь кипения, затем убавьте нагрев. Варите суп в течение 10 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC80VnBHVGIuanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Добавьте в кастрюлю лук и чеснок. Взбейте получившийся суп блендером до однородной консистенции. После этого добавьте сливки и соль по вкусу. Перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC80TERCWG4uanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для супа",
      optional_ingredient_title: "Для бульона",
      main_ingredients: [
        {
          id: 799,
          weight: 600,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Репа",
        },
        {
          id: 290,
          weight: 160,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Репчатый лук",
        },
        {
          id: 440,
          weight: 10,
          custom_measure: "зубчик",
          custom_measure_count: 2,
          title: "Чеснок",
        },
        {
          id: 240,
          weight: 34,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Оливковое масло",
        },
        {
          id: 12207,
          weight: 210,
          custom_measure: "мл",
          custom_measure_count: 210,
          title: "Сливки 30% жирности",
        },
        {
          id: 352,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Соль",
        },
      ],
      optional_ingredients: [
        {
          id: 219,
          weight: 90,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Морковь",
        },
        {
          id: 290,
          weight: 80,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Репчатый лук",
        },
        {
          id: 240,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Оливковое масло",
        },
        {
          id: 260,
          weight: 10,
          custom_measure: "пучок",
          custom_measure_count: 0.5,
          title: "Петрушка",
        },
        {
          id: 179,
          weight: 1,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Лавровый лист",
        },
      ],
      proteins: 1.64,
      fats: 9.47,
      carbs: 6.55,
      calories: 117.2,
    },
    {
      id: 218555,
      active_cooking_time: 35,
      total_cooking_time: 45,
      difficulty_level: 2,
      title: "Куриный суп с овощами",
      subtitle:
        "Рецепт овощного куриного супа вдохновлен центральноазиатским лагманом, но это блюдо получится более легким и быстрым в приготовлении. Для него не нужно долго вываривать курицу, а затем отделять мясо от костей и процеживать бульон. Достаточно положить в воду брусочки куриного филе и сварить его, по очереди добавляя овощи и лапшу. Зажарка из моркови и лука сделает суп аппетитно золотистым, а кукуруза добавит ему солнечной яркости и интересную текстуру.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9leFVGSFEuanBlZw.jpg",
      preparation: {
        content:
          "Помойте куриную грудку, оботрите ее от влаги бумажными полотенцами, снимите кожу и удалите кости. Вымойте и почистите лук, морковь и болгарский перец. Ополосните петрушку, отделите листочки от стеблей. Подготовьте кастрюлю для супа и сковороду.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9yNVhGMlouanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Нарежьте филе тонкими брусочками длиной около 2,5-3 см.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS80QjI4UUwuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Налейте воду в кастрюлю. Поставьте на сильный огонь и доведите до кипения. Уменьшите огонь до среднего, всыпьте в воду ¼ ч.л. соли. Опустите в кипящую воду брусочки куриного филе. Оставьте их вариться примерно на 10 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS80SE4zUG4uanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Нарежьте болгарский перец и морковь тонкой соломкой. Измельчите лук кубиками со стороной 4-5 мм. Мелко порубите листочки петрушки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS80NkFlS24uanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Налейте в сковороду растительное масло. Поставьте на сильный огонь и хорошо разогрейте. Положите в сковороду нарезанный лук. Жарьте его, помешивая, в течение 2-3 минут до золотистого цвета.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS80NDhaNkwuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Добавьте к луку морковь и обжарьте все вместе, постоянно перемешивая, еще 2-3 минуты до мягкости моркови.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9OV25DdWIuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Опустите в бульон к куриному филе полоски болгарского перца и замороженную кукурузу. Перемешайте и прогрейте овощи в бульоне 3-4 минуты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS80VkxXNFouanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Выложите в суп обжаренные лук и морковь. Поварите все вместе в течение 5-6 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9YWmpNcVMuanBlZw.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Добавьте в суп лапшу для лагмана и варите его до ее готовности около 4-5 минут или в соответствии с инструкцией на упаковке лапши.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS80UzRWc00uanBlZw.jpg",
        },
        {
          title: "Шаг 9",
          description:
            "Всыпьте в суп ¼ ч.л. соли, черный перец и рубленую петрушку. Хорошо перемешайте, прогрейте еще 1-2 минуты и снимите суп с огня. Перед подачей дайте супу постоять под крышкой примерно 10 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS8zWXN5RE4uanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская, среднеазиатская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 165,
          weight: 400,
          custom_measure: "г",
          custom_measure_count: 400,
          title: "Куриная грудка",
        },
        {
          id: 5992,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Лагманная лапша",
        },
        {
          id: 12402,
          weight: 150,
          custom_measure: "г",
          custom_measure_count: 150,
          title: "Красный болгарский перец",
        },
        {
          id: 20229,
          weight: 60,
          custom_measure: "г",
          custom_measure_count: 60,
          title: "Замороженные зерна кукурузы",
        },
        {
          id: 290,
          weight: 40,
          custom_measure: "шт.",
          custom_measure_count: 0.5,
          title: "Репчатый лук",
        },
        {
          id: 219,
          weight: 90,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Морковь",
        },
        {
          id: 287,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Растительное масло",
        },
        {
          id: 439,
          weight: 1.25,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Черный перец молотый",
        },
        {
          id: 352,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Соль",
        },
        {
          id: 54,
          weight: 1600,
          custom_measure: "л",
          custom_measure_count: 1.6,
          title: "Вода",
        },
        {
          id: 260,
          weight: 4,
          custom_measure: "веточка",
          custom_measure_count: 2,
          title: "Петрушка",
        },
      ],
      optional_ingredients: [
        {
          id: 367,
          weight: 20,
          custom_measure: "г",
          custom_measure_count: 20,
          title: "Сухарики",
        },
      ],
      proteins: 4.86,
      fats: 1.17,
      carbs: 5.26,
      calories: 50.55,
    },
    {
      id: 217460,
      active_cooking_time: 30,
      total_cooking_time: 60,
      difficulty_level: 2,
      title: "Летний суп со свеклой",
      subtitle:
        "Чтобы окрошка была не только вкусной, но и красивой, сделайте ее на свекольном отваре. У супа получится аппетитный яркий цвет. Кроме того, отвар подчеркнет вкус блюда. Такую окрошку не нужно дополнять ни квасом, ни кефиром. Свекольного отвара будет вполне достаточно. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyOC80OUduR0ouanBlZw.jpg",
      preparation: {
        content: "Вымойте овощи. Почистите картофель и свеклу. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyOC9rSnhlaGguanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Нарежьте свеклу соломкой. Выложите в кастрюлю и залейте водой. Поставьте на средний огонь и варите до готовности. Оставьте остывать. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyOC93OEN0V1MuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Отварите яйца вкрутую. Переложите в ледяную воду. Остудите и снимите с них скорлупу. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyOC8zVnFNM3AuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Отварите картофель до готовности. Дайте остыть и нарежьте небольшими кубиками. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyOC8zckw1M0EuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Нарежьте кубиками колбасу, редис, огурец, яйца и помидоры. Измельчите зеленый лук и укроп.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyOC92U0JzOVguanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Переложите все нарезанные овощи в тарелки для подачи. Добавьте к ним свеклу. Посолите и перемешайте. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyOC9tbWpvd0guanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Растворите в свекольном отваре сахар. Залейте отваром овощи в тарелках. Приправьте майонезом. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyOC8zRGtveUcuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 54,
          weight: 500,
          custom_measure: "л",
          custom_measure_count: 0.5,
          title: "Вода",
        },
        {
          id: 237,
          weight: 100,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Огурец",
        },
        {
          id: 288,
          weight: 50,
          custom_measure: "г",
          custom_measure_count: 50,
          title: "Редис",
        },
        {
          id: 108,
          weight: 120,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Картошка",
        },
        {
          id: 316,
          weight: 65,
          custom_measure: "шт.",
          custom_measure_count: 0.5,
          title: "Свекла",
        },
        {
          id: 272,
          weight: 80,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Помидор",
        },
        {
          id: 592,
          weight: 60,
          custom_measure: "г",
          custom_measure_count: 60,
          title: "Вареная колбаса",
        },
        {
          id: 169,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное яйцо",
        },
        {
          id: 312,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Сахар",
        },
        {
          id: 352,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Соль",
        },
        {
          id: 91,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Зеленый лук",
        },
        {
          id: 418,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Укроп",
        },
        {
          id: 194,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Майонез",
        },
      ],
      optional_ingredients: [],
      proteins: 2.01,
      fats: 2.04,
      carbs: 3.34,
      calories: 39.47,
    },
    {
      id: 216735,
      active_cooking_time: 15,
      total_cooking_time: 55,
      difficulty_level: 2,
      title: "Холодный свекольник на кефире",
      subtitle:
        "Этот холодный летний суп из отварной красной свеклы со свежими огурцами и зеленью подают с вареным яйцом, сметаной и даже льдом. В качестве бульона здесь выступает кефир, разбавленный водой. Но это может быть и свекольный отвар, и натуральный йогурт, и минералка или даже хлебный квас. А перед подачей на стол обязательно дайте свекольнику постоять в холодильнике. Так суп получится вкуснее и ароматнее.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy8zbVhjZnguanBlZw.jpg",
      preparation: {
        content: "Помойте свеклу, огурец и зелень.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy8zNjc2dE4uanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Положите свеклу в кастрюлю с водой и поставьте на сильный огонь. После закипания уменьшите нагрев до среднего. Варите 40 минут. Остудите свеклу и очистите от кожуры.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy8zWFhqYjYuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Натрите свеклу и огурец на средней терке. Мелко покрошите зеленый лук и укроп.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy8zQlRab1ouanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Положите в миску свеклу, огурец и зелень. Посолите, поперчите.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy9ORXo5UFAuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Влейте в посуду с ингредиентами воду и кефир. Хорошо перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy8zZTZDQ2suanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 8291,
          weight: 206,
          custom_measure: "стакан",
          custom_measure_count: 1,
          title: "Кефир 2,5%",
        },
        {
          id: 54,
          weight: 200,
          custom_measure: "стакан",
          custom_measure_count: 1,
          title: "Вода",
        },
        {
          id: 316,
          weight: 130,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Свекла",
        },
        {
          id: 237,
          weight: 100,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Огурец",
        },
        {
          id: 418,
          weight: 7.5,
          custom_measure: "пучок",
          custom_measure_count: 0.5,
          title: "Укроп",
        },
        {
          id: 91,
          weight: 15,
          custom_measure: "пучок",
          custom_measure_count: 0.3,
          title: "Зеленый лук",
        },
        {
          id: 352,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
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
          id: 169,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Куриное яйцо",
        },
        {
          id: 418,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Укроп",
        },
      ],
      proteins: 1.38,
      fats: 0.83,
      carbs: 3.76,
      calories: 28.51,
    },
    {
      id: 218553,
      active_cooking_time: 50,
      total_cooking_time: 130,
      difficulty_level: 3,
      title: "Классический суп харчо из баранины",
      subtitle:
        "Чтобы приготовить суп харчо из баранины, постарайтесь выбрать кусок мяса на косточке, но без лишнего жира или прожилок. В этом случае бульон получится наваристым, вкусным, но не слишком жирным. Не забудьте добавить в суп измельченные грецкие орехи и ткемали — это главные ингредиенты этого грузинского блюда. Также обязательно всыпьте хмели-сунели и кинзу.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMS8zU2NkYWguanBlZw.jpg",
      preparation: {
        content:
          "Хорошо вымойте мясо, срежьте лишние прожилки и пленки. Помойте и обсушите грецкие орехи и зелень. Ополосните и почистите лук и чеснок. Промойте рис, пока вода не станет прозрачной. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9yZGZEbVMuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Положите баранину в кастрюлю. Залейте водой и поставьте на средний огонь. Когда вода закипит, убавьте нагрев до слабого. Снимите пену и варите не менее часа.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS85bWF5RzUuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Нарежьте лук мелкими кубиками. Выложите его в разогретую с маслом сковороду и обжарьте до мягкости.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS8zN1ZmM1YuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Измельчите в блендере орехи в крупную крошку. Выложите к луку. Выдавите чеснок через пресс и добавьте в сковороду. Обжарьте 2-3 минуты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9DSEtWUTguanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Добавьте в сковороду к луку и орехам томатную пасту, ткемали, соль и острый перец. Перемешайте. Прогрейте пару минут и уберите с плиты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS8zR1k1ZXQuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Достаньте баранину из бульона. Отделите от кости. Нарежьте мясо небольшими кусочками и верните его в бульон.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9UZkRjQ1UuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Всыпьте рис в кастрюлю с супом. Добавьте зажарку и хмели-сунели. Варите около 20 минут до готовности риса. Измельчите кинзу и положите ее в суп в самом конце приготовления. Дайте супу постоять 10 минут под крышкой перед подачей. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS93Ukc5aTkuanBlZw.jpg",
        },
      ],
      kitchen_type: "Грузинская, кавказская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 17,
          weight: 350,
          custom_measure: "г",
          custom_measure_count: 350,
          title: "Баранина",
        },
        {
          id: 558,
          weight: 50,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Ткемали",
        },
        {
          id: 72,
          weight: 12,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Грецкие орехи",
        },
        {
          id: 290,
          weight: 80,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Репчатый лук",
        },
        {
          id: 440,
          weight: 10,
          custom_measure: "зубчик",
          custom_measure_count: 2,
          title: "Чеснок",
        },
        {
          id: 292,
          weight: 12.5,
          custom_measure: "ст. л.",
          custom_measure_count: 0.5,
          title: "Рис",
        },
        {
          id: 116,
          weight: 30,
          custom_measure: "пучок",
          custom_measure_count: 1,
          title: "Кинза",
        },
        {
          id: 404,
          weight: 40,
          custom_measure: "ч. л.",
          custom_measure_count: 4,
          title: "Томатная паста",
        },
        {
          id: 429,
          weight: 3,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Хмели-сунели",
        },
        {
          id: 352,
          weight: 20,
          custom_measure: "ч. л.",
          custom_measure_count: 2,
          title: "Соль",
        },
        {
          id: 256,
          weight: 3.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Перец чили",
        },
        {
          id: 54,
          weight: 1500,
          custom_measure: "л",
          custom_measure_count: 1.5,
          title: "Вода",
        },
      ],
      optional_ingredients: [
        {
          id: 314,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Свежая зелень",
        },
        {
          id: 78,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Грузинский лаваш",
        },
      ],
      proteins: 2.93,
      fats: 3.13,
      carbs: 1.84,
      calories: 47.01,
    },
    {
      id: 218376,
      active_cooking_time: 10,
      total_cooking_time: 30,
      difficulty_level: 2,
      title: "Суп «Три банки» с консервированным тунцом",
      subtitle:
        "Для этого супа нужны три банки консервов: белая фасоль, протертые томаты и тунец в собственном соку. По вкусу можно добавить зажарку из лука и чеснока, но это необязательно. Залейте все водой и варите около 20-25 минут. Суп получается очень ароматным, сытным и вкусным. К нему хорошо подойдут паприка, острый перец или свежая зелень. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwOC8zUjVRZEwuanBlZw.jpg",
      preparation: {
        content:
          "Помойте и почистите репчатый лук и чеснок. Откройте консервы. Выложите фасоль на сито и промойте под проточной водой.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwOC80RWg2a0UuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description: "Мелко покрошите репчатый лук и чеснок.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwOC8zNExHQ3YuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Растопите в кастрюле сливочное масло. Обжарьте лук с чесноком и паприкой на среднем огне в течение 3 минут, регулярно перемешивая.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwOC8zZ2JmQXkuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Выложите в кастрюлю протертые томаты, фасоль и тунец вместе с соком.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwOC9NdWJ5UjQuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Залейте все водой. Приправьте солью и черным молотым перцем. Доведите до кипения и варите суп 20 минут под крышкой на слабом огне.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwOC9SSEsyOEQuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская, русская, советская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 290,
          weight: 80,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Репчатый лук",
        },
        {
          id: 440,
          weight: 10,
          custom_measure: "зубчик",
          custom_measure_count: 2,
          title: "Чеснок",
        },
        {
          id: 338,
          weight: 10,
          custom_measure: "ст. л.",
          custom_measure_count: 0.5,
          title: "Сливочное масло",
        },
        {
          id: 247,
          weight: 1.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Паприка",
        },
        {
          id: 352,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Соль",
        },
        {
          id: 439,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Черный перец молотый",
        },
        {
          id: 5786,
          weight: 350,
          custom_measure: "банка / 350 г",
          custom_measure_count: 1,
          title: "Протертые томаты",
        },
        {
          id: 125,
          weight: 240,
          custom_measure: "банка / 240 г",
          custom_measure_count: 1,
          title: "Консервированная белая фасоль",
        },
        {
          id: 415,
          weight: 185,
          custom_measure: "г",
          custom_measure_count: 185,
          title: "Тунец кусочками в собственном соку",
        },
        {
          id: 54,
          weight: 1000,
          custom_measure: "стакан",
          custom_measure_count: 5,
          title: "Вода",
        },
      ],
      optional_ingredients: [
        {
          id: 12283,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Ржаные гренки",
        },
      ],
      proteins: 2.65,
      fats: 0.65,
      carbs: 4.11,
      calories: 30.6,
    },
    {
      id: 217268,
      active_cooking_time: 20,
      total_cooking_time: 30,
      difficulty_level: 2,
      title: "Сырный суп с колбасой и яйцом",
      subtitle:
        "Колбаса для этого супа подойдет любая. Но из копченой получится более наваристый бульон. В самом конце приготовления тонкой струйкой влейте взбитое куриное яйцо, интенсивно при этом перемешивая суп. Яйцо растечется по всей поверхности хлопьями и получится очень вкусно. Если вы не любите такой вариант подачи, добавьте разрезанное пополам сваренное вкрутую яйцо в тарелку. Чтобы повысить остроту блюда, возьмите острую итальянскую колбасу и добавьте еще немного красного перца. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi9KeTIzNFIuanBlZw.jpg",
      preparation: {
        content:
          "Помойте и почистите картошку, репчатый лук, морковь и чеснок. Ополосните куриное яйцо и зелень. Подготовьте глубокую кастрюлю.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi82QXVyeVkuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Нарежьте картошку небольшими брусочками. Положите в кастрюлю, налейте 1 л воды и поставьте на средний огонь. Варите 15 минут после закипания.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi80UzM3R3UuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Мелко покрошите репчатый лук. Нарежьте тонкой соломкой морковь. Разогрейте в сковороде растительное масло. Обжарьте лук с морковью на среднем огне в течение 5 минут, регулярно перемешивая.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi8zb3RxTHMuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Нарежьте колбасу небольшими кубиками. Измельчите зелень и чеснок. Добавьте их в сковороду. Перемешайте. Готовьте еще 5 минут. Выложите зажарку в кастрюлю. Перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi8zS29HaEYuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Нарежьте плавленый сыр тонкими пластиками. Добавьте их в кастрюлю и тщательно перемешайте до полного растворения сыра.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi8zNWdxUXMuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Взбейте куриное яйцо вилкой в отдельной миске. Постоянно помешивая суп, тонкой струйкой влейте яйцо в кастрюлю. Снимите суп с огня. Посолите и дайте супу настояться 10 минут под крышкой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi8zRnV1UmQuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 108,
          weight: 240,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Картошка",
        },
        {
          id: 290,
          weight: 40,
          custom_measure: "шт.",
          custom_measure_count: 0.5,
          title: "Репчатый лук",
        },
        {
          id: 219,
          weight: 45,
          custom_measure: "шт.",
          custom_measure_count: 0.5,
          title: "Морковь",
        },
        {
          id: 440,
          weight: 5,
          custom_measure: "зубчик",
          custom_measure_count: 1,
          title: "Чеснок",
        },
        {
          id: 169,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное яйцо",
        },
        {
          id: 266,
          weight: 50,
          custom_measure: "г",
          custom_measure_count: 50,
          title: "Плавленый сыр",
        },
        {
          id: 136,
          weight: 125,
          custom_measure: "г",
          custom_measure_count: 125,
          title: "Копченая колбаса",
        },
        {
          id: 314,
          weight: 10,
          custom_measure: "г",
          custom_measure_count: 10,
          title: "Свежая зелень",
        },
        {
          id: 287,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Растительное масло",
        },
        {
          id: 352,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Соль",
        },
      ],
      optional_ingredients: [],
      proteins: 6.95,
      fats: 13.59,
      carbs: 10.56,
      calories: 189.25,
    },
    {
      id: 217201,
      active_cooking_time: 20,
      total_cooking_time: 160,
      difficulty_level: 2,
      title: "Холодный щавелевый суп",
      subtitle:
        "Холодный щавелевый суп состоит из двух частей, которые нужно приготовить по отдельности. Первая часть — картофельное пюре. Именно оно придает супу нежную кремовую консистенцию и густоту. Вторая часть — зеленый крем. Для его приготовления щавель не нужно варить, достаточно положить его в кипяток и измельчить при помощи погружного блендера до однородной консистенции. Заправьте суп сметаной, сливками или молоком и подайте холодным. Хотя и в горячем виде он будет вкусным.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMy8za3k1RjUuanBlZw.jpg",
      preparation: {
        content:
          "Помойте и обсушите на бумажных полотенцах щавель. Отрежьте толстые основания стеблей. Помойте и почистите картошку. Подготовьте погружной блендер.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMy96ejdRRWkuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Вскипятите 0,5 литра воды в небольшой кастрюле. Положите в кипяток листья щавеля и сразу снимите кастрюлю с огня. Пробейте щавель блендером вместе с водой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMy9QeE1VNG0uanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Нарежьте картошку небольшими брусочками. Налейте 0,5 литра воды в кастрюлю, положите в нее картофель и отварите в течение 20 минут. Измельчите картошку блендером.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMy8zcXJMbmouanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Соедините в одной кастрюле картофельное пюре и пюре из щавеля. Посолите, поперчите и перемешайте. Доведите до кипения и сразу отключите нагрев.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNC8zd3lCY1ouanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description: "Добавьте в суп сметану и хорошенько перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNC8zV21yb1kuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 597,
          weight: 150,
          custom_measure: "г",
          custom_measure_count: 150,
          title: "Щавель",
        },
        {
          id: 54,
          weight: 1000,
          custom_measure: "л",
          custom_measure_count: 1,
          title: "Вода",
        },
        {
          id: 108,
          weight: 240,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Картошка",
        },
        {
          id: 345,
          weight: 70,
          custom_measure: "г",
          custom_measure_count: 70,
          title: "Сметана 15% жирности",
        },
        {
          id: 352,
          weight: 3.5,
          custom_measure: "г",
          custom_measure_count: 3.5,
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
          id: 254,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Перепелиное яйцо",
        },
        {
          id: 343,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Сметана",
        },
      ],
      proteins: 0.61,
      fats: 0.82,
      carbs: 3.11,
      calories: 22.12,
    },
    {
      id: 217062,
      active_cooking_time: 40,
      total_cooking_time: 60,
      difficulty_level: 2,
      title: "Холодный красный борщ",
      subtitle:
        "Чтобы свекольный отвар в холодном борще остался бордово-красным, добавьте в него немного уксуса или лимонного сока, а затем охладите часть отвара, пока картофель и свекла доходят до готовности. Вместо репчатого лука подойдет лук-порей или зеленый, куриные яйца при желании замените перепелиными, добавьте ветчину или отварное куриное филе.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi9RQ3lDSFouanBlZw.jpg",
      preparation: {
        content:
          "Помойте и почистите свеклу, картофель и лук. Вымойте и промокните бумажными салфетками яйцо, огурец и укроп. Отделите кисточки укропа от стеблей. Подготовьте кастрюлю, ковшик, глубокую миску и порционные тарелки.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi9kbjV1R0suanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Налейте воду в кастрюлю, поставьте на сильный огонь и доведите до кипения. Налейте в воду белый уксус, всыпьте соль.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi8zWkdUYkUuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Разрежьте очищенную свеклу на 3-4 части, положите в кипящую воду. Уменьшите огонь до среднего и варите свеклу, пока вода снова не закипит.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi9uWkI2UFguanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Извлеките свеклу из отвара, нарежьте ее тонкой соломкой. Опустите соломку из свеклы обратно в отвар и продолжайте варить на среднем огне. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi9WeHd2bjUuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Нарежьте картофель, лук и огурец небольшими кубиками. Мелко порубите укроп.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi80cTV1VGQuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Перелейте половину свекольного отвара в миску и дайте ему остыть при комнатной температуре. Уберите миску с отваром в холодильник.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi80RDVKeWouanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Выложите кубики картофеля в кастрюлю с горячим отваром. Варите овощи до готовности в течение 10-15 минут. Снимите кастрюлю с отваром с огня и оставьте остывать.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi9rdERQb04uanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Залейте яйцо в ковшике водой, поставьте на сильный огонь и дайте воде закипеть. Сварите яйцо вкрутую в течение 7-8 минут. Остудите его в холодной воде, очистите от скорлупы и нарежьте кубиками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi8zeVNBTEYuanBlZw.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Достаньте миску с охлажденным свекольным отваром из холодильника, соедините с остывшим отваром в кастрюле. Добавьте сахар и хорошо размешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi8zU1dQNmMuanBlZw.jpg",
        },
        {
          title: "Шаг 9",
          description:
            "Разложите по глубоким порционным тарелкам яйца, лук и свежий огурец. Разлейте по тарелкам холодный отвар со свеклой и картофелем. Посыпьте укропом и подайте холодный борщ к столу.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi80MnBQSjcuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 316,
          weight: 130,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Свекла",
        },
        {
          id: 108,
          weight: 120,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Картошка",
        },
        {
          id: 290,
          weight: 20,
          custom_measure: "шт.",
          custom_measure_count: 0.25,
          title: "Репчатый лук",
        },
        {
          id: 169,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное яйцо",
        },
        {
          id: 237,
          weight: 100,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Огурец",
        },
        {
          id: 418,
          weight: 4,
          custom_measure: "веточка",
          custom_measure_count: 2,
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
          id: 13273,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Белый винный уксус 6%",
        },
        {
          id: 312,
          weight: 1,
          custom_measure: "г",
          custom_measure_count: 1,
          title: "Сахар",
        },
        {
          id: 54,
          weight: 1000,
          custom_measure: "стакан",
          custom_measure_count: 5,
          title: "Вода",
        },
      ],
      optional_ingredients: [
        {
          id: 345,
          weight: 25,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Сметана 15% жирности",
        },
        {
          id: 169,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Куриное яйцо",
        },
      ],
      proteins: 0.93,
      fats: 0.78,
      carbs: 2.67,
      calories: 21.2,
    },
    {
      id: 217088,
      active_cooking_time: 30,
      total_cooking_time: 90,
      difficulty_level: 2,
      title: "Мясная окрошка",
      subtitle:
        "С мясом окрошка получается более полезной и сытной, чем с колбасой. Кусок говядины или свинины нужно отварить, запечь в духовке, пожарить или сварить на пару. Важно, чтобы мясо получилось мягким и нежным. Поэтому готовьте его при невысокой температуре подольше. Если положить в окрошку немного горчицы, то вкус получится чуть острее. Чтобы аромат зелени раскрылся полностью, разотрите ее с солью. Сахар добавляется в суп в качестве усилителя вкуса.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMS9DVmJSU1EuanBlZw.jpg",
      preparation: {
        content:
          "Разморозьте, помойте и обсушите мясо. Помойте огурец, картофель, куриное яйцо, зелень и редис.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMy80Sks5cDYuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Положите мясо в кастрюлю, залейте водой. Доведите до кипения на сильном огне. Снимите пену и уменьшите нагрев до минимального. Варите под крышкой 1 час. Затем охладите и нарежьте на маленькие кубики.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMy8zWTdGTDkuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Отварите картофель в течение 25 минут. Остудите и очистите от кожуры.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMy9va2g4NGguanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Сварите куриное яйцо вкрутую в течение 8-10 минут. Остудите его в холодной воде и очистите от скорлупы.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMy9ObmFUNlYuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Нарежьте маленькими кубиками картошку, яйцо, огурец и редис.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMy9IWTdBWGMuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Мелко покрошите зеленый лук и укроп. Положите их в чистую миску, посолите и разомните толкушкой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMy8zZnNCaFYuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Смешайте в глубокой миске нарезанные ингредиенты и зелень. Добавьте сахар и горчицу. Залейте квасом и хорошенько перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMy93NHNMNW8uanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 109,
          weight: 500,
          custom_measure: "мл",
          custom_measure_count: 500,
          title: "Квас",
        },
        {
          id: 60,
          weight: 125,
          custom_measure: "г",
          custom_measure_count: 125,
          title: "Говядина",
        },
        {
          id: 237,
          weight: 100,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Огурец",
        },
        {
          id: 108,
          weight: 120,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Картошка",
        },
        {
          id: 169,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное яйцо",
        },
        {
          id: 91,
          weight: 50,
          custom_measure: "пучок",
          custom_measure_count: 1,
          title: "Зеленый лук",
        },
        {
          id: 418,
          weight: 7.5,
          custom_measure: "пучок",
          custom_measure_count: 0.5,
          title: "Укроп",
        },
        {
          id: 67,
          weight: 8,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Горчица",
        },
        {
          id: 352,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Соль",
        },
        {
          id: 312,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Сахар",
        },
        {
          id: 288,
          weight: 40,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Редис",
        },
      ],
      optional_ingredients: [
        {
          id: 288,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Редис",
        },
        {
          id: 12,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Базилик",
        },
      ],
      proteins: 3.65,
      fats: 2.32,
      carbs: 5.67,
      calories: 60.07,
    },
    {
      id: 217064,
      active_cooking_time: 15,
      total_cooking_time: 255,
      difficulty_level: 2,
      title: "Гаспачо из огурцов",
      subtitle:
        "Этот суп идеально подать в знойный летний день, его едят охлажденным. Продукты в его составе тоже очень освежающие: огурец, авокадо и сок лайма. Чтобы суп получился более сытным, подайте его с сыром фета. Если же вы стараетесь избегать лишних калорий или придерживаетесь вегетарианства, то перед подачей посыпьте порцию тыквенными семечками.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi8zQzZVanYuanBlZw.jpg",
      preparation: {
        content:
          "Помойте огурцы, авокадо, лайм и петрушку. Подготовьте блендер.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi9BRWE2d1EuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description: "Нарежьте огурцы крупными кусочками произвольной формы.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi80SktGTGsuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Снимите кожуру с авокадо, разделите его пополам и уберите косточку. Крупно нарежьте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi9QU1BycVEuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Разрежьте лайм пополам и выжмите сок из обеих половинок. Измельчите петрушку.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi8zYlY0N2MuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Положите все нарезанные ингредиенты в чашу блендера. Всыпьте паприку, перец и соль. Влейте сок лайма. Пробейте до однородной консистенции. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi8zSjNQd0QuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Перелейте содержимое блендера в кастрюлю или миску. Отправьте в холодильник охлаждаться минимум 4 часа.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMi80VjU3eVUuanBlZw.jpg",
        },
      ],
      kitchen_type: "Испанская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 237,
          weight: 400,
          custom_measure: "г",
          custom_measure_count: 400,
          title: "Огурец",
        },
        {
          id: 1,
          weight: 200,
          custom_measure: "г",
          custom_measure_count: 200,
          title: "Авокадо",
        },
        {
          id: 180,
          weight: 60,
          custom_measure: "г",
          custom_measure_count: 60,
          title: "Лайм",
        },
        {
          id: 260,
          weight: 6,
          custom_measure: "г",
          custom_measure_count: 6,
          title: "Петрушка",
        },
        {
          id: 247,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Паприка",
        },
        {
          id: 439,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Черный перец молотый",
        },
        {
          id: 352,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Соль",
        },
      ],
      optional_ingredients: [
        {
          id: 390,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Сыр фета",
        },
        {
          id: 12,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Базилик",
        },
      ],
      proteins: 1.17,
      fats: 6.08,
      carbs: 4.4,
      calories: 75.11,
    },
    {
      id: 216719,
      active_cooking_time: 20,
      total_cooking_time: 50,
      difficulty_level: 2,
      title: "Постный суп с чечевицей и сельдереем",
      subtitle:
        "Этот суп готовится проще простого — просто нарежьте все овощи, положите их в кастрюлю и сварите до готовности. Не нужно ни варить заранее бульон, ни возиться с зажаркой. Смело добавляйте другие овощи помимо тех, что указаны в рецепте. Для сытости положите в суп немного чечевицы. Также для улучшения вкуса, добавьте сок и цедру лимона перед подачей.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy8zUG52UlguanBlZw.jpg",
      preparation: {
        content:
          "Помойте и почистите репчатый лук и морковь. Сполосните оставшиеся овощи. У капусты уберите верхние вялые листья. Промойте чечевицу под проточной водой.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy80RlZ3eHEuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Тонко нашинкуйте капусту. Мелко покрошите репчатый лук. Натрите морковь.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy9KOURLc1EuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description: "Нарежьте на маленькие кубики сельдерей и помидор.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy80TmM4djYuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description: "Положите в кастрюлю все нарезанные овощи.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy9KN1U0SEEuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Добавьте чечевицу, соль, лавровый лист, перец горошком и молотый перец.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy9tQWtRSEguanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Залейте содержимое кастрюли водой и перемешайте. Поставьте на средний огонь. Варите 30 минут после закипания.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy80dzh3QUIuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 219,
          weight: 90,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Морковь",
        },
        {
          id: 103,
          weight: 222.5,
          custom_measure: "кочан",
          custom_measure_count: 0.25,
          title: "Капуста",
        },
        {
          id: 361,
          weight: 90,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Стебель сельдерея",
        },
        {
          id: 272,
          weight: 80,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Помидор",
        },
        {
          id: 290,
          weight: 40,
          custom_measure: "шт.",
          custom_measure_count: 0.5,
          title: "Репчатый лук",
        },
        {
          id: 441,
          weight: 54,
          custom_measure: "ст. л.",
          custom_measure_count: 3,
          title: "Чечевица",
        },
        {
          id: 179,
          weight: 1,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Лавровый лист",
        },
        {
          id: 85,
          weight: 1.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.3,
          title: "Душистый перец горошком",
        },
        {
          id: 439,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Черный перец молотый",
        },
        {
          id: 352,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Соль",
        },
      ],
      optional_ingredients: [
        {
          id: 427,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Хлебцы",
        },
        {
          id: 12,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Базилик",
        },
      ],
      proteins: 1.73,
      fats: 0.14,
      carbs: 6.51,
      calories: 35.4,
    },
    {
      id: 218316,
      active_cooking_time: 20,
      total_cooking_time: 80,
      difficulty_level: 2,
      title: "Пряное гаспачо с лаймом и имбирем",
      subtitle:
        "В жаркой Испании гаспачо готовят круглый год, а у нас этот суп обязательно нужно попробовать летом. В разных регионах в него добавляют разные специи. Кто-то делает его острым, кто-то — кислым, а кто-то и вовсе обходится без пряностей. Главное выбрать хорошие и ароматные помидоры, ведь именно от них зависит вкус блюда. Мы дополнили его свежим соком лайма и имбирем. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwNi8zM1lYQ1YuanBlZw.jpg",
      preparation: {
        content:
          "Помойте помидоры и лайм, промокните их от влаги бумажными полотенцами. Подготовьте блендер с чашей и глубокую миску.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwNi8zbVFoa0ouanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Вскипятите в чайнике 1-2 стакана воды. Ошпарьте кипятком помидоры, промойте их холодной водой и снимите с них кожицу.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwNi8zY2F0NVkuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Разрежьте помидоры на 4 части, выложите их в чашу блендера. Пробейте их 2-3 минуты до состояния пюре.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwNi84dWpkZWsuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Выложите пюре из помидоров в глубокую миску. Налейте к ним томатный сок, всыпьте соль, перец, сахар, сушеный имбирь и кориандр.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwNi8zbUM2N1cuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description: "Выжмите сок из лайма.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwNi80VjVxZlouanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Влейте в миску к соединенным ингредиентам оливковое масло и сок лайма. Тщательно перемешайте гаспачо и уберите его в холодильник на 1 час.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwNi80S2F2NUcuanBlZw.jpg",
        },
      ],
      kitchen_type: "Испанская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 406,
          weight: 200,
          custom_measure: "мл",
          custom_measure_count: 200,
          title: "Томатный сок",
        },
        {
          id: 180,
          weight: 40,
          custom_measure: "г",
          custom_measure_count: 40,
          title: "Лайм",
        },
        {
          id: 214,
          weight: 3,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Молотый имбирь",
        },
        {
          id: 215,
          weight: 1,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Молотый кориандр",
        },
        {
          id: 312,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Сахар",
        },
        {
          id: 352,
          weight: 2,
          custom_measure: "г",
          custom_measure_count: 2,
          title: "Соль",
        },
        {
          id: 439,
          weight: 0.5,
          custom_measure: "г",
          custom_measure_count: 0.5,
          title: "Черный перец молотый",
        },
        {
          id: 337,
          weight: 240,
          custom_measure: "шт.",
          custom_measure_count: 4,
          title: "Сливовидные помидоры",
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
          id: 240,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Оливковое масло",
        },
      ],
      proteins: 1.07,
      fats: 0.26,
      carbs: 4.5,
      calories: 23.67,
    },
    {
      id: 217277,
      active_cooking_time: 20,
      total_cooking_time: 80,
      difficulty_level: 2,
      title: "Томатный суп со специями",
      subtitle:
        "Этот суп отлично подойдет для обеда в сезон, когда на грядках и прилавках появляются молодые томаты. Овощи из нового урожая богаты витаминами, они намного сочнее и вкуснее. Добавьте в суп такой же молодой чеснок: его вкус намного мягче, и он идеально дополнит блюдо. Готовить суп можно как на воде, так и на овощном бульоне, чтобы получить более насыщенный вкус.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi9wVHpLVnYuanBlZw.jpg",
      preparation: {
        content:
          "Вымойте и очистите от шелухи чеснок. Помойте помидоры. Застелите противень пергаментом.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi9nUUFva3YuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description: "Разрежьте каждый помидор на 4 части.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi9wTVlnc0cuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description: "Пропустите зубчики чеснока через пресс.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi80M1l2ZXQuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Положите помидоры с чесноком на противень или в форму для запекания. Запеките овощи в духовке, предварительно разогретой до 200°C, в течение 40 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi8zZm9VanouanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Остудите печеные помидоры с чесноком и переложите в кастрюлю.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi90cFBWRTIuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Добавьте измельченный розмарин, растительное масло, соль и пряности по вкусу.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi9HS1dKVlouanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Залейте овощным бульоном или водой и поставьте на плиту.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi8zYVZ0TmMuanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Доведите жидкость до кипения и варите томатный суп еще 5 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi8zZnlCQ0YuanBlZw.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 272,
          weight: 1000,
          custom_measure: "кг",
          custom_measure_count: 1,
          title: "Помидор",
        },
        {
          id: 301,
          weight: 4,
          custom_measure: "веточка",
          custom_measure_count: 1,
          title: "Розмарин",
        },
        {
          id: 232,
          weight: 1500,
          custom_measure: "л",
          custom_measure_count: 1.5,
          title: "Овощной бульон",
        },
        {
          id: 440,
          weight: 10,
          custom_measure: "зубчик",
          custom_measure_count: 2,
          title: "Чеснок",
        },
        {
          id: 240,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Оливковое масло",
        },
        {
          id: 352,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Соль",
        },
        {
          id: 247,
          weight: 0.75,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Паприка",
        },
      ],
      optional_ingredients: [
        {
          id: 91,
          weight: 8,
          custom_measure: "веточка",
          custom_measure_count: 1,
          title: "Зеленый лук",
        },
      ],
      proteins: 0.59,
      fats: 0.82,
      carbs: 2.16,
      calories: 17.8,
    },
    {
      id: 216713,
      active_cooking_time: 30,
      total_cooking_time: 150,
      difficulty_level: 3,
      title: "Гороховый суп с говядиной",
      subtitle:
        "Говядина на кости сделает бульон наваристым и крепким, а разваренный горох придаст ему бархатистую густоту. Понадобится совсем небольшой кусок мяса, а суп получится основательным и сытным. Не забудьте, что даже колотый горох лучше замочить перед приготовлением хотя бы на 1 час. Куркуму в овощную зажарку добавлять необязательно, но она сделает суп золотистым и очень ароматным. Возьмите для бульона чуть больше или меньше воды в зависимости от того, насколько густой суп хотите получить.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy9XWEJxZ3EuanBlZw.jpg",
      preparation: {
        content:
          "Промойте горох, выложите его в миску и залейте холодной водой. Оставьте на 1 час. Помойте говядину, промокните ее бумажным полотенцем. Вымойте и почистите картофель, морковь и лук. Подготовьте кастрюлю, терку и небольшую сковороду.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy80SGZBSHEuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Промойте замоченный горох, положите его и говядину в кастрюлю. Налейте к ним воду и поставьте кастрюлю на сильный огонь. Дождитесь кипения и снимите образовавшуюся пену.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy9EU2JqWXEuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Уменьшите огонь под кастрюлей до среднего и варите бульон с горохом около 40-50 минут. Периодически снимайте пену с бульона.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy9IQ2daUkwuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Нарежьте лук маленькими кубиками, крупно натрите морковь. Нарежьте картофель кубиками со стороной 1-1,5 см.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy80MmRHeXQuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Разогрейте сковороду на сильном огне, налейте в нее растительное масло. Опустите в масло лук, пожарьте его 1-2 минуты, помешивая, до светло-бежевого цвета.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy9XUXl4ajIuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Добавьте к луку морковь, обжарьте овощи, изредка помешивая, 3-4 минуты. Всыпьте куркуму, перемешайте и снимите сковороду с огня.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy8zdUxEaUwuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Из кастрюли с почти готовым горохом достаньте мясо. Остудите его и отделите мякоть от кости. Нарежьте мясо крупными кубиками и положите обратно в кастрюлю. Добавьте картофель и варите суп около 15 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy9NdzlKZ2ouanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Выложите в суп обжаренные лук с морковью и лавровый лист, насыпьте соль и черный перец. Варите суп еще 5-6 минут до мягкости картофеля. Выключите огонь, накройте кастрюлю крышкой и дайте супу постоять 10 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy96d1hOZmguanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская, русская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 646,
          weight: 200,
          custom_measure: "г",
          custom_measure_count: 200,
          title: "Говядина на кости",
        },
        {
          id: 6059,
          weight: 175,
          custom_measure: "стакан",
          custom_measure_count: 1,
          title: "Горох колотый",
        },
        {
          id: 108,
          weight: 120,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Картошка",
        },
        {
          id: 219,
          weight: 90,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Морковь",
        },
        {
          id: 290,
          weight: 40,
          custom_measure: "шт.",
          custom_measure_count: 0.5,
          title: "Репчатый лук",
        },
        {
          id: 213,
          weight: 0.9,
          custom_measure: "ч. л.",
          custom_measure_count: 0.3,
          title: "Молотая куркума",
        },
        {
          id: 439,
          weight: 1.25,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Черный перец молотый",
        },
        {
          id: 352,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Соль",
        },
        {
          id: 179,
          weight: 1,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Лавровый лист",
        },
        {
          id: 54,
          weight: 1600,
          custom_measure: "стакан",
          custom_measure_count: 8,
          title: "Вода",
        },
        {
          id: 270,
          weight: 10,
          custom_measure: "ч. л.",
          custom_measure_count: 2,
          title: "Подсолнечное масло рафинированное",
        },
      ],
      optional_ingredients: [
        {
          id: 418,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Укроп",
        },
      ],
      proteins: 3.55,
      fats: 2.62,
      carbs: 5.74,
      calories: 64.63,
    },
  ],
  "second-courses": [
    {
      id: 223398,
      active_cooking_time: 40,
      total_cooking_time: 240,
      difficulty_level: 1,
      title: "Славные куриные ножки на гриле",
      subtitle:
        "Простой рецепт хрустящих куриных ножек на гриле с освежающим соусом от Славного Друже!",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcyMS9Oc2hqcjgucG5n.jpg",
      preparation: {
        content: "Подготовьте все ингредиенты.",
        image_path: null,
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "По толстому краю куриной ножки сделайте надрез вдоль кости.\n",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcyMS82Ujl3ZkgucG5n.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Расправьте мясо, что бы получилась заготовка, как на фото. Проделайте так со всеми куриными ножками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcyMS8zdUtaY3UucG5n.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Для сухого маринада смешайте в миске соль, сахар, сухой лук, сухой чеснок, паприку, острый сушеный чили перец, прованские травы, карри. Перемешайте все специи.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcyMS9rTGl2dXQucG5n.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Влейте к специям подсолнечное масло и тщательно перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcyMS80RG1YZnAucG5n.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Полейте маринадом куриные голени, вмешивайте около 10 минут для равномерного распределения маринада. \nОставьте мариноваться не менее чем на 3 часа.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcyMS8zMjVCZ3oucG5n.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Для приготовления соуса на чистой разделочной доске мелко нарубите кинзу.\n",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcyMS8zV01TekgucG5n.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Соленые огурцы натрите на крупной терке, добавьте к нарезанной кинзе.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcyMS9GZDNueFAucG5n.jpg",
        },
        {
          title: "Шаг 8",
          description: "К огурцам и кинзе добавьте майонез и сметану.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcyMS8zVjJLUFYucG5n.jpg",
        },
        {
          title: "Шаг 9",
          description:
            "Для придания освежающей кислинки добавьте в соус сок одного лайма.\nПри желании, также добавьте немного цедры лайма.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcyMS96aUxSVnQucG5n.jpg",
        },
        {
          title: "Шаг 10",
          description:
            "Для легкой остринки добавьте соус Шрирача и 1 ст.л. сахара. Все ингредиенты тщательно перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcyMS8zOGpKZkMucG5n.jpg",
        },
        {
          title: "Шаг 11",
          description:
            "Обжарьте голени с двух сторон на слабом огне газового гриля по 5-7 минут с каждой стороны.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcyMS80TnJ2TXgucG5n.jpg",
        },
        {
          title: "Шаг 12",
          description:
            "Доведите голени до полной готовности, оставив их на верхнем ярусе газового гриля при минимальном огне — на 10 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcyMS80RExrdlYucG5n.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Ингредиенты",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 164,
          weight: 1440,
          custom_measure: "шт.",
          custom_measure_count: 12,
          title: "Куриная голень",
        },
        {
          id: 352,
          weight: 25,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Соль",
        },
        {
          id: 11996,
          weight: 9,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Сушеный репчатый лук",
        },
        {
          id: 386,
          weight: 10,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Сушеный чеснок",
        },
        {
          id: 330,
          weight: 14,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Сладкая паприка",
        },
        {
          id: 12052,
          weight: 7,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Перец чили сушеный",
        },
        {
          id: 279,
          weight: 5,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Прованские травы",
        },
        {
          id: 105,
          weight: 2,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Карри",
        },
        {
          id: 287,
          weight: 51,
          custom_measure: "ст. л.",
          custom_measure_count: 3,
          title: "Растительное масло",
        },
        {
          id: 116,
          weight: 30,
          custom_measure: "пучок",
          custom_measure_count: 1,
          title: "Кинза",
        },
        {
          id: 351,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Соленые огурцы",
        },
        {
          id: 194,
          weight: 150,
          custom_measure: "ст. л.",
          custom_measure_count: 6,
          title: "Майонез",
        },
        {
          id: 346,
          weight: 50,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Сметана 20% жирности",
        },
        {
          id: 180,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Лайм",
        },
        {
          id: 570,
          weight: 15,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Шрирача",
        },
        {
          id: 312,
          weight: 50,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Сахар",
        },
      ],
      optional_ingredients: [],
      proteins: 13.73,
      fats: 18.5,
      carbs: 4.23,
      calories: 237.27,
    },
    {
      id: 221236,
      active_cooking_time: 30,
      total_cooking_time: 45,
      difficulty_level: 2,
      title: "Омлет с козьей рикоттой и помидорами",
      subtitle:
        "Омлет — это привычный завтрак, но мы приготовили его необычно. Вместо молока добавили нежную козью рикотту Galbani, благодаря чему блюдо приобрело сливочный вкус и кремовую текстуру. Дополнили свежими помидорами и шпинатом, чтобы омлет был красочным. Приготовить его можно как в духовке, так и на сковороде под крышкой на медленном огне. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNC8zcW94dXcuanBlZw==.jpg",
      preparation: {
        content:
          "Помойте помидоры, шпинат и лук. Снимите с лука шелуху. Подготовьте миксер и форму для запекания. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNC8zQ0YyYmkuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description: "Нарежьте лук мелкими кубиками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwMy9ZV2JQUzMuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Разогрейте сковороду на среднем огне. Выложите на нее 0,5 ст.л. сливочного масла и дождитесь, когда оно растопится. Обжарьте лук в масле 10 минут до золотистого цвета.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwMy8zeEVNZGYuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Нарвите шпинат руками и выложите к луку. Обжаривайте 2-3 минуты, пока шпинат не станет мягким.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwMy9RUjZSZHMuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "К козьей рикотте разбейте яйцо, добавьте соль и перец. Взбейте венчиком до однородности. В массе могут оставаться мелкие кусочки сыра.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNC80NHlNSG8uanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description: "Смешайте обжаренные овощи с яично-сырной массой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwMy9tUEJ1YWcuanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Разогрейте духовку до 180°C. Смажьте форму для запекания оставшимся сливочным маслом. Перелейте в нее смесь для омлета.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwMy80QmsyaHUuanBlZw==.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Разрежьте черри на половинки. Разложите по яичной смеси. Отправьте в духовку на 15-20 минут. Поверхность омлета должна пропечься, а края — стать слегка коричневыми.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwMy8zUmlQZFcuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для украшения",
      main_ingredients: [
        {
          id: 169,
          weight: 240,
          custom_measure: "шт.",
          custom_measure_count: 4,
          title: "Куриное яйцо",
        },
        {
          id: 20599,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Козья рикотта Galbani",
        },
        {
          id: 290,
          weight: 40,
          custom_measure: "шт.",
          custom_measure_count: 0.5,
          title: "Репчатый лук",
        },
        {
          id: 447,
          weight: 20,
          custom_measure: "г",
          custom_measure_count: 20,
          title: "Шпинат",
        },
        {
          id: 338,
          weight: 20,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Сливочное масло",
        },
        {
          id: 275,
          weight: 200,
          custom_measure: "шт.",
          custom_measure_count: 10,
          title: "Помидоры черри",
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
      ],
      optional_ingredients: [
        {
          id: 9436,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Сладкая паприка хлопьями",
        },
        {
          id: 12,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Базилик",
        },
      ],
      proteins: 6.19,
      fats: 14.22,
      carbs: 2.95,
      calories: 110.97,
    },
    {
      id: 221960,
      active_cooking_time: 50,
      total_cooking_time: 50,
      difficulty_level: 3,
      title: "Яйца по-шотландски",
      subtitle:
        "Знаменитые яйца по-шотландски готовят в духовке. Попробуйте более привычный вариант — обжарьте котлеты с яйцом на сковороде. Тем более, что с перепелиными яйцами блюдо получится быстрее. А слой мясного фарша так получается толще, что особенно понравится мясоедам. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS80QlJFZjYuanBlZw==.jpg",
      preparation: {
        content:
          "Помойте и почистите лук-шалот и чеснок. Подготовьте кастрюлю, миски, сковороду, а также тарелку для панировки.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zeXBmOGUuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Поломайте белый хлеб на небольшие кусочки. Выложите их в миску и залейте молоком. Оставьте мякиш размокать 10-15 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS80NzRBaTMuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Положите перепелиные яйца в кастрюлю, залейте их водой. Доведите воду до кипения.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS80RENCZWIuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Уменьшите огонь под кастрюлей до среднего, сварите яйца в течение 3-4 минут. Затем остудите их в холодной воде и очистите их от скорлупы.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS9uQTRBOUMuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Соедините в чистой глубокой миске куриный и говяжий фарш. Тщательно разомните размокший в молоке хлеб, добавьте его к мясу.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS9ZZ0d1UnAuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description: "Накрошите лук-шалот и чеснок.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS80WHdrOHkuanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Налейте на сковороду 0,5 ст.л. растительного масла, хорошо разогрейте его на сильном огне. Выложите на сковороду лук и чеснок, пожарьте его 1-2 минуты до светло-золотистого цвета.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zOVlYOEUuanBlZw==.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Переложите обжаренные лук и чеснок в фарш с хлебом. Всыпьте в фарш соль и перец. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS9pcFNheU0uanBlZw==.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Разделите фарш на 6 частей, сформируйте из них круглые лепешки диаметром 6-7 см. Положите в центр каждой лепешки по вареному яйцу, оберните яйца фаршем и придайте изделиям форму продолговатых котлет.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zSFBnYnQuanBlZw==.jpg",
        },
        {
          title: "Шаг 9",
          description:
            "Насыпьте на плоскую тарелку панировочные сухари. Обваляйте каждую котлету в сухарях со всех сторон.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zM3VYcVUuanBlZw==.jpg",
        },
        {
          title: "Шаг 10",
          description:
            "Разогрейте на среднем огне 0,5 ст.л. масла. Обжарьте котлеты по 4-5 минут с каждой стороны до золотистой корочки. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zN3o3Q3cuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Британская, шотландская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 176,
          weight: 200,
          custom_measure: "г",
          custom_measure_count: 200,
          title: "Куриный фарш",
        },
        {
          id: 61,
          weight: 200,
          custom_measure: "г",
          custom_measure_count: 200,
          title: "Говяжий фарш",
        },
        {
          id: 254,
          weight: 54,
          custom_measure: "шт.",
          custom_measure_count: 6,
          title: "Перепелиное яйцо",
        },
        {
          id: 30,
          weight: 50,
          custom_measure: "ломтик",
          custom_measure_count: 2,
          title: "Белый хлеб",
        },
        {
          id: 696,
          weight: 50,
          custom_measure: "мл",
          custom_measure_count: 50,
          title: "Молоко 2,5% жирности",
        },
        {
          id: 192,
          weight: 30,
          custom_measure: "г",
          custom_measure_count: 30,
          title: "Лук-шалот",
        },
        {
          id: 440,
          weight: 5,
          custom_measure: "зубчик",
          custom_measure_count: 1,
          title: "Чеснок",
        },
        {
          id: 246,
          weight: 30,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Панировочные сухари",
        },
        {
          id: 439,
          weight: 1.25,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Черный перец молотый",
        },
        {
          id: 352,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Соль",
        },
        {
          id: 270,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Подсолнечное масло рафинированное",
        },
      ],
      optional_ingredients: [
        {
          id: 704,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Сырный соус",
        },
        {
          id: 275,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Помидоры черри",
        },
        {
          id: 91,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Зеленый лук",
        },
        {
          id: 12,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Базилик",
        },
      ],
      proteins: 13.33,
      fats: 13.15,
      carbs: 8.77,
      calories: 206.3,
    },
    {
      id: 219276,
      active_cooking_time: 20,
      total_cooking_time: 45,
      difficulty_level: 2,
      title: "Рис с фаршем в сметане",
      subtitle:
        "Это простое блюдо, которое легко и быстро приготовить. Рис с фаршем подойдет для обеда или ужина, получится ароматным и вкусным. Приготовить блюдо можно с любым фаршем, а легче всего блюдо получится с фаршем из куриной грудки.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC91REZ2QTUuanBlZw==.jpg",
      preparation: {
        content:
          "Промойте рис холодной водой несколько раз. Вымойте морковь, подготовьте глубокую сковороду.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC80VVM2a3IuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Очистите овощи. Натрите морковь на крупной терке. Лук нарежьте средними кубиками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC80QThWZlguanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Разогрейте сковороду на среднем огне. Влейте растительное масло и выложите овощи на сковороду. Обжарьте их в течение 2-3 минут, помешивая. Добавьте к овощам говяжий фарш и перемешайте. Готовьте все вместе еще 5-6 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC80VFdpZm0uanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Выложите сырой рис в сковороду с фаршем. Тщательно перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC8zSDNNUkcuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Залейте ингредиенты стаканом горячей воды. Добавьте соль и перец по вкусу. Аккуратно перемешайте. Убавьте нагрев до минимума. Накройте сковороду крышкой и оставьте блюдо тушиться 15–20 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC9FV0N6OVguanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Добавьте в сковороду сметану и равномерно распределите. Снова накройте крышкой и оставьте на огне еще на 2–3 минуты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC8zWVRoWlouanBlZw==.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 61,
          weight: 0,
          custom_measure: "г",
          custom_measure_count: 250,
          title: "Говяжий фарш",
        },
        {
          id: 292,
          weight: 135,
          custom_measure: "стакан",
          custom_measure_count: 0.75,
          title: "Рис",
        },
        {
          id: 290,
          weight: 80,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Репчатый лук",
        },
        {
          id: 219,
          weight: 90,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Морковь",
        },
        {
          id: 343,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Сметана",
        },
        {
          id: 54,
          weight: 150,
          custom_measure: "стакан",
          custom_measure_count: 0.75,
          title: "Вода",
        },
        {
          id: 287,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Растительное масло",
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
          id: 500,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Ржаной хлеб",
        },
      ],
      proteins: 2.54,
      fats: 6.6,
      carbs: 21.74,
      calories: 156.85,
    },
    {
      id: 219280,
      active_cooking_time: 40,
      total_cooking_time: 40,
      difficulty_level: 3,
      title: "Кебаб из баранины",
      subtitle:
        "Фарш для этого кебаба мы приготовили из баранины и курдюка, он делает это блюдо сочнее. Чтобы кебаб на развалился, тщательно вымешивайте фарш, так кебаб будет держать форму. Попробуйте приготовить блюдо в духовке, мясо будет отличатся по вкусу от жаренного на огне. Запекайте его при высоких температурах, чтобы на поверхности кебаба образовалась аппетитная золотистая корочка. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9DQkJpZXAuanBlZw==.jpg",
      preparation: {
        content:
          "Разморозьте мясо. Помойте и обсушите бумажными полотенцами баранину. Помойте и почистите репчатый лук. Замочите шпажки в воде на 30 минут, так они не будут впитывать сок из мяса. Подготовьте мясорубку, пергамент и противень.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9zTm1leHAuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Нарежьте баранину и курдюк на небольшие кусочки. Прокрутите их через мясорубку 2 раза. Измельчите в мясорубке кинзу и лук. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8zdXNCNFguanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Приправьте фарш солью, черным молотым перцем и паприкой. Вымешивайте фарш 10 минут, чтобы он стал клейким и плотным.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8zVGthTlIuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Разделите фарш на 6 частей. Из каждой части сформируйте колбаску и нанижите на шпажку. Противень застелите пергаментом и выложите кебабы. Запекайте при 230°C 8 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9zSm9wYXouanBlZw==.jpg",
        },
      ],
      kitchen_type: "Кавказская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 17,
          weight: 0,
          custom_measure: "г",
          custom_measure_count: 500,
          title: "Баранина",
        },
        {
          id: 116,
          weight: 9,
          custom_measure: "веточка",
          custom_measure_count: 3,
          title: "Кинза",
        },
        {
          id: 352,
          weight: 10,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Соль",
        },
        {
          id: 439,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Черный перец молотый",
        },
        {
          id: 247,
          weight: 1.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Паприка",
        },
        {
          id: 290,
          weight: 80,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Репчатый лук",
        },
        {
          id: 287,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Растительное масло",
        },
      ],
      optional_ingredients: [
        {
          id: 231,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Овощи",
        },
        {
          id: 314,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Свежая зелень",
        },
        {
          id: 407,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Томатный соус",
        },
      ],
      proteins: 1.37,
      fats: 14.57,
      carbs: 7.92,
      calories: 166.37,
    },
    {
      id: 219285,
      active_cooking_time: 30,
      total_cooking_time: 100,
      difficulty_level: 2,
      title: "Говядина с овощами в казане",
      subtitle:
        "Казан идеально подходит для длительного томления говядины. Важно обжарить кусочки говядины на сильном огне до образования золотистой корочки, чтобы запечатать внутри каждого куска соки и придать блюду насыщенный вкус. Блюдо получается сочным, благодаря ароматному соусу. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC8zQkgzcVMuanBlZw==.jpg",
      preparation: {
        content:
          "Разморозьте, помойте и обсушите мясо бумажными полотенцами. Помойте и почистите морковь и репчатый лук. Помойте болгарский перец, удалите плодоножку и семена. Подготовьте казан.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC80MlVpRGsuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description: "Нарежьте говядину на куски среднего размера.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC8zVXh1S28uanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Морковь и болгарский перец нарежьте крупной соломкой, лук — перьями.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC8zS1FEeHEuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Разогрейте в казане растительное масло. Обжарьте говядину на сильном огне в течение 8 минут, перемешивая.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC80R3FoeUQuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Добавьте к мясу томатную пасту, соль, черный молотый перец и приправу. Хорошо перемешайте и готовьте еще 2 минуты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC8zeHpHcGguanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Влейте в казан воду. Накройте крышкой и тушите говядину на слабом огне 40 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC8zOUI4eDYuanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Положите к мясу болгарский перец, морковь и репчатый лук. Перемешайте. Готовьте еще 20 минут. Отключите нагрев и дайте блюду настояться 10 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC80Q0I2bmQuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Восточная",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 60,
          weight: 300,
          custom_measure: "г",
          custom_measure_count: 300,
          title: "Говядина",
        },
        {
          id: 54,
          weight: 200,
          custom_measure: "стакан",
          custom_measure_count: 1,
          title: "Вода",
        },
        {
          id: 219,
          weight: 90,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Морковь",
        },
        {
          id: 290,
          weight: 80,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Репчатый лук",
        },
        {
          id: 32,
          weight: 150,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Болгарский перец",
        },
        {
          id: 287,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Растительное масло",
        },
        {
          id: 404,
          weight: 30,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Томатная паста",
        },
        {
          id: 13276,
          weight: 12,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Приправа к мясу",
        },
        {
          id: 439,
          weight: 1.25,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Черный перец молотый",
        },
        {
          id: 352,
          weight: 10,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Соль",
        },
      ],
      optional_ingredients: [
        {
          id: 256,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Перец чили",
        },
        {
          id: 12,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Базилик",
        },
        {
          id: 500,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Ржаной хлеб",
        },
      ],
      proteins: 7.03,
      fats: 6.2,
      carbs: 3.68,
      calories: 97.02,
    },
    {
      id: 221951,
      active_cooking_time: 25,
      total_cooking_time: 35,
      difficulty_level: 2,
      title: "Макароны по-флотски со свининой",
      subtitle:
        "Приготовьте те самые макароны по-флотски. Они бывают не только с тушенкой, но и с фаршем. Понадобятся самые базовые продукты, которые обычно есть под рукой. Лучше всего подойдут небольшие фигурные макароны: рожки, спиральки или ракушки. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zblo4aGguanBlZw==.jpg",
      preparation: {
        content:
          "Помойте и почистите лук, чеснок и морковь. Вам понадобятся кастрюля, дуршлаг, терка, а также глубокая сковорода.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS80M01QZWkuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Налейте в кастрюлю 1-1,5 л воды. Поставьте на сильный огонь. Дождитесь, когда вода закипит. Всыпьте в воду ¼ ч.л. соли, положите рожки. Уменьшите огонь, сварите рожки до готовности по инструкции на упаковке. Откиньте макароны на дуршлаг.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS80SlZrUFouanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Нарежьте лук кубиками со стороной 3-4 мм. Крупно натрите морковь. Мелко натрите твердый сыр. Пропустите чеснок через пресс.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zaUFmVGQuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Налейте на сковороду растительное масло. Поставьте ее на сильный огонь и хорошо разогрейте. Опустите в масло лук. Обжарьте его 1-2 минуты, помешивая, пока он не начнет темнеть.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zR0ZSOHUuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Добавьте к луку морковь. Пожарьте все вместе, периодически перемешивая, еще 4-5 минут. Положите к овощам фарш. Обжарьте его 3-4 минуты, разбивая крупные комочки лопаткой, до изменения цвета.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zSDJkVkcuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Всыпьте в фарш черный перец и ¼ ч.л. соли, положите чеснок. Разведите томатную пасту в чашке или стакане 3-4 ст.л. воды, влейте получившуюся смесь в фарш. Уменьшите огонь до среднего и потушите фарш, изредка помешивая, 7-8 минут до готовности.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS9penpuWnAuanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Переложите в сковороду к фаршу отваренные макароны. Хорошо перемешайте, прогрейте все еще 1-2 минуты и снимите сковороду с огня. Посыпьте фарш с макаронами тертым сыром.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS9vc2o4c2IuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 13260,
          weight: 200,
          custom_measure: "г",
          custom_measure_count: 200,
          title: "Фарш из свинины и говядины",
        },
        {
          id: 290,
          weight: 40,
          custom_measure: "г",
          custom_measure_count: 40,
          title: "Репчатый лук",
        },
        {
          id: 219,
          weight: 40,
          custom_measure: "г",
          custom_measure_count: 40,
          title: "Морковь",
        },
        {
          id: 440,
          weight: 5,
          custom_measure: "зубчик",
          custom_measure_count: 1,
          title: "Чеснок",
        },
        {
          id: 404,
          weight: 30,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Томатная паста",
        },
        {
          id: 393,
          weight: 50,
          custom_measure: "г",
          custom_measure_count: 50,
          title: "Твердый сыр",
        },
        {
          id: 439,
          weight: 1.25,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Черный перец молотый",
        },
        {
          id: 352,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Соль",
        },
        {
          id: 287,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Растительное масло",
        },
      ],
      optional_ingredients: [
        {
          id: 275,
          weight: 40,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Помидоры черри",
        },
        {
          id: 12,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Базилик",
        },
      ],
      proteins: 11.43,
      fats: 19.18,
      carbs: 4.25,
      calories: 232.82,
    },
    {
      id: 221890,
      active_cooking_time: 30,
      total_cooking_time: 30,
      difficulty_level: 2,
      title: "Оладьи с сыром на сковороде",
      subtitle:
        "Возьмите любой сыр, измельчите его как можно мельче и вмешайте в жидкое тесто. Получатся очень солнечные, сочные и ароматные оладьи на завтрак. Особенно они понравятся тем, кто не любит сладкую выпечку. К подаче обязательно нарежьте свежей зелени и возьмите любой несладкий соус на ваш вкус. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9LMnhqUXouanBlZw==.jpg",
      preparation: {
        content:
          "Просейте муку через мелкое сито. Помойте укроп. Подготовьте сковороду, глубокую миску, терку и венчик или миксер.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8zMndqdmMuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "В глубокую миску налейте кефир, всыпьте соду. Перемешайте и оставьте смесь на 2 минуты для активации соды.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9pY1Vvc1cuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description: "Мелко покрошите укроп. Натрите сыр на мелкой терке.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8zZ3ZpOHUuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "В миску с кефиром добавьте куриное яйцо, сыр и зелень. Тщательно перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9wemc0bVkuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Всыпьте просеянную пшеничную муку, сахар, универсальную приправу и соль. Замесите однородное тесто.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC80WHJKNkguanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Разогрейте на сковороде растительное масло. Выкладывайте тесто ложкой. Жарьте оладьи на среднем огне по 1-2 минуте с каждой стороны.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9RQkVXTnMuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 248,
          weight: 70,
          custom_measure: "г",
          custom_measure_count: 70,
          title: "Пармезан",
        },
        {
          id: 113,
          weight: 309,
          custom_measure: "мл",
          custom_measure_count: 309,
          title: "Кефир",
        },
        {
          id: 282,
          weight: 195,
          custom_measure: "г",
          custom_measure_count: 195,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 169,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное яйцо",
        },
        {
          id: 418,
          weight: 10,
          custom_measure: "г",
          custom_measure_count: 10,
          title: "Укроп",
        },
        {
          id: 312,
          weight: 8,
          custom_measure: "г",
          custom_measure_count: 8,
          title: "Сахар",
        },
        {
          id: 352,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Соль",
        },
        {
          id: 278,
          weight: 3,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Приправа универсальная",
        },
        {
          id: 287,
          weight: 51,
          custom_measure: "мл",
          custom_measure_count: 51,
          title: "Растительное масло",
        },
        {
          id: 348,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Сода",
        },
      ],
      optional_ingredients: [
        {
          id: 704,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Сырный соус",
        },
        {
          id: 91,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Зеленый лук",
        },
        {
          id: 275,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Помидоры черри",
        },
      ],
      proteins: 8.57,
      fats: 12.68,
      carbs: 21.65,
      calories: 236.87,
    },
    {
      id: 218176,
      active_cooking_time: 40,
      total_cooking_time: 50,
      difficulty_level: 3,
      title: "Котлеты в томатном соусе",
      subtitle:
        "Любые котлеты, биточки или тефтели станут вкуснее, если потомить их в густом томатном соусе. Он легко готовится из томатной пасты, обжаренного лука и сушеных трав, а для густоты в него добавляют немного муки. Вымесите котлетный фарш с размоченным в молоке хлебом и луком, сформируйте котлеты и обжарьте их до корочки. Затем соедините на сковороде продукты для соуса и прогрейте в нем котлеты несколько минут.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwNS81RU5idFEuanBlZw==.jpg",
      preparation: {
        content:
          "Вымойте и почистите лук. Помойте куриное яйцо, подготовьте миски и сковороду с крышкой.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwNS8zUGZBYU0uanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Поломайте ломтики хлеба на части, выложите их в миску и залейте молоком. Оставьте на 5-10 минут, чтобы батон размягчился.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwNS9FVVozN2suanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Мелко нарежьте лук. Половину соедините с мясным фаршем в чистой миске. Другая половина лука понадобится для соуса. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwNS8zVGtBeDguanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Разомните размоченный в молоке хлеб вилкой, выложите его к фаршу. Разбейте туда же яйцо.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwNS9ocDV6dUUuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Всыпьте в миску ¼ ч.л. соли и черный перец. Вымесите фарш до однородного состояния. Слепите из него 6 круглых котлет.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwNS9SZWJoTmcuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Налейте на сковороду растительное масло, разогрейте его на среднем огне. Выложите в масло котлеты, обжарьте их по 3-4 минуты с каждой стороны до плотной румяной корочки. Переложите обжаренные котлеты на тарелку.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwNS8zeW5OS2kuanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Пожарьте оставшуюся половину лука в горячем масле около 2-3 минуты до светло-золотистого цвета.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwNS80RkVucUEuanBlZw==.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Выложите на сковороду к луку томатную пасту. Перемешайте и обжарьте смесь в течение 1 минуты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwNS8zYUJ6UlouanBlZw==.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Соедините в чашке муку и 2 ст.л. воды, хорошо перемешайте, чтобы в соусе не осталось комочков. Вылейте получившуюся смесь в сковороду с томатной пастой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwNS8zZXRyOEouanBlZw==.jpg",
        },
        {
          title: "Шаг 9",
          description:
            "Увеличьте огонь под сковородой. Налейте в нее оставшуюся воду, всыпьте ¼ ч.л. соли и сухие прованские травы.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwNS9Ocng4Y3kuanBlZw==.jpg",
        },
        {
          title: "Шаг 10",
          description:
            "Добавьте в соус лавровый лист и все как следует перемешайте. Когда соус закипит, выложите в него обжаренные котлеты. Уменьшите огонь до слабого и прикройте сковороду крышкой. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwNS8zZ1hTU2guanBlZw==.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 419,
          weight: 400,
          custom_measure: "г",
          custom_measure_count: 400,
          title: "Фарш домашний",
        },
        {
          id: 30,
          weight: 50,
          custom_measure: "ломтик",
          custom_measure_count: 2,
          title: "Белый хлеб",
        },
        {
          id: 696,
          weight: 50,
          custom_measure: "стакан",
          custom_measure_count: 0.25,
          title: "Молоко 2,5% жирности",
        },
        {
          id: 169,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное яйцо",
        },
        {
          id: 290,
          weight: 40,
          custom_measure: "шт.",
          custom_measure_count: 0.5,
          title: "Репчатый лук",
        },
        {
          id: 404,
          weight: 60,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Томатная паста",
        },
        {
          id: 282,
          weight: 25,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 54,
          weight: 300,
          custom_measure: "стакан",
          custom_measure_count: 1.5,
          title: "Вода",
        },
        {
          id: 270,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Подсолнечное масло рафинированное",
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
          weight: 1.25,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Черный перец молотый",
        },
        {
          id: 279,
          weight: 2,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Прованские травы",
        },
        {
          id: 179,
          weight: 1,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Лавровый лист",
        },
      ],
      optional_ingredients: [
        {
          id: 108,
          weight: 150,
          custom_measure: "г",
          custom_measure_count: 150,
          title: "Картошка",
        },
      ],
      proteins: 7.23,
      fats: 9,
      carbs: 7.72,
      calories: 139.96,
    },
    {
      id: 219103,
      active_cooking_time: 30,
      total_cooking_time: 50,
      difficulty_level: 2,
      title: "Гречка с курицей и овощами",
      subtitle:
        "Куриная грудка с гречкой очень популярна у людей, следящих за фигурой, но зачастую вкус этого блюда хочется чем-нибудь разнообразить. Попробуйте добавить в него стебель сельдерея: в нем всего 13 кКал на 100 граммов. Сельдерей добавит блюду пряную, горьковато-сладкую нотку. Мы пожарили курицу с гречкой и овощами на кокосовом масле. Оно питательнее и полезнее сливочного.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zRHVSS3IuanBlZw==.jpg",
      preparation: {
        content:
          "Вымойте и обсушите бумажными полотенцами мясо. Промойте гречку. Ополосните овощи водой. Почистите морковь и лук. Удалите у перца плодоножку и семена. Подготовьте сковороду с высокими бортиками.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zSng3Z3EuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Залейте гречневую крупу водой на три часа. После этого промойте холодной водой и дайте стечь всей жидкости.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zNzhqTUouanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Нарежьте соломкой мясо, сельдерей и морковь. Нашинкуйте лук полукольцами.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8za0RhUk4uanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Поставьте сковороду на плиту. Положите в нее масло и дождитесь, когда оно растопится. Слегка обжарьте курицу.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy80VlFhVTQuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Добавьте к курице овощи и жарьте все вместе около 4-5 минут. Посолите, поперчите, всыпьте специи и перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy80SG1wbnIuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Выложите в сковороду гречку. Влейте воду. Выставьте слабый огонь. Накройте сковороду крышкой и тушите ингредиенты 15-20 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy80OEhyNGYuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 165,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Куриная грудка",
        },
        {
          id: 74,
          weight: 40,
          custom_measure: "г",
          custom_measure_count: 40,
          title: "Гречка",
        },
        {
          id: 54,
          weight: 100,
          custom_measure: "мл",
          custom_measure_count: 100,
          title: "Вода",
        },
        {
          id: 361,
          weight: 30,
          custom_measure: "г",
          custom_measure_count: 30,
          title: "Стебель сельдерея",
        },
        {
          id: 290,
          weight: 20,
          custom_measure: "г",
          custom_measure_count: 20,
          title: "Репчатый лук",
        },
        {
          id: 219,
          weight: 40,
          custom_measure: "г",
          custom_measure_count: 40,
          title: "Морковь",
        },
        {
          id: 5817,
          weight: 16,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Кокосовое масло",
        },
        {
          id: 352,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Соль",
        },
        {
          id: 359,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Специи",
        },
      ],
      optional_ingredients: [
        {
          id: 256,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Перец чили",
        },
        {
          id: 12,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Базилик",
        },
      ],
      proteins: 8.59,
      fats: 5.57,
      carbs: 8.87,
      calories: 118.22,
    },
    {
      id: 219102,
      active_cooking_time: 45,
      total_cooking_time: 110,
      difficulty_level: 2,
      title: "Мясо с баклажанами и болгарским перцем",
      subtitle:
        "Очень простое блюдо, которое идеально подойдет для плотного ужина. Для приготовления можно взять любое мясо: свинину, говядину или птицу. Учтите только, что говядина будет готовиться дольше свинины, а курица или индейка потушатся гораздо быстрее. С овощами тоже можно импровизировать, добавляя их по собственному желанию. Например, вместе с баклажанами положите помидоры или цукини.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9UZmdRYnouanBlZw==.jpg",
      preparation: {
        content:
          "Помойте и обсушите мясо. Вымойте овощи. Почистите морковь, лук и чеснок. Удалите у перца плодоножку и семена. Ополосните зелень водой и дайте обсохнуть.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9hQW5ZVHYuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Нарежьте баклажаны брусочками и положите в подсоленную воду. Оставьте на 15 минут. Слейте воду и промойте баклажаны.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy80QVNyblIuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description: "Нарежьте свинину небольшими кубиками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zTGN3emMuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Нарежьте морковь маленькими брусочками, лук кубиками, болгарский перец — соломкой, а чеснок мелко натрите или пропустите через пресс.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zbzZnOGEuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Разогрейте сковороду с маслом. Обжарьте мясо до золотистости.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zbkhXbTIuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Выложите к свинине морковь, лук и чеснок. Жарьте 2-3 минуты, периодически помешивая.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy80UXYzNWIuanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Влейте ¼ стакана воды. Накройте сковороду крышкой и тушите 30 минут на умеренном огне. Время от времени помешивайте содержимое сковороды, чтобы мясо и овощи не пригорели. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy80NEFUV0UuanBlZw==.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Положите в сковороду баклажаны и перец. Посолите и поперчите. Перемешайте и тушите под крышкой еще 20 минут, пока все овощи и мясо не станут мягкими.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zbkNzSlQuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 323,
          weight: 250,
          custom_measure: "г",
          custom_measure_count: 250,
          title: "Свинина",
        },
        {
          id: 13,
          weight: 210,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Баклажан",
        },
        {
          id: 32,
          weight: 150,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Болгарский перец",
        },
        {
          id: 219,
          weight: 90,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Морковь",
        },
        {
          id: 290,
          weight: 80,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Репчатый лук",
        },
        {
          id: 287,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Растительное масло",
        },
        {
          id: 54,
          weight: 50,
          custom_measure: "мл",
          custom_measure_count: 50,
          title: "Вода",
        },
        {
          id: 440,
          weight: 10,
          custom_measure: "зубчик",
          custom_measure_count: 2,
          title: "Чеснок",
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
      ],
      optional_ingredients: [
        {
          id: 12,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Базилик",
        },
      ],
      proteins: 5.48,
      fats: 8.38,
      carbs: 4.2,
      calories: 113.26,
    },
    {
      id: 218825,
      active_cooking_time: 60,
      total_cooking_time: 90,
      difficulty_level: 2,
      title: "Чатни из помидоров и яблок на зиму",
      subtitle:
        "При большом урожае яблок приготовьте не только варенье на зиму, но и индийский соус чатни, который отлично подчеркнет вкус любого блюда. В чатни можно использовать поврежденные плоды, которые не стоит класть, например, в компоты. Добавьте к яблокам имбирь, уксус, сахар и соль. Обязательно попробуйте чатни на вкус перед тем, как закрыть банку: важно соблюсти баланс сладкого и кислого в этом соусе, чтобы он получился действительно вкусным. Из указанного количества ингредиентов получается одна банка объемом 300 мл.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9NYTlIRVUuanBlZw==.jpg",
      preparation: {
        content:
          "Помойте помидоры, яблоки и лук. Снимите с лука шелуху. Подготовьте стерильную банку и крышку.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9BOW1MQW8uanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Снимите с яблок кожуру, разрежьте их на дольки и удалите сердцевину.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9oWnl2UEwuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Выложите очищенные ломтики яблок в кастрюлю. Влейте 2 ст.л. воды. Поставьте на средний огонь и накройте крышкой. Когда содержимое кастрюли закипит, сделайте огонь минимальным и оставьте яблоки тушиться до тех пор, пока они не станут мягкими.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80S2QyUWguanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Пока варятся яблоки, снимите кожуру с помидоров. Для этого сделайте сверху крестообразный надрез, ошпарьте томаты кипятком, а затем обдайте ледяной водой. Снимите кожицу и выбросьте ее. Мякоть мелко нарежьте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zdVp3R1UuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Измельчите лук и положите к яблокам. Туда же добавьте нарезанные помидоры и перемешайте. Дождитесь кипения и проварите еще 10 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80RVdQRjMuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Всыпьте специи и соль. Натрите на мелкой терке имбирь и добавьте в кастрюлю. Влейте уксус и перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zSlpBeVMuanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Еще раз доведите массу до кипения и перелейте в стерильную банку. Закройте крышку, переверните, укутайте одеялом и дайте остыть.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9jRzNXclcuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Индийская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 272,
          weight: 250,
          custom_measure: "г",
          custom_measure_count: 250,
          title: "Помидор",
        },
        {
          id: 451,
          weight: 250,
          custom_measure: "г",
          custom_measure_count: 250,
          title: "Яблоки",
        },
        {
          id: 312,
          weight: 25,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Сахар",
        },
        {
          id: 290,
          weight: 120,
          custom_measure: "г",
          custom_measure_count: 120,
          title: "Репчатый лук",
        },
        {
          id: 54,
          weight: 36,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Вода",
        },
        {
          id: 363,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Столовый уксус",
        },
        {
          id: 352,
          weight: 3,
          custom_measure: "ч. л.",
          custom_measure_count: 0.3,
          title: "Соль",
        },
        {
          id: 359,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Специи",
        },
        {
          id: 139,
          weight: 5,
          custom_measure: "г",
          custom_measure_count: 5,
          title: "Корень имбиря",
        },
      ],
      optional_ingredients: [],
      proteins: 0.8,
      fats: 0.22,
      carbs: 10.39,
      calories: 46.11,
    },
    {
      id: 222129,
      active_cooking_time: 30,
      total_cooking_time: 50,
      difficulty_level: 2,
      title: "Жареный рис с фаршем",
      subtitle:
        "Для этого блюда мы обжарили говяжий фарш с ароматными специями и соусами. Не переживайте, если часть ингредиентов сложно найти, каждый из них легко заменяется на более доступный. Затем фарш нужно смешать с рисом и обжаренным яйцом. В результате получается очень сытное блюдо. Оно готовится недолго за счет того, что все обжаривается в сковороде вок на сильном огне при постоянном помешивании. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC9HOEY0S0YuanBlZw==.jpg",
      preparation: {
        content:
          "Промойте под проточной водой рис, дайте воде стечь. Разморозьте фарш на нижней полке холодильника. Почистите чеснок. Подготовьте вок или глубокую сковороду. Предварительно замочите рис в течение 10-15 мину в теплой воде.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC96eXVlaVEuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Насыпьте в кастрюлю рис, залейте пятью стаканами воды. Поставьте на средний огонь. Посолите. После закипания уменьшите нагрев до минимального. Варите 15 минут под крышкой, перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8zS1FqYlMuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Нагрейте сковороду вок на сильном огне, влейте 2 ст.л. растительного масла. Обжарьте фарш в течение 5 минут, постоянно перемешивая его.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC8zUlF6eGguanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Добавьте сахар и кунжутное масло. Готовьте еще 5 минут, не прекращая перемешивать. Пропустите через пресс чеснок. Положите к фаршу чеснок, 1 ст.л. соевого соуса, белый молотый перец и хлопья чили. Жарьте еще 5 минут, регулярно помешивая.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8zVnlDanAuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Переложите фарш в миску. В воке разогрейте оставшееся растительное масло на сильном огне, выложите зеленый горошек. Жарьте 3-4 минуты, постоянно перемешивая. Сдвиньте горошек на одну половину сковороды. В свободное пространство разбейте куриные яйца. готовьте их 1 минуту, все время помешивая лопаткой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9LaDdTWEIuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Добавьте в сковороду рис и перемешайте ингредиенты. Готовьте 1 минуту, постоянно помешивая.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9qUmlud2guanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Добавьте 1 ст.л. соевого соуса, лимонный сок. Тщательно перемешайте. Положите в вок к рису жареный фарш. Перемешайте и готовьте все вместе еще 2 минуты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8zdGRSN2UuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Азиатская",
      main_ingredient_title: "Для риса и фарша",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 54,
          weight: 1000,
          custom_measure: "стакан",
          custom_measure_count: 5,
          title: "Вода",
        },
        {
          id: 352,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Соль",
        },
        {
          id: 287,
          weight: 25.5,
          custom_measure: "ст. л.",
          custom_measure_count: 1.5,
          title: "Растительное масло",
        },
        {
          id: 1579,
          weight: 166.67,
          custom_measure: "г",
          custom_measure_count: 166.67,
          title: "Замороженный горох",
        },
        {
          id: 169,
          weight: 120,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Куриное яйцо",
        },
        {
          id: 185,
          weight: 18,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Лимонный сок",
        },
        {
          id: 419,
          weight: 500,
          custom_measure: "г",
          custom_measure_count: 500,
          title: "Фарш домашний",
        },
        {
          id: 162,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Кунжутное масло",
        },
        {
          id: 411,
          weight: 25,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Тростниковый сахар",
        },
        {
          id: 350,
          weight: 30,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Соевый соус",
        },
        {
          id: 440,
          weight: 10,
          custom_measure: "зубчик",
          custom_measure_count: 2,
          title: "Чеснок",
        },
        {
          id: 28,
          weight: 1.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Белый перец молотый",
        },
        {
          id: 428,
          weight: 1,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Хлопья чили",
        },
        {
          id: 294,
          weight: 360,
          custom_measure: "стакан",
          custom_measure_count: 2,
          title: "Рис длиннозерный",
        },
      ],
      optional_ingredients: [
        {
          id: 91,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Зеленый лук",
        },
        {
          id: 570,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Шрирача",
        },
        {
          id: 180,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Лайм",
        },
      ],
      proteins: 5.66,
      fats: 6.75,
      carbs: 15,
      calories: 145.61,
    },
    {
      id: 222135,
      active_cooking_time: 30,
      total_cooking_time: 70,
      difficulty_level: 2,
      title: "Запеченное филе индейки с цветной капустой",
      subtitle:
        "Любое мясо, включая деликатную птицу, перед запеканием необходимо промариновать со специями для яркого и полного вкуса. Чтобы сэкономить время, возьмите уже замаринованное с чесноком филе индейки. Останется только добавить к нему цветную капусту, запечь в духовке и получить легкий, диетический, но сытный обед или ужин. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC8zM3c5VEsuanBlZw==.jpg",
      preparation: {
        content:
          "Промойте цветную капусту, промокните ее от влаги бумажными салфетками. Вымойте и почистите лук-шалот и чеснок. Подготовьте две миски, разделочную доску, пресс для чеснока, соусник и тарелку для подачи. При необходимости разморозьте филе.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC9IQm9jWlQuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Включите духовку разогреваться до 200˚С. Смажьте противень для запекания 1 ч.л. растительного масла. Разрежьте филе на крупные кусочки. Разложите на противне индейку.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC9HOUVad0ouanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Разделите цветную капусту на соцветия размером около 2-3 см. Разрежьте луковицу на 4 части и разберите ее на отдельные сегменты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC80QmlWQ1UuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Выложите в миску цветную капусту и лук. Добавьте соль, перец и растительное масло, все перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC8zeFlYWFAuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Разложите цветную капусту и лук на противне между индейкой. Поставьте противень в духовку на средний уровень и запекайте индейку с овощами в течение 20 минут. Перемешайте овощи, переверните филе и запекайте еще 20-25 минут до румяной корочки на индейке и цветной капусте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC8zaXRoY3IuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Отделите листочки мяты и кинзы от веточек, мелко порубите листья, выложите их в чистую миску. Выжмите сок из лимона в миску. Пропустите чеснок через пресс, соедините его в миске с зеленью и лимонным соком.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC80NFViSmEuanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Добавьте к зелени, чесноку и лимонному соку йогурт и оставшиеся соль и перец. Все хорошо перемешайте и поставьте в холодильник настояться 10-15 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC9zTERZeTIuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Европейская, русская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 430,
          weight: 325,
          custom_measure: "кочан",
          custom_measure_count: 0.5,
          title: "Цветная капуста",
        },
        {
          id: 152,
          weight: 75,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Красный лук",
        },
        {
          id: 270,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Подсолнечное масло рафинированное",
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
          weight: 2,
          custom_measure: "ч. л.",
          custom_measure_count: 0.4,
          title: "Черный перец молотый",
        },
        {
          id: 5775,
          weight: 60,
          custom_measure: "ст. л.",
          custom_measure_count: 4,
          title: "Греческий йогурт",
        },
        {
          id: 228,
          weight: 2,
          custom_measure: "веточка",
          custom_measure_count: 2,
          title: "Мята",
        },
        {
          id: 116,
          weight: 3,
          custom_measure: "веточка",
          custom_measure_count: 1,
          title: "Кинза",
        },
        {
          id: 183,
          weight: 36,
          custom_measure: "шт.",
          custom_measure_count: 0.3,
          title: "Лимон",
        },
        {
          id: 440,
          weight: 5,
          custom_measure: "зубчик",
          custom_measure_count: 1,
          title: "Чеснок",
        },
        {
          id: 20612,
          weight: 500,
          custom_measure: "г",
          custom_measure_count: 500,
          title: "Филе бедра индейки в чесночном маринаде",
        },
      ],
      optional_ingredients: [
        {
          id: 116,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Кинза",
        },
        {
          id: 256,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Перец чили",
        },
        {
          id: 66,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Горох",
        },
      ],
      proteins: 1.28,
      fats: 1.94,
      carbs: 2.92,
      calories: 33.79,
    },
    {
      id: 222130,
      active_cooking_time: 30,
      total_cooking_time: 55,
      difficulty_level: 2,
      title: "Биточки в соусе терияки с рисом",
      subtitle:
        "К биточкам из птицы хорошо подходит рис, а он, в свою очередь, идеально сочетается с пряным японским соусом терияки. Кисловато-сладкий, терпкий, с сильными нотами имбиря, лайма и карамели, терияки смягчает и оттеняет румяную корочку биточков, наполняет рис ярким вкусом. Приготовьте соус терияки самостоятельно на основе соевого соуса, коричневого сахара, чеснока, пряностей и приправ.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC9EODJNaHUuanBlZw==.jpg",
      preparation: {
        content:
          "Промойте рис до прозрачности воды. Очистите чеснок и корень имбиря. Подготовьте кастрюлю, сотейник, соковыжималку для цитрусовых, сито, миску, пресс для чеснока и терку. Застелите противень пергаментной бумагой. При необходимости, разморозьте биточки.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC80UUhNN1YuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Высыпьте промытый рис в кастрюлю. Залейте его водой в пропорциях 2:1. Накройте крышкой и доведите рис до кипения.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC8zUHo0VDkuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Уменьшите огонь до слабого. Всыпьте в воду соль и отварите рис по инструкции, указанной на упаковке до готовности. Снимите кастрюлю с огня, накройте крышкой и дайте рису постоять еще 5-10 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC8zYXdtTkcuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Разрежьте лайм пополам, выжмите из него сок с помощью соковыжималки для цитрусовых. Процедите сок лайма через сито в сотейник. Пропустите чеснок через пресс, мелко натрите корень имбиря. Положите чеснок и имбирь в сотейник.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC80NkI5TGsuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Налейте в сотейник к соку лайма соевый соус и кунжутное масло. Всыпьте сахар, положите пасту чили. Все хорошо перемешайте. Поставьте сотейник на средний огонь. Дождитесь, когда соус закипит. Убавьте огонь до слабого и проварите соус, помешивая, в течение 5 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC96bnZBeWIuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Соедините в пиале или чашке ¼ стакана воды и кукурузный крахмал. Все тщательно перемешайте, чтобы не оставалось комочков. Влейте крахмальную смесь в соус и размешайте. Проварите соус, перемешивая, пока он не загустеет, в течение 1-2 минут. Снимите сотейник с соусом с огня.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC8zUU43ZkMuanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Разогрейте духовку до 180˚С. Разделите каждый кружок фарша на две части, чтобы сделать кружочки поменьше. Разложите на противне с пергаментом биточки, выдерживая небольшое расстояние между ними. Поставьте противень в центр духовки и запеките биточки в течение 20-30 минут до румяной корочки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC8zZFlMUXEuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Азиатская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 294,
          weight: 180,
          custom_measure: "стакан",
          custom_measure_count: 1,
          title: "Рис длиннозерный",
        },
        {
          id: 352,
          weight: 3,
          custom_measure: "ч. л.",
          custom_measure_count: 0.3,
          title: "Соль",
        },
        {
          id: 54,
          weight: 400,
          custom_measure: "стакан",
          custom_measure_count: 2,
          title: "Вода",
        },
        {
          id: 350,
          weight: 150,
          custom_measure: "стакан",
          custom_measure_count: 0.75,
          title: "Соевый соус",
        },
        {
          id: 411,
          weight: 37.5,
          custom_measure: "ст. л.",
          custom_measure_count: 1.5,
          title: "Тростниковый сахар",
        },
        {
          id: 440,
          weight: 10,
          custom_measure: "зубчик",
          custom_measure_count: 2,
          title: "Чеснок",
        },
        {
          id: 139,
          weight: 10,
          custom_measure: "г",
          custom_measure_count: 10,
          title: "Корень имбиря",
        },
        {
          id: 180,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Лайм",
        },
        {
          id: 162,
          weight: 10,
          custom_measure: "ч. л.",
          custom_measure_count: 2,
          title: "Кунжутное масло",
        },
        {
          id: 12475,
          weight: 18,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Паста чили",
        },
        {
          id: 161,
          weight: 30,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Кукурузный крахмал",
        },
        {
          id: 20610,
          weight: 450,
          custom_measure: "г",
          custom_measure_count: 450,
          title: "Биточки из индейки",
        },
      ],
      optional_ingredients: [
        {
          id: 25,
          weight: 22,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Белый кунжут",
        },
        {
          id: 5755,
          weight: 20,
          custom_measure: "г",
          custom_measure_count: 20,
          title: "Бобы эдамаме",
        },
      ],
      proteins: 2.41,
      fats: 1.75,
      carbs: 16.01,
      calories: 90.85,
    },
    {
      id: 222134,
      active_cooking_time: 25,
      total_cooking_time: 30,
      difficulty_level: 2,
      title: "Ежики из индейки с соусом из свежей зелени",
      subtitle:
        "Соус чимичурри готовят из свежих пряных трав, лимона и чеснока. Он хорошо дополнит и сбалансирует блюда из жареного мяса и птицы. Соус из свежей зелени подчеркивает мясной вкус нежных ежиков из индейки. Подавайте блюдо с любимым гарниром или овощным салатом. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC8zTTZtTGcuanBlZw==.jpg",
      preparation: {
        content:
          "Промойте петрушку, кинзу и орегано, вымойте лимон. Разложите все на бумажных полотенцах обсохнуть. Почистите лук-шалот и чеснок. Подготовьте миску, сковороду и сервировочное блюдо. При необходимости разморозьте ежики.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC8zeVFXYUQuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Отделите листочки петрушки, кинзы от стеблей, мелко порубите листья и выложите их в миску, добавьте сухой орегано. Пропустите чеснок через пресс, добавьте его в миску к зелени. Нарежьте лук кубиками со стороной 2-3 мм, также положите его в миску.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC83UTZmOUwuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Всыпьте в миску к зелени с чесноком и луком хлопья перца чили, соль и черный молотый перец.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC8zUDIzYWUuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Выжмите сок из четвертинки лимона в миску к зелени и специям. Влейте туда же винный уксус и оливковое масло. Тщательно перемешайте ингредиенты и уберите соус в холодильник на 1-2 часа настаиваться.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC9UZ3pFNHEuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Налейте на сковороду растительное масло, разогрейте на сильном огне. Уменьшите огонь до среднего. По желанию, разделите шарики фарша на две части, чтобы они стали меньше, выложите на сковороду ежики из индейки. Обжарьте ежики, переворачивая их на разные стороны, в течение 10-15 минут до плотной коричневой корочки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC80UnNGTkwuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Налейте в сковороду к ежикам 2-3 ст.л. воды. Убавьте огонь до слабого, накройте сковороду крышкой и тушите ежики еще 3-4 минуты, чтобы они дошли до готовности. Переложите ежики на сервировочное блюдо и полейте их соусом чимичурри.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC9jdnRBRjguanBlZw==.jpg",
        },
      ],
      kitchen_type: "Американская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 260,
          weight: 8,
          custom_measure: "веточка",
          custom_measure_count: 4,
          title: "Петрушка",
        },
        {
          id: 116,
          weight: 6,
          custom_measure: "веточка",
          custom_measure_count: 2,
          title: "Кинза",
        },
        {
          id: 243,
          weight: 2,
          custom_measure: "г",
          custom_measure_count: 2,
          title: "Орегано (душица)",
        },
        {
          id: 440,
          weight: 10,
          custom_measure: "зубчик",
          custom_measure_count: 2,
          title: "Чеснок",
        },
        {
          id: 192,
          weight: 15,
          custom_measure: "шт.",
          custom_measure_count: 0.5,
          title: "Лук-шалот",
        },
        {
          id: 428,
          weight: 0.6,
          custom_measure: "ч. л.",
          custom_measure_count: 0.3,
          title: "Хлопья чили",
        },
        {
          id: 439,
          weight: 1,
          custom_measure: "г",
          custom_measure_count: 1,
          title: "Черный перец молотый",
        },
        {
          id: 183,
          weight: 30,
          custom_measure: "шт.",
          custom_measure_count: 0.25,
          title: "Лимон",
        },
        {
          id: 9408,
          weight: 10,
          custom_measure: "ч. л.",
          custom_measure_count: 2,
          title: "Винный уксус 6%",
        },
        {
          id: 240,
          weight: 34,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Оливковое масло",
        },
        {
          id: 270,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Подсолнечное масло рафинированное",
        },
        {
          id: 352,
          weight: 3,
          custom_measure: "ч. л.",
          custom_measure_count: 0.3,
          title: "Соль",
        },
        {
          id: 20611,
          weight: 450,
          custom_measure: "г",
          custom_measure_count: 450,
          title: "Ежики из индейки",
        },
      ],
      optional_ingredients: [
        {
          id: 388,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Сыр",
        },
      ],
      proteins: 0.32,
      fats: 8.71,
      carbs: 1.42,
      calories: 85.94,
    },
    {
      id: 221817,
      active_cooking_time: 20,
      total_cooking_time: 70,
      difficulty_level: 2,
      title: "Колбаски из индейки с овощами",
      subtitle:
        "Идеальное блюдо для сытного семейного обеда. Тут и сочные колбаски, и картошка, и ароматный сладкий перец. А главное, все достаточно нарезать и отправить в духовку. Очень важно, чтобы брусочки картошки были одинаковыми, ведь только так они смогут равномерно пропечься. Останется только разложить все по тарелкам и подать с любыми соусами на ваш выбор. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9Wd0NxdGkuanBlZw==.jpg",
      preparation: {
        content:
          "Помойте овощи. Почистите картошку, репчатый лук и чеснок. У болгарского перца удалите плодоножку и семена. Застелите форму для запекания пергаментом.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9kVG5WMm4uanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Каждый клубень картофеля разрежьте на 4-8 частей в зависимости от размера. Нарежьте лук дольками, болгарский перец — крупными кусочками. Покрошите чеснок.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9TdkZ0UWQuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Выложите в форму нарезанные овощи. Добавьте растительное масло, чеснок, сушеные тимьян, базилик и розмарин, а также соль и черный молотый перец.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC82bk5ETEwuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Положите колбаски в форму, хорошенько перемешайте ингредиенты, чтобы овощи и мясо покрылись маслом и специями.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8zR3JhcHAuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Накройте форму фольгой и поставьте колбаски с овощами в разогретую до 200°С духовку на 30 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9Hckw2NWYuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Достаньте форму, аккуратно перемешайте ее содержимое. Влейте вино. Верните форму в духовку на 20 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9pdkxuOWEuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 108,
          weight: 840,
          custom_measure: "шт.",
          custom_measure_count: 7,
          title: "Картошка",
        },
        {
          id: 290,
          weight: 80,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Репчатый лук",
        },
        {
          id: 12402,
          weight: 150,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Красный болгарский перец",
        },
        {
          id: 287,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Растительное масло",
        },
        {
          id: 440,
          weight: 15,
          custom_measure: "зубчик",
          custom_measure_count: 3,
          title: "Чеснок",
        },
        {
          id: 384,
          weight: 2,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Сушеный тимьян / чабрец",
        },
        {
          id: 380,
          weight: 2,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Сушеный базилик",
        },
        {
          id: 802,
          weight: 2,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Сушеный розмарин",
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
          weight: 1.25,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Черный перец молотый",
        },
        {
          id: 19605,
          weight: 60,
          custom_measure: "стакан",
          custom_measure_count: 0.3,
          title: "Белое сухое вино",
        },
        {
          id: 20613,
          weight: 500,
          custom_measure: "г",
          custom_measure_count: 500,
          title: "Колбаски барбекю",
        },
      ],
      optional_ingredients: [
        {
          id: 67,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Горчица",
        },
        {
          id: 314,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Свежая зелень",
        },
        {
          id: 12,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Базилик",
        },
      ],
      proteins: 1.29,
      fats: 1.25,
      carbs: 9.5,
      calories: 56.41,
    },
    {
      id: 221845,
      active_cooking_time: 30,
      total_cooking_time: 30,
      difficulty_level: 2,
      title: "Рисовые блины на кефире с зеленью и сыром",
      subtitle:
        "Блины на рисовой муке получатся не только полезнее, но и быстрее. А чтобы сохранить пышность, тесто нужно завести на кефире. Терты сыр и зеленый лук сделают завтрак сытнее и ароматнее. Осталось только пожарить их на сливочном масле и подать с любыми топингами на ваш вкус. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8zUzVyUHQuanBlZw==.jpg",
      preparation: {
        content:
          "Просейте муку. Помойте зеленый лук. Подготовьте глубокую миску, венчик и блинную сковороду.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC80Smc2YVouanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description: "Взбейте куриные яйца со щепоткой соли и кефиром.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9XS3FtbUguanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Натрите сыр на средней терке. Мелко покрошите зеленый лук.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9yRDhxcWIuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Положите к взбитым яйцам сыр и зеленый лук. Тщательно перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8zY1NoNFQuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Всыпьте рисовую и пшеничную муку. Хорошенько перемешайте, чтобы мука разошлась и не было комочков.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC80UkhDZzYuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Разогрейте на плите блинную или обычную сковороду. Смажьте ее кусочком сливочного масла.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC94UHA2ZTUuanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Вылейте немного теста на сковороду и распределите его тонким слоем, наклоняя сковороду из одной стороны в другую.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9GQjMzNmkuanBlZw==.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Жарьте блины по 30-60 секунд с каждой стороны на среднем огне до образования румяной золотистой корочки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC84S2NTalQuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 298,
          weight: 100,
          custom_measure: "ст. л.",
          custom_measure_count: 5,
          title: "Рисовая мука",
        },
        {
          id: 169,
          weight: 180,
          custom_measure: "шт.",
          custom_measure_count: 3,
          title: "Куриное яйцо",
        },
        {
          id: 8291,
          weight: 309,
          custom_measure: "стакан",
          custom_measure_count: 1.5,
          title: "Кефир 2,5%",
        },
        {
          id: 352,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Соль",
        },
        {
          id: 388,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Сыр",
        },
        {
          id: 91,
          weight: 15,
          custom_measure: "пучок",
          custom_measure_count: 0.3,
          title: "Зеленый лук",
        },
        {
          id: 338,
          weight: 20,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Сливочное масло",
        },
        {
          id: 282,
          weight: 100,
          custom_measure: "ст. л.",
          custom_measure_count: 4,
          title: "Пшеничная мука хлебопекарная",
        },
      ],
      optional_ingredients: [
        {
          id: 343,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Сметана",
        },
        {
          id: 272,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Помидор",
        },
        {
          id: 256,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Перец чили",
        },
        {
          id: 91,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Зеленый лук",
        },
      ],
      proteins: 9.59,
      fats: 9.85,
      carbs: 20.75,
      calories: 194.28,
    },
    {
      id: 218806,
      active_cooking_time: 30,
      total_cooking_time: 30,
      difficulty_level: 2,
      title: "Жареный шницель из фарша",
      subtitle:
        "Шницель готовится не только из цельного куска мяса, но и из фарша. Так блюдо получается более сочным. В фарш для шницеля не нужно добавлять хлеб, яйца, лук или другие овощи — только измельченное мясо и специи. Нужно аккуратно обвалять тонкие сырые котлеты во взбитом яйце и панировочных сухарях так, чтобы они не развалились. А чтобы получить самую хрустящую корочку, окуните их в панировку дважды. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9LUWliQ3kuanBlZw==.jpg",
      preparation: {
        content:
          "Разморозьте фарш. Помойте куриные яйца. Подготовьте сковороду.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC84Q2lwdjkuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Положите фарш в миску. Приправьте солью и черным молотым перцем. Хорошенько перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9BcmpBZ3cuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Отбейте фарш около 20 раз. Для этого приподнимите его над миской и с усилием бросьте в миску или об стол. Разделите фарш на 4 одинаковых части. Каждую часть скатайте в шарик и сформируйте плоскую круглую котлету.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zazhEQUsuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Положите каждую котлетку между двумя слоями пищевой пленки и сделайте еще тоньше, разминая ее пальцами.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9zTWR5QXouanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "В одну тарелку насыпьте панировочные сухари. В другой тарелке взбейте вилкой или венчиком куриные яйца. Разогрейте в сковороде 1 ст.л. растительного масла.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zdGM0WTcuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Выложите шницель на разогретую сковороду. Жарьте по 4-5 минут с каждой стороны на среднем огне.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zZGtvTUEuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 419,
          weight: 400,
          custom_measure: "г",
          custom_measure_count: 400,
          title: "Фарш домашний",
        },
        {
          id: 169,
          weight: 120,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Куриное яйцо",
        },
        {
          id: 246,
          weight: 75,
          custom_measure: "г",
          custom_measure_count: 75,
          title: "Панировочные сухари",
        },
        {
          id: 287,
          weight: 85,
          custom_measure: "ст. л.",
          custom_measure_count: 5,
          title: "Растительное масло",
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
      optional_ingredients: [],
      proteins: 12.22,
      fats: 25.64,
      carbs: 9.48,
      calories: 312.41,
    },
    {
      id: 218794,
      active_cooking_time: 20,
      total_cooking_time: 80,
      difficulty_level: 2,
      title: "Чанахи по-грузински",
      subtitle:
        "Баранина, тушенная в порционных горшочках с большим количеством крупно нарезанных овощей, получается невероятно вкусной. Общий вес баклажанов, картошки и помидоров суммарно должен быть примерно равен весу мяса — в этом заключается главный принцип приготовления грузинского блюда чанахи. Классический вариант готовится исключительно с бараниной.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zU0ZMazcuanBlZw==.jpg",
      preparation: {
        content:
          "Разморозьте мясо, помойте и обсушите на бумажных полотенцах. Помойте и почистите картофель, репчатый лук и чеснок. Вымойте баклажан, помидоры и кинзу. Подготовьте горшочки для запекания.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zNHhKU1YuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Нарежьте баранину на куски среднего размера, баклажан — крупными кубиками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9Fc1A0SHQuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Нарежьте картофель крупными кусочками, помидоры — дольками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zQnJhQ1cuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Нарежьте репчатый лук кольцами, чеснок — тонкими пластинками. Измельчите кинзу.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9HVk1IRHAuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Разложите мясо по горшочкам. Поверх него выложите картошку, затем баклажаны, лук и чеснок.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zN2ltZTIuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Посыпьте содержимое горшочков солью, красным и черным перцем, хмели-сунели. Затем положите помидоры.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zOEdaNm8uanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Посыпьте помидоры кинзой. Залейте в горшочки горячую воду до уровня помидоров. Накройте горшочки крышками и отправьте в духовку, разогретую до 180°C, на 60-90 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80RGRGck4uanBlZw==.jpg",
        },
      ],
      kitchen_type: "Грузинская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 17,
          weight: 500,
          custom_measure: "г",
          custom_measure_count: 500,
          title: "Баранина",
        },
        {
          id: 13,
          weight: 210,
          custom_measure: "г",
          custom_measure_count: 210,
          title: "Баклажан",
        },
        {
          id: 108,
          weight: 130,
          custom_measure: "г",
          custom_measure_count: 130,
          title: "Картошка",
        },
        {
          id: 272,
          weight: 160,
          custom_measure: "г",
          custom_measure_count: 160,
          title: "Помидор",
        },
        {
          id: 290,
          weight: 80,
          custom_measure: "г",
          custom_measure_count: 80,
          title: "Репчатый лук",
        },
        {
          id: 440,
          weight: 5,
          custom_measure: "зубчик",
          custom_measure_count: 1,
          title: "Чеснок",
        },
        {
          id: 116,
          weight: 15,
          custom_measure: "г",
          custom_measure_count: 15,
          title: "Кинза",
        },
        {
          id: 429,
          weight: 3,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Хмели-сунели",
        },
        {
          id: 5798,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Розовый (красный) перец",
        },
        {
          id: 439,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Черный перец молотый",
        },
        {
          id: 352,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Соль",
        },
      ],
      optional_ingredients: [
        {
          id: 116,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Кинза",
        },
      ],
      proteins: 7.83,
      fats: 7.56,
      carbs: 4.24,
      calories: 116.2,
    },
  ],
  snacks: [
    {
      id: 221239,
      active_cooking_time: 20,
      total_cooking_time: 20,
      difficulty_level: 2,
      title: "Тосты с козьей рикоттой и персиками",
      subtitle:
        "Мы приготовили сладкие тосты, но добавили к ним козью рикотту Galbani и фрукты. Блюдо получилось ярким и сытным - подсушенный хрустящий хлеб, мягкая козья рикотта и сочные карамелизированные персики. Эти тосты с рикоттой станут отличной закуской или прекрасным десертом.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNC8zZHZhak0uanBlZw.jpg",
      preparation: {
        content:
          "Помойте персики и малину. Выложите сливочное масло из холодильника заранее, чтобы оно согрелось. Подготовьте сковороду.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNC8zR2pBUUEuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Разрежьте персики на половинки, удалите косточку. Нарежьте половинки персиков дольками. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNC80VVhKd0EuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Разогрейте сковороду с 1 ст.л. (20 г) сливочного масла на среднем огне. Когда масло растает, добавьте сахар и перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNC84NVZLSzYuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Выложите персики в сковороду. Карамелизируйте фрукты 1-2 минуты с каждой стороны. Снимите с огня и переложите на тарелку. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNC83ZDlNUFMuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Ломтики хлеба смажьте оставшимся сливочным маслом с двух сторон.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNC94Umg2emkuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Разогрейте чистую сковороду. Выложите ломтики хлеба в сковороду и поджарьте 3 минуты с одной стороны, затем переверните и готовьте еще 2 минуты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNC8zRGJNVDUuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Козью рикотту смешайте с ванильным сахаром и корицей. На каждый кусочек хлеба положите слой рикотты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNC96Qzd5eWsuanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Поверх козьей рикотты выложите дольки персика и ягоды малины. Присыпьте морской солью по вкусу. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNC8zSmNGTksuanBlZw.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 685,
          weight: 440,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Персики",
        },
        {
          id: 409,
          weight: 160,
          custom_measure: "ломтик",
          custom_measure_count: 4,
          title: "Тостовый хлеб",
        },
        {
          id: 338,
          weight: 80,
          custom_measure: "ст. л.",
          custom_measure_count: 4,
          title: "Сливочное масло",
        },
        {
          id: 411,
          weight: 50,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Тростниковый сахар",
        },
        {
          id: 610,
          weight: 4,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Молотая корица",
        },
        {
          id: 46,
          weight: 8,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Ванильный сахар",
        },
        {
          id: 20599,
          weight: 225,
          custom_measure: "г",
          custom_measure_count: 225,
          title: "Козья рикотта Galbani",
        },
        {
          id: 221,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Морская соль",
        },
        {
          id: 196,
          weight: 50,
          custom_measure: "г",
          custom_measure_count: 50,
          title: "Малина",
        },
      ],
      optional_ingredients: [
        {
          id: 204,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: null,
          title: "Мед",
        },
        {
          id: 11758,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: null,
          title: "Микрозелень",
        },
      ],
      proteins: 2.64,
      fats: 16.03,
      carbs: 20.54,
      calories: 169.45,
    },
    {
      id: 219439,
      active_cooking_time: 15,
      total_cooking_time: 50,
      difficulty_level: 2,
      title: "Хумус из цветной капусты",
      subtitle:
        "Хумус обычно готовят из нута с кунжутной пастой, лимонным соком, оливковым маслом и чесноком. Но не менее вкусной получится эта закуска, если нут заменить цветной капустой. Вкус этого овоща отдаленно похож на нут, но с капустой паста получится более легкой. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80UDhmaEsuanBlZw.jpg",
      preparation: {
        content:
          "Промойте и обсушите цветную капусту. Вымойте лимон и очистите чеснок. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80REczcVguanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Разрежьте на четыре части капусту. Удалите кочерыжку. Четвертинки кочана разделите на мелкие соцветия.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80OEpqRXkuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Выложите капусту в большую миску. Влейте оливковое масло и перемешайте его с капустой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9EQVp4V3YuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Разогрейте духовку до 175 °C. Застелите противень пергаментом. Выложите капусту на противень и отправьте в духовку на 20-25 минут. Овощ должен стать мягким. Когда капуста будет готова, остудите ее.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zMnRIZ3UuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Переложите запеченную капусту в блендер. Добавьте туда тахини, соль, кумин и чеснок. Выжмите сок из лимона и влейте половину стакана воды. Измельчите до однородности.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80UnFLY3AuanBlZw.jpg",
        },
      ],
      kitchen_type: "Арабская, восточная",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 430,
          weight: 650,
          custom_measure: "кочан",
          custom_measure_count: 1,
          title: "Цветная капуста",
        },
        {
          id: 240,
          weight: 34,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Оливковое масло",
        },
        {
          id: 562,
          weight: 102,
          custom_measure: "ст. л.",
          custom_measure_count: 6,
          title: "Тахини",
        },
        {
          id: 352,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Соль",
        },
        {
          id: 94,
          weight: 3,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Зира / Кумин",
        },
        {
          id: 440,
          weight: 5,
          custom_measure: "зубчик",
          custom_measure_count: 1,
          title: "Чеснок",
        },
        {
          id: 183,
          weight: 120,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Лимон",
        },
      ],
      optional_ingredients: [
        {
          id: 260,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Петрушка",
        },
        {
          id: 494,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Тортилья",
        },
        {
          id: 247,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Паприка",
        },
      ],
      proteins: 4.11,
      fats: 9.34,
      carbs: 5.83,
      calories: 122.77,
    },
    {
      id: 221479,
      active_cooking_time: 20,
      total_cooking_time: 65,
      difficulty_level: 2,
      title: "Запеченные фаршированные перцы с козьей рикоттой",
      subtitle:
        "Традиционно фаршированные перцы готовят с мясом и рисом. Вместо них в этом рецепты мы использовали много сыра и пряные травы. Нежная козья рикотта Galbani при запекании приобретает нежную консистенцию, а специи и свежая зелень придают блюду пикантности. Подавайте перцы в горячем или холодном виде — как закуску или самостоятельное блюдо. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNS8zaXNQR1cuanBlZw.jpg",
      preparation: {
        content:
          "Вымойте шпинат, зеленый лук, базилик, петрушку и болгарский перец. Разрежьте перцы пополам, но уберите только семена и белые перегородки, а зеленую плодоножку не трогайте — она нужна для того, чтобы начинка не вытекла при запекании.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNS82RWdveTkuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Разогрейте духовку до 200°C. Застелите противень пергаментом. Выложите разрезанные перцы на противень срезом вверх и смажьте при помощи силиконовой кисточки 1 ст.л. оливкового масла. Отправьте в духовку примерно на 15 минут, пока перцы не станут мягкими.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwNS9kV01hak0uanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Крупно нарежьте шпинат. Натрите моцареллу и пармезан. Смешайте сыры с козьей рикоттой и шпинатом. Разбейте в миску яйца и перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNS9yTTUyVGMuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Растолките в ступке семена фенхеля и всыпьте в сырную массу. Добавьте туда же все специи: сушеный розмарин, тимьян, соль и перец.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwNS8zWkFlaU0uanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Измельчите зеленый лук, базилик и петрушку. Всыпьте в начинку и перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwNS9iVmY1Q2YuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Разложите начинку по половинкам болгарского перца, хорошенько утрамбовывая ложкой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwNS80QzlEQ3YuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Смешайте панировочные сухари с 1 ст.л. оливкового масла. Распределите эту смесь ровным слоем по фаршированным перцам. Установите температуру в духовке на 170°C. Запекайте перцы примерно 30 минут до появления золотистой корочки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwNS80SlNHSlcuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская, итальянская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 32,
          weight: 600,
          custom_measure: "шт.",
          custom_measure_count: 4,
          title: "Болгарский перец",
        },
        {
          id: 447,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Шпинат",
        },
        {
          id: 20599,
          weight: 440,
          custom_measure: "г",
          custom_measure_count: 440,
          title: "Козья рикотта Galbani",
        },
        {
          id: 222,
          weight: 180,
          custom_measure: "г",
          custom_measure_count: 180,
          title: "Моцарелла",
        },
        {
          id: 248,
          weight: 60,
          custom_measure: "г",
          custom_measure_count: 60,
          title: "Пармезан",
        },
        {
          id: 456,
          weight: 120,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Яйца",
        },
        {
          id: 246,
          weight: 50,
          custom_measure: "стакан",
          custom_measure_count: 0.5,
          title: "Панировочные сухари",
        },
        {
          id: 240,
          weight: 34,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Оливковое масло",
        },
        {
          id: 91,
          weight: 25,
          custom_measure: "пучок",
          custom_measure_count: 0.5,
          title: "Зеленый лук",
        },
        {
          id: 12,
          weight: 20,
          custom_measure: "пучок",
          custom_measure_count: 0.25,
          title: "Базилик",
        },
        {
          id: 260,
          weight: 10,
          custom_measure: "пучок",
          custom_measure_count: 0.5,
          title: "Петрушка",
        },
        {
          id: 802,
          weight: 2,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Сушеный розмарин",
        },
        {
          id: 384,
          weight: 2,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Сушеный тимьян / чабрец",
        },
        {
          id: 12246,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Семена фенхеля",
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
      ],
      optional_ingredients: [
        {
          id: 19456,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Бальзамический соус",
        },
        {
          id: 11758,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Микрозелень",
        },
      ],
      proteins: 7.29,
      fats: 16.68,
      carbs: 6.58,
      calories: 118.58,
    },
    {
      id: 221854,
      active_cooking_time: 25,
      total_cooking_time: 25,
      difficulty_level: 2,
      title: "Чиабатта с камамбером и ягодами",
      subtitle:
        "Жареный камамбер, карамелизированные ягоды, хрустящая чиабатта — звучит вкусно, а еще очень сложно. На деле же все продукты можно подготовить, пока будет запекаться сыр. Уже через полчаса хрустящий утренний сэндвич с ароматным жидким камамбером будет готов. К подаче обязательна чашка утреннего чая или кофе. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8zazlqcDIuanBlZw.jpg",
      preparation: {
        content: "Разморозьте тесто. Застелите противень пергаментом.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9NdkZWeUguanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Раскатайте тесто в тонкий пласт. Положите в центр сыр камамбер и заверните края теста наверх.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9vd1pHeHkuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Переложите камамбер в тесте в форму, перевернув ровной стороной теста вверх, а швом вниз.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC92blp1Tm8uanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Слегка взбейте куриное яйцо. Смажьте им тесто. Отправьте форму на противень в разогретую до 180°С духовку на 15 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8za2ZRa3ouanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Растопите на сковороде сливочное масло. Обжарьте ломтики чиабатты по 2 минуты с каждой стороны.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8zb1JOUFkuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "В это же время выложите на другую сковороду ягоды. Посыпьте их сахаром. Жарьте 3 минуты на среднем огне, часто помешивая.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8zM1g1elMuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Натрите чеддер на средней терке. Смажьте один жареный ломтик хлеба творожным сыром и посыпьте чеддером.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC81RncyTGUuanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Достаньте из духовки камамбер в тесте и разрежьте пополам. Положите обе половинки на хлеб.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC80OG13cTYuanBlZw.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Сверху выложите ягоды и накройте вторым ломтиком жареного хлеба.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC80NkZneDYuanBlZw.jpg",
        },
      ],
      kitchen_type: "Французская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 7144,
          weight: 125,
          custom_measure: "г",
          custom_measure_count: 125,
          title: "Камамбер",
        },
        {
          id: 677,
          weight: 125,
          custom_measure: "г",
          custom_measure_count: 125,
          title: "Слоеное тесто",
        },
        {
          id: 169,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное яйцо",
        },
        {
          id: 699,
          weight: 90,
          custom_measure: "стакан",
          custom_measure_count: 0.5,
          title: "Замороженные ягоды",
        },
        {
          id: 312,
          weight: 25,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Сахар",
        },
        {
          id: 442,
          weight: 30,
          custom_measure: "ломтик",
          custom_measure_count: 2,
          title: "Чиабатта",
        },
        {
          id: 434,
          weight: 30,
          custom_measure: "г",
          custom_measure_count: 30,
          title: "Чеддер",
        },
        {
          id: 398,
          weight: 15,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Творожный сыр",
        },
        {
          id: 338,
          weight: 10,
          custom_measure: "ст. л.",
          custom_measure_count: 0.5,
          title: "Сливочное масло",
        },
      ],
      optional_ingredients: [
        {
          id: 146,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Кофе",
        },
        {
          id: 303,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Рукола",
        },
      ],
      proteins: 10.27,
      fats: 16.64,
      carbs: 18.69,
      calories: 265.67,
    },
    {
      id: 221884,
      active_cooking_time: 20,
      total_cooking_time: 20,
      difficulty_level: 2,
      title: "Лодочки с креветками в соусе чили",
      subtitle:
        "Обжарьте рисовую бумагу в разогретом масле, и она вздуется за 5 секунд. Получившиеся «лодочки» можно дополнить любой начинкой. Например, к рисовой бумаге хорошо подойдут морепродукты. Предварительно обжарьте их в ароматном соусе — и хрустящая сочная закуска готова! ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8za2E3cWcuanBlZw.jpg",
      preparation: {
        content:
          "Разморозьте креветки, очистите их от панциря, помойте. Помойте огурец и зеленый лук. Снимите с крабовых палочек пленку.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8zeXRISmsuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Разрежьте каждый лист рисовой бумаги на 4 части. Разогрейте в сковороде растительное масло. Обжарьте листья рисовой бумаги по одному на среднем огне в течение 3-5 секунд и выложите на тарелку.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9BN3pYUHguanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "На той же сковороде пожарьте креветки с соусом чили в течение 3-4 минут, часто помешивая.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8zdUZLSEMuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Мелко нарежьте огурец, крабовые палочки, зеленый лук и жареные креветки. Положите их в миску, добавьте творожный сыр и перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9ib1pEaUIuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description: "Положите начинку в жареную рисовую бумагу.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC91cWRoOVUuanBlZw.jpg",
        },
      ],
      kitchen_type: "Азиатская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 398,
          weight: 15,
          custom_measure: "г",
          custom_measure_count: 15,
          title: "Творожный сыр",
        },
        {
          id: 148,
          weight: 50,
          custom_measure: "г",
          custom_measure_count: 50,
          title: "Крабовые палочки",
        },
        {
          id: 571,
          weight: 12.5,
          custom_measure: "г",
          custom_measure_count: 12.5,
          title: "Рисовая бумага",
        },
        {
          id: 287,
          weight: 51,
          custom_measure: "ст. л.",
          custom_measure_count: 3,
          title: "Растительное масло",
        },
        {
          id: 237,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Огурец",
        },
        {
          id: 91,
          weight: 14,
          custom_measure: "г",
          custom_measure_count: 14,
          title: "Зеленый лук",
        },
        {
          id: 470,
          weight: 18,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Соус чили",
        },
      ],
      optional_ingredients: [
        {
          id: 183,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Лимон",
        },
        {
          id: 116,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Кинза",
        },
      ],
      proteins: 2.29,
      fats: 21.38,
      carbs: 9.5,
      calories: 234.97,
    },
    {
      id: 221863,
      active_cooking_time: 60,
      total_cooking_time: 120,
      difficulty_level: 3,
      title: "Сырные шарики с кукурузой",
      subtitle:
        "Сырно-кукурузные шарики получаются зажаристыми, хрустящими снаружи и мягкими внутри. Внутри каждого — кусочек сливочной тягучей моцареллы. Кукуруза подойдет как свежая, так и консервированная. В результате получается отличная закуска для вечеринки или киновечера. Подавайте шарики горячими, пока начинка не затвердела.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8zNHVTZ1MuanBlZw.jpg",
      preparation: {
        content:
          "Помойте овощи. У перца удалите плодоножку и семена. Почистите чеснок. Просейте муку. Подготовьте фритюр, гриль и небольшой сотейник.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC80UDdyQjguanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Отварите картофель с кожицей в течение 30 минут. Остудите, очистите от кожуры и натрите на средней терке.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC82eW1kcksuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Пожарьте кукурузу на сковородке в течение 3-5 минут, периодически помешивая ее.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC92cXRydGQuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Пропустите через пресс чеснок. Мелко покрошите перец чили. Натрите сыр на средней терке.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9CN1BHU2YuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Смешайте в миске картофель с кукурузой, чесноком, перцем чили, сыром. Добавьте хлопья чили, орегано, ¼ ч.л. соли, щепотку черного молотого перца, 3 ст.л. панировочных сухарей и тщательно перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9LdU5mQUEuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Смешайте для кляра в другой миске пшеничную и кукурузную муку с водой, щепоткой соли, щепоткой черного молотого перца и с красным молотым перцем. Хорошенько перемешайте, чтобы не было комочков.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9iWDVDWHEuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Влажными руками возьмите немного картофельной смеси, сформируйте из нее лепешку на ладони. Положите в центр кусочек моцареллы и слепите вокруг сыра шарик.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC80NjRWd3UuanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "На плоскую тарелку насыпьте полстакана панировочных сухарей. Каждый шарик обмакните в кляр и обваляйте в панировочных сухарях. Выложите шарики на тарелку и уберите в холодильник на 30 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8zSERKdTYuanBlZw.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Разогрейте масло во фритюре. Обжарьте шарики до золотистой корочки в течение 3-4 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8zS0JuaEEuanBlZw.jpg",
        },
      ],
      kitchen_type: "Корейская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для панировки, кляра и подачи",
      main_ingredients: [
        {
          id: 222,
          weight: 90,
          custom_measure: "г",
          custom_measure_count: 90,
          title: "Моцарелла",
        },
        {
          id: 127,
          weight: 180,
          custom_measure: "ст. л.",
          custom_measure_count: 6,
          title: "Консервированная кукуруза",
        },
        {
          id: 108,
          weight: 360,
          custom_measure: "шт.",
          custom_measure_count: 3,
          title: "Картошка",
        },
        {
          id: 256,
          weight: 15,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Перец чили",
        },
        {
          id: 440,
          weight: 15,
          custom_measure: "зубчик",
          custom_measure_count: 3,
          title: "Чеснок",
        },
        {
          id: 428,
          weight: 2,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Хлопья чили",
        },
        {
          id: 383,
          weight: 3,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Сушеный орегано (душица)",
        },
        {
          id: 352,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Соль",
        },
        {
          id: 439,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Черный перец молотый",
        },
        {
          id: 388,
          weight: 50,
          custom_measure: "г",
          custom_measure_count: 50,
          title: "Сыр",
        },
        {
          id: 246,
          weight: 45,
          custom_measure: "ст. л.",
          custom_measure_count: 3,
          title: "Панировочные сухари",
        },
        {
          id: 287,
          weight: 380,
          custom_measure: "стакан",
          custom_measure_count: 2,
          title: "Растительное масло",
        },
      ],
      optional_ingredients: [
        {
          id: 246,
          weight: 50,
          custom_measure: "стакан",
          custom_measure_count: 0.5,
          title: "Панировочные сухари",
        },
        {
          id: 282,
          weight: 50,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 158,
          weight: 60,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Кукурузная мука",
        },
        {
          id: 54,
          weight: 126,
          custom_measure: "ст. л.",
          custom_measure_count: 7,
          title: "Вода",
        },
        {
          id: 352,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Соль",
        },
        {
          id: 439,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Черный перец молотый",
        },
        {
          id: 247,
          weight: 1.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Паприка",
        },
        {
          id: 704,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Сырный соус",
        },
        {
          id: 231,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Овощи",
        },
        {
          id: 314,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Свежая зелень",
        },
      ],
      proteins: 5.05,
      fats: 29.26,
      carbs: 16.45,
      calories: 338.38,
    },
    {
      id: 218819,
      active_cooking_time: 50,
      total_cooking_time: 70,
      difficulty_level: 2,
      title: "Волованы с грибной начинкой",
      subtitle:
        "Волованы идеально подходят в качестве закуски и могут стать достойными конкурентами канапе на фуршете. Основа из нежного слоеного теста заполняется любой начинкой, обычно несладкой. Идеальным вариантом могут стать паштеты или овощные пюре. Мы выбрали шампиньоны, обжарили их с луком и измельчили в блендере.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zV29QWlQuanBlZw.jpg",
      preparation: {
        content:
          "Разморозьте тесто заранее, если оно было заморожено. Тщательно вымойте и обсушите грибы, лук и яйцо. Снимите с лука шелуху. Подготовьте силиконовую кисточку, блендер и формочки-вырубки для волованов. По форме они должны быть одинаковыми, но двух разных размеров: побольше и поменьше.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC82ZGZoYkcuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Раскатайте тесто в пласт толщиной примерно 3-4 мм. Возьмите формочки одинаковой формы, но разного размера: побольше и поменьше. Вырежьте из теста заготовки для волованов. У половины из них формочками меньшего размера вырежьте середину, чтобы получился толстый контур из теста.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC94c3pFSGsuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Разогрейте духовку до 180°C. Застелите форму для запекания пергаментом. Выложите основные круглые заготовки на противень.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9NdXVScU4uanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Отделите у яйца белок от желтка. Смажьте желтком тесто на противне. Выложите заготовки-контуры сверху на круглые основания, должна получиться плоская «корзиночка».",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9SQVgyS1AuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Смажьте волованы желтком при помощи силиконовой кисточки. Отправьте в разогретую духовку на 20 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9KTWNLRGkuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Нарежьте шампиньоны небольшими произвольными пластинками. Накрошите лук мелкими кубиками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zZ0FGc1YuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Разогрейте сковороду с маслом. Выложите в нее лук. Помешивая, обжарьте до прозрачности.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zOEJoVlAuanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Добавьте к луку грибы. Жарьте, пока грибы не подрумянятся, а жидкость не выпарится.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9nWFNCc0QuanBlZw.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Посолите и поперчите овощи. Добавьте сметану и чабрец к луку и грибам, перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9BMlN1dnYuanBlZw.jpg",
        },
        {
          title: "Шаг 9",
          description:
            "Выложите грибы с луком в чашу блендера. Измельчите в однородное пюре.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9wYUJVN2suanBlZw.jpg",
        },
        {
          title: "Шаг 10",
          description:
            "Достаньте волованы из духовки. Наполните их грибной начинкой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zcmFuU0ouanBlZw.jpg",
        },
      ],
      kitchen_type: "Французская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 677,
          weight: 250,
          custom_measure: "г",
          custom_measure_count: 250,
          title: "Слоеное тесто",
        },
        {
          id: 445,
          weight: 192,
          custom_measure: "шт.",
          custom_measure_count: 6,
          title: "Шампиньоны",
        },
        {
          id: 290,
          weight: 80,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Репчатый лук",
        },
        {
          id: 169,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное яйцо",
        },
        {
          id: 384,
          weight: 7,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Сушеный тимьян / чабрец",
        },
        {
          id: 343,
          weight: 50,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Сметана",
        },
        {
          id: 287,
          weight: 34,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Растительное масло",
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
      ],
      optional_ingredients: [
        {
          id: 19865,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Чай",
        },
      ],
      proteins: 4.66,
      fats: 15.34,
      carbs: 17.1,
      calories: 223.65,
    },
    {
      id: 218814,
      active_cooking_time: 25,
      total_cooking_time: 55,
      difficulty_level: 2,
      title: "Фаршированные перцы с сыром в духовке",
      subtitle:
        "Запеченные в духовке фаршированные перцы готовить быстрее и проще, чем тушеные. Особенно если не добавлять в начинку рис. Смешайте фарш с луком и специями, начините им очищенные перцы и запеките под тертым сыром. Для быстроты возьмите куриный фарш и предварительно подержите перцы в кипятке несколько минут. Выберите сыр, который хорошо плавится и запекается до красивой румяной корочки, например, гауду, сулугуни или моцареллу. Благодаря сырной корочке сок начинки останется внутри.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9IQjZqU1cuanBlZw.jpg",
      preparation: {
        content:
          "Помойте яйцо и болгарский перец, оботрите с них влагу бумажными полотенцами. Осторожно, чтобы не повредить мякоть, удалите из перцев сердцевину с семенами. Вымойте и почистите лук. Ополосните тимьян. Подготовьте миску, кастрюлю и глубокую форму для запекания.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80UjZjOEsuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Налейте в кастрюлю 1,5-2 л воды. Поставьте на сильный огонь и дайте воде закипеть. Опустите в кипящую воду очищенные перцы. Проварите перцы в течение 3-4 минут, пока они слегка не размягчатся.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC82dVZrWDIuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Снимите кастрюлю с огня и достаньте перцы из воды. Выложите их на тарелку или доску немного остыть и обсохнуть.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zYU50ajMuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Переложите куриный фарш из упаковки в миску. Посыпьте фарш солью и черным перцем, хорошо перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zSFNweEUuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Нарежьте репчатый лук кубиками со стороной примерно 3-4 мм. Выложите нарезанный лук в миску к фаршу.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zOTJWNFMuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Отделите листочки тимьяна от стеблей, мелко порубите и добавьте их к фаршу.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9QWnU2TVguanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Разбейте яйцо в миску с фаршем. Тщательно вымесите фарш со всеми ингредиентами до однородного гладкого состояния.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9wWVViU1IuanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Смажьте форму для запекания растительным маслом. Утрамбуйте фарш в болгарские перцы, поставьте их в форму вертикально отверстиями вверх.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80RVZ6cEIuanBlZw.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Включите духовку разогреваться до 180°C. Крупно натрите сыр. Равномерно посыпьте сыром отверстия фаршированных перцев.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8za0Fqb1MuanBlZw.jpg",
        },
        {
          title: "Шаг 9",
          description:
            "Поставьте форму с перцем в духовку и запекайте их в течение 25-30 минут. Достаньте фаршированные перцы с сыром и переложите их на сервировочное блюдо.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80VFFrS2cuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 12402,
          weight: 150,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Красный болгарский перец",
        },
        {
          id: 12401,
          weight: 150,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Желтый болгарский перец",
        },
        {
          id: 12400,
          weight: 150,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Зеленый болгарский перец",
        },
        {
          id: 176,
          weight: 200,
          custom_measure: "г",
          custom_measure_count: 200,
          title: "Куриный фарш",
        },
        {
          id: 271,
          weight: 50,
          custom_measure: "г",
          custom_measure_count: 50,
          title: "Полутвердый сыр",
        },
        {
          id: 290,
          weight: 20,
          custom_measure: "г",
          custom_measure_count: 20,
          title: "Репчатый лук",
        },
        {
          id: 169,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное яйцо",
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
          weight: 1.25,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Черный перец молотый",
        },
        {
          id: 270,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Подсолнечное масло рафинированное",
        },
        {
          id: 402,
          weight: 2,
          custom_measure: "веточка",
          custom_measure_count: 2,
          title: "Тимьян / чабрец",
        },
      ],
      optional_ingredients: [],
      proteins: 7.46,
      fats: 4.9,
      carbs: 4.81,
      calories: 93.51,
    },
    {
      id: 221851,
      active_cooking_time: 20,
      total_cooking_time: 70,
      difficulty_level: 2,
      title: "Пряный морковный дип",
      subtitle:
        "Пряный, яркий и очень ароматный — это солнечный морковный дип с тахини и восточными специями. Подайте его к питам, тостам или крекерам. Паста тахини всегда придает дипам кремовую консистенцию, а еще характерную кунжутную нотку. А чтобы загустить намазку, добавьте консервированную белую фасоль. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC85elU3em0uanBlZw.jpg",
      preparation: {
        content:
          "Помойте и почистите морковь. Промойте под проточной водой фасоль. Сполосните лимон. Застелите противень пергаментом. Подготовьте блендер с чашей.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9wVmhQd0EuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Разрежьте каждую морковку вдоль пополам и положите на противень.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9YNFZ1bm0uanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Разогрейте духовой шкаф до 180°С. Посыпьте морковь кумином и щепоткой соли. Сбрызните 1 ст.л. оливкового масла и отправьте в духовку на 50 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9qRUNmN0MuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Положите запеченную морковь в чашу блендера. Туда же добавьте фасоль.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9vc3F3SkEuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Выжмите из лимона сок. Влейте его в чашу блендера вместе с кленовым сиропом и оставшимся оливковым маслом.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8zQzZIb0QuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Посолите и поперчите морковь. Включите блендер на 1-2 минуты, чтобы все ингредиенты хорошенько измельчились и перемешались.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC80TVlLYjcuanBlZw.jpg",
        },
      ],
      kitchen_type: "Марокканская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 241,
          weight: 51,
          custom_measure: "ст. л.",
          custom_measure_count: 3,
          title: "Оливковое масло Extra Virgin",
        },
        {
          id: 219,
          weight: 270,
          custom_measure: "шт.",
          custom_measure_count: 3,
          title: "Морковь",
        },
        {
          id: 94,
          weight: 6,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Зира / Кумин",
        },
        {
          id: 352,
          weight: 2,
          custom_measure: "щепотка",
          custom_measure_count: 2,
          title: "Соль",
        },
        {
          id: 439,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Черный перец молотый",
        },
        {
          id: 125,
          weight: 150,
          custom_measure: "стакан",
          custom_measure_count: 0.75,
          title: "Консервированная белая фасоль",
        },
        {
          id: 562,
          weight: 10,
          custom_measure: "ч. л.",
          custom_measure_count: 2,
          title: "Тахини",
        },
        {
          id: 642,
          weight: 3,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Кленовый сироп",
        },
        {
          id: 183,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 0.5,
          title: "Лимон",
        },
      ],
      optional_ingredients: [
        {
          id: 716,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Гренки из белого хлеба",
        },
        {
          id: 240,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Оливковое масло",
        },
        {
          id: 11758,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Микрозелень",
        },
        {
          id: 275,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Помидоры черри",
        },
      ],
      proteins: 3.27,
      fats: 10.32,
      carbs: 10.24,
      calories: 143.75,
    },
    {
      id: 218694,
      active_cooking_time: 50,
      total_cooking_time: 80,
      difficulty_level: 3,
      title: "Фаршированные перцы с мясом и рисом",
      subtitle:
        "Классика русской кухни, фаршированный мясом и рисом болгарский перец гарантирует вкус, сытность и аппетитный аромат в одном блюде. Обжарьте лук перед тем, как класть его в фарш, так перец станет еще вкуснее. А рис сварите до полуготовности, чтобы он уже полностью распарился в соках томатной заливки, перца и мяса, впитав в себя их вкусы. Добавьте в фарш любимые приправы для мяса, чтобы придать готовому блюду аппетитный аромат.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy9VWHJBVmYuanBlZw.jpg",
      preparation: {
        content:
          "Помойте болгарские перцы. Аккуратно разрежьте перцы пополам и удалите из них сердцевину с семенами. Вымойте и почистите лук и чеснок. Промойте рис до прозрачной воды. Ополосните яйцо и петрушку, промокните их бумажными салфетками от влаги. Отделите листочки петрушки от стеблей. Подготовьте сковороду, миски, небольшую кастрюлю и глубокий сотейник с крышкой.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy80UHpmcVkuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Выложите рис в кастрюлю, влейте 0,5 стакана воды. Поставьте кастрюлю на сильный огонь. Дождитесь, когда вода закипит.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy80RXdHb0guanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Уменьшите огонь до слабого, всыпьте в воду ⅙ ч.л. соли. Варите рис до полуготовности в течение 10-15 минут. Снимите кастрюлю с огня и дайте рису остыть.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy80SGZONEsuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Нарежьте лук кубиками со стороной 4-5 мм. Налейте в сковороду растительное масло, разогрейте его на среднем огне. Обжарьте лук, помешивая, 2-3 минуты до светло-золотистого цвета.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zcGNqdW0uanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Положите фарш в глубокую миску, добавьте к нему рис и обжаренный лук. Пропустите чеснок через пресс или мелко его натрите, также выложите к фаршу.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy9GSnZBdXcuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Приправьте фарш ⅙ ч.л. соли, черным перцем и специями для мяса.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy9qQjlNcUMuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Разбейте в фарш яйцо, все тщательно перемешайте до однородной массы.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zS1pGV0suanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Разрежьте перцы на две части в виде лодочек. Распределите получившуюся начинку с мясом и рисом по очищенным перцам, заполняя их полностью.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zY3JCQWIuanBlZw.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Поместите нафаршированные перцы в кастрюлю отверстиями вверх.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy81Uml5WjIuanBlZw.jpg",
        },
        {
          title: "Шаг 9",
          description:
            "Налейте в небольшую чистую миску 2 стакана воды, положите к ней томатную пасту и ⅙ ч.л. соли. Хорошо перемешайте и залейте томатной смесью перцы в кастрюле.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy80QW9jZkguanBlZw.jpg",
        },
        {
          title: "Шаг 10",
          description:
            "Поставьте кастрюлю с перцами на средний огонь, дождитесь, когда томатная смесь закипит. Уменьшите огонь до слабого и потушите фаршированный перец в течение 20-30 минут под крышкой до готовности мяса и мягкости самого перца.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zOENYSm8uanBlZw.jpg",
        },
        {
          title: "Шаг 11",
          description:
            "Мелко порубите листья петрушки. Посыпьте ими фаршированный перец и снимите кастрюлю с огня.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy9WYlJ1UzguanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 227,
          weight: 200,
          custom_measure: "г",
          custom_measure_count: 200,
          title: "Мясной фарш",
        },
        {
          id: 294,
          weight: 45,
          custom_measure: "г",
          custom_measure_count: 45,
          title: "Рис длиннозерный",
        },
        {
          id: 404,
          weight: 30,
          custom_measure: "г",
          custom_measure_count: 30,
          title: "Томатная паста",
        },
        {
          id: 290,
          weight: 40,
          custom_measure: "г",
          custom_measure_count: 40,
          title: "Репчатый лук",
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
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Соль",
        },
        {
          id: 439,
          weight: 0.5,
          custom_measure: "г",
          custom_measure_count: 0.5,
          title: "Черный перец молотый",
        },
        {
          id: 169,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное яйцо",
        },
        {
          id: 260,
          weight: 8,
          custom_measure: "г",
          custom_measure_count: 8,
          title: "Петрушка",
        },
        {
          id: 54,
          weight: 500,
          custom_measure: "мл",
          custom_measure_count: 500,
          title: "Вода",
        },
        {
          id: 270,
          weight: 10,
          custom_measure: "ч. л.",
          custom_measure_count: 2,
          title: "Подсолнечное масло рафинированное",
        },
        {
          id: 32,
          weight: 600,
          custom_measure: "шт.",
          custom_measure_count: 4,
          title: "Болгарский перец",
        },
        {
          id: 707,
          weight: 1,
          custom_measure: "г",
          custom_measure_count: 1,
          title: "Приправа для фарша",
        },
      ],
      optional_ingredients: [
        {
          id: 314,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Свежая зелень",
        },
      ],
      proteins: 2.92,
      fats: 5.59,
      carbs: 5.98,
      calories: 84.09,
    },
    {
      id: 218547,
      active_cooking_time: 35,
      total_cooking_time: 35,
      difficulty_level: 2,
      title: "Мидии в соусе Том Ям",
      subtitle:
        "Благодаря пасте Том Ям самые популярные блюда тайской кухни легко готовить дома. Сделайте на ее основе пряный и ароматный соус для мидий в тайском стиле. Обжарьте пасту Том Ям с чесноком, затем прокипятите все с кокосовым молоком. Добавьте сок лайма и прогрейте в соусе заранее отваренные мидии: в ракушках или уже очищенные.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS8zQUhFZE0uanBlZw.jpg",
      preparation: {
        content:
          "Помойте лайм, оботрите его от влаги бумажными полотенцами. Вымойте и почистите чеснок. Подготовьте кастрюлю, миску и сотейник. Очистите мидии.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9SazdrVzUuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Налейте в кастрюлю 1-1,5 литра воды. Поставьте на сильный огонь и дайте воде закипеть. Опустите в воду мидии в ракушках. Проварите их в течение 5 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS80NFdVUncuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Достаньте мидии из воды шумовкой и переложите в миску. Прикройте миску крышкой или тарелкой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS8zWlJ1cHguanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Выжмите сок из половины лайма. Пропустите чеснок через пресс или мелко его натрите.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9qeHNoaVEuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Поставьте чистую кастрюлю на средний огонь. Налейте в нее растительное масло и хорошо разогрейте. Положите чеснок в горячее масло. Обжарьте его, помешивая, 1-2 минуты до золотистого цвета.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9kM3JDM2EuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Положите в кастрюлю к чесноку пасту Том Ям. Прогрейте все вместе, помешивая, 1-2 минуты. Влейте в кастрюлю кокосовое молоко, всыпьте сушеную кинзу.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS80RGdOUHQuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Тщательно перемешайте получившийся соус и дождитесь, когда он закипит. Добавьте в кастрюлю сок лайма и выложите отваренные мидии. Хорошо размешайте, чтобы все мидии равномерно покрылись соусом. Прогрейте 2-3 минуты и снимите сотейник с огня.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS8zQVRLTHYuanBlZw.jpg",
        },
      ],
      kitchen_type: "Тайская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 735,
          weight: 27,
          custom_measure: "ст. л.",
          custom_measure_count: 1.5,
          title: "Паста Том Ям",
        },
        {
          id: 123,
          weight: 100,
          custom_measure: "мл",
          custom_measure_count: 100,
          title: "Кокосовое молоко",
        },
        {
          id: 440,
          weight: 5,
          custom_measure: "зубчик",
          custom_measure_count: 1,
          title: "Чеснок",
        },
        {
          id: 371,
          weight: 1,
          custom_measure: "г",
          custom_measure_count: 1,
          title: "Сушеная кинза",
        },
        {
          id: 180,
          weight: 30,
          custom_measure: "г",
          custom_measure_count: 30,
          title: "Лайм",
        },
        {
          id: 270,
          weight: 10,
          custom_measure: "ч. л.",
          custom_measure_count: 2,
          title: "Подсолнечное масло рафинированное",
        },
        {
          id: 786,
          weight: 250,
          custom_measure: "г",
          custom_measure_count: 250,
          title: "Мидии в раковинах",
        },
      ],
      optional_ingredients: [
        {
          id: 116,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Кинза",
        },
      ],
      proteins: 7.58,
      fats: 10.23,
      carbs: 5.54,
      calories: 143.34,
    },
    {
      id: 219200,
      active_cooking_time: 10,
      total_cooking_time: 10,
      difficulty_level: 1,
      title: "Копченые томаты со страчателлой",
      subtitle:
        "Пряные вяленые томаты готовятся не так быстро, а вот помидоры на гриле в ароматных специях подойдут всего за полчаса. Нужно только пожарить несколько крепких томатов в ароматном масле до первых подпалин. Подайте их со сливочной страчателлой, бальзамическим уксусом, песто или любым другим соусом на ваш вкус.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC8zZFFRcDkuanBlZw.jpg",
      preparation: {
        content: "Помойте томаты. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC82ZW92NkIuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Смешайте в небольшой миске оливковое масло, сушеный чеснок, сахар, орегано, розмарин и соль.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC9vSG5leUouanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Разрежьте томаты поперек, чтобы на одной половине была плодоножка, а на другой — кончик. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9udWxs.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Полейте томаты пряным маслом, дайте немного постоять, а затем обжарьте на сильном огне до появления черных подпалин. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC9jcGdNTFguanBlZw.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 272,
          weight: 800,
          custom_measure: "г",
          custom_measure_count: 800,
          title: "Помидор",
        },
        {
          id: 240,
          weight: 50,
          custom_measure: "мл",
          custom_measure_count: 50,
          title: "Оливковое масло",
        },
        {
          id: 386,
          weight: 1,
          custom_measure: "г",
          custom_measure_count: 1,
          title: "Сушеный чеснок",
        },
        {
          id: 312,
          weight: 10,
          custom_measure: "г",
          custom_measure_count: 10,
          title: "Сахар",
        },
        {
          id: 383,
          weight: 1,
          custom_measure: "г",
          custom_measure_count: 1,
          title: "Сушеный орегано (душица)",
        },
        {
          id: 802,
          weight: 1,
          custom_measure: "г",
          custom_measure_count: 1,
          title: "Сушеный розмарин",
        },
        {
          id: 221,
          weight: 20,
          custom_measure: "г",
          custom_measure_count: 20,
          title: "Морская соль",
        },
      ],
      optional_ingredients: [
        {
          id: 19292,
          weight: 300,
          custom_measure: "г",
          custom_measure_count: 300,
          title: "Сыр страчателла",
        },
      ],
      proteins: 3.31,
      fats: 9.69,
      carbs: 3.93,
      calories: 115.05,
    },
    {
      id: 219183,
      active_cooking_time: 30,
      total_cooking_time: 30,
      difficulty_level: 2,
      title: "Тортилья с курицей",
      subtitle:
        "Солнечные тортильи прямиком из Мексики на вашей кухне! Жареная курица в кукурузных лепешках с тягучим сыром чеддер обязательно понравится и детям, и взрослым. А еще это блюдо можно сделать не только дома, но и на уличном барбекю. Чтобы подача была по-настоящему мексиканской, приготовьте соус гуакамоле по нашему рецепту.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC8zdXFpd3ouanBlZw.jpg",
      preparation: {
        content:
          "Помойте овощи, разморозьте куриную грудку. Извлеките плодоножку из сладкого перца, уберите семена. Очистите авокадо и удалите косточку. Ополосните зелень. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC80WDVHWEQuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Измельчите в блендере кумин, семена кориандра и аниса, цедру лайма и 1 зубчик чеснока. Разделите получившуюся смесь на две части: одна понадобится для начинки, вторая — для соуса.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9udWxs.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Крупно натрите сыр. Нарежьте лук и перец мелкими кубиками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC85NXFqR3IuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description: "Нарежьте куриное филе тонкими полосками. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC8zVEx1dVguanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Взбейте консервированные томаты в блендере с половиной смеси специй и соком лайма. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9udWxs.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Обжарьте лук с перцем в сотейнике до золотистости. После этого переложите овощи в отдельную тарелку. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9udWxs.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "В том же сотейнике обжарьте куриные полоски до румяной корочки. Затем верните в сотейник овощи, добавьте томаты со специями и кукурузу. Томите начинку на среднем огне около 15–20 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC92OVJVa3cuanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Подпеките тортильи на сковороде или гриле с одной стороны. Выложите начинку на одну половину, посыпьте ее сыром, а затем сверните лепешку пополам.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC9nTmFvNlEuanBlZw.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Дайте начинке прогреться внутри лепешки в течение нескольких минут. Так сыр хорошо расплавится и скрепит начинку с тортильей. Готовую тортилью выложите из сковороды и разрежьте на 2 части, чтобы у вас получились 2 треугольника. Повторите то же самое с другой тортильей. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9udWxs.jpg",
        },
        {
          title: "Шаг 9",
          description:
            "Сделайте соус гуакамоле. Для этого смешайте в блендере 1 зубчик чеснока, сок 1 лайма, 1 мягкое авокадо и оставшуюся половину специй с цедрой. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9udWxs.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Для начинки",
      optional_ingredient_title: "Для соуса и подачи",
      main_ingredients: [
        {
          id: 127,
          weight: 80,
          custom_measure: "г",
          custom_measure_count: 80,
          title: "Консервированная кукуруза",
        },
        {
          id: 19849,
          weight: 150,
          custom_measure: "г",
          custom_measure_count: 150,
          title: "Консервированные помидоры",
        },
        {
          id: 12401,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Желтый болгарский перец",
        },
        {
          id: 26,
          weight: 50,
          custom_measure: "г",
          custom_measure_count: 50,
          title: "Белый лук",
        },
        {
          id: 165,
          weight: 350,
          custom_measure: "г",
          custom_measure_count: 350,
          title: "Куриная грудка",
        },
        {
          id: 180,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Лайм",
        },
        {
          id: 260,
          weight: 4,
          custom_measure: "г",
          custom_measure_count: 4,
          title: "Петрушка",
        },
        {
          id: 116,
          weight: 4,
          custom_measure: "г",
          custom_measure_count: 4,
          title: "Кинза",
        },
        {
          id: 434,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Чеддер",
        },
        {
          id: 494,
          weight: 120,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Тортилья",
        },
        {
          id: 143,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Кориандр",
        },
        {
          id: 94,
          weight: 1.98,
          custom_measure: "ч. л.",
          custom_measure_count: 0.33,
          title: "Зира / Кумин",
        },
        {
          id: 6051,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Анис",
        },
        {
          id: 1641,
          weight: 0.66,
          custom_measure: "ч. л.",
          custom_measure_count: 0.33,
          title: "Цедра лайма",
        },
        {
          id: 440,
          weight: 5,
          custom_measure: "зубчик",
          custom_measure_count: 1,
          title: "Чеснок",
        },
        {
          id: 338,
          weight: 50,
          custom_measure: "г",
          custom_measure_count: 50,
          title: "Сливочное масло",
        },
      ],
      optional_ingredients: [
        {
          id: 440,
          weight: 5,
          custom_measure: "зубчик",
          custom_measure_count: 1,
          title: "Чеснок",
        },
        {
          id: 180,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Лайм",
        },
        {
          id: 7041,
          weight: 200,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Авокадо «Хасс»",
        },
      ],
      proteins: 9.42,
      fats: 9.09,
      carbs: 8.04,
      calories: 152.16,
    },
    {
      id: 218468,
      active_cooking_time: 10,
      total_cooking_time: 20,
      difficulty_level: 1,
      title: "Закуска из огурцов с медом",
      subtitle:
        "Эту необычную закуску из огурцов определенно стоит попробовать хотя бы раз. Пусть это не самое распространенное сочетание продуктов, но оно точно заслуживает внимания. Свежий хрустящий огурец в сладкой медовой заправке напоминает спелую дыню. Чтобы сделать вкус блюда еще интереснее, добавьте лимонный сок, мяту, соль и перец. Подайте такие огурцы как закуску, салат или в качестве гарнира к мясу.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC80SEZadnEuanBlZw.jpg",
      preparation: {
        content:
          "Помойте огурцы, отрежьте кончики. Подготовьте глубокую миску.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC83bmdHSjkuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Немного нагрейте мед в микроволновке, чтобы он стал жидким, и смешайте его с растительным маслом.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC9kdEFWTDguanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description: "Нарежьте огурцы кружочками. Положите в миску.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC9ESjlDZ0EuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Залейте огурцы смесью меда и масла. Тщательно перемешайте, чтобы заправка равномерно распределилась по каждому кусочку. Оставьте мариноваться на 10-15 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC9rdW1uc2suanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 237,
          weight: 300,
          custom_measure: "шт.",
          custom_measure_count: 3,
          title: "Огурец",
        },
        {
          id: 204,
          weight: 56,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Мед",
        },
        {
          id: 287,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Растительное масло",
        },
      ],
      optional_ingredients: [
        {
          id: 25,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Белый кунжут",
        },
        {
          id: 153,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Красный жгучий перец",
        },
      ],
      proteins: 0.61,
      fats: 4.64,
      carbs: 15.27,
      calories: 101.42,
    },
    {
      id: 220358,
      active_cooking_time: 30,
      total_cooking_time: 555,
      difficulty_level: 2,
      title: "Домашний хумус с овощами",
      subtitle:
        "В приготовлении кремового хумуса есть несколько секретов. Добавьте при замачивании и варке гороха пищевую соду, которая хорошо его размягчит и разрыхлит. Очистите отваренный нут от жесткой прозрачной шелухи. И влейте при измельчении нута немного очень холодной воды. Получится полезная, легкая и вкусная вегетарианская закуска. Подайте к ней палочки из свежих овощей, и она заменит более плотные снеки при просмотре матча любимой футбольной команды.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyOS96cGtqWmkuanBlZw.jpg",
      preparation: {
        content:
          "Промойте сухой нут, выложите его в кастрюлю. Помойте лимон и чеснок. Заранее охладите до ледяного состояния 0,5 стакана воды. Подготовьте дуршлаг, сито, а также блендер с чашей.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy80UENuUkouanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Залейте нут в кастрюле прохладной водой, добавьте 1 ч.л. соды. Перемешайте и оставьте нут замачиваться 6-8 часов.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy80VXFoTWouanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "По истечении времени слейте из кастрюли воду, в которой замачивался нут. Налейте чистую воду, чтобы она полностью покрывала горошины. Всыпьте в воду еще 1 ч.л. соды и поставьте кастрюлю на сильный огонь.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy80TjVoNVEuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Подождите, когда вода в кастрюле закипит. Уменьшите огонь до среднего и снимите образовавшуюся пену. Накройте кастрюлю крышкой и варите нут в течение 30 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy96TjV4WHYuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Всыпьте к нуту ⅓ ч.л. соли, хорошо перемешайте и варите его до мягкости еще 10-15 минут. Снимите кастрюлю с огня и откиньте нут на дуршлаг, чтобы весь отвар полностью стек.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy80SjN4UjIuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Выберите из нута как можно больше отошедшей от горошин прозрачной шелухи. Переложите горячий очищенный нут в чашу блендера и измельчите его в течение 1-2 минут до однородности.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy8zUVFvQnIuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Разрежьте лимон пополам, выжмите из каждой половинки сок в чашу блендера через сито, чтобы удалить косточки и частички мякоти. Мелко нарежьте чеснок, также выложите его в чашу к нуту.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy8zcVBQRWguanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Добавьте в чашу блендера пасту тахини, молотый кумин, черный перец и ⅓ ч.л. соли. Влейте 1-2 ст.л. ледяной воды и еще раз перебейте все ингредиенты, чтобы они полностью соединились друг с другом.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy8zUThqNUcuanBlZw.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Влейте в чашу блендера еще 1-2 ст.л. ледяной воды, ориентируясь на желаемую густоту хумуса. Снова обработайте хумус в блендере до мягкой пышной консистенции.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy9MWXV2SkEuanBlZw.jpg",
        },
        {
          title: "Шаг 9",
          description:
            "Переложите хумус из чаши блендера в соусник для подачи. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy8zVVc5QWouanBlZw.jpg",
        },
      ],
      kitchen_type: "Ближневосточная",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 229,
          weight: 180,
          custom_measure: "стакан",
          custom_measure_count: 1,
          title: "Нут",
        },
        {
          id: 348,
          weight: 10,
          custom_measure: "ч. л.",
          custom_measure_count: 2,
          title: "Сода",
        },
        {
          id: 562,
          weight: 51,
          custom_measure: "ст. л.",
          custom_measure_count: 3,
          title: "Тахини",
        },
        {
          id: 183,
          weight: 120,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Лимон",
        },
        {
          id: 440,
          weight: 10,
          custom_measure: "зубчик",
          custom_measure_count: 2,
          title: "Чеснок",
        },
        {
          id: 6030,
          weight: 3,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Молотая зира / кумин",
        },
        {
          id: 439,
          weight: 1.25,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Черный перец молотый",
        },
        {
          id: 352,
          weight: 6,
          custom_measure: "ч. л.",
          custom_measure_count: 0.6,
          title: "Соль",
        },
      ],
      optional_ingredients: [
        {
          id: 237,
          weight: 50,
          custom_measure: "шт.",
          custom_measure_count: 0.5,
          title: "Огурец",
        },
        {
          id: 219,
          weight: 90,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Морковь",
        },
        {
          id: 361,
          weight: 45,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Стебель сельдерея",
        },
        {
          id: 12402,
          weight: 75,
          custom_measure: "шт.",
          custom_measure_count: 0.5,
          title: "Красный болгарский перец",
        },
        {
          id: 240,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Оливковое масло",
        },
        {
          id: 5773,
          weight: 2,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Цедра лимона",
        },
      ],
      proteins: 7.46,
      fats: 8.06,
      carbs: 20.75,
      calories: 185.27,
    },
    {
      id: 220343,
      active_cooking_time: 25,
      total_cooking_time: 25,
      difficulty_level: 2,
      title: "Луково-сырные кольца во фритюре",
      subtitle:
        "Пожарьте универсальную закуску из доступных продуктов всего за 25 минут. Вам понадобятся крупная луковица, немного сыра, муки, яйцо и панировочные сухари. Жарят кольца во фритюрнице или в глубокой сковороде, чтобы масло их полностью покрывало. Сыр за время жарки расплавится и плотно скрепит лук, а панировка образует хрустящую корочку. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyOS90UHZ0ZEIuanBlZw.jpg",
      preparation: {
        content:
          "Вымойте и почистите лук. Подготовьте разделочную доску, миски, кастрюлю, кулинарные щипцы. Застелите салфетками тарелку для подачи.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy8zcjhKOVguanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Нарежьте лук кольцами толщиной около 6-7 мм. Отделите все колечки друг от друга. Нарежьте сыр полосками шириной также 6-7 мм и толщиной около 2 мм.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy8zVWRLR2IuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Разложите на разделочной доске самые крупные луковые колечки. Уложите внутрь колечек по всей окружности полоски сыра.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy9HUlN3RHguanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Поместите к полоскам сыра луковые колечки меньшего диаметра, плотно прижимая сыр к внешнему кольцу.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy8zeVlvd1ouanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Разбейте в глубокую миску яйцо. Всыпьте к нему соль и размешайте все вилкой до однородного состояния. Насыпьте в отдельные чистые миски муку и панировочные сухари.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy8zREpRZXMuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "По очереди обваляйте все сформированные луково-сырные колечки в муке. Обмакните их со всех сторон в яйцо, затем запанируйте в сухарях.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy9ieEs5TEUuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Налейте в кастрюлю растительное масло, разогрейте на сильном огне. Уменьшите огонь до среднего и опустите в горячее масло запанированные луково-сырные колечки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy8za0RydFQuanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Жарьте колечки по 3-5 минут до золотистой хрустящей корочки. После этого выложите их на салфетку, чтобы убратьизлишки масла. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy8zc0ZvMnEuanBlZw.jpg",
        },
      ],
      kitchen_type: "Североамериканская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 290,
          weight: 80,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Репчатый лук",
        },
        {
          id: 302,
          weight: 50,
          custom_measure: "г",
          custom_measure_count: 50,
          title: "Российский сыр",
        },
        {
          id: 246,
          weight: 50,
          custom_measure: "г",
          custom_measure_count: 50,
          title: "Панировочные сухари",
        },
        {
          id: 282,
          weight: 50,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 169,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное яйцо",
        },
        {
          id: 270,
          weight: 190,
          custom_measure: "стакан",
          custom_measure_count: 1,
          title: "Подсолнечное масло рафинированное",
        },
        {
          id: 352,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Соль",
        },
      ],
      optional_ingredients: [
        {
          id: 704,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Сырный соус",
        },
      ],
      proteins: 6.41,
      fats: 44.16,
      carbs: 16.89,
      calories: 489.6,
    },
    {
      id: 220332,
      active_cooking_time: 20,
      total_cooking_time: 30,
      difficulty_level: 2,
      title: "Перцы с сырной начинкой под карамельным топингом",
      subtitle:
        "Приготовьте очень яркую и сытную закуску, которая легко станет центром стола. Запеките ароматную сырную смесь в половинках хрустящего сладкого перца. А топинг из хрустящих сухарей и карамелизированного перца станет изюминкой блюда. Обязательно возьмите крекеры или начос к подаче, чтобы обмакивать их в сырную начинку. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy9XbXBkREQuanBlZw.jpg",
      preparation: {
        content:
          "Помойте перцы и лайм. Помойте и почистите чеснок. Положите на противень решетку подходящего размера, чтобы запекать перцы на решетке.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy80VUFWSkcuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Разрежьте лайм пополам и выжмите сок. Пропустите через пресс чеснок. Смешайте в миске творожный сыр, перец чили, чеснок и сок лайма.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy9nTFJSYmcuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Разрежьте каждый перец вдоль пополам, удалите семена, но оставьте плодоножки. Наполните каждую половинку творожной массой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy80U2h2UWguanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Разогрейте духовой шкаф до 180°С. Выложите перцы на решетку и отправьте в духовку на 10 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy8zUW9qbVUuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Пока перцы запекаются, смешайте в миске панировочные сухари с растительным маслом, соевым соусом и молотым кайенским перцем.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy9qaWhWZFAuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Достаньте перцы из духовки, посыпьте их панировочными сухарями и верните в духовку на 2 минуты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyOS80NncyMjMuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Нарежьте перцы тонкими колечками. Извлеките семена. Высыпьте на сковороду 150 г сахара, влейте 3 ст.л. воды. Постоянно помешивая, растопите сахар до состояния густого сиропа и сразу после этого отправьте туда колечки перцев. Потомите перец в сиропе около 5 минут. Затем снимите сковороду с огня.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyOS8zYzRZR2kuanBlZw.jpg",
        },
      ],
      kitchen_type: "Американская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для топпинга и подачи",
      main_ingredients: [
        {
          id: 32,
          weight: 450,
          custom_measure: "г",
          custom_measure_count: 450,
          title: "Болгарский перец",
        },
        {
          id: 398,
          weight: 200,
          custom_measure: "г",
          custom_measure_count: 200,
          title: "Творожный сыр",
        },
        {
          id: 257,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Перец чили молотый",
        },
        {
          id: 440,
          weight: 5,
          custom_measure: "зубчик",
          custom_measure_count: 1,
          title: "Чеснок",
        },
        {
          id: 180,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Лайм",
        },
      ],
      optional_ingredients: [
        {
          id: 246,
          weight: 30,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Панировочные сухари",
        },
        {
          id: 287,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Растительное масло",
        },
        {
          id: 350,
          weight: 8,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Соевый соус",
        },
        {
          id: 682,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Кайенский перец",
        },
        {
          id: 586,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Гуакамоле",
        },
        {
          id: 443,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Чипсы",
        },
        {
          id: 20020,
          weight: 200,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Сладкий перец",
        },
      ],
      proteins: 2.45,
      fats: 6.36,
      carbs: 7.58,
      calories: 99.92,
    },
    {
      id: 219590,
      active_cooking_time: 10,
      total_cooking_time: 15,
      difficulty_level: 2,
      title: "Бейгл с форелью и сливочным сыром",
      subtitle:
        "Именно с таким бейглом лучше всего пройтись по парку с американо, пока ваш бежевый тренч развевается на ветру. Булочки могут быть с кунжутом, маком, тыквенными семечками и чем угодно. Главное, чтобы внутри была сочная начинка из красной рыбы и сливочного сыра. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy9IU2RTOVkuanBlZw.jpg",
      preparation: {
        content: "Просейте муку. Подготовьте блендер и сковороду. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC81TG1ydFouanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Смешайте творожный сыр, сладкий соус чили и горчицу до однородности. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMS8zRXJURHouanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Разрежьте бейглы пополам. Смажьте каждый ломтик сливочным маслом и обжарьте на горячей сковороде до золотистой корочки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC80Skg4eUEuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Нанесите начинку из творожного сыра на каждую половинку бейгла.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMS9kODJyNmcuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Нарежьте филе форели на тонкие ломтики. Выложите рыбу и руколу на нижнюю часть бейгла, накройте верхней частью.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC8zUmRDRmkuanBlZw.jpg",
        },
      ],
      kitchen_type: "Американская, европейская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 12310,
          weight: 180,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Бейгл",
        },
        {
          id: 338,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Сливочное масло",
        },
        {
          id: 303,
          weight: 6,
          custom_measure: "г",
          custom_measure_count: 6,
          title: "Рукола",
        },
        {
          id: 398,
          weight: 40,
          custom_measure: "г",
          custom_measure_count: 40,
          title: "Творожный сыр",
        },
        {
          id: 82,
          weight: 12.5,
          custom_measure: "ст. л.",
          custom_measure_count: 0.5,
          title: "Дижонская горчица",
        },
        {
          id: 623,
          weight: 15,
          custom_measure: "ч. л.",
          custom_measure_count: 1.5,
          title: "Сладкий соус чили",
        },
        {
          id: 20604,
          weight: 60,
          custom_measure: "г",
          custom_measure_count: 60,
          title: "Слабосоленая форель «Океан»",
        },
      ],
      optional_ingredients: [],
      proteins: 9.94,
      fats: 7.44,
      carbs: 29.98,
      calories: 225.69,
    },
    {
      id: 219252,
      active_cooking_time: 15,
      total_cooking_time: 30,
      difficulty_level: 1,
      title: "Кабачки с чимичурри",
      subtitle:
        "Соус чимичурри готовится с большим количеством специй и трав, а подается обычно к мясу и курице. Но ничто не мешает дополнить им обжаренные на гриле кабачки. Такая закуска хорошо подойдет к мясу на огне, так что обязательно попробуйте ее в сезон шашлыков. Кабачки получатся очень хрустящими, а пряный соус добавит свежей остринки.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC80OXZDNHMuanBlZw.jpg",
      preparation: {
        content:
          "Помойте кабачок, срежьте кончики. При необходимости снимите кожуру с кабачка, если она твердая и плотная. Ополосните зелень. Снимите цедру с лайма на мелкой терке, выдавите из него сок. Пропустите чеснок через пресс.\n",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC9RN0xKaXguanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Смешайте в миске оливковое масло, сахар, сок и цедру лайма, чеснок. Добавьте соль, перец и кориандр. Хорошо перемешайте. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC8zU3k1ZmMuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            " Разрежьте кабачок пополам поперек на две равные части. Каждую половинку кабачка разрежьте на четвертинки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC9DcnU5ak0uanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description: "Мелко нарежьте зелень и смешайте с оставшимся соусом. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC8zdndOWXkuanBlZw.jpg",
        },
      ],
      kitchen_type: "Авторская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 99,
          weight: 720,
          custom_measure: "шт.",
          custom_measure_count: 4,
          title: "Кабачок",
        },
        {
          id: 260,
          weight: 30,
          custom_measure: "г",
          custom_measure_count: 30,
          title: "Петрушка",
        },
        {
          id: 116,
          weight: 20,
          custom_measure: "г",
          custom_measure_count: 20,
          title: "Кинза",
        },
        {
          id: 12,
          weight: 20,
          custom_measure: "г",
          custom_measure_count: 20,
          title: "Базилик",
        },
        {
          id: 240,
          weight: 80,
          custom_measure: "г",
          custom_measure_count: 80,
          title: "Оливковое масло",
        },
        {
          id: 411,
          weight: 30,
          custom_measure: "г",
          custom_measure_count: 30,
          title: "Тростниковый сахар",
        },
        {
          id: 180,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Лайм",
        },
        {
          id: 440,
          weight: 15,
          custom_measure: "зубчик",
          custom_measure_count: 3,
          title: "Чеснок",
        },
        {
          id: 215,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Молотый кориандр",
        },
        {
          id: 439,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Черный перец молотый",
        },
        {
          id: 352,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Соль",
        },
      ],
      optional_ingredients: [],
      proteins: 0.81,
      fats: 8.45,
      carbs: 7.49,
      calories: 109.52,
    },
    {
      id: 219242,
      active_cooking_time: 40,
      total_cooking_time: 390,
      difficulty_level: 2,
      title: "Бургеры с куриными бедрами и шпинатом",
      subtitle:
        "Как и другие бургеры, этот готовится быстро. Больше всего времени в рецепте занимает маринование курицы. Ее можно оставить в смеси йогурта, соуса и зелени на 30 минут. Но желательно промариновать мясо подольше — так оно получится более сочным и ароматным. А пока курица будет жариться на огне, приготовьте домашний шпинатный соус по нашему рецепту.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC8zM3J3V3guanBlZw.jpg",
      preparation: {
        content: "Разморозьте курицу, помойте овощи, зелень и лайм. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9udWxs.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description: "Мелкой теркой снимите цедру с лайма.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC9uNHRhUU0uanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Выложите в миску йогурт, пасту карри, рубленную кинзу и половину натертой цедры лайма. Перемешайте маринад до однородности.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC8zVFdNdlouanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Слегка отбейте куриные бедра кухонным молотком, чтобы придать им плоскую форму. Переложите курицу в соус и оставьте минимум на 30 минут. Мясо можно мариновать до 6 часов. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC80UjJxdFIuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Выжмите из лайма сок. Нашинкуйте красный лук. Смешайте в чистой миске сок и оставшуюся цедру лайма, сахар и лук. Перемешивайте, пока сахар не растворится. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC8zdUxVUEguanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Добавьте зернистую горчицу и оливковое масло. Покрошите шпинат, а затем добавьте его в миску с остальными ингредиентами. Хорошо перемешайте соус. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC9BQXdEYzMuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description: "Разрежьте булочки для бургера пополам вдоль.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9udWxs.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Обжарьте замаринованные куриные бедра на решетке гриля или шампурах с двух сторон до готовности. После этого переложите мясо на доску, дайте ему немного остыть и нарежьте небольшими ломтиками. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC9yc2thaU4uanBlZw.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Поджарьте булочки для бургера на решетке, положив стороной разреза вниз. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9udWxs.jpg",
        },
        {
          title: "Шаг 9",
          description:
            "Выложите кусочки курицы на нижнюю часть булочки, полейте шпинатным соусом и накройте второй половиной булочки. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC8zUjQ1VFguanBlZw.jpg",
        },
      ],
      kitchen_type: "Авторская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 536,
          weight: 320,
          custom_measure: "шт.",
          custom_measure_count: 4,
          title: "Пшеничные булочки",
        },
        {
          id: 12312,
          weight: 400,
          custom_measure: "г",
          custom_measure_count: 400,
          title: "Мясо куриного бедра",
        },
        {
          id: 5775,
          weight: 120,
          custom_measure: "г",
          custom_measure_count: 120,
          title: "Греческий йогурт",
        },
        {
          id: 13132,
          weight: 15,
          custom_measure: "г",
          custom_measure_count: 15,
          title: "Желтая паста карри",
        },
        {
          id: 116,
          weight: 6,
          custom_measure: "веточка",
          custom_measure_count: 2,
          title: "Кинза",
        },
        {
          id: 447,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Шпинат",
        },
        {
          id: 152,
          weight: 15,
          custom_measure: "г",
          custom_measure_count: 15,
          title: "Красный лук",
        },
        {
          id: 180,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Лайм",
        },
        {
          id: 14698,
          weight: 10,
          custom_measure: "г",
          custom_measure_count: 10,
          title: "Зернистая горчица",
        },
        {
          id: 440,
          weight: 10,
          custom_measure: "зубчик",
          custom_measure_count: 2,
          title: "Чеснок",
        },
        {
          id: 312,
          weight: 20,
          custom_measure: "г",
          custom_measure_count: 20,
          title: "Сахар",
        },
        {
          id: 240,
          weight: 20,
          custom_measure: "г",
          custom_measure_count: 20,
          title: "Оливковое масло",
        },
      ],
      optional_ingredients: [],
      proteins: 11.7,
      fats: 7.25,
      carbs: 19.43,
      calories: 182.77,
    },
  ],
  garnish: [
    {
      id: 221970,
      active_cooking_time: 25,
      total_cooking_time: 45,
      difficulty_level: 2,
      title: "Киноа с курицей и морковью",
      subtitle:
        "Из распаренной киноа часто готовят салаты с овощами, но интересным получится и блюдо с курицей, похожее на плов. Обжарьте мясо с овощами, прежде чем добавлять к ним крупу. А для более насыщенного вкуса возьмите вместо свежей моркови корейскую.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zR2JXU1IuanBlZw.jpg",
      preparation: {
        content:
          "Помойте куриное филе, промокните его насухо бумажными полотенцами. Промойте киноа до прозрачной воды. Вымойте и почистите лук. Подготовьте глубокую сковороду с крышкой.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS9ER2VENUcuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Нарежьте куриное филе кубиками со стороной 2-2,5 см. Нашинкуйте лук тонкими четвертинками колец.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zelhyZTkuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Налейте на сковороду растительное масло, поставьте ее на средний огонь и хорошо разогрейте. Положите в горячее масло лук. Обжарьте его, помешивая, 2-3 минуты до светло-карамельного цвета.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zZHhKdFkuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Выложите к луку морковь по-корейски, уменьшите огонь до среднего. Пожарьте все вместе, периодически перемешивая, в течение 4-5 минут до мягкости моркови.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS9nV3Z2eEguanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Добавьте к овощам на сковороде кусочки курицы, приправьте ее смесью специй и солью. Периодически помешивая, обжарьте филе и овощи вместе в течение 5-6 минут до румяной корочки на курице.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zQ0xuUGouanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description: "Всыпьте к курице с овощами киноа, хорошо перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zUURHRGYuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Налейте в сковороду воду. Хорошо перемешайте ингредиенты и накройте сковороду крышкой. Тушите курицу с киноа в течение 15-20 минут, пока крупа не впитает всю воду. После этого снимите сковороду с огня.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS80THZlWFouanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская, латиноамериканская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 5807,
          weight: 150,
          custom_measure: "г",
          custom_measure_count: 150,
          title: "Киноа",
        },
        {
          id: 168,
          weight: 200,
          custom_measure: "г",
          custom_measure_count: 200,
          title: "Куриное филе",
        },
        {
          id: 290,
          weight: 40,
          custom_measure: "г",
          custom_measure_count: 40,
          title: "Репчатый лук",
        },
        {
          id: 138,
          weight: 60,
          custom_measure: "г",
          custom_measure_count: 60,
          title: "Корейская морковь",
        },
        {
          id: 476,
          weight: 1.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Специи для курицы",
        },
        {
          id: 352,
          weight: 2,
          custom_measure: "г",
          custom_measure_count: 2,
          title: "Соль",
        },
        {
          id: 54,
          weight: 300,
          custom_measure: "мл",
          custom_measure_count: 300,
          title: "Вода",
        },
        {
          id: 270,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Подсолнечное масло рафинированное",
        },
      ],
      optional_ingredients: [
        {
          id: 91,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Зеленый лук",
        },
        {
          id: 12,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Базилик",
        },
      ],
      proteins: 8.9,
      fats: 4.34,
      carbs: 12.43,
      calories: 131.57,
    },
    {
      id: 221791,
      active_cooking_time: 20,
      total_cooking_time: 50,
      difficulty_level: 2,
      title: "Рис по-индийски",
      subtitle:
        "Рис с пряностями и специями получается он очень ароматным, пряным, красивого карамельно-желтого цвета. Рис по-индийски идеально подойдет на гарнир к традиционным национальным блюдам, например, к овощному карри или курице тикка масала. А также к любым другим блюдам с густым соусом или подливкой, включая обычное тушеное мясо или овощное рагу. Рис можно приготовить и в кастрюле, и в глубокой сковороде.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNS80RFJFeUwuanBlZw.jpg",
      preparation: {
        content:
          "Помойте и почистите лук. Подготовьте кастрюлю и глубокую сковороду. Перед приготовлением замочите рис в теплой воде на 15-20 минут.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC82Vnlqa3kuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Выложите рис в кастрюлю, налейте к нему 2,5 стакана воды. Всыпьте в воду с рисом соль, корицу, куркуму, 1/6 ч.л. молотого тмина, кайенский перец, паприку и гвоздику. Все размешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC8zRDM0bzMuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Поставьте кастрюлю на средний огонь, дайте воде закипеть. Убавьте огонь до слабого, прикройте кастрюлю крышкой и варите рис в течение 15 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC9CZ1doQTYuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Снимите кастрюлю с огня и оставьте рис под крышкой еще на 10 минут. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC80RnM3b2cuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Нарежьте лук кубиками со стороной 4-5 мм. Налейте на сковороду растительное масло, как следует разогрейте его на среднем огне. Положите в масло лук и обжарьте его, постоянно помешивая, 2-3 минуты до золотистого цвета.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC81RDZNY1AuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Всыпьте к обжаренному луку 1/6 ч.л. молотого тмина и семена кардамона. Прогрейте все вместе, помешивая, еще примерно 3 минуты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9aYVNuWnkuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Переложите обжаренный лук обратно к рису. Пожарьте рис с луком, периодически перемешивая, 3-4 минуты, пока он не начнет покрываться румяной корочкой. Снимите сковороду с огня и разрыхлите рис вилкой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC80WFpuOGkuanBlZw.jpg",
        },
      ],
      kitchen_type: "Индийская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 293,
          weight: 180,
          custom_measure: "стакан",
          custom_measure_count: 1,
          title: "Рис «басмати»",
        },
        {
          id: 54,
          weight: 500,
          custom_measure: "стакан",
          custom_measure_count: 2.5,
          title: "Вода",
        },
        {
          id: 290,
          weight: 80,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Репчатый лук",
        },
        {
          id: 610,
          weight: 2,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Молотая корица",
        },
        {
          id: 213,
          weight: 1.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Молотая куркума",
        },
        {
          id: 6048,
          weight: 1.8,
          custom_measure: "ч. л.",
          custom_measure_count: 0.3,
          title: "Молотый тмин",
        },
        {
          id: 352,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Соль",
        },
        {
          id: 682,
          weight: 0.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Кайенский перец",
        },
        {
          id: 247,
          weight: 1,
          custom_measure: "г",
          custom_measure_count: 1,
          title: "Паприка",
        },
        {
          id: 59,
          weight: 2,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Гвоздика",
        },
        {
          id: 649,
          weight: 3,
          custom_measure: "шт.",
          custom_measure_count: 3,
          title: "Кардамон",
        },
        {
          id: 270,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Подсолнечное масло рафинированное",
        },
      ],
      optional_ingredients: [
        {
          id: 116,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Кинза",
        },
        {
          id: 256,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Перец чили",
        },
      ],
      proteins: 1.09,
      fats: 2.34,
      carbs: 7.45,
      calories: 55.72,
    },
    {
      id: 218850,
      active_cooking_time: 60,
      total_cooking_time: 120,
      difficulty_level: 2,
      title: "Заготовка с рисом и томатами на зиму",
      subtitle:
        "Рис в томате пригодится для приготовления наваристых зимних супов и рагу с мясом или курицей, а также станет хорошей холодной закуской или гарниром к рыбе. Сырой рис дойдет до готовности в густом соусе с измельченными помидорами, болгарским перцем, луком и морковью, пропитается соками и вкусом овощей. Во время остывания и хранения заготовка настоится и станет еще ароматнее. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS8zZ2VMb00uanBlZw.jpg",
      preparation: {
        content:
          "Промойте рис до прозрачной воды. Помойте помидоры и болгарский перец, промокните их от влаги бумажными полотенцами. Вырежьте из перца сердцевину с семенами. Вымойте и почистите морковь и лук. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS8zbko2Z1ouanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Нарежьте лук, морковь и болгарский перец небольшими кусочками. Вырежьте у помидоров место крепления плодоножки. Разрежьте мякоть на 4-6 частей.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS80SldVRnUuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Пропустите все овощи через мясорубку и соедините их в кастрюле. Перемешайте овощную массу.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS8zY0dFWHIuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Поставьте кастрюлю с измельченными овощами на средний огонь. Помешивая, дайте закипеть. Проварите овощную массу, периодически помешивая, в течение 35-40 минут, пока частички моркови не размягчатся. Всыпьте в овощную массу рис, соль и сахар. Влейте рафинированное растительное масло. Тщательно перемешайте овощи с рисом и специями. Дождитесь, когда масса снова закипит.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS80SnRycmouanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Продолжая периодически помешивать массу, варите ее при слабом кипении в течение еще 35-40 минут, пока она не загустеет, а рис полностью не распарится. После этого снимите кастрюлю с огня.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS9GWGlTWnkuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Поставьте сухую простерилизованную банку на чистое полотенце. Выложите в банку рис с овощами. Закройте банку крышкой и закатайте при помощи машинки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS80VlRkWVcuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Поставьте банку вверх дном на полотенце и дайте ей полностью остыть при комнатной температуре. Уберите банку с рисом в томате на хранение в темное прохладное место.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS9FbXJFckcuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 272,
          weight: 480,
          custom_measure: "шт.",
          custom_measure_count: 6,
          title: "Помидор",
        },
        {
          id: 219,
          weight: 180,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Морковь",
        },
        {
          id: 12402,
          weight: 150,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Красный болгарский перец",
        },
        {
          id: 290,
          weight: 160,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Репчатый лук",
        },
        {
          id: 294,
          weight: 250,
          custom_measure: "г",
          custom_measure_count: 250,
          title: "Рис длиннозерный",
        },
        {
          id: 270,
          weight: 34,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Подсолнечное масло рафинированное",
        },
        {
          id: 352,
          weight: 20,
          custom_measure: "ч. л.",
          custom_measure_count: 2,
          title: "Соль",
        },
        {
          id: 312,
          weight: 25,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Сахар",
        },
      ],
      optional_ingredients: [
        {
          id: 275,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Помидоры черри",
        },
        {
          id: 260,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Петрушка",
        },
      ],
      proteins: 2.28,
      fats: 2.85,
      carbs: 21.15,
      calories: 121.92,
    },
    {
      id: 218778,
      active_cooking_time: 20,
      total_cooking_time: 40,
      difficulty_level: 2,
      title: "Цветная капуста с кабачками",
      subtitle:
        "Цветная капуста очень универсальна: из нее можно готовить овощные рагу, котлеты и различные гарниры. При этом капуста содержит немного калорий, что делает ее хорошим вариантом для диет или поста. В этом рецепте мы предлагаем вам потушить цветную капусту с кабачками, свежей зеленью и помидорами. Получится вкусное рагу, которое можно подать как самостоятельно, так и с запеченными мясом или рыбой.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zZzVqcHMuanBlZw.jpg",
      preparation: {
        content:
          "Вымойте и обсушите бумажными полотенцами овощи. Почистите чеснок и помидоры. Ополосните петрушку и лук. Подготовьте глубокую сковороду или казан.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80Q3dkaDMuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description: "Нарежьте помидоры маленькими кубиками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zVHhCU1kuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description: "Разрежьте зубчики чеснока на несколько долек.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zeURwc0IuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Разогрейте сковороду с маслом на среднем огне. Выложите в нее помидоры и чеснок.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9KWFU1bkYuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Посолите и поперчите помидоры по вкусу. Всыпьте паприку. Хорошо перемешайте. Потушите все в течение 3-4 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zRlNDNW0uanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Нарежьте кабачок средними кубиками. Разберите цветную капусту на несколько некрупных соцветий.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9nd2NxTmYuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Добавьте кабачок в сковороду. Перемешайте. Накройте овощи крышкой и тушите 3-5 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9keWNFS00uanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Добавьте к овощам соцветия капусты. Снова хорошо перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9paVFmaTYuanBlZw.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Накройте сковороду крышкой. Убавьте нагрев и оставьте блюдо тушиться на 15-20 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zTFR3OVcuanBlZw.jpg",
        },
        {
          title: "Шаг 9",
          description: "Измельчите петрушку и зеленый лук.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9UeGZ6YVUuanBlZw.jpg",
        },
        {
          title: "Шаг 10",
          description:
            "Добавьте измельченную зелень в готовое рагу из цветной капусты. Хорошо перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zeENqTmcuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 430,
          weight: 650,
          custom_measure: "г",
          custom_measure_count: 650,
          title: "Цветная капуста",
        },
        {
          id: 99,
          weight: 360,
          custom_measure: "г",
          custom_measure_count: 360,
          title: "Кабачок",
        },
        {
          id: 272,
          weight: 320,
          custom_measure: "г",
          custom_measure_count: 320,
          title: "Помидор",
        },
        {
          id: 440,
          weight: 10,
          custom_measure: "зубчик",
          custom_measure_count: 2,
          title: "Чеснок",
        },
        {
          id: 137,
          weight: 7,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Копченая паприка",
        },
        {
          id: 287,
          weight: 68,
          custom_measure: "ст. л.",
          custom_measure_count: 4,
          title: "Растительное масло",
        },
        {
          id: 260,
          weight: 30,
          custom_measure: "г",
          custom_measure_count: 30,
          title: "Петрушка",
        },
        {
          id: 91,
          weight: 25,
          custom_measure: "г",
          custom_measure_count: 25,
          title: "Зеленый лук",
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
      ],
      optional_ingredients: [
        {
          id: 275,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Помидоры черри",
        },
      ],
      proteins: 1.71,
      fats: 4.97,
      carbs: 4.83,
      calories: 68.17,
    },
    {
      id: 218558,
      active_cooking_time: 30,
      total_cooking_time: 160,
      difficulty_level: 2,
      title: "Стручковая фасоль по-корейски",
      subtitle:
        "Несмотря на невысокую калорийность ингредиентов, эта фасоль получается достаточно сытной. Ее можно подать не только как закуску на обед, но и как самостоятельное блюдо или гарнир к мясу. В последнем случае фасоль будет особенно хороша: благодаря приправам она становится острой и пряной, поэтому отлично дополнит мясное блюдо. Для приготовления можно взять как свежие, так и замороженные стручки.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9HZnk2ZHYuanBlZw.jpg",
      preparation: {
        content:
          "Помойте и почистите морковь и лук. Размораживать замороженную фасоль не нужно.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS80NmZKZlkuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Разрежьте стручки фасоли пополам или на три части. Положите в кипящую подсоленную воду. Дождитесь повторного закипания и варите пять минут. Откиньте на дуршлаг, после чего залейте ледяной водой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9BNnVwNkwuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Натрите морковь на терке для морковки по-корейски или на обычной крупной.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS80SkJQR2kuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Переложите фасоль в салатник. Выложите туда же морковь.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9MNlRTcU4uanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Пропустите чеснок через пресс в салатник. Всыпьте соль, острый перец и кориандр.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9rNllNWGguanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Перемешайте все ингредиенты. Влейте масло и уксус и снова тщательно перемешайте. Немного утрамбуйте салат ложкой. Затяните пищевой пленкой и оставьте в холодильнике на 2 часа.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9CbVlEc1YuanBlZw.jpg",
        },
      ],
      kitchen_type: "Азиатская, корейская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 364,
          weight: 140,
          custom_measure: "г",
          custom_measure_count: 140,
          title: "Стручковая фасоль",
        },
        {
          id: 219,
          weight: 80,
          custom_measure: "г",
          custom_measure_count: 80,
          title: "Морковь",
        },
        {
          id: 215,
          weight: 2,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Молотый кориандр",
        },
        {
          id: 257,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Перец чили молотый",
        },
        {
          id: 440,
          weight: 25,
          custom_measure: "зубчик",
          custom_measure_count: 5,
          title: "Чеснок",
        },
        {
          id: 363,
          weight: 1,
          custom_measure: "мл",
          custom_measure_count: 1,
          title: "Столовый уксус",
        },
        {
          id: 352,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Соль",
        },
        {
          id: 287,
          weight: 34,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Растительное масло",
        },
      ],
      optional_ingredients: [
        {
          id: 25,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Белый кунжут",
        },
        {
          id: 116,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Кинза",
        },
      ],
      proteins: 2.21,
      fats: 12.28,
      carbs: 6.84,
      calories: 143.38,
    },
    {
      id: 218450,
      active_cooking_time: 30,
      total_cooking_time: 65,
      difficulty_level: 2,
      title: "Запеченный редис",
      subtitle:
        "Подайте запеченный редис в качестве оригинального гарнира. Его вкус будет чуть мягче, чем у свежего, и немного сладковатый — примерно таким, как у запеченной брюссельской или цветной капусты. Редис станет отличным дополнением к рыбе, например, к лососю, а также к лазанье или пасте. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC8zZEpjdGUuanBlZw.jpg",
      preparation: {
        content:
          "Вымойте редис и чеснок. Снимите с чеснока шелуху. Уберите у редиса хвостики. Подготовьте форму для запекания. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC80UVd1RjIuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Разрежьте редис пополам. Пропустите чеснок через пресс. Смешайте овощи в миске. Полейте маслом, посыпьте солью и перцем. Перемешайте. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC80VTc4eFkuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Разогрейте духовку до 220°C. Смажьте форму для запекания маслом. Разложите половинки редиса на дно формы срезом вниз. Отправьте в духовку на 20 минут. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC9CeE03UHYuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description: "Выложите редис на тарелку и сбрызните лимонным соком. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC9RN3k5dEsuanBlZw.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 288,
          weight: 400,
          custom_measure: "шт.",
          custom_measure_count: 20,
          title: "Редис",
        },
        {
          id: 440,
          weight: 5,
          custom_measure: "зубчик",
          custom_measure_count: 1,
          title: "Чеснок",
        },
        {
          id: 240,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Оливковое масло",
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
          id: 185,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Лимонный сок",
        },
      ],
      optional_ingredients: [
        {
          id: 12,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Базилик",
        },
      ],
      proteins: 1.21,
      fats: 4.07,
      carbs: 3.57,
      calories: 56.43,
    },
    {
      id: 216730,
      active_cooking_time: 10,
      total_cooking_time: 25,
      difficulty_level: 2,
      title: "Картошка с чесноком и укропом",
      subtitle:
        "Простой картошкой с укропом уже никого не удивить. Приготовьте ароматное укропное масло, а затем покройте им блюдо прямо перед подачей. Такая картошка получится гораздо сливочнее и ароматнее. А уж в сезон молодой картошки и зелени этот рецепт будет просто идеальным. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy8zV0ZYcW4uanBlZw.jpg",
      preparation: {
        content: "Помойте овощи и зелень. Почистите чеснок. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy8zWjlUNjUuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Разрежьте каждую картофелину на 4-8 частей. Положите их в кастрюлю, залейте водой и поставьте на средний огонь. Варите 15 минут после закипания. Слейте воду.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy8zaFp4TlouanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "На сковороде растопите сливочное масло. Пропустите через пресс чеснок. Обжарьте его 30 секунд на среднем огне.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy9oN3hCUUQuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Мелко покрошите укроп. Добавьте его в сковороду с маслом. Посолите, поперчите. Перемешайте и снимите с огня.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy8zc3FYa3IuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description: "Перелейте масло в кастрюлю с картошкой и перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy9IYVVMZWcuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 108,
          weight: 360,
          custom_measure: "шт.",
          custom_measure_count: 3,
          title: "Картошка",
        },
        {
          id: 440,
          weight: 5,
          custom_measure: "зубчик",
          custom_measure_count: 1,
          title: "Чеснок",
        },
        {
          id: 418,
          weight: 7.5,
          custom_measure: "пучок",
          custom_measure_count: 0.5,
          title: "Укроп",
        },
        {
          id: 338,
          weight: 20,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Сливочное масло",
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
          id: 343,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Сметана",
        },
      ],
      proteins: 1.99,
      fats: 4.53,
      carbs: 15.18,
      calories: 109.43,
    },
    {
      id: 216881,
      active_cooking_time: 30,
      total_cooking_time: 50,
      difficulty_level: 3,
      title: "Тушеная капуста с фаршем",
      subtitle:
        "В Германии очень любят тушить капусту. А еще больше ее любят готовить с самыми разными видами мяса. Это могут быть и колбаски, и копчености, и просто филе. В нашем рецепте мясо — это любой фарш на ваш выбор. Он поджарится с овощами до ароматной корочки, а затем потушится вместе с капустой. А еще все ингредиенты для такого блюда найдутся практически на любой кухне. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS95Smd5UFQuanBlZw.jpg",
      preparation: {
        content:
          "Разморозьте фарш. Помойте овощи. У капусты уберите верхние вялые листья. У перца удалите плодоножку и семена. Помойте и почистите репчатый лук, морковь и чеснок. Подготовьте глубокую сковороду.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS81czlwTEUuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Накрошите репчатый лук, нарежьте морковь тонкой соломкой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS9KZHBlakYuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Пропустите через пресс чеснок. Нарежьте болгарский перец соломкой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS80OWk2bkIuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Разогрейте в сковороде растительное масло. Обжарьте на среднем огне фарш с луком, морковью, болгарским перцем и чесноком в течение 10 минут, часто помешивая.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS9nQ1BvUUguanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Добавьте приправу для фарша и томатную пасту. Перемешайте. Готовьте еще 5 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS9NRWttQkEuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Тонко нашинкуйте капусту. Положите ее в миску, посолите. Перемешайте и помните ее руками или толкушкой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS9VZFFpQ1UuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description: "Выложите капусту в сковороду к фаршу с овощами.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS8zcktaM2cuanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Влейте воду. Перемешайте и доведите ингредиенты до кипения.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS9KR1FRR2UuanBlZw.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "В самом конце добавьте лавровый лист. Уменьшите нагрев до минимального, накройте сковороду крышкой. Готовьте капусту еще 20 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS80UHc0UjMuanBlZw.jpg",
        },
      ],
      kitchen_type: "Немецкая",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 103,
          weight: 445,
          custom_measure: "г",
          custom_measure_count: 445,
          title: "Капуста",
        },
        {
          id: 227,
          weight: 200,
          custom_measure: "г",
          custom_measure_count: 200,
          title: "Мясной фарш",
        },
        {
          id: 290,
          weight: 40,
          custom_measure: "г",
          custom_measure_count: 40,
          title: "Репчатый лук",
        },
        {
          id: 54,
          weight: 100,
          custom_measure: "мл",
          custom_measure_count: 100,
          title: "Вода",
        },
        {
          id: 404,
          weight: 60,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Томатная паста",
        },
        {
          id: 707,
          weight: 4,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Приправа для фарша",
        },
        {
          id: 219,
          weight: 45,
          custom_measure: "шт.",
          custom_measure_count: 0.5,
          title: "Морковь",
        },
        {
          id: 32,
          weight: 37.5,
          custom_measure: "г",
          custom_measure_count: 37.5,
          title: "Болгарский перец",
        },
        {
          id: 179,
          weight: 1,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Лавровый лист",
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
          weight: 10,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Соль",
        },
        {
          id: 287,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Растительное масло",
        },
      ],
      optional_ingredients: [
        {
          id: 418,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Укроп",
        },
      ],
      proteins: 3.5,
      fats: 8.59,
      carbs: 5.24,
      calories: 112.29,
    },
    {
      id: 216657,
      active_cooking_time: 10,
      total_cooking_time: 30,
      difficulty_level: 2,
      title: "Тушеные кабачки со сметаной и чесноком",
      subtitle:
        "Потушите кабачки со сметаной в сковороде, в мультиварке или запеките в духовке. Выбирайте молодые некрупные овощи, они менее водянистые и у них не нужно удалять семечки из сердцевины, ведь они еще очень нежные и мягкие. Кабачки со сметаной и чесноком прекрасно сочетаются с мясом, птицей, рисом, макаронами и даже просто с ломтиком хлеба. Подайте их в качестве гарнира или салата, горячими или холодными.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNi8zN0NiRVkuanBlZw.jpg",
      preparation: {
        content: "Помойте кабачок. Почистите чеснок.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNi8zZkMyMnkuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description: "Нарежьте кабачок небольшими кубиками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNi8zYjNVTkUuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Разогрейте в сковороде растительное масло. Обжарьте кабачок на среднем огне в течение 10 минут, регулярно перемешивая.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNi9uUlA4VWouanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Пропустите чеснок через пресс. Добавьте к кабачкам чеснок, соль, черный молотый перец и орегано. Перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNi9SNVp3ZHAuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Выложите сметану в кабачки. Перемешайте. Уменьшите нагрев до минимального. Готовьте еще 10 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNi80WEtmdHYuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 99,
          weight: 180,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Кабачок",
        },
        {
          id: 346,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Сметана 20% жирности",
        },
        {
          id: 440,
          weight: 10,
          custom_measure: "зубчик",
          custom_measure_count: 2,
          title: "Чеснок",
        },
        {
          id: 287,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Растительное масло",
        },
        {
          id: 352,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Соль",
        },
        {
          id: 439,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Черный перец молотый",
        },
        {
          id: 243,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Орегано (душица)",
        },
      ],
      optional_ingredients: [
        {
          id: 388,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Сыр",
        },
        {
          id: 12,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Базилик",
        },
      ],
      proteins: 1.4,
      fats: 12.14,
      carbs: 4.87,
      calories: 287.2,
    },
    {
      id: 216584,
      active_cooking_time: 20,
      total_cooking_time: 45,
      difficulty_level: 2,
      title: "Диетическая цветная капуста",
      subtitle:
        "Цветная капуста отлично сочетается со многими продуктами и служит основой для приготовления всевозможных супов, салатов, запеканок и фрикаделек. В этом рецепте цветную капусту нужно запечь в духовке, а потом смешать с кедровыми орешками. Для аромата на противень с капустой положите пару зубчиков чеснока, приправьте лимонным соком и прованскими травами. Подайте его в качестве гарнира или полноценного вегетарианского блюда.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNS80VjVobVUuanBlZw.jpg",
      preparation: {
        content:
          "Помойте цветную капусту. Ополосните водой и почистите чеснок. Подготовьте форму для запекания.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNS80UHh2blcuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description: "Разделите цветную капусту на маленькие соцветия.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNS9TVmlNck0uanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Вскипятите воду в небольшом ковшике или миске. Отварите чеснок в течение 5 минут. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNS9nVHk4czkuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Выложите ломтики цветной капусты и зубчики чеснока в форму для запекания. Сбрызните растительным маслом. Посолите, поперчите. Отправьте в духовку, разогретую до 180°C, на 25 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNS80V0RqRlQuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Разогрейте сухую сковороду на среднем огне. Обжарьте кедровые орешки в течение 1 минуты, постоянно помешивая.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNS9kc1pQemouanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Выложите в миску готовую цветную капусту и орешки. Добавьте лимонный сок и прованские травы. Перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNS96eUI5UjIuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 430,
          weight: 650,
          custom_measure: "г",
          custom_measure_count: 650,
          title: "Цветная капуста",
        },
        {
          id: 440,
          weight: 10,
          custom_measure: "зубчик",
          custom_measure_count: 2,
          title: "Чеснок",
        },
        {
          id: 287,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Растительное масло",
        },
        {
          id: 185,
          weight: 10,
          custom_measure: "ч. л.",
          custom_measure_count: 2,
          title: "Лимонный сок",
        },
        {
          id: 111,
          weight: 10,
          custom_measure: "г",
          custom_measure_count: 10,
          title: "Кедровые орехи",
        },
        {
          id: 439,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Черный перец молотый",
        },
        {
          id: 279,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Прованские травы",
        },
        {
          id: 352,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Соль",
        },
      ],
      optional_ingredients: [
        {
          id: 503,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Брынза",
        },
        {
          id: 12,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Базилик",
        },
      ],
      proteins: 2.71,
      fats: 2.02,
      carbs: 5.86,
      calories: 47.7,
    },
    {
      id: 216537,
      active_cooking_time: 30,
      total_cooking_time: 70,
      difficulty_level: 2,
      title: "Тушеная капуста без мяса на сковороде",
      subtitle:
        "Это бюджетное вегетарианское блюдо готовится очень просто. Возьмите глубокую сковороду, но учтите, что капуста сильно уменьшится в объеме в процессе приготовления. В результате получится очень вкусный и полезный гарнир. Он хорош как в горячем, так и в холодном виде. Сначала обжарьте на сковороде нашинкованные морковь и лук, а затем потушите капусту. Когда она станет мягкой, добавьте ароматный соус из томатной пасты и уксуса, а также специи и зелень.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNS8zWG5raVAuanBlZw.jpg",
      preparation: {
        content:
          "Помойте капусту, уберите верхние вялые листья. Ополосните и почистите морковь и репчатый лук. Подготовьте глубокую сковороду.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNS8zMzR5MmUuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Нарежьте репчатый лук тонкими полукольцами. Натрите морковь на средней терке.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNS9EOHByWnYuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Разогрейте в сковороде растительное масло. Обжарьте лук с морковью на среднем огне в течение 7 минут, регулярно перемешивая.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNS9jczRqR0EuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Тонко нашинкуйте капусту. Переложите капусту в сковороду. Перемешайте. Готовьте 10 минут, часто перемешивая.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNS80RHl1WnkuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Смешайте в небольшой миске воду с томатной пастой и уксусом. Залейте этой смесью капусту. Перемешайте. Уменьшите нагрев. Тушите капусту 30 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNS9QcTZ6eUsuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Приправьте капусту солью, черным молотым перцем и сахаром. Положите лавровый лист. Хорошенько перемешайте. Отключите нагрев. Дайте блюду настояться 10 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNS80M1ZWVDMuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 23,
          weight: 222.5,
          custom_measure: "кочан",
          custom_measure_count: 0.25,
          title: "Белокочанная капуста",
        },
        {
          id: 219,
          weight: 90,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Морковь",
        },
        {
          id: 290,
          weight: 80,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Репчатый лук",
        },
        {
          id: 404,
          weight: 60,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Томатная паста",
        },
        {
          id: 5777,
          weight: 15,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Столовый уксус 6%",
        },
        {
          id: 287,
          weight: 34,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Растительное масло",
        },
        {
          id: 54,
          weight: 200,
          custom_measure: "мл",
          custom_measure_count: 200,
          title: "Вода",
        },
        {
          id: 179,
          weight: 1,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Лавровый лист",
        },
        {
          id: 312,
          weight: 25,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Сахар",
        },
        {
          id: 352,
          weight: 10,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Соль",
        },
        {
          id: 439,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Черный перец молотый",
        },
      ],
      optional_ingredients: [
        {
          id: 343,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Сметана",
        },
        {
          id: 12,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Базилик",
        },
      ],
      proteins: 1.24,
      fats: 4.7,
      carbs: 8.54,
      calories: 78.69,
    },
    {
      id: 216477,
      active_cooking_time: 25,
      total_cooking_time: 25,
      difficulty_level: 2,
      title: "Кабачки в соевом соусе",
      subtitle:
        "Панировка из сухих пряных трав и пшеничной муки равномерно покроет кусочки кабачков, сделает их при обжарке в масле золотистыми и ароматными. Соевый соус придаст кабачкам свой характерный солоноватый вкус. Эту закуску или самостоятельное вегетарианское блюдо в азиатском стиле хорошо дополняют чеснок и укроп. Готовятся кабачки быстро, в них мало калорий, но много питательной клетчатки и других важных для здоровья веществ. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNC80MnY0Y3EuanBlZw.jpg",
      preparation: {
        content:
          "Как следует помойте кабачки. Обрежьте у них кончики. Разрежьте кабачки пополам и удалите семена. Вымойте и почистите зубчик чеснока. Ополосните свежий укроп, промокните его от влаги бумажными полотенцами. Отделите кисточки укропа от стеблей. Подготовьте миску, плотный полиэтиленовый пакет и сковороду. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNC9IS2hKMzMuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Нарежьте зубчик чеснока тонкими пластинками. Мелко порубите кисточки укропа. Нарежьте кабачки кубиками или брусочками шириной примерно 1,5 см. Выложите кусочки кабачков в миску.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNC80TkgyNWkuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Посыпьте кабачки сушеными травами, солью и перцем. Размешайте, чтобы все кусочки покрылись приправами.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNC8zWTZDaTMuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Выложите кабачки с приправами в полиэтиленовый пакет. Всыпьте муку. Крепко завяжите пакет и хорошо встряхните несколько раз, пока кусочки равномерно не покроются панировкой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNC8zV05HeDYuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Налейте в сковороду растительное масло. Поставьте ее на средний огонь и хорошо разогрейте. Опустите в масло запанированные кабачки вместе с остатками специй из пакета. Обжарьте кабачки, изредка помешивая, в течение 4-5 минут до светло-золотистого цвета. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNC8zSkp2N1EuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Влейте к кабачкам на сковороде соевый соус. Положите туда же нарезанный укроп и пластинки чеснока. Все хорошо размешайте и уменьшите огонь под сковородой до слабого.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNC8zeWhINzYuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Потушите кабачки в соевом соусе, периодически перемешивая, около 5-6 минут. Проверьте кабачки на готовность и снимите сковороду с огня.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNC80UWNrWWouanBlZw.jpg",
        },
      ],
      kitchen_type: "Азиатская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 99,
          weight: 360,
          custom_measure: "г",
          custom_measure_count: 360,
          title: "Кабачок",
        },
        {
          id: 440,
          weight: 5,
          custom_measure: "зубчик",
          custom_measure_count: 1,
          title: "Чеснок",
        },
        {
          id: 282,
          weight: 25,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 350,
          weight: 50,
          custom_measure: "мл",
          custom_measure_count: 50,
          title: "Соевый соус",
        },
        {
          id: 439,
          weight: 0.3,
          custom_measure: "г",
          custom_measure_count: 0.3,
          title: "Черный перец молотый",
        },
        {
          id: 352,
          weight: 1.5,
          custom_measure: "г",
          custom_measure_count: 1.5,
          title: "Соль",
        },
        {
          id: 270,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Подсолнечное масло рафинированное",
        },
        {
          id: 418,
          weight: 4,
          custom_measure: "веточка",
          custom_measure_count: 2,
          title: "Укроп",
        },
        {
          id: 376,
          weight: 2,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Сушеные травы",
        },
      ],
      optional_ingredients: [
        {
          id: 275,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Помидоры черри",
        },
        {
          id: 12,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Базилик",
        },
        {
          id: 25,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Белый кунжут",
        },
      ],
      proteins: 2.08,
      fats: 4.05,
      carbs: 8.15,
      calories: 78.28,
    },
    {
      id: 215548,
      active_cooking_time: 10,
      total_cooking_time: 10,
      difficulty_level: 2,
      title: "Зеленая спаржа в беконе на сковороде",
      subtitle:
        "Спаржу готовят множеством самых разных способов, в том числе жарят на сковороде. Это очень просто и быстро. Метод обжарки помогает сохранить яркий зеленый цвет и хрустящую текстуру спаржи, что делает ее восхитительным дополнением к любому блюду или самостоятельной закуской. Добавьте немного тертого сыра или лимонного сока для пикантного вкуса. Обжарьте вместе со спаржей помидоры черри и грибы, чтобы получить более сытное блюдо.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyOC8zVkdEbXUuanBlZw.jpg",
      preparation: {
        content: "Помойте и обсушите спаржу. Достаньте бекон из упаковки.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyOC80RnJSZEQuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Оберните сырую спаржу в полоски бекона, оставляя свободными по 1 см по краям.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyOC8zaHlpNXQuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Растопите в сковороде сливочное масло. Обжарьте спаржу на среднем огне по 1-2 минуте с каждой стороны.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyOC8zUVZZeTUuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 7262,
          weight: 200,
          custom_measure: "г",
          custom_measure_count: 200,
          title: "Спаржа",
        },
        {
          id: 19,
          weight: 130,
          custom_measure: "г",
          custom_measure_count: 130,
          title: "Бекон",
        },
        {
          id: 338,
          weight: 15,
          custom_measure: "г",
          custom_measure_count: 15,
          title: "Сливочное масло",
        },
      ],
      optional_ingredients: [
        {
          id: 275,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Помидоры черри",
        },
        {
          id: 237,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Огурец",
        },
        {
          id: 418,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Укроп",
        },
        {
          id: 260,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Петрушка",
        },
      ],
      proteins: 9.79,
      fats: 20.6,
      carbs: 1.83,
      calories: 232.52,
    },
    {
      id: 215464,
      active_cooking_time: 25,
      total_cooking_time: 45,
      difficulty_level: 2,
      title: "Тушеная молодая капуста",
      subtitle:
        "Молодая капуста тонкая и мягкая, она готовится намного быстрее и проще зимней. Просто нарежьте капусту и прогрейте ее с белым винным уксусом для кислинки и с щепоткой сахарной пудры для легкой карамельной корочки. Если добавить бекон, как в этом рецепте, то капуста получится еще вкуснее и станет полноценным самостоятельным блюдом. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyNy8zQVRMQTMuanBlZw.jpg",
      preparation: {
        content:
          "Помойте капусту, промокните ее бумажными полотенцами. Профильтруйте и вскипятите в чайнике воду. Откройте упаковку с беконом. Поставьте на плиту глубокую сковороду.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyNy8zR2VOU2ouanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Нарежьте бекон ломтиками. Нашинкуйте капусту полосками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyNy96NndtZXkuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Включите под сковородой сильный огонь. Подождите, когда сковорода разогреется, и выложите в нее кусочки бекона. Пожарьте бекон, помешивая, около 2 минут, пока из него не выделится жир, а края ломтиков не станут хрустящими.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyNy8zNFZydGkuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Налейте к бекону на сковороде растительное масло и белый уксус, всыпьте сахарную пудру. Перемешайте и выложите в сковороду капусту.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyNy9MQ0FTSFIuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Прогрейте капусту с беконом, помешивая, в течение 2-3 минут. Затем убавьте огонь до среднего и влейте в сковороду горячую воду. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyNy80TnBpUHMuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Всыпьте к капусте соль, перемешайте и накройте сковороду крышкой. Потушите капусту еще около 10 минут до готовности, чтобы она осталась немного хрустящей. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyNy9CUUo2R20uanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская, русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 23,
          weight: 300,
          custom_measure: "г",
          custom_measure_count: 300,
          title: "Белокочанная капуста",
        },
        {
          id: 19,
          weight: 70,
          custom_measure: "г",
          custom_measure_count: 70,
          title: "Бекон",
        },
        {
          id: 54,
          weight: 100,
          custom_measure: "мл",
          custom_measure_count: 100,
          title: "Вода",
        },
        {
          id: 313,
          weight: 2,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Сахарная пудра",
        },
        {
          id: 51,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Винный уксус белый",
        },
        {
          id: 270,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Подсолнечное масло рафинированное",
        },
        {
          id: 352,
          weight: 3.3,
          custom_measure: "ч. л.",
          custom_measure_count: 0.33,
          title: "Соль",
        },
      ],
      optional_ingredients: [
        {
          id: 9433,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Маринованные шампиньоны",
        },
        {
          id: 407,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Томатный соус",
        },
      ],
      proteins: 4.35,
      fats: 9.86,
      carbs: 3.28,
      calories: 119.61,
    },
    {
      id: 215151,
      active_cooking_time: 30,
      total_cooking_time: 440,
      difficulty_level: 2,
      title: "Пюре из фасоли",
      subtitle:
        "Как и в любом другом блюде из фасоли, для пюре ее сначала замачивают на несколько часов, а потом варят до готовности. Добавьте пикантность и легкий карамельный вкус, положив обжаренные лук, чеснок и морковь. Кроме соли и черного перца, для пюре из фасоли подойдут паприка, сушеная кинза, хмели-сунели и другие приправы. Получится сытное и вкусное пюре для вегетарианской диеты или для гарнира. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyNC80OUNETDguanBlZw.jpg",
      preparation: {
        content:
          "Промойте фасоль, залейте ее прохладной водой в миске и оставьте на 4-6 часов. Помойте и почистите лук и фасоль. Подготовьте кастрюлю, сковороду, толкушку для пюре, терку, пресс для чеснока, миску и порционные тарелки. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyNC8zS2VjODIuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Слейте с замоченной фасоли воду, переложите ее в кастрюлю. Залейте фасоль свежей водой, поставьте кастрюлю на средний огонь.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyNC8zNnFZS3MuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Дождитесь, когда вода в кастрюле с фасолью закипит и снова слейте ее. Налейте в фасоль свежую воду и варите до готовности около 40-50 минут. Слейте отвар в миску, дайте фасоли немного остыть.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyNC80TVlkOVIuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Нарежьте лук кубиками со стороной 3-4 мм. Пропустите чеснок через пресс, мелко натрите морковь.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyNC8zMzJqdXcuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Разогрейте сковороду на сильном огне, налейте в нее растительное масло. Положите в масло лук, пожарьте его, помешивая, 1-2 минуты до светло-бежевого цвета. Добавьте к луку чеснок, прогрейте их около 30 секунд.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyNC80a1JxNzMuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Опустите в сковороду к овощам морковь и жарьте все вместе, периодически помешивая, 2-3 минуты. Положите к овощам фасоль, перемешайте и прогрейте все примерно 1 минуту.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyNC9QSFU3QzMuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Переложите фасоль с обжаренными овощами обратно в кастрюлю. С помощью толкушки разомните фасоль до состояния пюре, добавив в нее 1-2 ст.л. отвара от фасоли для более мягкой консистенции.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyNC8zRmhpa1YuanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Всыпьте в пюре соль и перец, тщательно перемешайте. Разложите пюре из фасоли по порционным тарелкам. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyNC80QTV2WlcuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 150,
          weight: 170,
          custom_measure: "г",
          custom_measure_count: 170,
          title: "Красная фасоль",
        },
        {
          id: 54,
          weight: 400,
          custom_measure: "мл",
          custom_measure_count: 400,
          title: "Вода",
        },
        {
          id: 290,
          weight: 20,
          custom_measure: "шт.",
          custom_measure_count: 0.25,
          title: "Репчатый лук",
        },
        {
          id: 219,
          weight: 45,
          custom_measure: "шт.",
          custom_measure_count: 0.5,
          title: "Морковь",
        },
        {
          id: 440,
          weight: 5,
          custom_measure: "зубчик",
          custom_measure_count: 1,
          title: "Чеснок",
        },
        {
          id: 270,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Подсолнечное масло рафинированное",
        },
        {
          id: 439,
          weight: 0.3,
          custom_measure: "г",
          custom_measure_count: 0.3,
          title: "Черный перец молотый",
        },
        {
          id: 352,
          weight: 2,
          custom_measure: "г",
          custom_measure_count: 2,
          title: "Соль",
        },
      ],
      optional_ingredients: [
        {
          id: 500,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Ржаной хлеб",
        },
        {
          id: 240,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Оливковое масло",
        },
        {
          id: 91,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Зеленый лук",
        },
        {
          id: 247,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Паприка",
        },
        {
          id: 229,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Нут",
        },
      ],
      proteins: 5.6,
      fats: 3,
      carbs: 14.62,
      calories: 108.21,
    },
    {
      id: 215074,
      active_cooking_time: 45,
      total_cooking_time: 345,
      difficulty_level: 2,
      title: "Полба с песто и вялеными томатами",
      subtitle:
        "Особый сорт пшеницы — полба — богата растительным белком, сложными углеводами, витаминами группы В и клетчаткой. Но многим не слишком нравится специфический привкус распаренного зерна в вареной полбе. Потушите крупу с чесноком, розмарином и вялеными томатами, а в конце приправьте соусом песто. Полба впитает соки и ароматы овощей и зелени, станет очень аппетитной, но при этом не потеряет ценных свойств. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyNS9vZ0ZHd0EuanBlZw.jpg",
      preparation: {
        content:
          "Промойте полбу, выложите ее в миску и залейте водой. Оставьте на 4–5 часов, затем слейте воду и еще раз промойте крупу. Помойте и почистите чеснок. Ополосните розмарин, промокните его салфеткой. Отделите листочки розмарина от стебля. Подготовьте глубокую сковороду. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyNS9IUUtwVDguanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Пропустите чеснок через пресс или мелко его натрите. Крупно нарежьте вяленые томаты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyNS9oR284SGcuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Налейте в сковороду оливковое масло, разогрейте на среднем огне. Положите в масло чеснок, листочки розмарина и вяленые томаты. Прогрейте, помешивая, 2–3 минуты, пока овощи не дадут сильный аромат.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyNS8zZGI4cFEuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Положите в сковороду к овощам полбу и сливочное масло. Интенсивно помешивая, влейте половину воды и прогрейте содержимое сковороды 10–15 минут, пока полба не впитает в себя почти всю воду. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyNS8zbW55RzcuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Налейте в полбу оставшуюся воду, тушите крупу, перемешивая, еще 15–20 минут почти до полной готовности.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyNS9NWURYaXAuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Добавьте в полбу творожный сыр и соус песто. Хорошо перемешайте, прогрейте все 1–2 минуты и снимите сковороду с огня. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyNS9EeUs5NmcuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская, итальянская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 6010,
          weight: 120,
          custom_measure: "г",
          custom_measure_count: 120,
          title: "Полба (ачар)",
        },
        {
          id: 355,
          weight: 40,
          custom_measure: "г",
          custom_measure_count: 40,
          title: "Соус песто",
        },
        {
          id: 240,
          weight: 12,
          custom_measure: "мл",
          custom_measure_count: 12,
          title: "Оливковое масло",
        },
        {
          id: 338,
          weight: 12,
          custom_measure: "г",
          custom_measure_count: 12,
          title: "Сливочное масло",
        },
        {
          id: 440,
          weight: 7.5,
          custom_measure: "зубчик",
          custom_measure_count: 1.5,
          title: "Чеснок",
        },
        {
          id: 301,
          weight: 2,
          custom_measure: "веточка",
          custom_measure_count: 0.5,
          title: "Розмарин",
        },
        {
          id: 58,
          weight: 30,
          custom_measure: "г",
          custom_measure_count: 30,
          title: "Вяленые помидоры",
        },
        {
          id: 54,
          weight: 250,
          custom_measure: "мл",
          custom_measure_count: 250,
          title: "Вода",
        },
        {
          id: 398,
          weight: 8,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Творожный сыр",
        },
      ],
      optional_ingredients: [
        {
          id: 447,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Шпинат",
        },
        {
          id: 256,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Перец чили",
        },
        {
          id: 91,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Зеленый лук",
        },
      ],
      proteins: 4.58,
      fats: 10.16,
      carbs: 23.43,
      calories: 193.98,
    },
    {
      id: 213618,
      active_cooking_time: 20,
      total_cooking_time: 50,
      difficulty_level: 2,
      title: "Чечевица с помидорами",
      subtitle:
        "Прекрасное вегетарианское блюдо из чечевицы можно приготовить в пост или в любое другое время в качестве гарнира или основного блюда. Добавьте разнообразные специи: чем ярче и пикантнее, тем лучше. Чечевицу берите любую: красную, зеленую или их смесь. Кроме помидоров можете добавить и другие овощи. Блюдо отлично дополнят репчатый лук, болгарский или острый перец, сельдерей, чеснок и баклажан. Если вы не придерживаетесь поста, то можете добавить немного сливок или сыра.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQxMS80WHNiZ3IuanBlZw.jpg",
      preparation: {
        content:
          "Промойте чечевицу под проточной водой. Помойте и почистите репчатый лук. Ополосните помидоры.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQxMS8zWVd2dmMuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Переложите чечевицу в небольшую кастрюлю. Залейте 1 стаканом воды, посолите и поставьте на средний огонь. Варите 30 минут после закипания. Откиньте готовую чечевицу на дуршлаг.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQxMS80Rjg4czUuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Мелко покрошите репчатый лук. Разогрейте в сковороде растительное масло. Обжарьте лук на среднем огне в течение 5 минут, регулярно перемешивая.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQxMS80UHVkeUwuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Ошпарьте помидоры кипятком и снимите с них кожицу. Мелко нарежьте помидор, переложите на сковороду к луку.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQxMS84VWlLUVYuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Посолите и поперчите содержимое сковороды. Перемешайте. Тушите 5 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQxMS8zVUNVeFQuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Выложите в сковороду чечевицу. Перемешайте. Готовьте еще 3 минуты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQxMS8zYXdFMkIuanBlZw.jpg",
        },
      ],
      kitchen_type: "Индийская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 670,
          weight: 85,
          custom_measure: "г",
          custom_measure_count: 85,
          title: "Красная чечевица",
        },
        {
          id: 290,
          weight: 80,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Репчатый лук",
        },
        {
          id: 272,
          weight: 160,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Помидор",
        },
        {
          id: 287,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Растительное масло",
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
          weight: 1.25,
          custom_measure: "г",
          custom_measure_count: 1.25,
          title: "Черный перец молотый",
        },
      ],
      optional_ingredients: [
        {
          id: 388,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Сыр",
        },
        {
          id: 12,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Базилик",
        },
      ],
      proteins: 6.14,
      fats: 5.25,
      carbs: 15.94,
      calories: 140.48,
    },
    {
      id: 212881,
      active_cooking_time: 20,
      total_cooking_time: 30,
      difficulty_level: 2,
      title: "Гречневая каша с морковью",
      subtitle:
        "Гречневая каша и морковь в этом блюде готовятся по отдельности, а потом смешиваются вместе. Гречку нужно отварить или запарить до готовности. Пока крупа варится, можно заняться морковкой. Обжарьте ее на растительном масле до мягкости. Время приготовления будет зависеть то того, как вы нарезали морковь: крупно или мелко. Для аромата в масло добавьте различные специи: корицу, сушеный имбирь или смесь перцев. В конце приготовления нужно карамелизировать морковь, добавив к ней немного сахара.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwNC80Rlk0V3AuanBlZw.jpg",
      preparation: {
        content:
          "Промойте гречку под проточной водой. Ополосните и почистите морковь.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwNC80RkhpNnAuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Насыпьте гречку в небольшую кастрюлю, залейте 2 стаканами воды. Посолите и поставьте на средний огонь. Варите 15 минут после закипания.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwNC8zZXZCRXAuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description: "Нарежьте морковь тонкими брусочками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwNC9EQVB5OFcuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Разогрейте в сковороде растительное масло. Обжарьте морковь в течение 10 минут на среднем огне, регулярно перемешивая. Добавьте в сковороду сахар, перемешайте. Жарьте морковку еще 2 минуты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwNC9kd1NHdFQuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Выложите в сковороду с морковкой отваренную гречневую крупу. Хорошенько перемешайте. Готовьте все вместе еще 2-3 минуты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwNC8zZWZGNFQuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 74,
          weight: 165,
          custom_measure: "стакан",
          custom_measure_count: 1,
          title: "Гречка",
        },
        {
          id: 219,
          weight: 180,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Морковь",
        },
        {
          id: 287,
          weight: 34,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Растительное масло",
        },
        {
          id: 312,
          weight: 25,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Сахар",
        },
        {
          id: 352,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Соль",
        },
      ],
      optional_ingredients: [
        {
          id: 204,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Мед",
        },
      ],
      proteins: 5.71,
      fats: 9.78,
      carbs: 34.53,
      calories: 239.3,
    },
    {
      id: 213338,
      active_cooking_time: 10,
      total_cooking_time: 40,
      difficulty_level: 2,
      title: "Запеченные корнеплоды",
      subtitle:
        "Сладкие батат и морковь, подрумяненный картофель, пикантные пастернак и сельдерей, освежающие репа и фенхель: у каждого из этих корнеплодов свой оригинальный вкус, а вместе они превращаются в аппетитный гарнир или вегетарианское блюдо. Чтобы корнеплоды карамелизовались в духовке и стали еще вкуснее, добавьте к специям немного коричневого сахара. На подготовку корнеплодов уйдет всего 10 минут, а остальную работу выполнит духовка.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwOS9DV3JzZEguanBlZw.jpg",
      preparation: {
        content:
          "Помойте петрушку, базилик и тимьян, выложите их сушиться на бумажное полотенце. Вымойте и почистите морковь, картофель, репу, батат, корни сельдерея и пастернака, лук, чеснок и фенхель. Отрежьте у фенхеля верхнюю и нижнюю часть, уберите сердцевину. Подготовьте миску, противень или форму для запекания, промажьте ее 0,5 ч.л. оливкового масла.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwOS9Cemk3OE0uanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Нарежьте картофель, корень сельдерея и пастернак крупными ломтиками. Нарежьте морковь, репу и батат крупными кусочками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwOS8zdjloeWUuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Разрежьте белую часть фенхеля и красный лук на 4 части. Измельчите чеснок в прессе или на терке. Мелко порубите петрушку, базилик и тимьян.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwOS9xUEZyVU0uanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Смешайте в миске оливковое масло, чеснок, соль, сахар, перец, паприку и мускатный орех. Всыпьте нарезанные базилик, петрушку и тимьян, еще раз все перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwOS9RZHR5UnMuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Выложите кусочки корнеплодов в миску с маслом и приправами, переверните их несколько раз, чтобы пряности равномерно распределились.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwOS80V1FpQVouanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Разогрейте духовку до 180°C. Переложите корнеплоды вместе с маслом на противень. Поставьте форму в разогретую духовку и запекайте корнеплоды около 15 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwOS9lU3hvYXcuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Достаньте форму из духовки, переверните кусочки корнеплодов. Верните форму обратно и готовьте корнеплоды еще 10-15 минут. Слегка остудите готовое блюдо перед подачей.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwOS8zaXdBWnEuanBlZw.jpg",
        },
      ],
      kitchen_type: "Североамериканская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 219,
          weight: 180,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Морковь",
        },
        {
          id: 108,
          weight: 240,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Картошка",
        },
        {
          id: 9395,
          weight: 150,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Корень пастернака",
        },
        {
          id: 141,
          weight: 150,
          custom_measure: "шт.",
          custom_measure_count: 0.3,
          title: "Корень сельдерея",
        },
        {
          id: 582,
          weight: 80,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Батат",
        },
        {
          id: 799,
          weight: 300,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Репа",
        },
        {
          id: 12505,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Фенхель",
        },
        {
          id: 152,
          weight: 75,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Красный лук",
        },
        {
          id: 440,
          weight: 10,
          custom_measure: "зубчик",
          custom_measure_count: 2,
          title: "Чеснок",
        },
        {
          id: 240,
          weight: 34,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Оливковое масло",
        },
        {
          id: 260,
          weight: 2,
          custom_measure: "веточка",
          custom_measure_count: 1,
          title: "Петрушка",
        },
        {
          id: 12,
          weight: 7,
          custom_measure: "веточка",
          custom_measure_count: 1,
          title: "Базилик",
        },
        {
          id: 402,
          weight: 1,
          custom_measure: "веточка",
          custom_measure_count: 1,
          title: "Тимьян / чабрец",
        },
        {
          id: 137,
          weight: 2.1,
          custom_measure: "ч. л.",
          custom_measure_count: 0.3,
          title: "Копченая паприка",
        },
        {
          id: 225,
          weight: 1,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Мускатный орех",
        },
        {
          id: 439,
          weight: 1.25,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Черный перец молотый",
        },
        {
          id: 352,
          weight: 3,
          custom_measure: "ч. л.",
          custom_measure_count: 0.3,
          title: "Соль",
        },
        {
          id: 411,
          weight: 2.4,
          custom_measure: "ч. л.",
          custom_measure_count: 0.3,
          title: "Тростниковый сахар",
        },
      ],
      optional_ingredients: [
        {
          id: 610,
          weight: 1.2,
          custom_measure: "ч. л.",
          custom_measure_count: 0.3,
          title: "Молотая корица",
        },
        {
          id: 105,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Карри",
        },
      ],
      proteins: 1.62,
      fats: 2.9,
      carbs: 9.63,
      calories: 70.82,
    },
    {
      id: 212861,
      active_cooking_time: 20,
      total_cooking_time: 20,
      difficulty_level: 2,
      title: "Ароматная стручковая фасоль с грибами",
      subtitle:
        "Стручковая фасоль с грибами получается очень сытной и ароматной. Особенно если дополнить ее пряными специями, вроде чеснока, перца или мускатного ореха. Сливочное масло можно легко заменить на растительное, и тогда блюдо получится постным. В рецепте мы обжарим свежие шампиньоны, но и замороженные подойдут. А как их правильно обжарить, читайте в самом рецепте. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwNC93YmVvdHkuanBlZw.jpg",
      preparation: {
        content:
          "Помойте шампиньоны. Помойте и почистите репчатый лук. Замороженную фасоль размораживать не нужно. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwNC8zWmlzcmMuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description: "Положите фасоль в кастрюлю. Залейте водой и посолите.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwNC8zNXZ3WnAuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Поставьте фасоль на средний огонь. Доведите до кипения, проварите одну минуту и снимите с огня. После этого промойте фасоль под проточной холодной водой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwNC8zYjRWTmYuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Нарежьте репчатый лук тонкими полукольцами. Нарежьте шампиньоны тонкими пластиками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwNC80djVYcFQuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Разогрейте на сковороде сливочное и растительное масло. Обжарьте лук с грибами на среднем огне в течение 5 минут, регулярно помешивая.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwNC80UzI2TWQuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "В сковороду с грибами добавьте фасоль, соевый соус, кунжутное масло. Приправьте солью и перцем. Хорошенько перемешайте. Готовьте одну минуту.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwNC80M1lINFkuanBlZw.jpg",
        },
      ],
      kitchen_type: "Азиатская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 612,
          weight: 300,
          custom_measure: "г",
          custom_measure_count: 300,
          title: "Стручковая фасоль замороженная",
        },
        {
          id: 445,
          weight: 160,
          custom_measure: "шт.",
          custom_measure_count: 5,
          title: "Шампиньоны",
        },
        {
          id: 338,
          weight: 20,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Сливочное масло",
        },
        {
          id: 287,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Растительное масло",
        },
        {
          id: 290,
          weight: 80,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Репчатый лук",
        },
        {
          id: 350,
          weight: 15,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Соевый соус",
        },
        {
          id: 162,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Кунжутное масло",
        },
        {
          id: 352,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
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
          id: 25,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Белый кунжут",
        },
      ],
      proteins: 2.5,
      fats: 6.66,
      carbs: 4.33,
      calories: 85,
    },
  ],
  desserts: [
    {
      id: 219531,
      active_cooking_time: 60,
      total_cooking_time: 780,
      difficulty_level: 3,
      title: "Торт с клубничным муссом",
      subtitle:
        "Для приготовления этого торта не обязательно иметь духовку. Измельченное с маслом печенье становится его основой, которая дополняется клубничным муссом. Важно дать торту постоять в холоде, чтобы стабилизироваться. Можете дополнить торт, сделав прослойку из свежих ягод. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC80VWtWV1guanBlZw.jpg",
      preparation: {
        content:
          "Промойте клубнику и уберите все листики. Подготовьте разъемную форму для выпечки небольшого размера и блендер.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC80REdMS3cuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Поставьте на плиту кастрюлю с водой и доведите воду до кипения. Поместите на кастрюлю миску с маслом. Дождитесь, когда оно растает на водяной бане. Снимите тарелку с маслом и слегка его остудите.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC9Wc3Zha0EuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Пока масло остывает, измельчите в блендере печенье в крошку. Смешайте печенье с остывшим маслом и кокосовой стружкой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC8zN0RGa28uanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Застелите форму для выпечки пергаментом. Выложите и распределите по дну и бортикам на 1 см массу из печенья, плотно утрамбуйте. Поставьте форму в холодильник, пока будете готовить клубничный мусс.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC9yZURqa1MuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description: "Пюрируйте в блендере клубнику. Выложите ее в миску.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC8zTWQ4V28uanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Вымойте и насухо вытрите насадку миксера и миску. Выложите в нее белки и взбивайте их 10 минут на низкой скорости. \nНе переставая взбивать, очень маленькими частями всыпайте к белкам сахар. Белковая масса должна стать пышной и побелеть.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC9QTDhQQzMuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Добавьте в белковую массу клубничное пюре и взбейте еще раз до однородности.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC80OUx2UlUuanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Переложите клубничный мусс на охлажденную основу. Разровняйте и отправьте в холодильник на несколько часов или на ночь.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC9MV0pGa1YuanBlZw.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 117,
          weight: 480,
          custom_measure: "стакан",
          custom_measure_count: 4,
          title: "Клубника",
        },
        {
          id: 312,
          weight: 225,
          custom_measure: "стакан",
          custom_measure_count: 1.25,
          title: "Сахар",
        },
        {
          id: 263,
          weight: 250,
          custom_measure: "г",
          custom_measure_count: 250,
          title: "Печенье",
        },
        {
          id: 338,
          weight: 90,
          custom_measure: "г",
          custom_measure_count: 90,
          title: "Сливочное масло",
        },
        {
          id: 122,
          weight: 60,
          custom_measure: "ст. л.",
          custom_measure_count: 4,
          title: "Кокосовая стружка",
        },
        {
          id: 22,
          weight: 132,
          custom_measure: "шт.",
          custom_measure_count: 4,
          title: "Белок куриного яйца",
        },
      ],
      optional_ingredients: [
        {
          id: 117,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Клубника",
        },
        {
          id: 228,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Мята",
        },
        {
          id: 124,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Кондитерская посыпка",
        },
      ],
      proteins: 3.67,
      fats: 11.31,
      carbs: 36.91,
      calories: 259.62,
    },
    {
      id: 219438,
      active_cooking_time: 30,
      total_cooking_time: 60,
      difficulty_level: 2,
      title: "Кекс с сухофруктами",
      subtitle:
        "Сделайте выпечку полезнее, приготовив кекс на рисовой муке с яблочным пюре и топленым маслом. Тесто будет не таким пышным, как с использованием пшеничной муки, а более влажным и пористым. Кекс получится вкусным и не приторным. Сладость тесту можно добавить сухофруктами. Финики и курага достаточно сладкие для этого. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9VU0hKR0QuanBlZw.jpg",
      preparation: {
        content:
          "Промойте сухофрукты. Если они слишком сухие и жесткие, замочите их на 10 минут в кипятке. Просейте муку. Подготовьте блендер и антипригарную форму для выпечки.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zd0tEVlQuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description: "Смешайте рисовую муку, соду и соль.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zV1BNSGguanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description: "Уберите косточки из фиников. Мелко нарежьте курагу.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zWGNINU4uanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Положите в чашу блендера финики, топленое масло и яблочное пюре. Всыпьте ванилин. Хорошенько измельчите.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zQlVCRWIuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description: "Добавьте яйца и взбейте еще раз.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80VEV4d3ouanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Добавьте в сухие ингредиенты специи. Просейте сухую смесь 2 раза через сито. Соедините с измельченной в блендере массой и курагой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9LdmF0Q0wuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Переложите тесто в антипригарную форму и выпекайте при 180°C 25-30 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zeEdtcXkuanBlZw.jpg",
        },
      ],
      kitchen_type: "Восточная, интернациональная",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 19483,
          weight: 250,
          custom_measure: "г",
          custom_measure_count: 250,
          title: "Финики",
        },
        {
          id: 163,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Курага",
        },
        {
          id: 298,
          weight: 150,
          custom_measure: "стакан",
          custom_measure_count: 1,
          title: "Рисовая мука",
        },
        {
          id: 348,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Сода",
        },
        {
          id: 352,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Соль",
        },
        {
          id: 408,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Топленое сливочное масло",
        },
        {
          id: 169,
          weight: 120,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Куриное яйцо",
        },
        {
          id: 6007,
          weight: 45,
          custom_measure: "ст. л.",
          custom_measure_count: 3,
          title: "Яблочное пюре",
        },
        {
          id: 144,
          weight: 1,
          custom_measure: "г",
          custom_measure_count: 1,
          title: "Корица",
        },
        {
          id: 214,
          weight: 0.75,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Молотый имбирь",
        },
        {
          id: 225,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Мускатный орех",
        },
        {
          id: 44,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Ванилин",
        },
      ],
      optional_ingredients: [],
      proteins: 4.91,
      fats: 14.96,
      carbs: 47.28,
      calories: 336.96,
    },
    {
      id: 219532,
      active_cooking_time: 30,
      total_cooking_time: 250,
      difficulty_level: 3,
      title: "Клубничное повидло",
      subtitle:
        "Клубничное повидло, в отличие от варенья, имеет густую бархатистую консистенцию. Оно в может быть как начинкой для пирогов и тарталеток, так и самостоятельным десертом. Подайте подвило к чаю, с поджаренными тостами. Количество сахара в рецепте регулируйте по собственному желанию. Добавьте его больше, если ягоды с кислинкой. Или уменьшите количество, если хотите получить повидло максимально натурального вкуса ягод.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC80NHc4VHIuanBlZw.jpg",
      preparation: {
        content:
          "Промойте и переберите клубнику. Уберите испорченные и подгнившие ягоды, удалите листики. Подготовьте банку с крышкой, сито и кастрюлю. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC80R2hhZUcuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Положите клубнику в кастрюлю и влейте половину стакана воды. Варите на слабом огне около часа. Ягоды должны стать мягкими, но не развариться окончательно.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC85ckdleFIuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Снимите клубнику с огня. Пропустите через сито в миску.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC9oOTJVeFIuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Переложите процеженную клубнику обратно в кастрюлю. Всыпьте половину сахара. Время от времени помешивая, варите на слабом огне в течение двух часов.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC8zTU1DY24uanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Всыпьте оставшийся сахар. Варите до тех пор, пока повидло не загустеет. Переложите повидло в банку и закройте крышку.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC9vRlhhWVguanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 117,
          weight: 996,
          custom_measure: "стакан",
          custom_measure_count: 8.3,
          title: "Клубника",
        },
        {
          id: 312,
          weight: 396,
          custom_measure: "стакан",
          custom_measure_count: 2.2,
          title: "Сахар",
        },
        {
          id: 54,
          weight: 100,
          custom_measure: "стакан",
          custom_measure_count: 0.5,
          title: "Вода",
        },
      ],
      optional_ingredients: [],
      proteins: 0.53,
      fats: 0.27,
      carbs: 31.5,
      calories: 123.45,
    },
    {
      id: 219395,
      active_cooking_time: 30,
      total_cooking_time: 30,
      difficulty_level: 2,
      title: "Печенье с лимонной глазурью в микроволновке",
      subtitle:
        "Если у вас нет духовки, попробуйте испечь печенье в микроволновке. Оно получится такое же вкусное! Но очень важно тщательно перемешать тесто, чтобы все кристаллики сахара растворились, иначе печенье сгорит. Удобно использовать сахарную пудру, она мельче и распределится равномерно. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80NTczWFAuanBlZw.jpg",
      preparation: {
        content:
          "Заранее достаньте сливочное масло из холодильника, чтобы оно стало мягким. Просейте муку с помощью сита, чтобы убрать мелкий мусор и комочки. Вымойте лимон. Подготовьте терку, тарелку и скалку.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9lamN2TUIuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Выложите в миску мягкое сливочное масло. Слегка разомните его вилкой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zU1kyUEwuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Добавьте к маслу 3 ст.л. сахарной пудры. Тщательно перемешайте, чтобы получилась однородная консистенция.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9TM1RLUFAuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Всыпьте в получившуюся смесь просеянную муку и крахмал. Еще раз хорошо перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zeWt2cVYuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Присыпьте рабочую поверхность мукой. Выложите тесто и замесите его руками до однородности.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zN0dIVlIuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Возьмите скалку и раскатайте тесто в пласт толщиной примерно 0,5 см. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zMjZmYlAuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "С помощью стакана или формы вырежьте небольшие кружочки — будущее печенье.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9hc2szcmguanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Посыпьте тарелку небольшим количеством муки. Сверху выложите заготовки из теста. Поставьте печенье в микроволновку и включите ее на 5-6 минут на среднюю мощность.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zZ01ZRUsuanBlZw.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Разрежьте лимон пополам. Выжмите из каждой половины сок. Должно получиться 2-3 ст.л. лимонного сока.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9LVWRTNUUuanBlZw.jpg",
        },
        {
          title: "Шаг 9",
          description:
            "Добавьте к лимонному соку оставшуюся сахарную пудру. Тщательно перемешайте, чтобы получилась глазурь.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9XUm42V2QuanBlZw.jpg",
        },
        {
          title: "Шаг 10",
          description: "Полейте готовое печенье лимонной глазурью. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zUWlxUVguanBlZw.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для глазури",
      main_ingredients: [
        {
          id: 338,
          weight: 200,
          custom_measure: "г",
          custom_measure_count: 200,
          title: "Сливочное масло",
        },
        {
          id: 282,
          weight: 195,
          custom_measure: "стакан",
          custom_measure_count: 1.5,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 15314,
          weight: 16,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Крахмал",
        },
        {
          id: 313,
          weight: 75,
          custom_measure: "ст. л.",
          custom_measure_count: 3,
          title: "Сахарная пудра",
        },
      ],
      optional_ingredients: [
        {
          id: 183,
          weight: 120,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Лимон",
        },
        {
          id: 313,
          weight: 125,
          custom_measure: "ст. л.",
          custom_measure_count: 5,
          title: "Сахарная пудра",
        },
      ],
      proteins: 3.21,
      fats: 22.95,
      carbs: 47.84,
      calories: 407.97,
    },
    {
      id: 219408,
      active_cooking_time: 80,
      total_cooking_time: 360,
      difficulty_level: 3,
      title: "Шоколадный крем с вишней",
      subtitle:
        "Шоколадный крем с кислинкой спелой вишни подойдет для тортов, пирогов, тарталеток. Его можно подать со свежими круассанами или булочками. Вишня сбалансирует сладость крема и оттенит шоколадную горчинку. Крем можно сделать плотнее, охладив в холодильнике 3-4 часа, тогда он будет лучше держать форму. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zTnNBZFEuanBlZw.jpg",
      preparation: {
        content:
          "Очистите вишню от плодоножек, промойте и выложите на бумажные полотенца. Подготовьте две кастрюли, чистое тканевое полотенце, жаропрочную миску для водяной бани, венчик, сито и миксер.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS92QUg3b1ouanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description: "Удалите у вишни косточки и выложите ее в сотейник.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zZHVidlcuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Равномерно посыпьте ягоды сахаром. Накройте кастрюлю полотенцем, чтобы защитить ягоды от попадания мусора. Дайте постоять 1-2 часа, чтобы ягоды выделили сок.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80OEVycGIuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Поставьте кастрюлю с вишней на средний огонь. Дождитесь, когда ягодная масса закипит, и снимите пену. Варите, периодически помешивая, в течение 10-15 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80S3dicWkuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Снимите кастрюлю с огня, накройте полотенцем и остудите при комнатной температуре. Полотенце впитает лишнюю влагу, которая образуется при остывании ягод. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9YcVFCcG8uanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Наполните вторую кастрюлю водой примерно на 2/3 объема. Поставьте на огонь и доведите до кипения. Поломайте шоколад на небольшие кусочки. Выложите их в миску и установите на кастрюле с кипящей водой. Уменьшите огонь до среднего.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80OG1rRm8uanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Растопите шоколад на водяной бане, постоянно помешивая его венчиком.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zZFlKeEQuanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Нарежьте сливочное масло кубиками со стороной примерно 1 см, положите их в миску к шоколаду. Так масло быстрее растает. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zanVIRXguanBlZw.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Дайте маслу полностью растаять в шоколаде, перемешайте. Уберите миску с шоколадно-масляной массой с огня.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80VUhYNFIuanBlZw.jpg",
        },
        {
          title: "Шаг 9",
          description:
            "Влейте в шоколадно-масляную массу сгущенное молоко, все тщательно смешайте венчиком до однородной консистенции.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zRWF3bXkuanBlZw.jpg",
        },
        {
          title: "Шаг 10",
          description:
            "Пропустите остывшее вишневое варенье через сито, чтобы сироп полностью стек в миску к шоколадному крему. Отложите оставшиеся на сите ягоды до тех пор, пока они не понадобятся.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9HZ2dLOU0uanBlZw.jpg",
        },
        {
          title: "Шаг 11",
          description:
            "Взбейте шоколадный крем с вишневым сиропом миксером на большой скорости, чтобы все ингредиенты полностью соединились.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9oa1NuU0ouanBlZw.jpg",
        },
        {
          title: "Шаг 12",
          description:
            "Выложите в получившийся крем ягоды из варенья. Аккуратно смешайте их ложкой или лопаткой. Поставьте крем в холодильник на 30-40 минут, чтобы он немного загустел.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80WGlLanAuanBlZw.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 400,
          weight: 90,
          custom_measure: "г",
          custom_measure_count: 90,
          title: "Темный шоколад",
        },
        {
          id: 327,
          weight: 60,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Сгущенное молоко",
        },
        {
          id: 338,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Сливочное масло",
        },
        {
          id: 507,
          weight: 75,
          custom_measure: "стакан",
          custom_measure_count: 0.5,
          title: "Вишня",
        },
        {
          id: 312,
          weight: 50,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Сахар",
        },
      ],
      optional_ingredients: [
        {
          id: 11840,
          weight: 260,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Бисквитные коржи",
        },
        {
          id: 507,
          weight: 30,
          custom_measure: "г",
          custom_measure_count: 30,
          title: "Вишня",
        },
      ],
      proteins: 4.01,
      fats: 18.36,
      carbs: 42.84,
      calories: 350.13,
    },
    {
      id: 219419,
      active_cooking_time: 30,
      total_cooking_time: 150,
      difficulty_level: 2,
      title: "Ягодное желе",
      subtitle:
        "Ароматное желе получится из любых сезонных ягод. Кроме свежих, подойдут и замороженные. Оставьте немного ягод для украшения или залейте целые ягоды сиропом в форме перед тем, как охлаждать желе. Подайте десерт в прозрачных формочках или нарежьте кубиками и переложите на тарелку. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80QTc3MmUuanBlZw.jpg",
      preparation: {
        content:
          "Выложите малину, клубнику и ежевику в дуршлаг и осторожно промойте. Оставьте ягоды в дуршлаге, чтобы стекла вода. Помойте мяту. Подготовьте кастрюлю, миски, сито, глубокую форму для желе и десертное блюдо.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9QcmpRNnUuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Положите лист желатина в миску с широким дном. Залейте его ¼ стакана воды, оставьте на 10-15 минут набухать.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zWmlhWG8uanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Очистите ягоды от листиков. Выложите малину, клубнику и ежевику в кастрюлю, залейте 1 стаканом воды. Всыпьте к ягодам сахар и положите веточку мяты целиком.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zWWZodGIuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Поставьте кастрюлю на средний огонь. Помешивая, дайте ягодам закипеть. Проварите ягодный сироп 1-2 минуты и снимите с огня.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zQTRjTmguanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Уберите мяту из сиропа и процедите его через сито в чистую миску.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9wVHZSZXcuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Размокший лист желатина выложите в процеженный и немного остывший ягодный сироп. Хорошо перемешайте, чтобы желатин полностью растворился в сиропе.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80Qkd6Qm4uanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Перелейте желе в формы и поставьте в холодильник на 1-2 часа, пока оно не застынет. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9wRVoyQkcuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская, русская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 196,
          weight: 70,
          custom_measure: "стакан",
          custom_measure_count: 0.5,
          title: "Малина",
        },
        {
          id: 490,
          weight: 75,
          custom_measure: "стакан",
          custom_measure_count: 0.5,
          title: "Ежевика",
        },
        {
          id: 117,
          weight: 60,
          custom_measure: "стакан",
          custom_measure_count: 0.5,
          title: "Клубника",
        },
        {
          id: 188,
          weight: 3,
          custom_measure: "лист",
          custom_measure_count: 1,
          title: "Листовой желатин",
        },
        {
          id: 54,
          weight: 250,
          custom_measure: "стакан",
          custom_measure_count: 1.25,
          title: "Вода",
        },
        {
          id: 228,
          weight: 1,
          custom_measure: "веточка",
          custom_measure_count: 1,
          title: "Мята",
        },
        {
          id: 411,
          weight: 50,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Тростниковый сахар",
        },
      ],
      optional_ingredients: [
        {
          id: 117,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Клубника",
        },
        {
          id: 228,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Мята",
        },
      ],
      proteins: 1.02,
      fats: 0.12,
      carbs: 12.36,
      calories: 57.01,
    },
    {
      id: 219130,
      active_cooking_time: 30,
      total_cooking_time: 30,
      difficulty_level: 2,
      title: "Домашнее шоколадное масло",
      subtitle:
        "Домашнее шоколадное масло можно использовать для кремов и соусов или подать со свежей выпечкой. В холодильнике шоколадное масло застывает, а при комнатной температуре снова размягчается, его удобно намазывать на булочки, печенье или тосты. Для более выразительного шоколадного вкуса возьмите плитку с высоким содержанием какао. Ингредиенты рецепта рассчитаны на банку объемом 0,3 л. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9aNGlNamouanBlZw.jpg",
      preparation: {
        content:
          "Заранее достаньте сливочное масло и молоко из холодильника, чтобы ингредиенты были комнатной температуры. Подготовьте кастрюлю, жаропрочную миску и банку для хранения.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zQmJ1MkcuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Для водяной бани налейте в кастрюлю воду примерно на 2/3 объема. Поставьте кастрюлю на сильный огонь и доведите воду до кипения. Установите поверх кастрюли жаропрочную миску. Поломайте шоколадную плитку на небольшие кусочки и выложите их в миску. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9hZmhwNHAuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Уменьшите огонь до среднего, добавьте к шоколаду молоко. Растопите шоколад на водяной бане, постоянно помешивая.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy80OVlDbmEuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Нарежьте сливочное масло на 5-6 частей. Добавляйте масло по частям в миску к растопленному шоколаду, так масло быстрее растает. Тщательно перемешайте масло с шоколадом до однородной мягкой массы и снимите миску с водяной бани.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zUjVGemkuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Всыпьте к шоколадному маслу сахарную пудру и ванильный сахар. Добавьте в массу какао-порошок. Как следует перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9yUkdiWkEuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Всыпьте в масло с шоколадом мускатный орех и корицу. Тщательно все перемешайте еще раз.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zZm1uaUYuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Переложите готовое шоколадное масло в банку и плотно закройте крышкой. Охладите 1-2 часа. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy81Y3hKVEYuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 338,
          weight: 180,
          custom_measure: "г",
          custom_measure_count: 180,
          title: "Сливочное масло",
        },
        {
          id: 101,
          weight: 9,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Какао-порошок",
        },
        {
          id: 610,
          weight: 4,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Молотая корица",
        },
        {
          id: 225,
          weight: 2,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Мускатный орех",
        },
        {
          id: 46,
          weight: 2,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Ванильный сахар",
        },
        {
          id: 696,
          weight: 18,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Молоко 2,5% жирности",
        },
        {
          id: 313,
          weight: 50,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Сахарная пудра",
        },
        {
          id: 400,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Темный шоколад",
        },
      ],
      optional_ingredients: [
        {
          id: 7138,
          weight: 200,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Круассан",
        },
        {
          id: 209,
          weight: 30,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Миндальные лепестки",
        },
      ],
      proteins: 5.57,
      fats: 44.04,
      carbs: 32.83,
      calories: 548.21,
    },
    {
      id: 219392,
      active_cooking_time: 60,
      total_cooking_time: 60,
      difficulty_level: 2,
      title: "Джем из абрикосов без косточек",
      subtitle:
        "Из абрикосов получается джем красивого янтарного цвета. Самая трудоемкая часть его приготовления — удаление косточек из каждого плода. Тягучая консистенция джема делает его универсальным — добавьте его в выпечку в качестве начинки или просто намажьте на хлеб. Джем можно хранить в холодильнике или закрыть в стерилизованную банку. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9LQW9EOEguanBlZw.jpg",
      preparation: {
        content: "Вымойте абрикосы. Подготовьте кастрюлю и мелкое сито. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80QVo4dkIuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description: "Абрикосы разрежьте пополам и достаньте косточки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zZHFpTlQuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Переложите очищенные абрикосы в кастрюлю, влейте холодную воду. Поставьте кастрюлю на средний огонь. Когда абрикосы закипят, убавьте огонь, варите 10 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9yNlM1eG8uanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Уберите кастрюлю с огня. Переложите абрикосы в мелкое сито и протрите с помощью вилки или толкушки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80Q2NzOGcuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Переложите абрикосовое пюре в кастрюлю. Добавьте сахар и перемешайте. Поставьте джем на средний огонь. Помешивая, доведите до кипения. Убавьте огонь до минимума и варите джем 30-40 минут, пока он не загустеет. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zWjNNUTUuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Разложите абрикосовый джем по подготовленным банкам. Закройте их крышками и переверните. Дождитесь, когда джем остынет.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zcDhoMksuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 769,
          weight: 1000,
          custom_measure: "кг",
          custom_measure_count: 1,
          title: "Абрикос",
        },
        {
          id: 54,
          weight: 500,
          custom_measure: "стакан",
          custom_measure_count: 2.5,
          title: "Вода",
        },
        {
          id: 312,
          weight: 1440,
          custom_measure: "стакан",
          custom_measure_count: 8,
          title: "Сахар",
        },
      ],
      optional_ingredients: [
        {
          id: 30,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Белый хлеб",
        },
        {
          id: 338,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Сливочное масло",
        },
      ],
      proteins: 0.31,
      fats: 0.03,
      carbs: 51.94,
      calories: 192.27,
    },
    {
      id: 219128,
      active_cooking_time: 30,
      total_cooking_time: 60,
      difficulty_level: 2,
      title: "Джем из замороженной клубники",
      subtitle:
        "Джем из замороженной клубники по вкусу ничем не отличается от джема из свежих ягод. Тратить много времени на приготовление не придется, а сами ягоды не нужно размораживать. Достаточно засыпать сахаром и пару раз проварить. Из указанного количества ингредиентов получается две баночки варенья объемом по 0,25 л каждая.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9BZGZnUmIuanBlZw.jpg",
      preparation: {
        content: "Подготовьте простерилизованные банки с крышкой и блендер.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9WbVl1N1guanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Выложите клубнику, не размораживая, в кастрюлю. Всыпьте к ней сахар. Влейте 50 мл воды. Поставьте на слабый огонь. Варите ягоды примерно 10 минут. Снимите образовавшуюся пену.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zR2RKSzUuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Снимите кастрюлю с плиты. Пробейте ягодную массу погружным блендером. Верните кастрюлю на плиту. Варите около 30 минут до загустения.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9kQmg2SGYuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Перелейте джем в банки, закройте крышками и дайте полностью остыть под одеялом.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zaVBXa0UuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 501,
          weight: 700,
          custom_measure: "г",
          custom_measure_count: 700,
          title: "Клубника замороженная",
        },
        {
          id: 312,
          weight: 350,
          custom_measure: "г",
          custom_measure_count: 350,
          title: "Сахар",
        },
        {
          id: 54,
          weight: 50,
          custom_measure: "мл",
          custom_measure_count: 50,
          title: "Вода",
        },
      ],
      optional_ingredients: [],
      proteins: 0.51,
      fats: 0.25,
      carbs: 36.53,
      calories: 141.27,
    },
    {
      id: 219127,
      active_cooking_time: 20,
      total_cooking_time: 40,
      difficulty_level: 2,
      title: "Варенье из базилика",
      subtitle:
        "Варенье из базилика может стать прекрасным дополнением не только к мясным или рыбным блюдам, но и к закускам: сырам или паштетам. Оно не получится насыщенно-зеленого цвета, как само растение, но будет очень аппетитным, с восхитительным пряным ароматом. Из указанного количества ингредиентов получается одна баночка варенья объемом 300 мл.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zemtnUlEuanBlZw.jpg",
      preparation: {
        content:
          "Тщательно помойте базилик. Подготовьте стерильную баночку с крышкой.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9DZzJOVnkuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Снимите листья базилика со стеблей. Выложите листочки в сотейник или кастрюльку.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zVFJIMkUuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description: "Засыпьте зелень сахаром, добавьте лимонную кислоту.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9rSzVzYVkuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Влейте в сотейник воду и поставьте на средний огонь. Доведите массу до кипения и варите 5-7 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy80S3pYVFUuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Пропустите сироп через сито в чистую миску. Листья базилика больше не понадобятся, их можно выбросить. Свой вкус и аромат они уже отдали.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zZ3pmNEIuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Перелейте сироп обратно в сотейник. Всыпьте пектин и хорошенько перемешайте. Варите на слабом огне еще 3-4 минуты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zYlIycEEuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Налейте варенье в баночку. Закройте крышкой. Дайте полностью остыть, укутав в одеяло. Дайте остыть при комнатной температуре.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9jQVhMcXIuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская, интернациональная",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 12,
          weight: 80,
          custom_measure: "г",
          custom_measure_count: 80,
          title: "Базилик",
        },
        {
          id: 312,
          weight: 135,
          custom_measure: "г",
          custom_measure_count: 135,
          title: "Сахар",
        },
        {
          id: 54,
          weight: 350,
          custom_measure: "мл",
          custom_measure_count: 350,
          title: "Вода",
        },
        {
          id: 184,
          weight: 0.5,
          custom_measure: "г",
          custom_measure_count: 0.5,
          title: "Лимонная кислота",
        },
        {
          id: 6039,
          weight: 7.5,
          custom_measure: "ч. л.",
          custom_measure_count: 1.5,
          title: "Пектин",
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
      ],
      proteins: 0.35,
      fats: 0.08,
      carbs: 25.29,
      calories: 93.31,
    },
    {
      id: 219092,
      active_cooking_time: 50,
      total_cooking_time: 550,
      difficulty_level: 2,
      title: "Варенье с кусочками персиков",
      subtitle:
        "Для красивых ровных долек в варенье возьмите спелые, но крепкие персики с плотной мякотью. Не засыпайте их сахаром, а варите в уже готовом сахарном сиропе. Так дольки хорошо размягчатся, но останутся целыми, а сироп получится густым, но прозрачным. Из указанного количества ингредиентов получается одна банка варенья объемом 0,5 л. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80OWg5WGcuanBlZw.jpg",
      preparation: {
        content:
          "Помойте и вытрите персики. Подготовьте кастрюлю, чистое тканевое полотенце и банку для хранения. Простерилизуйте банку и крышку в кипящей воде или в духовке при температуре 150 градусов в течение 10 минут.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zM3VlSFQuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Вскипятите в чайнике 1 стакан воды, ошпарьте персики. Разрежьте их на четвертинки, удалите косточки. Нарежьте дольки полукруглыми ломтиками толщиной 4-5 мм. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zZnRORlguanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Соедините в кастрюле сахар и воду для сиропа, хорошо перемешайте. Поставьте кастрюлю на средний огонь. Постоянно помешивая, полностью растворите сахар. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80emlITXUuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Выложите в горячий сахарный сироп дольки персиков. Осторожно перемешайте и дайте персикам с сиропом закипеть. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zVjVLTmIuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Уберите пену и проварите фрукты в течение 15 минут, изредка помешивая. Снимите кастрюлю с огня. Прикройте ее полотенцем и оставьте остывать на 3-4 часа.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9SZXhuUHcuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Еще раз поставьте кастрюлю на средний огонь и дайте персикам закипеть. Варите их 10-15 минут, помешивая, всыпьте лимонную кислоту. Уберите кастрюлю с огня и снова остудите варенье в течение 4-5 часов.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC82YzJQM2QuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Вскипятите варенье в третий раз и сразу снимите его с огня. Сразу переложите его в банку и закройте крышкой. Остудите заготовку при комнатной температуре и уберите на хранение в холодильник.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC95OVRwbUIuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 685,
          weight: 550,
          custom_measure: "г",
          custom_measure_count: 550,
          title: "Персики",
        },
        {
          id: 312,
          weight: 360,
          custom_measure: "г",
          custom_measure_count: 360,
          title: "Сахар",
        },
        {
          id: 184,
          weight: 1.25,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Лимонная кислота",
        },
        {
          id: 54,
          weight: 50,
          custom_measure: "мл",
          custom_measure_count: 50,
          title: "Вода",
        },
      ],
      optional_ingredients: [],
      proteins: 0.51,
      fats: 0.06,
      carbs: 43.84,
      calories: 161.89,
    },
    {
      id: 219096,
      active_cooking_time: 30,
      total_cooking_time: 60,
      difficulty_level: 2,
      title: "Варенье-ассорти",
      subtitle:
        "Такое варенье можно сделать из любого набора фруктов, которые придутся по вкусу. Не забудьте добавить цитрусовые, ведь они придадут десерту приятную, едва заметную кислинку, которая хорошо дополняет сладость остальных фруктов. Лимон можно заменить лаймом, если вы предпочитаете более выраженный цитрусовый вкус. Если выбираете виноград, то лучше взять сорта без косточек. Из указанного количества ингредиентов получается одна баночка варенья объемом 0,5 л.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zazZrd0guanBlZw.jpg",
      preparation: {
        content:
          "Тщательно вымойте все фрукты. Подготовьте простерилизованную банку и крышку.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zZ3B3M3ouanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Удалите сердцевину у яблока и груши. Нарежьте мякоть тонкими дольками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy90YnUybTMuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Нарежьте лимон и апельсин половинками кружочков. Извлеките все косточки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zUnFuN2suanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description: "Разделите сливы пополам и уберите косточки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9od3UzR24uanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Выложите груши в кастрюлю. Залейте водой, поставьте на огонь и доведите до кипения.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zQ0doaHUuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Проварите груши пару минут в кипящей воде и переложите на тарелку. В воду из-под груш всыпьте сахар. Убавьте огонь до слабого и дождитесь, когда сахар полностью растворится.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy80NjJDWUcuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description: "Выложите в сироп половинки слив. Проварите 2-3 минуты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zZ0Foa1IuanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Добавьте к сливам яблоки, груши и виноград. Варите на слабом огне до мягкости фруктов.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9uZjkyRVYuanBlZw.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Пока варятся фрукты в сиропе, выложите в отдельную кастрюльку лимон и апельсин. Залейте водой, поставьте на огонь и доведите до кипения.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zTmZDc0MuanBlZw.jpg",
        },
        {
          title: "Шаг 9",
          description:
            "Переложите цитрусовые к остальным ингредиентам. Варите все вместе до тех пор, пока фрукты не станут прозрачными.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9hUjk3RDMuanBlZw.jpg",
        },
        {
          title: "Шаг 10",
          description:
            "Переложите варенье в стерильную банку. Закройте крышкой, укутайте полотенцем или одеялом и дайте остыть.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zNTI2S3cuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 451,
          weight: 250,
          custom_measure: "г",
          custom_measure_count: 250,
          title: "Яблоки",
        },
        {
          id: 183,
          weight: 60,
          custom_measure: "г",
          custom_measure_count: 60,
          title: "Лимон",
        },
        {
          id: 79,
          weight: 150,
          custom_measure: "г",
          custom_measure_count: 150,
          title: "Груша",
        },
        {
          id: 689,
          weight: 250,
          custom_measure: "г",
          custom_measure_count: 250,
          title: "Сливы",
        },
        {
          id: 6,
          weight: 60,
          custom_measure: "г",
          custom_measure_count: 60,
          title: "Апельсин",
        },
        {
          id: 53,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Виноград",
        },
        {
          id: 312,
          weight: 500,
          custom_measure: "г",
          custom_measure_count: 500,
          title: "Сахар",
        },
      ],
      optional_ingredients: [],
      proteins: 0.39,
      fats: 0.22,
      carbs: 42.7,
      calories: 161.82,
    },
    {
      id: 221882,
      active_cooking_time: 60,
      total_cooking_time: 180,
      difficulty_level: 3,
      title: "Творожный «Наполеон»",
      subtitle:
        "Торт «Наполеон» отличается от других тортов количеством слоев. Чем их больше и чем они тоньше, тем лучше. А чтобы сделать более полезный вариант, приготовьте коржи с творогом. Тогда и выпечка торту не понадобится. Во время формирования торта важно, чтобы и сами коржи, и крем были остывшими. Перед подачей подержите его в холодильнике как минимум 2 часа, а лучше — сутки. Так он хорошо пропитается, станет мягче и нежнее.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC80UzhUMjYuanBlZw.jpg",
      preparation: {
        content:
          "Просейте муку. Заранее достаньте из холодильника сливочное масло, чтобы оно стало мягким.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8zdW9WeHQuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Соедините в миске творог, 3 куриных яйца, стакан сахара и разрыхлитель. Хорошенько перемешайте все до однородности.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9DYlBxRDguanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "По частям добавьте 1 стакан муки, тщательно вымешивая тесто после каждой порции. Накройте тесто пищевой пленкой и уберите в сторону.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9rOGhUVlEuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "В кастрюле тщательно смешайте 2 куриных яйца со стаканом сахара и 2 ст.л. муки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8zeTMzWkIuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Поставьте кастрюлю на слабый огонь и, постоянно помешивая, тонкой струйкой влейте молоко. Варите до загустения, а затем уберите кастрюлю с плиты. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9lYXFBZFguanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Обомните тесто, разделите его на 6 равных частей. Раскатайте каждую часть в пласт толщиной 3-5 мм. Накрыв тесто крышкой от кастрюли или тарелкой, обрежьте его так, чтобы получился ровный круг.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9EOVhkWUsuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Обжарьте каждый круг теста по 3-4 минуты с каждой стороны на сковороде. Дайте коржам полностью остыть.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9aSnB5dXcuanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Сформируйте торт, выкладывая поочередно коржи и крем. Уберите его в холодильник для пропитки на 2-3 часа.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9oTmlCVGUuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для теста",
      optional_ingredient_title: "Для крема и подачи",
      main_ingredients: [
        {
          id: 396,
          weight: 300,
          custom_measure: "г",
          custom_measure_count: 300,
          title: "Творог 9% жирности",
        },
        {
          id: 169,
          weight: 180,
          custom_measure: "шт.",
          custom_measure_count: 3,
          title: "Куриное яйцо",
        },
        {
          id: 282,
          weight: 130,
          custom_measure: "г",
          custom_measure_count: 130,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 312,
          weight: 180,
          custom_measure: "г",
          custom_measure_count: 180,
          title: "Сахар",
        },
        {
          id: 285,
          weight: 5,
          custom_measure: "г",
          custom_measure_count: 5,
          title: "Разрыхлитель теста",
        },
      ],
      optional_ingredients: [
        {
          id: 553,
          weight: 400,
          custom_measure: "мл",
          custom_measure_count: 400,
          title: "Молоко 3,2%",
        },
        {
          id: 338,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Сливочное масло",
        },
        {
          id: 169,
          weight: 120,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Куриное яйцо",
        },
        {
          id: 312,
          weight: 180,
          custom_measure: "г",
          custom_measure_count: 180,
          title: "Сахар",
        },
        {
          id: 282,
          weight: 50,
          custom_measure: "г",
          custom_measure_count: 50,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 435,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Черная смородина",
        },
        {
          id: 149,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Красная смородина",
        },
      ],
      proteins: 7.11,
      fats: 9.5,
      carbs: 31.1,
      calories: 232.52,
    },
    {
      id: 218854,
      active_cooking_time: 30,
      total_cooking_time: 30,
      difficulty_level: 2,
      title: "Варенье-пятиминутка из голубики",
      subtitle:
        "Чтобы сохранить не только вкус, но и пользу голубики на всю зиму, ее нужно правильно приготовить. Если варить ягоды не слишком долго, то и варенье получится полезным. Для этого голубику смешивают с сахаром и доводят до кипения, а через 5 минут отключают. И так повторяют три раза. Воду добавлять не нужно, ведь ягода при взаимодействии с сахаром выделит очень много жидкости. В процессе приготовления и остывания варенье загустеет и приобретет идеальную консистенцию. Из указанного количества ингредиентов получается одна баночка варенья объемом 0,2 л. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS8zZTVWckouanBlZw.jpg",
      preparation: {
        content:
          "Переберите голубику от сора. Переложите ягоды в миску, залейте холодной водой и помойте от грязи. Переложите голубику на бумажные полотенца и дайте обсохнуть. Простерилизуйте банку и крышку для хранения варенья. Подготовьте закаточную машинку. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS80SldmZDkuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Переложите голубику в небольшой ковш или сотейник. Всыпьте сахар к ягодам.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS8zR0hKU2UuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Поставьте посуду с ягодами на средний огонь. Варите 5 минут после закипания, часто помешивая. Отключите нагрев и оставьте варенье остывать 2 часа.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS8zQ0Y2NmQuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Снова прокипятите варенье 5 минут на плите и дайте остыть. После остывания повторите кипячение в третий раз.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS80QTdrQkIuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Переложите горячее варенье в банку и плотно закатайте крышкой при помощи машинки. После полного остывания уберите в холодное темное место на хранение.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS9CazdvaFUuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 466,
          weight: 200,
          custom_measure: "г",
          custom_measure_count: 200,
          title: "Голубика",
        },
        {
          id: 312,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Сахар",
        },
      ],
      optional_ingredients: [],
      proteins: 0.67,
      fats: 0,
      carbs: 38.73,
      calories: 144,
    },
    {
      id: 218826,
      active_cooking_time: 10,
      total_cooking_time: 10,
      difficulty_level: 1,
      title: "Медовое варенье с сухофруктами",
      subtitle:
        "Если сделать смесь на основе меда, добавив сухофрукты и орехи, получится не только вкусно, но еще и очень полезно. Такое варенье отлично укрепит иммунитет и идеально дополнит блинчики, каши и десерты. Поэтому заготовить баночку медового десерта перед зимой не помешает. Тем более, что готовится оно очень легко — буквально за 10 минут. Из указанного количества ингредиентов получается одна банка варенья объемом 1,5 л.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9IWEVKcFUuanBlZw.jpg",
      preparation: {
        content:
          "Промойте и обсушите сухофрукты и орехи. Вымойте лимоны. Подготовьте простерилизованную баночку с крышкой.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC83b0RiaFcuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Нарежьте лимон на средние дольки произвольной формы, извлеките косточки. Выложите в чашу блендера.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy80R3BETTMuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Положите в блендер изюм и курагу. Добавьте грецкие орехи. Измельчите все в однородную массу.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zanlxSnguanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Добавьте мед и перемешайте, чтобы он полностью покрыл крошку из орехов и сухофруктов. После этого переложите массу в баночку и закройте крышкой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9DZHRRamUuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 183,
          weight: 500,
          custom_measure: "г",
          custom_measure_count: 500,
          title: "Лимон",
        },
        {
          id: 163,
          weight: 500,
          custom_measure: "г",
          custom_measure_count: 500,
          title: "Курага",
        },
        {
          id: 95,
          weight: 500,
          custom_measure: "г",
          custom_measure_count: 500,
          title: "Изюм",
        },
        {
          id: 72,
          weight: 500,
          custom_measure: "г",
          custom_measure_count: 500,
          title: "Грецкие орехи",
        },
        {
          id: 204,
          weight: 500,
          custom_measure: "г",
          custom_measure_count: 500,
          title: "Мед",
        },
      ],
      optional_ingredients: [
        {
          id: 19865,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Чай",
        },
      ],
      proteins: 5.1,
      fats: 12.34,
      carbs: 42.7,
      calories: 305.7,
    },
    {
      id: 218821,
      active_cooking_time: 30,
      total_cooking_time: 650,
      difficulty_level: 2,
      title: "Варенье «Слива в шоколаде»",
      subtitle:
        "Попробуйте приготовить сливовый десерт, добавив в него плитку шоколада. Его можно подать не только в качестве топинга к блинчикам, кашам или мороженому. Варенье отлично подойдет и как самостоятельный десерт к чаю или крепкому черному кофе. Если вы не любите слишком сладкое варенье, то сократите количество сахара. Но меньше 500 граммов класть не стоит, иначе оно получится кислым. Из указанного количества ингредиентов получается одна банка варенья объемом 1 л.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9nOHpNUnguanBlZw.jpg",
      preparation: {
        content:
          "Хорошо вымойте сливы и уберите из них косточки. Подготовьте банку с крышкой и заранее их простерилизуйте.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC83bTlMeTcuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Нарежьте сливы на четвертинки. Выложите в кастрюлю. Смешайте сахар с ванилином и засыпьте этой смесью фрукты. Оставьте их на 10 часов при комнатной температуре. Сливы должны пустить сок.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC92cHpzSlguanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Поставьте кастрюлю со сливами на плиту. Дождитесь, когда содержимое закипит. Оставьте вариться на медленном огне 50 минут. Помешивайте время от времени, чтобы масса не пригорала.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9YU1VwcE4uanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Разломайте шоколад на дольки. Выложите их к сливе. Подождите, пока шоколад растворится, и варенье начнет булькать. Снимите кастрюлю с плиты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9HbTM2UjguanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Выложите сливу с шоколадом в банку и закройте крышкой. Дождитесь, когда варенье остынет и отправьте на хранение.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zNFJ1TkouanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 689,
          weight: 1000,
          custom_measure: "кг",
          custom_measure_count: 1,
          title: "Сливы",
        },
        {
          id: 400,
          weight: 90,
          custom_measure: "г",
          custom_measure_count: 90,
          title: "Темный шоколад",
        },
        {
          id: 312,
          weight: 700,
          custom_measure: "г",
          custom_measure_count: 700,
          title: "Сахар",
        },
        {
          id: 44,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Ванилин",
        },
      ],
      optional_ingredients: [
        {
          id: 263,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Печенье",
        },
      ],
      proteins: 0.76,
      fats: 1.95,
      carbs: 46.81,
      calories: 192.13,
    },
    {
      id: 222138,
      active_cooking_time: 20,
      total_cooking_time: 35,
      difficulty_level: 2,
      title: "Печенье с черникой и кусочками шоколада",
      subtitle:
        "Печенье с черникой получается мягким внутри, но с хрустящими краями. Лучше брать именно сушеные ягоды, потому что свежие дадут слишком много сока, а это может повлиять на консистенцию теста. Формируйте печенье любого размера и формы. Только не делайте его толстым, чтобы оно пропеклось внутри и при этом не подгорело снаружи. Важно не передержать печенье в духовке, иначе оно получится слишком сухим и жестким. Как только края начнут подрумяниваться, можно его доставать.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNS8zWGt6NFUuanBlZw.jpg",
      preparation: {
        content:
          "Просейте муку. Заранее достаньте из холодильника сливочное масло, чтобы оно стало мягким. Застелите противень пергаментом. Подготовьте миксер.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC8zSjVhc3ouanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Взбейте миксером сливочное масло с коричневым и белым сахаром до полного растворения сахара. Добавьте разрыхлитель.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC83RVJKQVouanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Добавьте куриное яйцо и ванилин. Взбивайте до получения однородной консистенции.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC8zRlBQYjUuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Смешайте в другой миске просеянную муку и соль. Пересыпьте мучную смесь к масляной. Тщательно перемешайте при помощи миксера.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC9kaWhxMkEuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Мелко покрошите миндаль. Порубите шоколад в мелкую крошку. Положите в тесто чернику, миндаль и кусочки шоколада. Хорошо перемешайте, чтобы все добавки равномерно распределились по тесту.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC8zU0VSVXYuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Разделите тесто на 12 равных частей. Сформируйте из каждой части лепешку толщиной 5-7 мм. Выложите эти лепешки на противень. Посыпьте печенье солью. Отправьте противень в духовку, разогретую до 180˚С, на 12-14 минут. После выпекания дайте печенью немного остыть.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMC9HTTk2TjQuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 20614,
          weight: 150,
          custom_measure: "г",
          custom_measure_count: 150,
          title: "Вяленая черника",
        },
        {
          id: 338,
          weight: 180,
          custom_measure: "г",
          custom_measure_count: 180,
          title: "Сливочное масло",
        },
        {
          id: 411,
          weight: 180,
          custom_measure: "стакан",
          custom_measure_count: 1,
          title: "Тростниковый сахар",
        },
        {
          id: 312,
          weight: 90,
          custom_measure: "стакан",
          custom_measure_count: 0.5,
          title: "Сахар",
        },
        {
          id: 169,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное яйцо",
        },
        {
          id: 44,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Ванилин",
        },
        {
          id: 282,
          weight: 325,
          custom_measure: "стакан",
          custom_measure_count: 2.5,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 352,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Соль",
        },
        {
          id: 400,
          weight: 90,
          custom_measure: "г",
          custom_measure_count: 90,
          title: "Темный шоколад",
        },
        {
          id: 207,
          weight: 70,
          custom_measure: "стакан",
          custom_measure_count: 0.5,
          title: "Миндаль",
        },
        {
          id: 285,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Разрыхлитель теста",
        },
      ],
      optional_ingredients: [
        {
          id: 19865,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Чай",
        },
      ],
      proteins: 5.36,
      fats: 20.12,
      carbs: 47.16,
      calories: 390.66,
    },
    {
      id: 218851,
      active_cooking_time: 20,
      total_cooking_time: 200,
      difficulty_level: 1,
      title: "Шоколадная колбаса",
      subtitle:
        "Приготовить этот вкусный и просто десерт в домашних условиях будет очень легко. К измельченному в крошку печенью нужно добавить растопленное сливочное масло и хорошенько перемешать. Придайте полученной массе форму колбаски и отправьте в холодильник минимум на 3 часа. Чем тоньше получится эта колбаска, тем быстрее она застынет. Разнообразить вкус десерта поможет добавление какао-порошка, шоколада, сгущенного молока и измельченных орехов. Перед подачей нарежьте колбасу тонкими кружочками.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS80QWNUYkouanBlZw.jpg",
      preparation: {
        content:
          "Отмерьте нужное количество всех ингредиентов. Подготовьте большую миску, блендер с чашей и пищевую пленку.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS9DbnNmaDguanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Положите печенье в чашу блендера. Измельчите его до состояния мелкой крошки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS9xVVNSZ3QuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Налейте сливки в чистую миску. Добавьте сахар, какао-порошок. Поломайте к ним шоколад.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS8zTnl3Z2IuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Поставьте миску со сливками на водяную баню. Нагревайте до полного растворения сахара и шоколада, постоянно помешивая венчиком.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS8zeW15U3guanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Нарежьте сливочное масло на небольшие кусочки. Добавьте в миску с остальными ингредиентами на плите. Тщательно перемешайте, пока масло полностью не растопится. Снимите миску с водяной бани.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS9Dc0pmbzIuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Всыпьте в миску крошку печенья. Хорошенько перемешайте. Должна получиться эластичная масса, которая хорошо держит форму.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS80TnhzQ24uanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Выложите полученную массу на пищевую пленку. Придайте ей форму колбаски и плотно заверните в пленку. Уберите в холодильник на 3 часа.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS80VGJnUHIuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская, советская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 259,
          weight: 200,
          custom_measure: "г",
          custom_measure_count: 200,
          title: "Песочное печенье",
        },
        {
          id: 332,
          weight: 75,
          custom_measure: "ст. л.",
          custom_measure_count: 3,
          title: "Сливки 10% жирности",
        },
        {
          id: 411,
          weight: 90,
          custom_measure: "стакан",
          custom_measure_count: 0.5,
          title: "Тростниковый сахар",
        },
        {
          id: 338,
          weight: 90,
          custom_measure: "г",
          custom_measure_count: 90,
          title: "Сливочное масло",
        },
        {
          id: 101,
          weight: 25,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Какао-порошок",
        },
        {
          id: 217,
          weight: 30,
          custom_measure: "г",
          custom_measure_count: 30,
          title: "Молочный шоколад",
        },
      ],
      optional_ingredients: [
        {
          id: 196,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Малина",
        },
      ],
      proteins: 4.96,
      fats: 28.4,
      carbs: 48.35,
      calories: 467.14,
    },
    {
      id: 218817,
      active_cooking_time: 60,
      total_cooking_time: 60,
      difficulty_level: 2,
      title: "Варенье из черешни без косточек",
      subtitle:
        "Существует несколько способов приготовления варенья из ягод. В этом рецепте мы предлагаем наиболее щадящий вариант, хотя он и занимает больше времени. Вам нужно смешать черешню с сахаром, а затем проварить три раза с перерывами на остывание. Это поможет ягодам сохранить вид и не превратиться в пюре. Не забудьте добавить к черешне ломтики лимона. Они не только сбалансируют вкус, но и помогут получить более густое варенье. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9acGQ3NzUuanBlZw.jpg",
      preparation: {
        content:
          "Промойте черешню и обсушите бумажными полотенцами. Вымойте лимон. Подготовьте кастрюлю и простерилизованные банки.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9IRUtzemguanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description: "Очистите промытую черешню от косточек. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zVTQyamguanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Переложите черешню в кастрюлю. Всыпьте сахар и слегка перемешайте. Оставьте ягоды на 15-20 минут, чтобы они дали сок.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zQTMzZ2QuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Поставьте кастрюлю с черешней на медленный огонь. Помешивая, доведите ягоды до кипения. Следите за тем, чтобы весь сахар растворился.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC96MnFONHUuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Разрежьте лимон пополам. После этого каждую половинку нарежьте тонкими ломтиками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80NWFTcVguanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Снимите кастрюлю с черешней с плиты. Добавьте лимон к ягодам и тщательно перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80V3Juc1guanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Снова поставьте кастрюлю на слабый огонь. Дождитесь, когда содержимое закипит. После этого уберите варенье с плиты и остудите. Еще раз поставьте варенье на огонь. Снова дождитесь, пока оно закипит, а после остудите. Поставьте варенье из черешни на огонь третий раз. Когда оно закипит, проварите его в течение 5-15 минут. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9vUXl4Y3cuanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Уберите кастрюлю с плиты. Остудите варенье в течение 5-7 минут, а затем разложите по заранее подготовленным банкам.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80RTZiOFYuanBlZw.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Накройте банки с вареньем из черешни крышками и плотно их закрутите. Переверните закрытые банки и поставьте на стол крышками вниз. Накройте их полотенцем и оставьте на несколько часов до полного остывания. После этого варенье можно убрать на хранение.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9LSnhmRGcuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 705,
          weight: 1000,
          custom_measure: "кг",
          custom_measure_count: 1,
          title: "Черешня",
        },
        {
          id: 312,
          weight: 990,
          custom_measure: "стакан",
          custom_measure_count: 5.5,
          title: "Сахар",
        },
        {
          id: 183,
          weight: 120,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Лимон",
        },
      ],
      optional_ingredients: [
        {
          id: 228,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Мята",
        },
      ],
      proteins: 0.57,
      fats: 0.2,
      carbs: 52.45,
      calories: 174.15,
    },
    {
      id: 218804,
      active_cooking_time: 30,
      total_cooking_time: 390,
      difficulty_level: 2,
      title: "Ванильный крем",
      subtitle:
        "Вкусный бархатистый крем с ароматом ванили отлично дополнит любой десерт. Он получается густым, поэтому его очень удобно наносить в качестве украшения на кексы, пирожные и торты. Также он станет идеальной начинкой для эклеров и пончиков. Чтобы крем получился именно таким, важно соблюдать все этапы приготовления и точно следовать рекомендациям. Например, следует смешивать куриное яйцо с очень горячим молоком, чтобы оно заварилось. А вот сливки для взбивания, наоборот, должны быть очень холодными.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zQ2tpUUUuanBlZw.jpg",
      preparation: {
        content:
          "Помойте куриное яйцо. Подготовьте миксер. Охладите сливки в холодильнике.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80TTZVTnMuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Разотрите куриное яйцо с сахаром при помощи венчика в небольшой кастрюле.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80TFJFOXYuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Нагрейте молоко почти до кипения. Интенсивно перемешивая венчиком куриное яйцо, тонкой струйкой влейте к нему горячее молоко.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9NZzhOTlguanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Поставьте кастрюлю с молочно-яичной массой на слабый огонь и прогрейте до загустения, постоянно перемешивая.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80S3lBZVYuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Замочите желатин в ¼ стакана воды. Оставьте на 5 минут. Добавьте желатин в кастрюлю с кремом и хорошенько перемешайте. Охладите эту смесь.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zYlladDMuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Взбейте сливки миксером в пышную массу в течение 2-3 минут. Смешайте до однородной консистенции сливки с остывшей яично-молочной смесью. Добавьте ванилин, перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9wY3NVS1AuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Разложите крем по креманкам и отправьте в холодильник на 5-6 часов.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9xVlAyRmUuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 335,
          weight: 210,
          custom_measure: "мл",
          custom_measure_count: 210,
          title: "Сливки 33% жирности",
        },
        {
          id: 312,
          weight: 90,
          custom_measure: "г",
          custom_measure_count: 90,
          title: "Сахар",
        },
        {
          id: 553,
          weight: 400,
          custom_measure: "мл",
          custom_measure_count: 400,
          title: "Молоко 3,2%",
        },
        {
          id: 169,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное яйцо",
        },
        {
          id: 276,
          weight: 15,
          custom_measure: "ч. л.",
          custom_measure_count: 3,
          title: "Порошковый желатин",
        },
        {
          id: 44,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Ванилин",
        },
      ],
      optional_ingredients: [
        {
          id: 209,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Миндальные лепестки",
        },
        {
          id: 228,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Мята",
        },
      ],
      proteins: 4.73,
      fats: 11.12,
      carbs: 15,
      calories: 178.37,
    },
  ],
  bakery: [
    {
      id: 219432,
      active_cooking_time: 50,
      total_cooking_time: 150,
      difficulty_level: 3,
      title: "Булочки с клубникой",
      subtitle:
        "Рецепт теста для булочек универсален. Наполнить выпечку можно любыми фруктами и ягодами, у нас - клубника. Эта ягода достаточно сладкая для того, чтобы не добавлять в нее дополнительный сахар. Поэтому булочки получатся не приторными. Лучше брать ягоды с легкой кислинкой, чтобы вкус выпечки получился более интересным.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zcHNYbk0uanBlZw==.jpg",
      preparation: {
        content: "Промойте клубнику. Просейте муку.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80WHNoSEguanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Слегка нагрейте молоко, чтобы оно стало чуть теплым. Разведите в нем сахар и дрожжи и оставьте на 10-15 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zY2VHS0suanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Растопите масло в небольшом ковшике на слабом огне. Влейте его в муку. Отделите белок от желтка. Добавьте белок в муку с маслом. Всыпьте туда же соль и влейте дрожжевую смесь.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80Vk5KaEQuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Замесите тесто и оставьте его, накрыв полотенцем, в теплом месте на час подниматься.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9KV3lZVUYuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Разделите тесто на 6 частей и раскатайте каждую в лепешку толщиной 3 мм. Сделайте с двух сторон слегка округлые надрезы на расстоянии примерно 2-3 см от края.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zZ0tUb1AuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Выложите на центр теста несколько ягод. Заверните поочередно внахлест друг на друга надрезанные края так, чтобы начинка осталась открытой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zcXROSmIuanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Разогрейте духовку до 190 °C. Застелите противень пергаментом и выложите заготовки булочек. Смажьте тесто желтком. Отправьте в духовку на 30 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9aOXJCOEYuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 117,
          weight: 300,
          custom_measure: "г",
          custom_measure_count: 300,
          title: "Клубника",
        },
        {
          id: 282,
          weight: 325,
          custom_measure: "стакан",
          custom_measure_count: 2.5,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 211,
          weight: 150,
          custom_measure: "стакан",
          custom_measure_count: 0.75,
          title: "Молоко",
        },
        {
          id: 368,
          weight: 4,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Сухие дрожжи",
        },
        {
          id: 169,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное яйцо",
        },
        {
          id: 338,
          weight: 40,
          custom_measure: "г",
          custom_measure_count: 40,
          title: "Сливочное масло",
        },
        {
          id: 312,
          weight: 90,
          custom_measure: "стакан",
          custom_measure_count: 0.5,
          title: "Сахар",
        },
        {
          id: 352,
          weight: 10,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Соль",
        },
      ],
      optional_ingredients: [
        {
          id: 313,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Сахарная пудра",
        },
      ],
      proteins: 5.16,
      fats: 5.04,
      carbs: 34.77,
      calories: 205.36,
    },
    {
      id: 219424,
      active_cooking_time: 60,
      total_cooking_time: 110,
      difficulty_level: 3,
      title: "Тарт с клубникой",
      subtitle:
        "Тарт - традиционная французская выпечка на основе песочного теста. Его готовят с несложной начинкой, сытной или сладкой. Мы выбрали начинку из клубники. Чтобы ягоды не растекались, мы добавили немного крахмала и проварили клубнику, пока она не загустела. А затем запекли вместе с тестом в духовке. Клубничный тарт можно подавать теплым, с шариком мороженого, или охлажденным. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zR2Z5UDkuanBlZw==.jpg",
      preparation: {
        content:
          "Просейте муку. Вымойте клубнику. Масло положите в холодильник, чтобы оно было холодным. Подготовьте круглую форму для выпекания.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zUGFzM0ouanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Смешайте муку с солью. Масло нарежьте кубиками, добавьте в мучную смесь и перетрите в крошку. Старайтесь делать это быстро, пока масло не растаяло под воздействием тепла рук.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zOWtDYjQuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description: " Взбейте блендером желтки с сахарной пудрой и ванилью.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80VkJ3emguanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Перелейте яичную смесь в масляно-мучную крошку. Замесите мягкое эластичное тесто. Смажьте маслом форму для выпекания. Утрамбуйте тесто по форме, формируя бортики. Уберите в холодильник на полчаса.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zSGNpMjMuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Разогрейте духовку до 190 градусов. Сделайте в тесте несколько проколов вилкой. Накройте пергаментом и насыпьте по всей поверхности бумаги фасоль. Отправьте форму в духовку на 15 минут. По истечении времени достаньте, уберите пергамент с фасолью, она больше не понадобится.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zTWRtMjguanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Пока тесто выпекается, нарежьте на половинки клубнику и засыпьте сахаром. Поставьте на плиту и доведите до кипения на слабом огне.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9UVEt1WFEuanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Разведите в воде крахмал и влейте в кастрюлю с клубникой. Помешивайте, пока ягодная масса не загустеет.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80V2dCYU0uanBlZw==.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Переложите клубничную начинку на тесто и отправьте в духовку при той же температуре еще на 15-20 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS90ZWhDSzMuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Европейская, французская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 117,
          weight: 500,
          custom_measure: "г",
          custom_measure_count: 500,
          title: "Клубника",
        },
        {
          id: 313,
          weight: 70,
          custom_measure: "стакан",
          custom_measure_count: 0.5,
          title: "Сахарная пудра",
        },
        {
          id: 87,
          weight: 51,
          custom_measure: "шт.",
          custom_measure_count: 3,
          title: "Желток куриного яйца",
        },
        {
          id: 282,
          weight: 260,
          custom_measure: "стакан",
          custom_measure_count: 2,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 338,
          weight: 140,
          custom_measure: "г",
          custom_measure_count: 140,
          title: "Сливочное масло",
        },
        {
          id: 352,
          weight: 2,
          custom_measure: "ч. л.",
          custom_measure_count: 0.2,
          title: "Соль",
        },
        {
          id: 45,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Ваниль",
        },
        {
          id: 312,
          weight: 135,
          custom_measure: "стакан",
          custom_measure_count: 0.75,
          title: "Сахар",
        },
        {
          id: 161,
          weight: 30,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Кукурузный крахмал",
        },
        {
          id: 54,
          weight: 100,
          custom_measure: "стакан",
          custom_measure_count: 0.5,
          title: "Вода",
        },
      ],
      optional_ingredients: [
        {
          id: 454,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Ягоды",
        },
        {
          id: 228,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Мята",
        },
      ],
      proteins: 3.17,
      fats: 10.46,
      carbs: 34.64,
      calories: 242.75,
    },
    {
      id: 221954,
      active_cooking_time: 50,
      total_cooking_time: 100,
      difficulty_level: 3,
      title: "Сметанное печенье с начинкой из сгущенки",
      subtitle:
        "Чем жирнее и гуще сметана, тем более сдобным и рассыпчатым получится тесто. Можно купить уже готовую вареную сгущенку. А для тех, у кого дома есть обычная, показали, как сварить ее у себя на кухне. Тесто на маргарине не нужно выдерживать в холодильнике. Раскатайте его сразу после замешивания, сформируйте печенье и поставьте его в духовку. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zekNiVHEuanBlZw==.jpg",
      preparation: {
        content:
          "Просейте муку в объемную миску. Подготовьте еще одну глубокую миску, венчик, жаропрочную емкость и кастрюлю для водяной бани, емкость, подходящую для нагревания в микроволновой печи, скалку, широкое десертное блюдо.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zWllINlMuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Налейте в кастрюлю для водяной бани воду примерно на ⅔ объема. Поставьте посуду на сильный огонь и доведите воду до кипения. Перелейте сгущенное молоко в жаропрочную емкость и установите ее на кастрюле с кипящей водой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zNnc4ODcuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Уменьшите огонь под кастрюлей до среднего и варите сгущенное молоко, периодически перемешивая от стенок емкости к центру, в течение 40-50 минут, пока молоко не загустеет и не потемнеет до карамельного цвета. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zNVJpMjguanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Выложите маргарин в емкость, подходящую для нагревания в микроволновой печи. Растопите маргарин до жидкого состояния за 2-3 приема по 30-40 секунд. Дайте растопленному маргарину полностью остыть при комнатной температуре.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS9ucHBmbmQuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Разбейте яйцо в чистую миску. Всыпьте к нему 1,5 ст.л. сахара и соль, хорошо взбейте венчиком до однородности.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zZk1WNWEuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Погасите соду уксусом, выложите получившуюся смесь в миску к взбитому яйцу. Положите туда же сметану, влейте остывший растопленный маргарин и все как следует перемешайте венчиком.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS94TUhvNFQuanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Отложите от общей массы просеянной муки 1 ст.л. для раскатывания теста. В миску с оставшейся мукой влейте яично-маргариновую смесь. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS9CalB0cEQuanBlZw==.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Присыпьте рабочую поверхность отложенной мукой. Разделите тесто на 2 части, придайте каждой части форму шара. Раскатайте каждый шар в круглую лепешку толщиной примерно 3-4 мм. Разрежьте каждую лепешку на 8 секторов.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS80NGplOG8uanBlZw==.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Положите на широкое основание каждого сектора около ⅓ ч.л. вареного сгущенного молока. Сверните каждый треугольник теста с начинкой в рулет, начиная с основания и заканчивая длинным острым углом, чтобы получился маленький рогалик.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zamhrWEMuanBlZw==.jpg",
        },
        {
          title: "Шаг 9",
          description:
            "Включите духовку разогреваться до 180°С. Застелите противень пергаментной бумагой. Выложите печенье на противень. Посыпьте его сахаром и уберите в духовку на 20 минут 180°С.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOS8zVm1MUHkuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 282,
          weight: 300,
          custom_measure: "г",
          custom_measure_count: 300,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 346,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Сметана 20% жирности",
        },
        {
          id: 199,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Маргарин",
        },
        {
          id: 169,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное яйцо",
        },
        {
          id: 312,
          weight: 50,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Сахар",
        },
        {
          id: 352,
          weight: 1,
          custom_measure: "г",
          custom_measure_count: 1,
          title: "Соль",
        },
        {
          id: 348,
          weight: 1.25,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Сода",
        },
        {
          id: 608,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Столовый уксус 9%",
        },
        {
          id: 327,
          weight: 270,
          custom_measure: "г",
          custom_measure_count: 270,
          title: "Сгущенное молоко",
        },
      ],
      optional_ingredients: [
        {
          id: 313,
          weight: 4,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Сахарная пудра",
        },
        {
          id: 228,
          weight: 4,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Мята",
        },
        {
          id: 196,
          weight: 20,
          custom_measure: "ч. л.",
          custom_measure_count: 2,
          title: "Малина",
        },
        {
          id: 146,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Кофе",
        },
      ],
      proteins: 6.78,
      fats: 15.54,
      carbs: 45.41,
      calories: 340.74,
    },
    {
      id: 219124,
      active_cooking_time: 50,
      total_cooking_time: 220,
      difficulty_level: 3,
      title: "Классический итальянский пирог кростата",
      subtitle:
        "Сладкий итальянский пирог кростата пекут с самыми разными начинками: со свежими фруктами, джемом или творогом, взбитым со сливками. Но в основе у него всегда тонкое песочное тесто, на котором размещается объемный слой начинки. Кростату делают открытой, закрытой или с «решеткой» из тонких полосок теста.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9KeW1BcEouanBlZw==.jpg",
      preparation: {
        content:
          "Заранее достаньте сливочное масло из холодильника, чтобы оно размягчилось при комнатной температуре. Помойте яйца и лимон, промокните их от влаги бумажными полотенцами. Просейте муку. Подготовьте миски, миксер, пищевую пленку, скалку, сито, терку, пергаментную бумагу, сухую фасоль или горох для груза, круглую глубокую форму для пирога диаметром 20-22 см.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zdFdtNlAuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Разделите 2 яйца на желтки и белки. Соедините в одной миске один желток и одно целое яйцо. Всыпьте к желтку с яйцом 0,5 стакана сахарной пудры. Взбейте миксером в течение 3-4 минут до светлой пены.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy80VFoySFkuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Положите во взбитую массу мягкое сливочное масло. Еще раз перемешайте миксером до однородной консистенции.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9QcEsyUncuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Отложите 0,5 ст.л. муки для раскатывания теста. Всыпьте оставшуюся муку в яично-масляную массу. Замесите сначала лопаткой, потом руками пластичное песочное тесто. Заверните тесто в пленку и положите его в холодильник на 1-2 часа.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zVGdydlQuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Снимите цедру с половины лимона при помощи мелкой терки. Выложите цедру в чистую миску. Протрите в эту же миску творог через сито. Добавьте к творогу одно целое яйцо и один желток, а также 0,5 стакана сахарной пудры, ванильную эссенцию и сливки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9wZ1I2V2YuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Помойте и оботрите насухо насадки миксера. Взбейте на небольшой скорости творог с другими ингредиентами до состояния густого крема.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9iTXAzcjMuanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Присыпьте стол отложенной мукой, выложите на него охлажденное тесто. Отделите от теста ⅓ часть, отложите ее в сторону. Раскатайте оставшееся тесто в круглый пласт диаметром примерно на 5 см больше, чем диаметр формы для пирога.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9CcEVmZFIuanBlZw==.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Разогрейте духовку до 200°C. Смажьте форму для выпечки 0,5 ч.л. сливочного масла. Уложите раскатанный пласт теста в форму, сформируйте по стенкам формы бортики из теста. Постелите лист пергамента на тесто в форме. Насыпьте на пергамент сухую фасоль или горох.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy80REx5YjQuanBlZw==.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Поставьте форму в духовку и выпекайте основу для пирога в течение 15 минут. Достаньте основу из духовки и аккуратно уберите с нее пергамент с фасолью или горохом.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zZVBvVzYuanBlZw==.jpg",
        },
        {
          title: "Шаг 9",
          description:
            "Раскатайте ⅓ теста в пласт толщиной около 2 мм. Вырежьте из него длинные полоски шириной 1-1,5 см. Выложите на испеченную основу из теста творожную начинку. Закройте начинку «решеткой» из полосок теста.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy94Rml3U3EuanBlZw==.jpg",
        },
        {
          title: "Шаг 10",
          description:
            "Поместите форму с заготовкой в духовку и пеките пирог при 200°C в течение 20 минут. Затем уменьшите нагрев духовки до 150°C и подержите в ней пирог еще 15 минут. После этого остудите пирог и переложите его на десертное блюдо.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy80RXNyeUouanBlZw==.jpg",
        },
      ],
      kitchen_type: "Итальянская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 313,
          weight: 140,
          custom_measure: "г",
          custom_measure_count: 140,
          title: "Сахарная пудра",
        },
        {
          id: 282,
          weight: 200,
          custom_measure: "г",
          custom_measure_count: 200,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 396,
          weight: 300,
          custom_measure: "г",
          custom_measure_count: 300,
          title: "Творог 9% жирности",
        },
        {
          id: 338,
          weight: 80,
          custom_measure: "г",
          custom_measure_count: 80,
          title: "Сливочное масло",
        },
        {
          id: 169,
          weight: 240,
          custom_measure: "шт.",
          custom_measure_count: 4,
          title: "Куриное яйцо",
        },
        {
          id: 183,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 0.5,
          title: "Лимон",
        },
        {
          id: 335,
          weight: 100,
          custom_measure: "мл",
          custom_measure_count: 100,
          title: "Сливки 33% жирности",
        },
        {
          id: 6052,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Ванильная эссенция",
        },
      ],
      optional_ingredients: [
        {
          id: 313,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Сахарная пудра",
        },
        {
          id: 13001,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Цедра апельсина",
        },
      ],
      proteins: 9.18,
      fats: 13.92,
      carbs: 25.99,
      calories: 265.43,
    },
    {
      id: 219116,
      active_cooking_time: 30,
      total_cooking_time: 70,
      difficulty_level: 2,
      title: "Пицца с сыром и овощами",
      subtitle:
        "Баклажан и кабачок сделают пиццу сытной, а помидор и болгарский перец аппетитно запекутся под сыром и наполнят начинку овощными соками. Чтобы приготовить веганский вариант пиццы, замените обычный сыр соевым сыром тофу. Тесто на быстродействующих дрожжах поднимется быстро, и на приготовление уйдет чуть больше 1 часа.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy93cE5oVFAuanBlZw==.jpg",
      preparation: {
        content:
          "Вскипятите в чайнике воду и немного остудите. Просейте муку в глубокую миску. Помойте кабачок, баклажан, помидор, болгарский перец и базилик. Вырежьте у перца сердцевину с семенами, срежьте с кабачка грубую кожуру. Подготовьте терку, пиалу, чистое тканевое полотенце.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9mOUEyVEguanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Соедините в пиале теплую воду, сухие дрожжи, ¼ ч.л. соли и мед. Все хорошо перемешайте и влейте в миску с мукой. Добавьте оливковое масло и замесите мягкое упругое тесто. Прикройте миску с тестом полотенцем и дайте ему постоять в тепле 20-30 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zYzU3YVQuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Нарежьте баклажан полукольцами, выложите на тарелку и присыпьте ¼ ч.л. соли. Оставьте на 10-15 минут. Нарежьте кабачок круглыми слайсами, разрежьте помидоры на дольки, а перец нашинкуйте полосками. Отделите листочки базилика от стебля.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy80R05lbnUuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Выложите поднявшееся тесто на стол, обомните его и придайте форму круглой лепешки толщиной примерно 1-2 см. Застелите противень пергаментной бумагой. Переложите лепешку на противень. Смажьте тесто кетчупом, отступая от края на 1-1,5 см. Равномерно распределите по лепешке ломтики баклажана и кабачка, помидоры и полоски перца.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zWkxLZDUuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Разогрейте духовку до 180°C. Присыпьте овощи на лепешке приправой для пиццы, промажьте все майонезом. Натрите сыр, посыпьте заготовку для пиццы и поставьте противень в духовку. Выпекайте пиццу в течение 25-30 минут, пока края теста не подрумянятся, а сыр не расплавится. Достаньте пиццу и разложите на ней листочки базилика.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zczk3WEQuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Европейская, итальянская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 282,
          weight: 130,
          custom_measure: "стакан",
          custom_measure_count: 1,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 54,
          weight: 70,
          custom_measure: "мл",
          custom_measure_count: 70,
          title: "Вода",
        },
        {
          id: 368,
          weight: 4,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Сухие дрожжи",
        },
        {
          id: 431,
          weight: 7,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Цветочный мед",
        },
        {
          id: 240,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Оливковое масло",
        },
        {
          id: 13,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Баклажан",
        },
        {
          id: 99,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Кабачок",
        },
        {
          id: 272,
          weight: 80,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Помидор",
        },
        {
          id: 12402,
          weight: 150,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Красный болгарский перец",
        },
        {
          id: 12,
          weight: 7,
          custom_measure: "веточка",
          custom_measure_count: 1,
          title: "Базилик",
        },
        {
          id: 271,
          weight: 70,
          custom_measure: "г",
          custom_measure_count: 70,
          title: "Полутвердый сыр",
        },
        {
          id: 112,
          weight: 50,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Кетчуп",
        },
        {
          id: 194,
          weight: 50,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
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
          id: 278,
          weight: 1,
          custom_measure: "г",
          custom_measure_count: 1,
          title: "Приправа универсальная",
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
      ],
      proteins: 4.42,
      fats: 8.15,
      carbs: 16.56,
      calories: 157.69,
    },
    {
      id: 221889,
      active_cooking_time: 20,
      total_cooking_time: 70,
      difficulty_level: 2,
      title: "Персиковый пирог на миндальной муке",
      subtitle:
        "Для этого персикового пирога не понадобится пшеничная мука. Вместо нее измельчите миндаль в мелкую крошку или возьмите уже готовую миндальную муку. Тесто получится пластичным, так что можно будет придать ему любую форму. Или просто выложите тесто ровным слоем в форму для запекания. Остается красиво выложить персики и отправить пирог в духовку. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMS80WHBpY3MuanBlZw==.jpg",
      preparation: {
        content:
          "Помойте персики, разрежьте пополам и уберите косточки. Помойте и высушите миндаль. Достаньте сливочное масло из холодильника заранее, чтобы оно стало мягким. Подготовьте форму для запекания, миксер и блендер с чашей.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC80M1NrUDIuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description: "Измельчите в блендере миндаль до мелкой крошки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8zWU50S2MuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Положите в миску масло, оставив одну чайную ложку для смазывания формы. Добавьте куриное яйцо, 3/4 стакана сахара, ванилин и молоко. Тщательно перемешайте при помощи миксера.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9GeU1Lb1UuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Всыпьте разрыхлитель и измельченный миндаль. Замесите однородное тесто.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC80Q3NjR3ouanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Нарежьте персики небольшими дольками. Положите их в другую миску, всыпьте оставшийся сахар и мускатный орех. Перемешайте начинку.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9nTlZwSnIuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Смажьте форму для запекания оставшимся сливочным маслом. Равномерно распределите форму по дну. Разровняйте поверхность лопаткой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC94Vmd5V1YuanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Сверху разложите кусочки персиков, слегка вдавливая их в тесто. Отправьте форму в духовку, разогретую до 180°С, на 50 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8zZ2M2VlcuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 207,
          weight: 140,
          custom_measure: "г",
          custom_measure_count: 140,
          title: "Миндаль",
        },
        {
          id: 225,
          weight: 3,
          custom_measure: "г",
          custom_measure_count: 3,
          title: "Мускатный орех",
        },
        {
          id: 44,
          weight: 2.5,
          custom_measure: "г",
          custom_measure_count: 2.5,
          title: "Ванилин",
        },
        {
          id: 312,
          weight: 180,
          custom_measure: "г",
          custom_measure_count: 180,
          title: "Сахар",
        },
        {
          id: 285,
          weight: 5,
          custom_measure: "г",
          custom_measure_count: 5,
          title: "Разрыхлитель теста",
        },
        {
          id: 685,
          weight: 660,
          custom_measure: "г",
          custom_measure_count: 660,
          title: "Персики",
        },
        {
          id: 696,
          weight: 100,
          custom_measure: "мл",
          custom_measure_count: 100,
          title: "Молоко 2,5% жирности",
        },
        {
          id: 169,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное яйцо",
        },
      ],
      optional_ingredients: [
        {
          id: 313,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Сахарная пудра",
        },
      ],
      proteins: 3.74,
      fats: 8.03,
      carbs: 24.56,
      calories: 176.29,
    },
    {
      id: 218828,
      active_cooking_time: 30,
      total_cooking_time: 100,
      difficulty_level: 3,
      title: "Песочный пирог с безе",
      subtitle:
        "В этом пироге легкое безе сочетается с песочным хрустящим коржом и сладкой творожной начинкой. Взбитые до устойчивых пиков белки добавляются в пирог в последнюю очередь, когда он уже почти готов. Просто выложите их ровным слоем поверх теста. Прежде чем поставить пирог с безе обратно в духовку, сверху посыпьте его сахаром. По мере выпекания он карамелизируется, придавая аппетитный золотистый оттенок и дополнительную сладость.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80VkF1WXEuanBlZw==.jpg",
      preparation: {
        content:
          "Просейте муку. Помойте куриные яйца. Уберите сливочное масло на 30 минут в морозилку перед приготовлением пирога. Подготовьте миксер.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9DYXdTbUQuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Натрите застывшее масло на крупной терке. Смешайте муку с разрыхлителем и насыпьте в миску с маслом. Перетрите муку с маслом в крошку.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80NWd6S3kuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Добавьте 2 ст.л. сахара и 1 куриное яйцо. Замесите плотное однородное тесто. Уберите его в холодильник на 30 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9GbzJvVHIuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "В это время в другой миске тщательно смешайте творог со сметаной, тремя яичными желтками, манкой, ванилином и оставшимся сахаром.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zMlUyWHEuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Разогрейте духовку до 180°C. Раскатайте тесто в тонкий пласт и переложите в форму для запекания, формируя бортики. Выложите начинку ровным слоем. Отправьте пирог в духовку на 25 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80N1A0VnEuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "За 5 минут до готовности пирога взбейте миксером 3 яичных белка с сахарной пудрой до устойчивых пиков.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zcTd5OG4uanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Выложите взбитые белки на пирог и верните его в духовку еще на 15 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zckNjN1EuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для песочной основы и начинки",
      optional_ingredient_title: "Для безе",
      main_ingredients: [
        {
          id: 282,
          weight: 130,
          custom_measure: "стакан",
          custom_measure_count: 1,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 338,
          weight: 90,
          custom_measure: "г",
          custom_measure_count: 90,
          title: "Сливочное масло",
        },
        {
          id: 312,
          weight: 140,
          custom_measure: "г",
          custom_measure_count: 140,
          title: "Сахар",
        },
        {
          id: 169,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное яйцо",
        },
        {
          id: 285,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Разрыхлитель теста",
        },
        {
          id: 394,
          weight: 450,
          custom_measure: "г",
          custom_measure_count: 450,
          title: "Творог",
        },
        {
          id: 345,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Сметана 15% жирности",
        },
        {
          id: 87,
          weight: 51,
          custom_measure: "шт.",
          custom_measure_count: 3,
          title: "Желток куриного яйца",
        },
        {
          id: 198,
          weight: 16,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Манная крупа",
        },
        {
          id: 44,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Ванилин",
        },
      ],
      optional_ingredients: [
        {
          id: 22,
          weight: 99,
          custom_measure: "шт.",
          custom_measure_count: 3,
          title: "Белок куриного яйца",
        },
        {
          id: 313,
          weight: 75,
          custom_measure: "ст. л.",
          custom_measure_count: 3,
          title: "Сахарная пудра",
        },
      ],
      proteins: 10.08,
      fats: 11.05,
      carbs: 26.96,
      calories: 243.1,
    },
    {
      id: 218819,
      active_cooking_time: 50,
      total_cooking_time: 70,
      difficulty_level: 2,
      title: "Волованы с грибной начинкой",
      subtitle:
        "Волованы идеально подходят в качестве закуски и могут стать достойными конкурентами канапе на фуршете. Основа из нежного слоеного теста заполняется любой начинкой, обычно несладкой. Идеальным вариантом могут стать паштеты или овощные пюре. Мы выбрали шампиньоны, обжарили их с луком и измельчили в блендере.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zV29QWlQuanBlZw==.jpg",
      preparation: {
        content:
          "Разморозьте тесто заранее, если оно было заморожено. Тщательно вымойте и обсушите грибы, лук и яйцо. Снимите с лука шелуху. Подготовьте силиконовую кисточку, блендер и формочки-вырубки для волованов. По форме они должны быть одинаковыми, но двух разных размеров: побольше и поменьше.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC82ZGZoYkcuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Раскатайте тесто в пласт толщиной примерно 3-4 мм. Возьмите формочки одинаковой формы, но разного размера: побольше и поменьше. Вырежьте из теста заготовки для волованов. У половины из них формочками меньшего размера вырежьте середину, чтобы получился толстый контур из теста.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC94c3pFSGsuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Разогрейте духовку до 180°C. Застелите форму для запекания пергаментом. Выложите основные круглые заготовки на противень.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9NdXVScU4uanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Отделите у яйца белок от желтка. Смажьте желтком тесто на противне. Выложите заготовки-контуры сверху на круглые основания, должна получиться плоская «корзиночка».",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9SQVgyS1AuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Смажьте волованы желтком при помощи силиконовой кисточки. Отправьте в разогретую духовку на 20 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9KTWNLRGkuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Нарежьте шампиньоны небольшими произвольными пластинками. Накрошите лук мелкими кубиками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zZ0FGc1YuanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Разогрейте сковороду с маслом. Выложите в нее лук. Помешивая, обжарьте до прозрачности.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zOEJoVlAuanBlZw==.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Добавьте к луку грибы. Жарьте, пока грибы не подрумянятся, а жидкость не выпарится.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9nWFNCc0QuanBlZw==.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Посолите и поперчите овощи. Добавьте сметану и чабрец к луку и грибам, перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9BMlN1dnYuanBlZw==.jpg",
        },
        {
          title: "Шаг 9",
          description:
            "Выложите грибы с луком в чашу блендера. Измельчите в однородное пюре.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9wYUJVN2suanBlZw==.jpg",
        },
        {
          title: "Шаг 10",
          description:
            "Достаньте волованы из духовки. Наполните их грибной начинкой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zcmFuU0ouanBlZw==.jpg",
        },
      ],
      kitchen_type: "Французская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 677,
          weight: 250,
          custom_measure: "г",
          custom_measure_count: 250,
          title: "Слоеное тесто",
        },
        {
          id: 445,
          weight: 192,
          custom_measure: "шт.",
          custom_measure_count: 6,
          title: "Шампиньоны",
        },
        {
          id: 290,
          weight: 80,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Репчатый лук",
        },
        {
          id: 169,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное яйцо",
        },
        {
          id: 384,
          weight: 7,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Сушеный тимьян / чабрец",
        },
        {
          id: 343,
          weight: 50,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Сметана",
        },
        {
          id: 287,
          weight: 34,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Растительное масло",
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
      ],
      optional_ingredients: [
        {
          id: 19865,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Чай",
        },
      ],
      proteins: 4.66,
      fats: 15.34,
      carbs: 17.1,
      calories: 223.65,
    },
    {
      id: 218811,
      active_cooking_time: 30,
      total_cooking_time: 70,
      difficulty_level: 2,
      title: "Творожный пирог с вишней",
      subtitle:
        "Этот красивый пирог готовится очень просто. Бездрожжевое тесто не требует расстойки и соблюдения температурного режима. Просто смешайте все ингредиенты и выложите в форму для запекания. Выпечка получится пышной благодаря добавлению гашеной соды. Для приготовления начинки рекомендуем измельчить творог блендером или перетереть его через сито. Так творожная масса станет более нежной и воздушной.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80NjVyVEIuanBlZw==.jpg",
      preparation: {
        content:
          "Переберите вишню от листочков и веточек, промойте ягоды под проточной водой и обсушите на бумажных полотенцах. Удалите косточки из вишни. Просейте муку. Помойте куриные яйца. Подготовьте форму для запекания, миксер и погружной блендер.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9Dc2pRZnouanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Взбейте миксером 2 куриных яйца и 1 стакан сахара в пышную массу.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80NDlWd3MuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Растопите сливочное масло в микроволновке или на плите. Остудите его и влейте к яйцам. Смешайте все при помощи миксера.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC91SGVpWFcuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Погасите соду столовым уксусом или лимонным соком. Добавьте к яичной массе 5 ст.л. молока, соль и гашеную соду. Тщательно перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9iVENzenguanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Порциями добавьте в тесто муку. После каждой порции тщательно вымешивайте тесто до получения однородной консистенции без комочков.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC92bUtrWjMuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Смажьте форму для запекания растительным маслом. Выложите в форму тесто и разровняйте поверхность лопаткой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC84VURTcW0uanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Разрежьте каждую вишенку пополам. Выложите всю вишню поверх теста равномерным слоем.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zcVNhY1EuanBlZw==.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Измельчите творог с сахаром при помощи блендера. Добавьте куриное яйцо, 2 ст.л. молока и крахмал. Тщательно перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zVEZXc3IuanBlZw==.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Выложите начинку на тесто. Отправьте пирог в духовку, разогретую до 180°C, на 40 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9YY1hqa1AuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для теста",
      optional_ingredient_title: "Для начинки",
      main_ingredients: [
        {
          id: 312,
          weight: 180,
          custom_measure: "г",
          custom_measure_count: 180,
          title: "Сахар",
        },
        {
          id: 338,
          weight: 120,
          custom_measure: "г",
          custom_measure_count: 120,
          title: "Сливочное масло",
        },
        {
          id: 169,
          weight: 120,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Куриное яйцо",
        },
        {
          id: 553,
          weight: 100,
          custom_measure: "мл",
          custom_measure_count: 100,
          title: "Молоко 3,2%",
        },
        {
          id: 348,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Сода",
        },
        {
          id: 363,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Столовый уксус",
        },
        {
          id: 282,
          weight: 390,
          custom_measure: "стакан",
          custom_measure_count: 3,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 287,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Растительное масло",
        },
      ],
      optional_ingredients: [
        {
          id: 394,
          weight: 270,
          custom_measure: "г",
          custom_measure_count: 270,
          title: "Творог",
        },
        {
          id: 507,
          weight: 300,
          custom_measure: "г",
          custom_measure_count: 300,
          title: "Вишня",
        },
        {
          id: 312,
          weight: 90,
          custom_measure: "г",
          custom_measure_count: 90,
          title: "Сахар",
        },
        {
          id: 169,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное яйцо",
        },
        {
          id: 553,
          weight: 40,
          custom_measure: "мл",
          custom_measure_count: 40,
          title: "Молоко 3,2%",
        },
        {
          id: 15314,
          weight: 40,
          custom_measure: "г",
          custom_measure_count: 40,
          title: "Крахмал",
        },
      ],
      proteins: 6.9,
      fats: 8.62,
      carbs: 35.45,
      calories: 242.69,
    },
    {
      id: 218777,
      active_cooking_time: 40,
      total_cooking_time: 60,
      difficulty_level: 2,
      title: "Пирожки с ягодной начинкой",
      subtitle:
        "Одна из лучших начинок для сладких пирожков — ягоды. Какие бы вы не взяли, они не будут слишком приторными и добавят выпечке приятную кислинку. Берите любые: свежие или замороженные, вишню или клубнику. Только перед приготовлением ягоды нужно смешать с крахмалом — он впитает лишний сок, и не даст начинке вытечь. Вкус выпечки отлично подчеркнет тесто на твороге.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9WbjNtYWYuanBlZw==.jpg",
      preparation: {
        content:
          "Промойте ягоды, если они свежие, или разморозьте и слейте лишнюю жидкость с замороженных. Дважды просейте муку, чтобы наполнить ее кислородом. Вымойте яйцо.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zWVp6UWcuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Взболтайте яйцо вилкой или венчиком. Протрите творог через сито и смешайте его с яйцом.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zRWhiOEQuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Всыпьте в яично-творожную смесь сахар, соль и разрыхлитель. Перемешайте и начните порционно добавлять муку. После каждой части хорошо перемешивайте, чтобы не оставалось комочков. Замесите гладкое тесто. Оставьте отдыхать, пока готовите начинку.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80TjRmeEwuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Положите ягоды в миску. Засыпьте крахмалом. Перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zdjRwUVEuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Разделите тесто на 9 равных частей. Раскатайте каждый кусочек в лепешку. Не делайте ее слишком тонкой, иначе тесто порвется, а начинка вытечет.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9pTm9vRUIuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Положите немного начинки на каждую часть раскатанного теста.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80QkFnR0wuanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Разогрейте духовку до 180°C. Застелите противень пергаментом или силиконовым ковриком. Скрепите края теста над начинкой. Уложите пирожки на противень, чтобы они не соприкасались друг с другом. Выпекайте 20 минут до красивого румянца.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9IY0Jkb3AuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 196,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Малина",
        },
        {
          id: 466,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Голубика",
        },
        {
          id: 394,
          weight: 90,
          custom_measure: "г",
          custom_measure_count: 90,
          title: "Творог",
        },
        {
          id: 282,
          weight: 130,
          custom_measure: "стакан",
          custom_measure_count: 1,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 285,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Разрыхлитель теста",
        },
        {
          id: 169,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное яйцо",
        },
        {
          id: 15314,
          weight: 8,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Крахмал",
        },
        {
          id: 312,
          weight: 50,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Сахар",
        },
        {
          id: 352,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Соль",
        },
      ],
      optional_ingredients: [
        {
          id: 19865,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Чай",
        },
      ],
      proteins: 7.21,
      fats: 2.52,
      carbs: 30.16,
      calories: 170.63,
    },
    {
      id: 218700,
      active_cooking_time: 35,
      total_cooking_time: 100,
      difficulty_level: 2,
      title: "Пирог с вишней и рикоттой",
      subtitle:
        "Полная сока спелая вишня станет еще вкуснее в легком воздушном суфле из сыра рикотта и сметаны. Дайте пирогу полностью остыть после выпечки, чтобы суфле стабилизировалось, и десерт хорошо резался на порции. По вкусу и структуре пирог напоминает чизкейк, только с еще более тонкими и мягкими сливочными нотками. Также для пирога с рикоттой подойдут клубника, ежевика и другие сезонные ягоды. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zRzVFTXkuanBlZw==.jpg",
      preparation: {
        content:
          "Промойте вишню, выложите ее на бумажные полотенца обсохнуть. Вымойте яйца, оботрите их салфетками от влаги. Просейте муку. Подготовьте блендер с чашей, две глубокие миски, миксер, пищевую пленку, круглую форму для пирога диаметром около 18-20 см.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy91YTg2b1YuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Нарежьте сливочное масло кубиками, положите их в чашу блендера. Всыпьте к маслу муку, разрыхлитель, соль и тростниковый сахар.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy85QXJOWEsuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Смешайте все ингредиенты до образования мелкой крошки. Пересыпьте получившуюся мучную крошку в глубокую миску.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zNXZ3Uk4uanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Выложите к крошке 1 ст.л. сметаны, замесите пластичное песочное тесто. Оберните тесто пищевой пленкой и уберите его в холодильник на 30 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zWmpXcmkuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Разбейте в чистую глубокую миску яйца, всыпьте к ним сахар и кукурузный крахмал. Взбейте яйца миксером до пышной светлой массы.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy9KdERCZ3IuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Добавьте к взбитым яйцам рикотту и 3 ст.л. сметаны. Еще раз все хорошо взбейте миксером до однородной кремообразной массы.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zQjJhS3guanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Разогрейте духовку до 180°C. Смажьте форму 1 ч.л. сливочного масла. Достаньте охлажденное тесто из холодильника, освободите его от пищевой пленки. Сформируйте из теста руками круглую плоскую лепешку, поместите ее в форму для пирога. Прижмите тесто к дну и стенкам формы, делая высокие бортики. Проколите тесто вилкой в нескольких местах.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zZVh6cDcuanBlZw==.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Выложите на основу из теста крем из рикотты и сметаны. Распределите по крему вишню. Поставьте форму в духовку и пеките пирог в течение 35-40 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zZkFNWUQuanBlZw==.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Выключите духовку и дайте пирогу постоять внутри еще 10-15 минут. Достаньте пирог из духовки, оставьте его при комнатной температуре до полного остывания. Аккуратно переложите пирог из формы на сервировочное блюдо.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy9vVTVMb0ouanBlZw==.jpg",
        },
      ],
      kitchen_type: "Европейская, итальянская",
      main_ingredient_title: "Для теста",
      optional_ingredient_title: "Для начинки",
      main_ingredients: [
        {
          id: 282,
          weight: 200,
          custom_measure: "г",
          custom_measure_count: 200,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 338,
          weight: 80,
          custom_measure: "г",
          custom_measure_count: 80,
          title: "Сливочное масло",
        },
        {
          id: 346,
          weight: 25,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Сметана 20% жирности",
        },
        {
          id: 411,
          weight: 16,
          custom_measure: "ч. л.",
          custom_measure_count: 2,
          title: "Тростниковый сахар",
        },
        {
          id: 352,
          weight: 1,
          custom_measure: "г",
          custom_measure_count: 1,
          title: "Соль",
        },
        {
          id: 285,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Разрыхлитель теста",
        },
      ],
      optional_ingredients: [
        {
          id: 507,
          weight: 220,
          custom_measure: "г",
          custom_measure_count: 220,
          title: "Вишня",
        },
        {
          id: 291,
          weight: 200,
          custom_measure: "г",
          custom_measure_count: 200,
          title: "Рикотта",
        },
        {
          id: 346,
          weight: 75,
          custom_measure: "ст. л.",
          custom_measure_count: 3,
          title: "Сметана 20% жирности",
        },
        {
          id: 312,
          weight: 75,
          custom_measure: "ст. л.",
          custom_measure_count: 3,
          title: "Сахар",
        },
        {
          id: 169,
          weight: 120,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Куриное яйцо",
        },
        {
          id: 161,
          weight: 30,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Кукурузный крахмал",
        },
      ],
      proteins: 6.15,
      fats: 11.44,
      carbs: 27.69,
      calories: 236.71,
    },
    {
      id: 218695,
      active_cooking_time: 60,
      total_cooking_time: 180,
      difficulty_level: 3,
      title: "Пирог с фруктами",
      subtitle:
        "Рецепт этого простого пирога достаточно универсален. Возьмите любые фрукты, которые есть под рукой: подойдут как свежие, так и замороженные или консервированные. Более того, их можно смешивать в ароматное ассорти, создавая красивые замысловатые узоры на поверхности выпечки. Вам понадобится купить готовое песочное тесто или приготовить его самостоятельно, чтобы испечь корж. Главное здесь — правильно сварить молочный крем. Он получается плотным благодаря добавлению кукурузного крахмала.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zN3gzZmYuanBlZw==.jpg",
      preparation: {
        content:
          "Помойте персики, разрежьте пополам и удалите косточки. Вымойте куриные яйца. Заранее достаньте из холодильника сливочное масло, чтобы оно стало мягким. Подготовьте форму для выпекания и миксер.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy9ndUhiVFMuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Разогрейте духовку до 180°C. Смажьте форму для выпечки маслом. Разомните тесто, раскатайте в тонкий пласт и выложите в форму, формируя бортики. Отправьте форму в духовку на 15 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy9xaE12emQuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Отделите желтки от белков. Взбейте желтки миксером. Добавьте тростниковый сахар и обычный. Продолжайте взбивать до растворения.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zSlRMN2MuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Положите к желткам мягкое сливочное масло, влейте молоко. Взбивайте миксером до получения однородной массы.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy9zUW9OanIuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Перелейте крем в кастрюлю и поставьте на слабый огонь. Нагревайте, постоянно помешивая, пока крем не закипит. Всыпьте кукурузный крахмал, тщательно перемешайте. Поварите его 5 минут и снимите с огня.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy9FN0pwdzQuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Выложите крем на корж. Разровняйте лопаткой поверхность и оставьте до полного остывания.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy85ZkV4aVYuanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Нарежьте персики тонкими дольками. Украсьте пирог и отправьте его в холодильник на 2 часа.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zdXhGMmUuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 685,
          weight: 450,
          custom_measure: "г",
          custom_measure_count: 450,
          title: "Персики",
        },
        {
          id: 553,
          weight: 500,
          custom_measure: "стакан",
          custom_measure_count: 2.5,
          title: "Молоко 3,2%",
        },
        {
          id: 338,
          weight: 80,
          custom_measure: "г",
          custom_measure_count: 80,
          title: "Сливочное масло",
        },
        {
          id: 169,
          weight: 240,
          custom_measure: "шт.",
          custom_measure_count: 4,
          title: "Куриное яйцо",
        },
        {
          id: 312,
          weight: 120,
          custom_measure: "г",
          custom_measure_count: 120,
          title: "Сахар",
        },
        {
          id: 411,
          weight: 12.5,
          custom_measure: "ст. л.",
          custom_measure_count: 0.5,
          title: "Тростниковый сахар",
        },
        {
          id: 161,
          weight: 40,
          custom_measure: "г",
          custom_measure_count: 40,
          title: "Кукурузный крахмал",
        },
        {
          id: 7145,
          weight: 400,
          custom_measure: "г",
          custom_measure_count: 400,
          title: "Песочное тесто",
        },
      ],
      optional_ingredients: [
        {
          id: 228,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Мята",
        },
      ],
      proteins: 4.09,
      fats: 10.49,
      carbs: 23.99,
      calories: 201.08,
    },
    {
      id: 218561,
      active_cooking_time: 20,
      total_cooking_time: 50,
      difficulty_level: 2,
      title: "Простой пирог со смородиной",
      subtitle:
        "Этот пирог очень похож на шарлотку, но вместо яблок мы положили смородину. Ягоды привносят пирогу приятную кислинку. Внутри выпечка получается мягкой и воздушной, а снаружи покрывается тонкой и хрустящей сахарной корочкой. Чтобы пирог оставался красивым, и его цвет не менялся, не смешивайте смородину с тестом. Сначала выложите тесто в форму для выпечки, а затем распределите поверх него ягоды ровным слоем.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMi83Y3haVGEuanBlZw==.jpg",
      preparation: {
        content:
          "Тщательно промойте ягоды и уберите веточки и хвостики. Подготовьте миксер и форму для выпечки.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMi80OUh5dU0uanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Разбейте яйца в миску, всыпьте к ним сахар. Взбейте, постепенно увеличивая обороты, пока масса не посветлеет и не станет больше в объеме.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMi9oNENTaXEuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Смешайте муку с разрыхлителем. Небольшими порциями, каждый раз тщательно перемешивая, всыпьте мучную смесь в яичную. Замесите тесто по консистенции примерно как густая сметана.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMi8zOXZqcEwuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Разогрейте духовку до 180°C. Смажьте форму для выпекания маслом и присыпьте манкой. Вылейте тесто в форму.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMi8zN0x4OXEuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Распределите смородину поверх теста. Отправьте форму в духовку на 30 минут. Когда пирог будет готов, дайте ему полностью остыть и только потом достаньте из формы.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMi8zZVZxOVUuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 169,
          weight: 180,
          custom_measure: "шт.",
          custom_measure_count: 3,
          title: "Куриное яйцо",
        },
        {
          id: 312,
          weight: 225,
          custom_measure: "г",
          custom_measure_count: 225,
          title: "Сахар",
        },
        {
          id: 285,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Разрыхлитель теста",
        },
        {
          id: 282,
          weight: 160,
          custom_measure: "г",
          custom_measure_count: 160,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 435,
          weight: 130,
          custom_measure: "г",
          custom_measure_count: 130,
          title: "Черная смородина",
        },
        {
          id: 198,
          weight: 32,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Манная крупа",
        },
      ],
      optional_ingredients: [
        {
          id: 313,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Сахарная пудра",
        },
        {
          id: 228,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Мята",
        },
      ],
      proteins: 6.07,
      fats: 3.23,
      carbs: 49.87,
      calories: 244.38,
    },
    {
      id: 218540,
      active_cooking_time: 20,
      total_cooking_time: 25,
      difficulty_level: 2,
      title: "Пицца с колбасой на сковороде",
      subtitle:
        "Пиццу на сковороде очень удобно готовить на завтрак. Тесто заводится быстро и просто, начинка может быть любая. А в результате всего через 20-25 минут получается достаточно сытное и очень вкусное блюдо. Жидкое тесто нужно вылить на сковороду и, пока оно схватывается, можно заняться начинкой. Измельчите все, что хочется добавить. Как только тесто сверху станет плотным, переверните его, смажьте любым соусом по вкусу и выложите начинку. Посыпьте сыром и доведите пиццу под крышкой до готовности.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS80WGIyVXQuanBlZw==.jpg",
      preparation: {
        content:
          "Просейте муку. Помойте куриное яйцо и зеленый лук. Подготовьте сковороду.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS8zeEFRcXYuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Смешайте в миске венчиком или миксером просеянную муку со сметаной, солью, черным молотым перцем и куриным яйцом. Должно получиться жидкое однородное тесто.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS8zaW43SDIuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Разогрейте в сковороде растительное масло. Вылейте тесто и распределите равномерным слоем при помощи лопатки или ложки. Жарьте на среднем огне под крышкой 4-5 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS80REtXeDQuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Пока печется основа для пиццы, натрите сыр и нарежьте колбасу маленькими кубиками. Измельчите зеленый лук.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9DQUNRbVAuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Когда лепешка из теста схватится и перестанет быть жидкой сверху, аккуратно переверните ее на другую сторону. Смажьте кетчупом. Равномерно выложите сверху колбасу, посыпьте сыром и луком, отступая от края по 1 см. Накройте крышкой, уменьшите нагрев до минимального. Готовьте еще 3 минуты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS8zR2ZINkouanBlZw==.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Для теста",
      optional_ingredient_title: "Для начинки",
      main_ingredients: [
        {
          id: 169,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное яйцо",
        },
        {
          id: 282,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 352,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Соль",
        },
        {
          id: 439,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Черный перец молотый",
        },
        {
          id: 343,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Сметана",
        },
      ],
      optional_ingredients: [
        {
          id: 83,
          weight: 50,
          custom_measure: "г",
          custom_measure_count: 50,
          title: "Докторская колбаса",
        },
        {
          id: 112,
          weight: 50,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Кетчуп",
        },
        {
          id: 388,
          weight: 30,
          custom_measure: "г",
          custom_measure_count: 30,
          title: "Сыр",
        },
        {
          id: 91,
          weight: 15,
          custom_measure: "г",
          custom_measure_count: 15,
          title: "Зеленый лук",
        },
        {
          id: 287,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Растительное масло",
        },
      ],
      proteins: 8.83,
      fats: 15.85,
      carbs: 20.63,
      calories: 250.25,
    },
    {
      id: 220337,
      active_cooking_time: 60,
      total_cooking_time: 75,
      difficulty_level: 3,
      title: "Кунжутные мини-сосиски с соусом",
      subtitle:
        "Эта миниатюрная закуска получается необыкновенно вкусной. Если вы не нашли мини-сосиски, возьмите обычные и разрежьте каждую на 3-4 части. Прежде чем отправить сосиски в духовку, отварите их в течение 20-30 секунд в воде с содой. Этот прием ускорит время запекания и сделает корочку более румяной. А кунжутная обсыпка не только украсит закуску, но и сделает ее еще ароматнее. А горчичный соус по нашему рецепту только подчеркнет вкус сосисок. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy8zNlNmZkUuanBlZw==.jpg",
      preparation: {
        content:
          "Снимите с сосисок пленку. Просейте муку. Помойте и почистите чеснок. Застелите противень пергаментом. Подготовьте миксер.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy8zVTNqRnguanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Смешайте в миске одно куриное яйцо, муку, растительное масло, ¾ стакана воды, 1 ч.л. соли и сахар. Замесите эластичное однородное тесто.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy8zRUh4M1EuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Раскатайте тесто в тонкий пласт и нарежьте на 16 тонких полосок. Оберните каждую сосиску в полоску теста и защипните края.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy8zdzhiakMuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Вскипятите в кастрюле 1,5 литра воды. Добавьте в воду соду и мед. Перемешайте до их полного растворения.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy95Y1Z2U1cuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Опустите сосиски в тесте в кипяток на 20-30 секунд. Достаньте шумовкой и выложите на противень на небольшом расстоянии друг от друга.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy8zMk14b2IuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Взбейте венчиком в небольшой миске одно куриное яйцо. В другой миске смешайте мак с семенами кунжута, сушеным луком, сушеным чесноком и 1 ч.л. соли.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy8zWUtaeDguanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Смажьте каждую сосиску в тесте куриным яйцом и обваляйте со всех сторон в кунжутной посыпке. Верните их на противень и отправьте в разогретую до 220°С духовку на 15 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy8zRFZpankuanBlZw==.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Пропустите через пресс чеснок. Положите в глубокую миску сливочный сыр, горчицу, кефир, чеснок, лимонный сок, щепотку соли и черного молотого перца. Взбейте соус миксером до однородности.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy9KVnZWWG8uanBlZw==.jpg",
        },
      ],
      kitchen_type: "Американская",
      main_ingredient_title: "Для основного блюда и соуса",
      optional_ingredient_title: "Для обсыпки, теста и подачи",
      main_ingredients: [
        {
          id: 353,
          weight: 960,
          custom_measure: "шт.",
          custom_measure_count: 16,
          title: "Сосиски",
        },
        {
          id: 348,
          weight: 44,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Сода",
        },
        {
          id: 204,
          weight: 56,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Мед",
        },
        {
          id: 169,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное яйцо",
        },
        {
          id: 14698,
          weight: 25,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Зернистая горчица",
        },
        {
          id: 339,
          weight: 170,
          custom_measure: "г",
          custom_measure_count: 170,
          title: "Сливочный сыр",
        },
        {
          id: 8291,
          weight: 154.5,
          custom_measure: "стакан",
          custom_measure_count: 0.75,
          title: "Кефир 2,5%",
        },
        {
          id: 440,
          weight: 10,
          custom_measure: "зубчик",
          custom_measure_count: 2,
          title: "Чеснок",
        },
        {
          id: 185,
          weight: 18,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Лимонный сок",
        },
        {
          id: 352,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
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
          id: 25,
          weight: 44,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Белый кунжут",
        },
        {
          id: 93,
          weight: 30,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Мак (зерна)",
        },
        {
          id: 386,
          weight: 12,
          custom_measure: "ч. л.",
          custom_measure_count: 4,
          title: "Сушеный чеснок",
        },
        {
          id: 11996,
          weight: 16,
          custom_measure: "ч. л.",
          custom_measure_count: 4,
          title: "Сушеный репчатый лук",
        },
        {
          id: 352,
          weight: 20,
          custom_measure: "ч. л.",
          custom_measure_count: 2,
          title: "Соль",
        },
        {
          id: 169,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное яйцо",
        },
        {
          id: 282,
          weight: 260,
          custom_measure: "стакан",
          custom_measure_count: 2,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 287,
          weight: 34,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Растительное масло",
        },
        {
          id: 54,
          weight: 150,
          custom_measure: "мл",
          custom_measure_count: 150,
          title: "Вода",
        },
        {
          id: 312,
          weight: 12.5,
          custom_measure: "ст. л.",
          custom_measure_count: 0.5,
          title: "Сахар",
        },
        {
          id: 275,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Помидоры черри",
        },
        {
          id: 606,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Салатные листья",
        },
      ],
      proteins: 10.29,
      fats: 16.17,
      carbs: 13.6,
      calories: 240.56,
    },
    {
      id: 218522,
      active_cooking_time: 45,
      total_cooking_time: 120,
      difficulty_level: 2,
      title: "Слоеные лепешки",
      subtitle:
        "Для слоеных лепешек понадобятся пшеничная мука, сливочное и растительное масло, дрожжи, соль и вода. Секрет приготовления заключается в правильном скручивании теста. После того, как вы смешали все ингредиенты, нужно дать тесту отдохнуть и подняться. Потом раскатайте его так тонко, как сможете. Смажьте поверхность теста растопленным сливочным маслом и сверните в рулет. Этот рулет нужно разрезать на несколько частей, скрутить каждую улиткой и снова раскатать.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS80NFJ5NEQuanBlZw==.jpg",
      preparation: {
        content:
          "Просейте муку. Нагрейте воду до 40°C, то есть чуть выше температуры тела.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS8zV0FVNjMuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Разведите дрожжи в теплой воде и оставьте на 1 минуту. В глубокой миске смешайте муку и соль, добавьте воду с дрожжами. Замесите сначала венчиком, потом руками однородное мягкое тесто. Накройте тесто пищевой пленкой и оставьте в теплом месте на 1 час.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS85UndwY0cuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Растопите сливочное масло и немного остудите его. Раскатайте тесто как можно тоньше. Смажьте пласт теста сливочным маслом при помощи силиконовой кисточки. Скрутите тесто в плотный рулет.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS8zOFpZSEouanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Разрежьте рулет пополам вдоль и пополам поперек. У вас получится 4 полоски теста. Скрутите каждую полоску в улитку. Защипните край каждой улитки, чтобы он плотно держался.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9jaHR5YUsuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Каждую улитку снова раскатайте в лепешку толщиной около 0,5 см. В центре каждой лепешки сделайте небольшое отверстие. Накройте лепешки полотенцем и оставьте на 15 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9FNFJyOWguanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Разогрейте в сковороде растительное масло. Обжарьте лепешки на среднем огне до образования золотистой корочки примерно по 4-5 минут с каждой стороны.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS80UGhnRlUuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Восточная",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 282,
          weight: 390,
          custom_measure: "стакан",
          custom_measure_count: 3,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 368,
          weight: 12,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Сухие дрожжи",
        },
        {
          id: 338,
          weight: 90,
          custom_measure: "г",
          custom_measure_count: 90,
          title: "Сливочное масло",
        },
        {
          id: 287,
          weight: 34,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Растительное масло",
        },
        {
          id: 352,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Соль",
        },
        {
          id: 54,
          weight: 200,
          custom_measure: "стакан",
          custom_measure_count: 1,
          title: "Вода",
        },
      ],
      optional_ingredients: [
        {
          id: 19865,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Чай",
        },
      ],
      proteins: 6.41,
      fats: 15.68,
      carbs: 36.52,
      calories: 316.03,
    },
    {
      id: 218467,
      active_cooking_time: 50,
      total_cooking_time: 140,
      difficulty_level: 3,
      title: "Булочки с корицей",
      subtitle:
        "Когда под рукой есть корица, не надо беспокоиться по поводу начинки для дрожжевой выпечки. Пряность подчеркнет и усилит вкус сдобного теста, придаст булочкам аппетитный аромат. Тесто на сухих быстродействующих дрожжах замешивается быстро, поднимается за 1 час, без усилий раскатывается и отлично держит форму в свернутых рулетами булочках. Вместо крема из сыра маскарпоне при желании покройте булочки белой или шоколадной глазурью, полейте ягодным сиропом или просто посыпьте сахарной пудрой. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC8zVDJXcFAuanBlZw==.jpg",
      preparation: {
        content:
          "Достаньте сливочное масло из холодильника, дайте ему постоять при комнатной температуре и хорошо размягчиться. Помойте куриное яйцо, оботрите его от влаги бумажными полотенцами. Просейте муку в глубокую миску. Подготовьте еще две миски, миксер, сотейник, скалку, чистые тканевые полотенца. Постелите на плоский противень бумагу для выпечки. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC94TWRxZmIuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Налейте молоко в сотейник. Поставьте на средний огонь и подогрейте молоко до теплого состояния. Снимите с огня.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC9IZU5iUTQuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Всыпьте в теплое молоко сухие дрожжи, 1 ст.л. сахара и 2 ст.л. муки. Все тщательно размешайте, прикройте полотенцем и дайте постоять в тепле 10-15 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC9iVnM2V1AuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Разбейте яйцо в чистую миску, всыпьте к нему 1,5 ст.л. сахара и ванильный сахар. Взбейте все миксером до пышной светло-желтой пены. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC80QUF3WHouanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Отложите 1 ст.л. муки для раскатки теста. Всыпьте в миску с оставшейся просеянной мукой соль, хорошо перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC8zbXJCTlQuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Влейте в миску с мукой и солью взбитое с сахаром яйцо и смесь с активированными дрожжами. Добавьте 0,5 ст.л. размягченного масла и замесите мягкое упругое тесто. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC9HSnVEWmQuanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Вымешивайте тесто в течение 6-7 минут, пока оно не перестанет быть липким. Накройте тесто полотенцем и поставьте его в теплое место подниматься на 1 час.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC85RWhVVkIuanBlZw==.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Посыпьте рабочую поверхность отложенной мукой. Выложите на нее поднявшееся тесто, хорошо его обомните.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC9pWU54cnEuanBlZw==.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Раскатайте тесто в лепешку толщиной около 4-5 мм. Промажьте лепешку 0,5 ст.л. сливочного масла. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC8zN1JWd0YuanBlZw==.jpg",
        },
        {
          title: "Шаг 9",
          description:
            "Соедините в чашке корицу и 2,5 ст.л. сахара, перемешайте. Посыпьте этой смесью смазанную маслом лепешку из теста, отступая от краев примерно на 1,5-2 см.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC8zWGZIaHguanBlZw==.jpg",
        },
        {
          title: "Шаг 10",
          description:
            "Закрутите лепешку в плотный рулет. Разрежьте рулет на 6 равных по размеру заготовок для булочек.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC9lWjZZYlYuanBlZw==.jpg",
        },
        {
          title: "Шаг 11",
          description:
            "Разогрейте духовку до 180°C. Выложите заготовки для булочек на противень с бумагой для выпечки на небольшом расстоянии друг от друга. Поставьте противень с заготовками в духовку и пеките булочки в течение 20-25 минут до золотистого цвета. Достаньте булочки из духовки и дайте им немного остыть. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC8zandWN2IuanBlZw==.jpg",
        },
        {
          title: "Шаг 12",
          description:
            "Помойте и вытрите насухо насадки миксера. Выложите в чистую миску сыр маскарпоне, 0,5 ст.л. масла и сахарную пудру. Смешайте все миксером на небольшой скорости до получения однородного крема. Смажьте выпечку сырным кремом и подайте к столу. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC8zNGh5TWguanBlZw==.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 282,
          weight: 260,
          custom_measure: "г",
          custom_measure_count: 260,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 169,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное яйцо",
        },
        {
          id: 696,
          weight: 100,
          custom_measure: "мл",
          custom_measure_count: 100,
          title: "Молоко 2,5% жирности",
        },
        {
          id: 338,
          weight: 60,
          custom_measure: "г",
          custom_measure_count: 60,
          title: "Сливочное масло",
        },
        {
          id: 610,
          weight: 10,
          custom_measure: "ч. л.",
          custom_measure_count: 2.5,
          title: "Молотая корица",
        },
        {
          id: 312,
          weight: 125,
          custom_measure: "ст. л.",
          custom_measure_count: 5,
          title: "Сахар",
        },
        {
          id: 46,
          weight: 4,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Ванильный сахар",
        },
        {
          id: 352,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Соль",
        },
        {
          id: 368,
          weight: 6,
          custom_measure: "ч. л.",
          custom_measure_count: 1.5,
          title: "Сухие дрожжи",
        },
        {
          id: 465,
          weight: 80,
          custom_measure: "ст. л.",
          custom_measure_count: 4,
          title: "Сыр маскарпоне",
        },
        {
          id: 313,
          weight: 70,
          custom_measure: "г",
          custom_measure_count: 70,
          title: "Сахарная пудра",
        },
      ],
      optional_ingredients: [
        {
          id: 669,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Черный чай",
        },
      ],
      proteins: 5.79,
      fats: 12.38,
      carbs: 50.49,
      calories: 329.37,
    },
    {
      id: 220097,
      active_cooking_time: 35,
      total_cooking_time: 60,
      difficulty_level: 3,
      title: "Тарт татен с карамельными яблоками и ванильным мороженым",
      subtitle:
        "Холодное мороженое приобретает совсем другой вкус в сочетании с горячими яблоками, запеченными в сливочной карамели, и рассыпчатым песочным тестом. Чтобы испечь французский тарт татен, понадобятся яблоки, сливочное масло, сахар и мука. Выберите для десерта спелые, но крепкие яблоки, которые выделят при обжарке достаточно сока для карамели, но сохранят свою форму после тепловой обработки.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS8zUmhmZDcuanBlZw==.jpg",
      preparation: {
        content:
          "Заранее охладите сливочное масло и воду. Помойте яблоки, промокните их от влаги салфеткой. Подготовьте объемную миску, сито, скалку, сковороду, подходящую для нагревания в духовке, десертное блюдо и ложку для мороженого.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS8zWUFudmYuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Просейте муку в объемную миску. Затем так же через сито всыпьте к ней сахарную пудру и соль. Хорошо перемешайте сухие ингредиенты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS80TlBERzUuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Нарежьте 75 г охлажденного сливочного масла кубиками со стороной 5-6 мм. Выложите их в миску с мукой, сахарной пудрой и солью. Разотрите все лопаткой до образования крупной крошки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS8zaW85eG4uanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Разбейте в миску с масляно-мучной крошкой яйцо, влейте холодную воду. Замесите сначала лопаткой, а потом руками пластичное песочное тесто. Когда тесто начнет легко скатываться в шар, заверните его в пищевую пленку и уберите в холодильник на 20 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS8zUUVCYVMuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Очистите яблоки от кожуры. Разрежьте их на четвертинки и вырежьте из каждой четвертинки сердцевину с семенами. Разрежьте каждую четвертинку яблока еще раз пополам.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS9WNDVLSk0uanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Поставьте сковороду на средний огонь, выложите на нее 30 г сливочного масла и подождите, когда оно полностью растает. Уложите одним слоем дольки яблок. Пожарьте их 1-2 минуты до легкой корочки. Переверните яблоки, пожарьте их еще 1-2 минуты с другой стороны. Снова переверните яблоки и пожарьте их еще 1 минуту, чтобы фрукты дали сок.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS9nMnhLQkguanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Посыпьте яблоки сахаром, положите к ним оставшиеся 30 г сливочного масла. Прогрейте фрукты 3-4 минуты, периодически их переворачивая, пока они не карамелизируются. Снимите сковороду с огня.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS80WEY1S0IuanBlZw==.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Включите духовку разогреваться до 190°С. Достаньте из холодильника тесто. Раскатайте его в круглую лепешку диаметром на 1-1,5 см больше сковороды.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS9NYmQ5a1IuanBlZw==.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Накройте тестом карамелизированные яблоки на сковороде. Подоткните края теста ложкой или ножом вниз по бортикам сковороды.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS9GQWlLOVkuanBlZw==.jpg",
        },
        {
          title: "Шаг 9",
          description:
            "Поставьте сковороду в духовку и выпекайте тарт татен в течение 10-15 минут. Достаньте готовый тарт татен, немного остудите и переверните его на десертное блюдо, чтобы яблоки оказались сверху.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS8zNTRZdFYuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Французская",
      main_ingredient_title: "Для теста",
      optional_ingredient_title: "Для начинки и подачи",
      main_ingredients: [
        {
          id: 282,
          weight: 175,
          custom_measure: "г",
          custom_measure_count: 175,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 338,
          weight: 75,
          custom_measure: "г",
          custom_measure_count: 75,
          title: "Сливочное масло",
        },
        {
          id: 313,
          weight: 45,
          custom_measure: "г",
          custom_measure_count: 45,
          title: "Сахарная пудра",
        },
        {
          id: 169,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное яйцо",
        },
        {
          id: 54,
          weight: 18,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Вода",
        },
        {
          id: 352,
          weight: 5,
          custom_measure: "г",
          custom_measure_count: 5,
          title: "Соль",
        },
      ],
      optional_ingredients: [
        {
          id: 19853,
          weight: 1000,
          custom_measure: "шт.",
          custom_measure_count: 4,
          title: "Зеленое яблоко",
        },
        {
          id: 338,
          weight: 60,
          custom_measure: "г",
          custom_measure_count: 60,
          title: "Сливочное масло",
        },
        {
          id: 312,
          weight: 170,
          custom_measure: "г",
          custom_measure_count: 170,
          title: "Сахар",
        },
        {
          id: 19301,
          weight: 250,
          custom_measure: "г",
          custom_measure_count: 250,
          title: "Ванильный пломбир",
        },
      ],
      proteins: 2.17,
      fats: 8.32,
      carbs: 26.03,
      calories: 185.65,
    },
    {
      id: 218436,
      active_cooking_time: 20,
      total_cooking_time: 60,
      difficulty_level: 2,
      title: "Заливной пирог с луком и яйцом",
      subtitle:
        "Рецепт заливного пирога с луком и яйцами очень выручит, когда нужно приготовить сытный обед или ужин всего за час. Тесто готовится очень просто, оно не требует никаких особых манипуляций. Ни сложного вымешивания, ни расстойки, ни ожидания. Начинка также не потребует особых усилий. Просто все измельчите и смешайте. Перед отправкой в духовку присыпьте тесто семенами кунжута, чтобы добавить сладковатый ореховый аромат. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwOS8za01lOEEuanBlZw==.jpg",
      preparation: {
        content: "Помойте и зеленый лук. Просейте муку.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwOS80UGNpM3cuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Для начинки сварите вкрутую 4 куриных яйца в течение 10 минут после закипания. Остудите их в холодной воде и очистите от скорлупы. Нарежьте яйца маленькими кубиками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwOS8zOVo5M0cuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Мелко покрошите зеленый лук. Натрите сыр. Смешайте в миске измельченные яйца, лук, сыр, щепотку соли и столовую ложку сметаны.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwOS8zM2lvakIuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description:
            " Для теста в глубокой миске венчиком смешайте 3 куриных яйца со стаканом сметаны.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwOS8zeGhmYXcuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "В другой миске соедините муку, разрыхлитель и щепотку соли. Всыпьте мучную смесь к яичной и тщательно перемешайте, чтобы не было комочков.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwOS80Q3FTTFouanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Смажьте форму для запекания растительным маслом. Вылейте половину теста. Сверху равномерно разложите начинку.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwOS9yRWZyd1guanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Залейте начинку оставшимся тестом. Отправьте форму в разогретую до 180°С духовку на 40 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYwOS80WDVudzUuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда и начинки",
      optional_ingredient_title: "Для теста",
      main_ingredients: [
        {
          id: 287,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Растительное масло",
        },
        {
          id: 91,
          weight: 135,
          custom_measure: "г",
          custom_measure_count: 135,
          title: "Зеленый лук",
        },
        {
          id: 388,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Сыр",
        },
        {
          id: 352,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Соль",
        },
        {
          id: 346,
          weight: 25,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Сметана 20% жирности",
        },
        {
          id: 169,
          weight: 240,
          custom_measure: "шт.",
          custom_measure_count: 4,
          title: "Куриное яйцо",
        },
      ],
      optional_ingredients: [
        {
          id: 346,
          weight: 210,
          custom_measure: "г",
          custom_measure_count: 210,
          title: "Сметана 20% жирности",
        },
        {
          id: 285,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Разрыхлитель теста",
        },
        {
          id: 282,
          weight: 97.5,
          custom_measure: "г",
          custom_measure_count: 97.5,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 352,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Соль",
        },
        {
          id: 169,
          weight: 180,
          custom_measure: "шт.",
          custom_measure_count: 3,
          title: "Куриное яйцо",
        },
      ],
      proteins: 10.1,
      fats: 13.65,
      carbs: 9.44,
      calories: 187.45,
    },
    {
      id: 216784,
      active_cooking_time: 60,
      total_cooking_time: 340,
      difficulty_level: 4,
      title: "Домашний молочный хлеб",
      subtitle:
        "Молочный хлеб получается легким, невероятно воздушным и остается таким несколько дней. При этом он сытнее, чем обычный хлеб. Прежде чем приступить к приготовлению, убедитесь, что все ингредиенты комнатной температуры. Запланируйте время на замешивание и расстойку теста. Это не быстрый процесс. Зато потом слегка сладковатый и золотистый, очень аппетитный молочный хлеб станет отличной основой для сладкого сэндвича. Подайте его с вареньем, шоколадной пастой или со сливочным маслом.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy8zZHo4VTcuanBlZw==.jpg",
      preparation: {
        content:
          "Просейте муку. Нагрейте воду до 35-40 градусов. Застелите форму для выпекания пергаментом.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy8zWHVLcTcuanBlZw==.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Для опары налейте в глубокую миску две трети стакана теплой воды.Положите в воду свежие дрожжи и сухое молоко. Перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy9Ua2UyMjcuanBlZw==.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Всыпьте стакан пшеничной муки. Тщательно перемешайте до получения однородной консистенции.Накройте опару влажным полотенцем и оставьте в теплом месте на 4 часа.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy90NXlmRkMuanBlZw==.jpg",
        },
        {
          title: "Шаг 3",
          description: "Добавьте в подошедшую опару соль и сахар. Перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy9RZ1NkSHIuanBlZw==.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Влейте одну треть стакана теплой воды.Насыпьте один стакан пшеничной муки. Замесите густое однородное тесто.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy80OVB6ZDYuanBlZw==.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Хорошенько вымесите тесто руками в течение 10-15 минут. Должно получиться эластичная, не прилипающая к рукам масса.Накройте тесто влажным полотенцем и поставьте на 1 час 15 минут в тепло.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy8zd2ZZdUIuanBlZw==.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Обомните тесто и дайте ему отдохнуть еще 20 минут.Разделите тесто на 3 части. Каждую часть раскатайте в пласт толщиной в полсантиметра.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy8zRFR1NEouanBlZw==.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Мысленно разделите пласт на 3 части и сложите края в центр, чтобы получилась полоска теста.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy8zSmdMclkuanBlZw==.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Скрутите получившуюся полоску в рулет. То же самое проделайте с остальным тестом.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy80RzVHdHUuanBlZw==.jpg",
        },
        {
          title: "Шаг 9",
          description:
            "Положите получившиеся улитки из теста швом вниз в форму для выпекания на небольшом расстоянии друг от друга.Накройте тесто пищевой пленкой и оставьте на 45 минут на расстойку.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy8zNjhTS0UuanBlZw==.jpg",
        },
        {
          title: "Шаг 10",
          description:
            "Поставьте в духовку вниз другую форму для выпекания с горячей водой. Разогрейте духовку до 200 градусов.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9udWxs.jpg",
        },
        {
          title: "Шаг 11",
          description:
            "Отправьте хлеб выпекаться на 35 минут. Через 10 минут уберите из духовки противень с водой. По завершении выпекания переложите готовый хлеб на решетку остывать.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNy8zeGJpQUUuanBlZw==.jpg",
        },
      ],
      kitchen_type: "Японская",
      main_ingredient_title: "Для опары",
      optional_ingredient_title: "Для теста и подачи",
      main_ingredients: [
        {
          id: 282,
          weight: 130,
          custom_measure: "стакан",
          custom_measure_count: 1,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 315,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Свежие дрожжи",
        },
        {
          id: 369,
          weight: 150,
          custom_measure: "стакан",
          custom_measure_count: 1.5,
          title: "Сухое молоко",
        },
        {
          id: 54,
          weight: 120,
          custom_measure: "стакан",
          custom_measure_count: 0.6,
          title: "Вода",
        },
      ],
      optional_ingredients: [
        {
          id: 282,
          weight: 130,
          custom_measure: "стакан",
          custom_measure_count: 1,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 352,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Соль",
        },
        {
          id: 312,
          weight: 10,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Сахар",
        },
        {
          id: 54,
          weight: 60,
          custom_measure: "стакан",
          custom_measure_count: 0.3,
          title: "Вода",
        },
        {
          id: 338,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Сливочное масло",
        },
      ],
      proteins: 11.02,
      fats: 6.72,
      carbs: 39.74,
      calories: 264.96,
    },
  ],
  drinks: [
    {
      id: 219527,
      active_cooking_time: 20,
      total_cooking_time: 40,
      difficulty_level: 2,
      title: "Компот из свежих фруктов",
      subtitle:
        "Компот отлично жажду, его вкус зависит от сочетания фруктов. Абрикосы и сливы делают напиток ароматным и сладковатым. Вишня придает компоту красивый насыщенный цвет, а сок лимона добавляет кислинку. Приготовьте его из свежих фруктов или используйте замороженные. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC80TGRZVWQuanBlZw.jpg",
      preparation: {
        content:
          "Вымойте фрукты и ягоды. Уберите косточки у абрикосов и сливы. У яблока удалите сердцевину. Вишню оставьте с косточками.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC9WQXc1eUIuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Выложите вишню в кастрюлю. Нарежьте яблоко на небольшие дольки и добавьте к ягодам. Туда же положите половинки абрикосов и слив.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC8zaThHTUcuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Налейте в кастрюлю воду. Поставьте на плиту и на среднем огне доведите до кипения.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC80M0pXbWouanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Когда компот закипит, поставьте слабый огонь. Всыпьте сахар и перемешайте. Варите 10 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC80SkNFYkwuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Выжмите в компот сок из половины лимона. Варите еще 5 минут. После чего снимите с огня и дайте полностью остыть, накрыв кастрюлю крышкой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC8zbW5kQnQuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 54,
          weight: 2000,
          custom_measure: "стакан",
          custom_measure_count: 10,
          title: "Вода",
        },
        {
          id: 183,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 0.5,
          title: "Лимон",
        },
        {
          id: 312,
          weight: 90,
          custom_measure: "стакан",
          custom_measure_count: 0.5,
          title: "Сахар",
        },
        {
          id: 769,
          weight: 240,
          custom_measure: "шт.",
          custom_measure_count: 16,
          title: "Абрикос",
        },
        {
          id: 689,
          weight: 240,
          custom_measure: "шт.",
          custom_measure_count: 8,
          title: "Сливы",
        },
        {
          id: 507,
          weight: 150,
          custom_measure: "стакан",
          custom_measure_count: 1,
          title: "Вишня",
        },
        {
          id: 451,
          weight: 250,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Яблоки",
        },
      ],
      optional_ingredients: [],
      proteins: 0.23,
      fats: 0.09,
      carbs: 5.82,
      calories: 24.54,
    },
    {
      id: 219533,
      active_cooking_time: 20,
      total_cooking_time: 25,
      difficulty_level: 1,
      title: "Клубничный морс",
      subtitle:
        "Многие привыкли к брусничным и клюквенным морсам, но из клубники этот напиток получится ничуть не хуже. Готовится он очень просто, и понадобятся только сами ягоды, вода и немного сахара. Сладость напитка регулируйте самостоятельно, добавляя или сокращая количество сахара.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC8zS0pMenouanBlZw.jpg",
      preparation: {
        content: "Вымойте клубнику и уберите листочки. Подготовьте марлю.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC80NXg4ZlQuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Поставьте на плиту кастрюлю с водой, доведите до кипения. Положите клубнику в марлю и выжмите из нее сок в чистую миску.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC8zVXJtSm8uanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Оставшийся в ткани жмых выложите в кипящую воду. Добавьте сахар. Варите 1-2 минуты. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC80UDdrZDMuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Остудите морс. Процедите через чистую марлю, чтобы отделить жмых. Он больше не понадобится.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC9FNGFoVVcuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Влейте клубничный сок в процеженную жидкость. Остудите напиток.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC9heW9RcFguanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 117,
          weight: 300,
          custom_measure: "стакан",
          custom_measure_count: 2.5,
          title: "Клубника",
        },
        {
          id: 312,
          weight: 50,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Сахар",
        },
        {
          id: 54,
          weight: 500,
          custom_measure: "стакан",
          custom_measure_count: 2.5,
          title: "Вода",
        },
      ],
      optional_ingredients: [
        {
          id: 144,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Корица",
        },
        {
          id: 312,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Сахар",
        },
      ],
      proteins: 0.28,
      fats: 0.14,
      carbs: 8.52,
      calories: 35.76,
    },
    {
      id: 219396,
      active_cooking_time: 30,
      total_cooking_time: 35,
      difficulty_level: 2,
      title: "Клубничный компот на зиму",
      subtitle:
        "Сохраните вкус лета на зиму, приготовив клубничный компот в сезон свежих ягод. Чтобы компот хорошо хранился, правильно стерилизуйте банки. Ингредиенты рассчитаны на приготовление компота для двух банок объемом 1 литр.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zaFBFU3QuanBlZw.jpg",
      preparation: {
        content: "Промойте мяту и клубнику. У ягод уберите листики. Заранее ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zd2I4aWMuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Разделите клубнику на две равные части и выложите в банки. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zYXJMaUUuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "В каждую банку засыпьте половину сахара. Добавьте по 1 г лимонной кислоты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9xSFBHYlYuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Положите в банки по веточке мяты. Она добавит компоту очень приятный вкус и вместе с лимонной кислотой позволит напитку дольше храниться.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9meHdTRkguanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Вскипятите воду. Залейте в банки так, чтобы они заполнились по самое горлышко.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9VNmd5VmsuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Закатайте банки крышкой. Переверните и укутайте одеялом или полотенцем. Дайте компоту полностью остыть.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9HUzZWRkMuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 117,
          weight: 396,
          custom_measure: "стакан",
          custom_measure_count: 3.3,
          title: "Клубника",
        },
        {
          id: 312,
          weight: 135,
          custom_measure: "стакан",
          custom_measure_count: 0.75,
          title: "Сахар",
        },
        {
          id: 184,
          weight: 1,
          custom_measure: "г",
          custom_measure_count: 1,
          title: "Лимонная кислота",
        },
        {
          id: 54,
          weight: 1700,
          custom_measure: "стакан",
          custom_measure_count: 8.5,
          title: "Вода",
        },
        {
          id: 228,
          weight: 2,
          custom_measure: "веточка",
          custom_measure_count: 2,
          title: "Мята",
        },
      ],
      optional_ingredients: [
        {
          id: 454,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Ягоды",
        },
      ],
      proteins: 0.15,
      fats: 0.07,
      carbs: 7.37,
      calories: 29.19,
    },
    {
      id: 219397,
      active_cooking_time: 5,
      total_cooking_time: 15,
      difficulty_level: 1,
      title: "Вишневый чай",
      subtitle:
        "Чай с вишней можно приготовить в любое время года. Не обязательно дожидаться лета и урожая свежих ягод. Не менее вкусным получится и напиток из замороженной вишни. Добавьте в готовый вишневый чай сахар или мед, если любите напитки послаще. Но сначала обязательно попробуйте чай. Возможно, естественный вкус вишни не захочется ничем перебивать.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80RmQzbmsuanBlZw.jpg",
      preparation: {
        content:
          "Разморозьте вишню и дайте стечь лишней жидкости. Если использовать замороженную вишню, то вода быстро остынет и чай не заварится. Уберите косточки из вишни, если они есть. Подготовьте заварочный чайник.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zVHlYbnkuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Вскипятите воду и обдайте одним стаканом жидкости дно и стенки чайника. Так напиток лучше заварится.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9FaERtTmUuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description: "Выложите в заварочный чайник вишню.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zVWVwa1YuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Положите два пакетика чая. Влейте оставшиеся два стакана кипятка.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9HeUNNY3QuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Оставьте заварочный чайник на столе на 10 минут, прикрыв его крышкой. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9RYzlCN2QuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 510,
          weight: 90,
          custom_measure: "г",
          custom_measure_count: 90,
          title: "Замороженная вишня",
        },
        {
          id: 19865,
          weight: 10,
          custom_measure: "г",
          custom_measure_count: 10,
          title: "Чай",
        },
        {
          id: 54,
          weight: 600,
          custom_measure: "стакан",
          custom_measure_count: 3,
          title: "Вода",
        },
      ],
      optional_ingredients: [
        {
          id: 312,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Сахар",
        },
      ],
      proteins: 0.1,
      fats: 0.06,
      carbs: 1.32,
      calories: 6.31,
    },
    {
      id: 219391,
      active_cooking_time: 30,
      total_cooking_time: 30,
      difficulty_level: 2,
      title: "Компот из апельсинов на зиму",
      subtitle:
        "У компота из апельсинов насыщенный аромат и приятный освежающий вкус, в нем сладость удачно сочетается с кислинкой. Компот можно охладить и пить сразу или заготовить на зиму. Для этого стерилизуйте банки, закатайте крышками и храните в темном прохладном месте. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9aZm9iNkIuanBlZw.jpg",
      preparation: {
        content:
          "Тщательно помойте апельсины. Подготовьте сотейник, стерилизуйте банки удобным способом. Кстати, о разных способах стерилизации банок вы можете прочитать в ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS92TlYzTlUuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Неочищенные апельсины нарежьте кружочками, так дольки сохранят форму. Аккуратно срежьте кожуру и отложите, она понадобится в рецепте. Удалите белые перегородки. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80RFo2M2MuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description: "Положите нарезанную мякоть апельсинов в банку.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9GTWRYN3guanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Вскипятите воду. Наполните ею банку с апельсинами примерно на 1/3 часть. После этого прикройте ее крышкой и оставьте на 3 минуты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9FNm03WmouanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description: "Всыпьте в сотейник сахар. Не включайте нагрев. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80OWNITHIuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Перелейте воду из банки с апельсинами в сотейник. Перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80UGs0ckEuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Переложите в сотейник апельсиновые корки и поставьте на средний огонь. Доведите до кипения, проварите еще 30 секунд. С помощью ложки или шумовки аккуратно достаньте апельсиновые корки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80VUdIbUguanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Залейте апельсиновую мякоть в банке кипящим сиропом. Добавьте лимонный сок. Перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9GY3JaUFYuanBlZw.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Плотно закройте банку крышкой. Затем накройте полотенцем и оставьте до полного остывания. Так температура сохранится дольше, и компот пройдет повторную стерилизацию. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zc0g0QW8uanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 6,
          weight: 375,
          custom_measure: "шт.",
          custom_measure_count: 3,
          title: "Апельсин",
        },
        {
          id: 312,
          weight: 720,
          custom_measure: "стакан",
          custom_measure_count: 4,
          title: "Сахар",
        },
        {
          id: 54,
          weight: 2000,
          custom_measure: "стакан",
          custom_measure_count: 10,
          title: "Вода",
        },
        {
          id: 185,
          weight: 36,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Лимонный сок",
        },
      ],
      optional_ingredients: [
        {
          id: 6,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Апельсин",
        },
        {
          id: 228,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Мята",
        },
      ],
      proteins: 0.12,
      fats: 0.03,
      carbs: 23.95,
      calories: 87.74,
    },
    {
      id: 218853,
      active_cooking_time: 20,
      total_cooking_time: 20,
      difficulty_level: 2,
      title: "Компот из базилика на зиму",
      subtitle:
        "Компот из базилика готовится всего за 15-20 минут. Напиток получается очень вкусным: в горячем виде он не даст замерзнуть зимой, особенно если добавить немного тертого имбиря или корицы, а в жару прекрасно утолит жажду. Дополните компот лаймом, клубникой, мятой и другими ингредиентами, чтобы разнообразить вкус напитка.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS80U2hTbVouanBlZw.jpg",
      preparation: {
        content:
          "Помойте базилик, слегка обсушите на бумажных полотенцах. Простерилизуйте банку любым удобным способом: над паром, в духовке или в микроволновке. Прокипятите крышку. Подготовьте закаточную машинку. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS9UYmltUW8uanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Положите базилик в банку. Насыпьте сахар и лимонную кислоту.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS8zb1pFNlQuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Вскипятите воду. Налейте кипяток в банку частями: сначала заполните ее на четверть, потом до половины, а затем полностью.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS8zZERzMkouanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Плотно закатайте банку крышкой при помощи машинки. Переверните вверх дном, укройте одеялом и оставьте до полного остывания.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS9GRkdpY2suanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 12,
          weight: 80,
          custom_measure: "пучок",
          custom_measure_count: 1,
          title: "Базилик",
        },
        {
          id: 312,
          weight: 90,
          custom_measure: "стакан",
          custom_measure_count: 0.5,
          title: "Сахар",
        },
        {
          id: 184,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Лимонная кислота",
        },
        {
          id: 54,
          weight: 1000,
          custom_measure: "л",
          custom_measure_count: 1,
          title: "Вода",
        },
      ],
      optional_ingredients: [
        {
          id: 182,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Лед",
        },
        {
          id: 12,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Базилик",
        },
      ],
      proteins: 0.17,
      fats: 0.04,
      carbs: 7.95,
      calories: 29.63,
    },
    {
      id: 218852,
      active_cooking_time: 20,
      total_cooking_time: 60,
      difficulty_level: 2,
      title: "Компот из клубники с мятой",
      subtitle:
        "Компот из клубники напоминает домашний лимонад. Он не только вкусный, но и хорошо освежает за счет добавления в напиток мяты и лимона. Если же вы хотите менее выраженные цитрусовые нотки в компоте, то замените лимон на апельсин. Из указанного количества ингредиентов получается одна банка варенья объемом 1 л. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS80M0xXUTYuanBlZw.jpg",
      preparation: {
        content:
          "Вымойте клубнику, мяту и лимон. Уберите у клубники чашелистики. Простерилизуйте банку с крышкой. Подготовьте закаточную машинку. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS9qZzQzQk0uanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description: "Нарежьте лимон тонкими дольками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS8zNDdlU3YuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description: "Выложите клубнику на дно банки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS80TjVoR2cuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Положите лимонные дольки и веточки мяты поверх клубники.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS8zRjRuUHMuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description: "Всыпьте в банку сахар.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS8zS3FLaHQuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Вскипятите воду и сразу залейте ей ингредиенты в банке. Прикройте крышкой и дайте постоять 30 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS8zdXlmRjIuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Перелейте жидкость из банки в кастрюлю и дайте еще раз закипеть, а затем вновь перелейте в банку к клубнике с лимоном.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS80UTdEcFkuanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Закатайте крышку при помощи специальной машинки. Переверните вверх дном и дайте остыть, укутав одеялом.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNS9hYmR2eTYuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 117,
          weight: 200,
          custom_measure: "г",
          custom_measure_count: 200,
          title: "Клубника",
        },
        {
          id: 228,
          weight: 1,
          custom_measure: "веточка",
          custom_measure_count: 1,
          title: "Мята",
        },
        {
          id: 183,
          weight: 120,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Лимон",
        },
        {
          id: 312,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Сахар",
        },
        {
          id: 54,
          weight: 1000,
          custom_measure: "л",
          custom_measure_count: 1,
          title: "Вода",
        },
      ],
      optional_ingredients: [],
      proteins: 0.19,
      fats: 0.07,
      carbs: 8.34,
      calories: 34.15,
    },
    {
      id: 218823,
      active_cooking_time: 20,
      total_cooking_time: 50,
      difficulty_level: 2,
      title: "Персиковый компот без стерилизации",
      subtitle:
        "Заготовки на зиму без стерилизации очень удобны. Они быстро делаются и хорошо хранятся. Овощи и фрукты сохраняют свою хрустящую текстуру, а их вкус остается нежным. Чтобы приготовить компот из персиков без стерилизации, выбирайте очень хорошие плоды. На них не должно быть вмятин или трещинок. Обязательно нужно хорошенько их помыть. Проверьте банку с заготовкой на герметичность и оставьте храниться в прохладном темном месте. Из указанного количества ингредиентов получается одна банка компота объемом 1,5 л.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80UlU4dk4uanBlZw.jpg",
      preparation: {
        content:
          "Тщательно вымойте персики. Простерилизуйте банку для заготовки и крышку.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9iUXFvRlUuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Разведите соду в воде. Замочите персики в этом растворе и оставьте на 30 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80RWs0Y2kuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Промойте фрукты холодной водой и вытрите насухо. Разрежьте плоды пополам.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9MUERBOHAuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Уложите персики в банку. Всыпьте сахар и лимонную кислоту.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80QURwS1IuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Вскипятите 1,25 л воды. Влейте в банку и сразу же закройте крышкой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zYVVoQnMuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Переверните банку вверх дном и поставьте на полотенце. Проверьте, что банка герметично закрыта, и вода из-под крышки не сочится. Укутайте банку в полотенце и дайте остыть.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9KcXlGOXAuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 685,
          weight: 1100,
          custom_measure: "г",
          custom_measure_count: 1100,
          title: "Персики",
        },
        {
          id: 54,
          weight: 1250,
          custom_measure: "л",
          custom_measure_count: 1.25,
          title: "Вода",
        },
        {
          id: 312,
          weight: 90,
          custom_measure: "г",
          custom_measure_count: 90,
          title: "Сахар",
        },
        {
          id: 184,
          weight: 1.25,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Лимонная кислота",
        },
        {
          id: 348,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Сода",
        },
      ],
      optional_ingredients: [],
      proteins: 0.4,
      fats: 0.04,
      carbs: 8.75,
      calories: 34,
    },
    {
      id: 221841,
      active_cooking_time: 30,
      total_cooking_time: 150,
      difficulty_level: 2,
      title: "Летний сок из апельсина и лимона",
      subtitle:
        "Этот цитрусовый напиток очень ароматный, вкусный, кисло-сладкий. То что нужно в жаркий летний день. Апельсин, лимон, сахар и вода — это все, что потребуется для его приготовления. Чтобы взять максимум от цитрусовых, понадобится и сок, и цедра. Приготовьте сок заранее и храните в холодильнике, чтобы в любой момент была возможность налить себе стаканчик.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9CQXRHOXMuanBlZw.jpg",
      preparation: {
        content:
          "Хорошенько помойте апельсины и лимон. Подготовьте мясорубку, сито и кастрюлю.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9mVzJhdUEuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Нарежьте апельсин и лимон на крупные кусочки произвольной формы и уберите в морозилку на 2 часа или на ночь.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9Hb3FqRHkuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Прокрутите кусочки лимона и апельсина через мясорубку. Положите в кастрюлю.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9GU3l0VHIuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Налейте в кастрюлю литр воды и поставьте на сильный огонь. После закипания всыпьте сахар и тщательно перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC9QTTZ1VzYuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description: "Влейте оставшуюся воду. Хорошо перемешайте напиток.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8zNDRSdWguanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Процедите сок, отожмите жмых и дайте напитку полностью остыть. Перелейте его в графин или банку и уберите в холодильник.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwOC8zUzNGNk4uanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для напитка",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 6,
          weight: 125,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Апельсин",
        },
        {
          id: 183,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 0.5,
          title: "Лимон",
        },
        {
          id: 312,
          weight: 180,
          custom_measure: "стакан",
          custom_measure_count: 1,
          title: "Сахар",
        },
        {
          id: 54,
          weight: 2000,
          custom_measure: "стакан",
          custom_measure_count: 10,
          title: "Вода",
        },
      ],
      optional_ingredients: [
        {
          id: 6,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Апельсин",
        },
      ],
      proteins: 0.07,
      fats: 0.01,
      carbs: 8.1,
      calories: 30.32,
    },
    {
      id: 218707,
      active_cooking_time: 30,
      total_cooking_time: 45,
      difficulty_level: 2,
      title: "Компот из вишни на зиму",
      subtitle:
        "Компот из вишни в концентрированном сахарном сиропе получается очень ароматным и сладким. При подаче его переливают в кувшин и разбавляют прохладной кипяченой водой в пропорции примерно 1:3. Благодаря тому, что вишня не варится, а лишь заливается горячим сиропом, она остается крепкой и яркой, как свежая, но становится еще вкуснее. А дополнительная заливка ягод кипящей водой обеспечивает заготовке стерильность и долгое хранение.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zWTZiR2YuanBlZw.jpg",
      preparation: {
        content:
          "Очистите вишню от плодоножек. Тщательно промойте ягоды, подержите их в дуршлаге, чтобы вся вода стекла. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy9zVE5RSGguanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Постелите на стол чистое полотенце, поставьте на него сухую простерилизованную банку. Уложите в банку промытую вишню.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy80SnJDcGQuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Налейте воду в ковш или сотейник. Поставьте на сильный огонь и доведите до кипения. Перелейте кипящую воду в банку с вишней, чтобы она полностью покрывала ягоды. Прикройте банку крышкой и дайте ягодам постоять в горячей воде в течение 15 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy9kemp6dkUuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Осторожно вылейте воду из банки обратно в ковш, не трогая ягоды. Всыпьте в воду из-под вишни сахар, хорошо перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zS2k4cW4uanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Поставьте ковш с водой и сахаром на средний огонь. Дайте смеси закипеть и проварите ее 2-3 минуты, постоянно помешивая, чтобы сахар растворился.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zc2dQdjMuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Залейте вишню в банке получившимся сахарным сиропом. Закатайте банку, переверните вверх дном и дайте полностью остыть при комнатной температуре. Поставьте банку храниться в темное прохладное место.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy83ZlBlTEouanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 507,
          weight: 600,
          custom_measure: "г",
          custom_measure_count: 600,
          title: "Вишня",
        },
        {
          id: 312,
          weight: 90,
          custom_measure: "г",
          custom_measure_count: 90,
          title: "Сахар",
        },
        {
          id: 54,
          weight: 300,
          custom_measure: "мл",
          custom_measure_count: 300,
          title: "Вода",
        },
      ],
      optional_ingredients: [
        {
          id: 20549,
          weight: 15,
          custom_measure: "г",
          custom_measure_count: 15,
          title: "Коктейльная вишня",
        },
      ],
      proteins: 0.48,
      fats: 0.3,
      carbs: 15.65,
      calories: 64.13,
    },
    {
      id: 218701,
      active_cooking_time: 40,
      total_cooking_time: 55,
      difficulty_level: 2,
      title: "Компот из абрикосов",
      subtitle:
        "Сладкие спелые абрикосы при консервировании отдадут сахарному сиропу свой медовый аромат и красивый янтарный цвет. Концентрированный компот без косточек и с лимонной кислотой будет долго храниться даже без стерилизации заполненной банки в кипятке. При этом половинки абрикосов останутся крепкими и упругими. Украсьте ими десерты или йогурт, а сироп разбавьте прохладной водой и пейте вместо соков.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zY1RwbUYuanBlZw.jpg",
      preparation: {
        content:
          "Помойте абрикосы и аккуратно разделите пополам, уберите косточки. Подготовьте кастрюлю, чистое тканевое полотенце, банку объемом 1 л с винтовой крышкой. Простерилизуйте банку и крышку в кипящей воде или в духовке при температуре 150°C в течение 15 минут.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zamc1aGguanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Постелите на стол тканевое полотенце. Поставьте на него простерилизованную банку. Уложите в банку половинки абрикосов.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zTkZFbUIuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Налейте в кастрюлю воду, поставьте на сильный огонь и доведите до кипения. Залейте кипящей водой абрикосы, заполняя банку до самого горлышка.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zQ0tERTQuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Прикройте горлышко банки крышкой, не закручивая ее. Оставьте абрикосы постоять в горячей воде 15 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zVzhkVGcuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Перелейте воду из банки с абрикосами обратно в кастрюлю. Снова поставьте ее на сильный огонь. Всыпьте в воду сахар и лимонную кислоту, тщательно перемешайте. Дайте воде закипеть и проварите сироп 2-3 минуты, чтобы сахар окончательно растворился.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zOTlacGQuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Вылейте сироп в банку с абрикосами. Плотно закройте крышку на банке, поставьте на полотенце и укутайте ее. Полностью остудите при комнатной температуре. Поместите банку с компотом из абрикосов в темное прохладное место.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zeFplWTUuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 769,
          weight: 300,
          custom_measure: "г",
          custom_measure_count: 300,
          title: "Абрикос",
        },
        {
          id: 312,
          weight: 75,
          custom_measure: "г",
          custom_measure_count: 75,
          title: "Сахар",
        },
        {
          id: 54,
          weight: 850,
          custom_measure: "мл",
          custom_measure_count: 850,
          title: "Вода",
        },
        {
          id: 184,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Лимонная кислота",
        },
      ],
      optional_ingredients: [
        {
          id: 144,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Корица",
        },
        {
          id: 468,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Бадьян (звездочка)",
        },
      ],
      proteins: 0.22,
      fats: 0.02,
      carbs: 8.3,
      calories: 32.87,
    },
    {
      id: 218698,
      active_cooking_time: 10,
      total_cooking_time: 135,
      difficulty_level: 1,
      title: "Компот из ананаса",
      subtitle:
        "Этот компот с легкостью заменит любой покупной лимонад и прекрасно освежит в жаркий день. Если хотите, чтобы вкус был более мягкий, то возьмите вместо лайма лимон или апельсин. Количество сахара тоже можно регулировать в зависимости от предпочтений. Чтобы напиток получился еще больше похожим на лимонад, вместо обычной воды влейте газированную, но не минеральную.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zdFNBNG4uanBlZw.jpg",
      preparation: {
        content: "Помойте и обсушите ананас и лайм.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy83U3JBYVkuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description: "Срежьте верхушку ананаса с листьями и нижнюю часть.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zcUJnM0wuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Аккуратно срезайте ножом корку, стараясь сохранить побольше мякоти. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zVlQ2cEUuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Нарежьте мякоть ананаса на небольшие кусочки и положите в кастрюлю.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zNTJtZmQuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description: "Засыпьте ананас сахаром и выжмите сок из лайма.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy9yY05VOVouanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Влейте воду и поставьте на средний огонь. Доведите содержимое кастрюли до кипения. Проварите 5 минут, пока весь сахар не растворится.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy91SEZOVmUuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Уберите кастрюлю с плиты. Накройте крышкой. Оставьте на столе до полного остывания.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy80R0p6RzUuanBlZw.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 3,
          weight: 700,
          custom_measure: "шт.",
          custom_measure_count: 0.5,
          title: "Ананас",
        },
        {
          id: 54,
          weight: 1250,
          custom_measure: "л",
          custom_measure_count: 1.25,
          title: "Вода",
        },
        {
          id: 180,
          weight: 30,
          custom_measure: "шт.",
          custom_measure_count: 0.5,
          title: "Лайм",
        },
        {
          id: 312,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Сахар",
        },
      ],
      optional_ingredients: [
        {
          id: 180,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Лайм",
        },
        {
          id: 228,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Мята",
        },
      ],
      proteins: 0.12,
      fats: 0.04,
      carbs: 4.22,
      calories: 18.63,
    },
    {
      id: 218564,
      active_cooking_time: 15,
      total_cooking_time: 135,
      difficulty_level: 2,
      title: "Лимонад из маракуйи",
      subtitle:
        "Немного терпкая маракуйя с ее цитрусовыми и дынными нотками станет основой освежающего и вкусного лимонада из газированной минеральной воды. Достаньте мякоть из спелых плодов, смешайте ее с мятой, добавьте сахарный сироп и сироп маракуйи для сладости и еще более яркого вкуса напитка. Разведите смесь водой и дайте лимонаду настояться и охладиться пару часов.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMi80Nk0zTjYuanBlZw.jpg",
      preparation: {
        content:
          "Помойте маракуйю и мяту, промокните их от влаги бумажными полотенцами. Отделите листочки мяты от стеблей. Подготовьте чашку, кувшин, сито и высокие бокалы для подачи лимонада.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMi9xbjRtWGguanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Разрежьте маракуйю пополам, достаньте мякоть при помощи ложки. Выложите мякоть в кувшин.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMi9ON3dzZkIuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Мелко порубите листочки мяты, добавьте их в кувшин к маракуйе.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMi9DU3c4Z1cuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Соедините в чашке сироп маракуйи и сахарный сироп. Перемешайте и вылейте в кувшин к остальным ингредиентам.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMi80TlBKUEMuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Заполните кувшин минеральной газированной водой. Поставьте в холодильник минимум на 2 часа. Процедите лимонад через сито в бокалы и подайте лимонад к столу.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMi8zYkY1ZGcuanBlZw.jpg",
        },
      ],
      kitchen_type: "Азиатская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 12485,
          weight: 140,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Маракуйя",
        },
        {
          id: 228,
          weight: 1,
          custom_measure: "веточка",
          custom_measure_count: 1,
          title: "Мята",
        },
        {
          id: 5771,
          weight: 600,
          custom_measure: "мл",
          custom_measure_count: 600,
          title: "Газированная вода",
        },
        {
          id: 9439,
          weight: 15,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Сахарный сироп",
        },
        {
          id: 20426,
          weight: 18,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Сок из маракуйи",
        },
      ],
      optional_ingredients: [
        {
          id: 228,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Мята",
        },
      ],
      proteins: 0.44,
      fats: 0.07,
      carbs: 4.11,
      calories: 19.19,
    },
    {
      id: 219190,
      active_cooking_time: 10,
      total_cooking_time: 10,
      difficulty_level: 1,
      title: "Двухслойный смузи с бананами и ягодами",
      subtitle:
        "Этот летний смузи не только полезный, но и очень вкусный. В составе — бананы, малина, клубника и немного базилика. Такой напиток очень понравится детям!",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC8zNWNuNFcuanBlZw.jpg",
      preparation: {
        content: "Помойте фрукты и зелень.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC80VkVxQWUuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Взбейте в блендере бананы, питьевой йогурт, листочки свежего зеленого базилика, сок лимона, а также щепотку цедры лимона. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC9SVldqWkouanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Положите малину и клубнику в сотейник. Влейте вишневый сок. После этого слегка уварите смесь на среднем огне в течение 5–10 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC9VcEpxRk4uanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description: "Взбейте ягодную смесь блендером до однородности. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC9IWUM5VDUuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Процедите ягоды через сито, а затем снова взбейте их со сливками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC8zOUpGZ3ouanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Влейте в чистый стакан банановую смесь, а сверху осторожно вылейте ягодную, чтобы получились два аккуратных слоя.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOC91OHpVdDQuanBlZw.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Для первого слоя",
      optional_ingredient_title: "Для второго слоя",
      main_ingredients: [
        {
          id: 16,
          weight: 300,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Банан",
        },
        {
          id: 98,
          weight: 150,
          custom_measure: "мл",
          custom_measure_count: 150,
          title: "Йогурт",
        },
        {
          id: 12,
          weight: 8,
          custom_measure: "г",
          custom_measure_count: 8,
          title: "Базилик",
        },
        {
          id: 185,
          weight: 10,
          custom_measure: "ч. л.",
          custom_measure_count: 2,
          title: "Лимонный сок",
        },
        {
          id: 5773,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Цедра лимона",
        },
      ],
      optional_ingredients: [
        {
          id: 700,
          weight: 150,
          custom_measure: "г",
          custom_measure_count: 150,
          title: "Замороженная малина",
        },
        {
          id: 501,
          weight: 150,
          custom_measure: "г",
          custom_measure_count: 150,
          title: "Клубника замороженная",
        },
        {
          id: 683,
          weight: 100,
          custom_measure: "мл",
          custom_measure_count: 100,
          title: "Вишневый сок",
        },
        {
          id: 333,
          weight: 100,
          custom_measure: "мл",
          custom_measure_count: 100,
          title: "Сливки 20% жирности",
        },
      ],
      proteins: 1.88,
      fats: 3.31,
      carbs: 11.12,
      calories: 84.25,
    },
    {
      id: 220093,
      active_cooking_time: 10,
      total_cooking_time: 1455,
      difficulty_level: 2,
      title: "Кофе колд брю с крем-брюле",
      subtitle:
        "Этот освежающий напиток готовится методом холодного заваривания. Кофе среднего помола нужно залить водой и оставить настаиваться 12-20 часов. За это время кофе медленно растворится в воде, образуя крепкий концентрированный напиток. Лучше всего попросить в кофейне смолоть для вас кофейные зерна под френч-пресс или фильтр-кофе. Добавьте в стакан с напитком порцию мороженого крем-брюле, но подавайте не сразу. Когда мороженое начнет таять, оно обогатит вкус кофе.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS80V1I3ekouanBlZw.jpg",
      preparation: {
        content: "Подготовьте кувшин или графин для заваривания кофе.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS80U1BNWEIuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Насыпьте кофе в кувшин и залейте водой комнатной температуры. Хорошенько перемешайте, накройте крышкой и оставьте на 2-4 часа при комнатной температуре. Потом уберите в холодильник на 12-20 часов.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS8zaUd1NXQuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Процедите кофе через очень мелкое сито или сложенную в несколько слоев марлю.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS8zWTU3M28uanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Достаньте мороженое из стаканчика и разрежьте вдоль пополам.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS8zTllqQ2ouanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Положите половинки мороженого в стаканы для подачи и залейте кофейным напитком. Подавайте через 5 минут, когда мороженое начнет подтаивать и смешиваться с кофе.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS8zdkYzR3QuanBlZw.jpg",
        },
      ],
      kitchen_type: "Американская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 54,
          weight: 500,
          custom_measure: "л",
          custom_measure_count: 0.5,
          title: "Вода",
        },
        {
          id: 216,
          weight: 24,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Молотый кофе",
        },
        {
          id: 220,
          weight: 80,
          custom_measure: "г",
          custom_measure_count: 80,
          title: "Мороженое",
        },
      ],
      optional_ingredients: [
        {
          id: 6043,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Зефир",
        },
      ],
      proteins: 1.02,
      fats: 2.03,
      carbs: 3.34,
      calories: 35.39,
    },
    {
      id: 220091,
      active_cooking_time: 10,
      total_cooking_time: 20,
      difficulty_level: 2,
      title: "Шоколадный милкшейк с вафельной крошкой",
      subtitle:
        "Шоколадный милкшейк готовится очень просто. Бросьте все ингредиенты в блендер и хорошенько взбейте. К тому же, этот сладкий напиток получается очень сытным. Чтобы не думать о том, что делать с оставшимися вафельными стаканчиками, подсушите их в духовке, измельчите в крошку и украсьте коктейль во время подачи. А еще для украшения подойдут шоколадная стружка, орешки, зефир или крекеры. Лучше разлить напиток в заранее охлажденные стаканы. Так он дольше будет оставаться холодным.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS80NHVrVDkuanBlZw.jpg",
      preparation: {
        content:
          "Подготовьте блендер с чашей. Застелите противень пергаментом.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS96NzNTbVMuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Достаньте мороженое из вафельных стаканчиков и положите в чашу блендера.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS9TREpnNnQuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Разрежьте стаканчики на несколько частей и выложите на противень. Отправьте в духовку, разогретую до 160°С с включенной конвекцией, на 10 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS84RnNmWWcuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Добавьте в чашу блендера кокосовые сливки, питьевой йогурт и малину. Пробейте в течение 3 минут до получения однородной вязкой консистенции.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS8zUFp6eEMuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Измельчите вафельные стаканчики в крошку при помощи блендера или просто скалкой, положив их в пакет.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS94eGhFUlkuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 5998,
          weight: 210,
          custom_measure: "мл",
          custom_measure_count: 210,
          title: "Кокосовые сливки",
        },
        {
          id: 700,
          weight: 110,
          custom_measure: "г",
          custom_measure_count: 110,
          title: "Замороженная малина",
        },
        {
          id: 20310,
          weight: 160,
          custom_measure: "г",
          custom_measure_count: 160,
          title: "Шоколадное мороженое",
        },
        {
          id: 98,
          weight: 100,
          custom_measure: "мл",
          custom_measure_count: 100,
          title: "Йогурт",
        },
      ],
      optional_ingredients: [
        {
          id: 31,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Белый шоколад",
        },
        {
          id: 228,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Мята",
        },
      ],
      proteins: 2.75,
      fats: 9.7,
      carbs: 10.26,
      calories: 140.14,
    },
    {
      id: 217452,
      active_cooking_time: 5,
      total_cooking_time: 20,
      difficulty_level: 1,
      title: "Летний чай с мятой и ягодами",
      subtitle:
        "Этот чай не только прекрасно освежает в летнюю жару, но и поддержит силы организма. В его составе травы и ягоды, которые отлично справляются с недомоганиями и придают бодрость. Кроме того, такой напиток идеален для детокса, ведь в него не добавляется сахар. Травяные смеси завариваются при температуре 95-100°C, поэтому подготовьте все продукты и залейте их только что вскипевшей водой. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyOC90VmNwRkYuanBlZw.jpg",
      preparation: {
        content:
          "Хорошо помойте листья мяты, выложите их обсушиться на полотенце. Вымойте ягоды. Подготовьте заварочный чайник. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyOC8za0NMVmYuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Вскипятите воду и ополосните заварочный чайник примерно стаканом кипятка. Слейте эту воду.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyOC80Rm9OcW0uanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Выложите на дно заварочного чайника листья мяты. Сверху положите облепиху, клубнику, смородину и крыжовник. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyOC9NemM4Y0cuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Залейте травы и ягоды оставшимся кипятком. Накройте чайник крышкой. Оставьте завариваться 15 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyOC8zd2VwMmMuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 54,
          weight: 2000,
          custom_measure: "л",
          custom_measure_count: 2,
          title: "Вода",
        },
        {
          id: 228,
          weight: 25,
          custom_measure: "г",
          custom_measure_count: 25,
          title: "Мята",
        },
        {
          id: 230,
          weight: 20,
          custom_measure: "г",
          custom_measure_count: 20,
          title: "Облепиха",
        },
        {
          id: 435,
          weight: 20,
          custom_measure: "г",
          custom_measure_count: 20,
          title: "Черная смородина",
        },
        {
          id: 117,
          weight: 50,
          custom_measure: "г",
          custom_measure_count: 50,
          title: "Клубника",
        },
        {
          id: 9397,
          weight: 50,
          custom_measure: "г",
          custom_measure_count: 50,
          title: "Крыжовник",
        },
      ],
      optional_ingredients: [
        {
          id: 183,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Лимон",
        },
        {
          id: 228,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Мята",
        },
        {
          id: 312,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Сахар",
        },
      ],
      proteins: 0.1,
      fats: 0.07,
      carbs: 0.6,
      calories: 3.72,
    },
    {
      id: 217293,
      active_cooking_time: 5,
      total_cooking_time: 5,
      difficulty_level: 1,
      title: "Грушевый лимонад",
      subtitle:
        "Для приготовления этого грушевого лимонада даже не понадобятся сами груши, разве что для украшения. Напиток делается на основе двух сиропов с добавлением небольшого количества лимонного сока и газировки. Старайтесь выбрать газированную воду с без добавок, чтобы она не перебила вкус самого лимонада.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi80NEZHcFEuanBlZw.jpg",
      preparation: {
        content: "Подготовьте блендер, прозрачные стаканы и кувшин для подачи.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi8zbjhqOHYuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Влейте в чашу блендера миндальный и грушевый сироп. Положите лед. Взбейте все в однородную массу.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi8za2I1OGkuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Влейте в чашу газированную воду. Добавьте лимонный сок. Перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi9RcndiRWEuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description: "Перелейте напиток в кувшин для подачи.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi9zd3BFRksuanBlZw.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 5771,
          weight: 1000,
          custom_measure: "л",
          custom_measure_count: 1,
          title: "Газированная вода",
        },
        {
          id: 7258,
          weight: 54,
          custom_measure: "ст. л.",
          custom_measure_count: 3,
          title: "Миндальный сироп",
        },
        {
          id: 185,
          weight: 18,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Лимонный сок",
        },
        {
          id: 182,
          weight: 125,
          custom_measure: "шт.",
          custom_measure_count: 5,
          title: "Лед",
        },
        {
          id: 20600,
          weight: 100,
          custom_measure: "мл",
          custom_measure_count: 100,
          title: "Грушевый сироп",
        },
      ],
      optional_ingredients: [
        {
          id: 79,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Груша",
        },
      ],
      proteins: 0.02,
      fats: 0.01,
      carbs: 6.48,
      calories: 10.55,
    },
    {
      id: 217292,
      active_cooking_time: 15,
      total_cooking_time: 195,
      difficulty_level: 2,
      title: "Компот из шелковицы",
      subtitle:
        "Для компота шелковицу не варят, а просто заливают кипящей водой вместе с сахаром. Так ягоды сохраняют максимальное количество витаминов, остаются крепкими и упругими. Лимонная кислота обеспечит длительное хранение напитка. У готового компота из шелковицы красивый винный цвет и деликатный цветочно-ягодный аромат. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi9kb205YWMuanBlZw.jpg",
      preparation: {
        content:
          "Переберите шелковицу, удалите поврежденные или незрелые ягоды. Промойте ягоды в дуршлаге, дайте воде полностью стечь. Простерилизуйте банку объемом 1 литр.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi8zaXhSYjQuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Насыпьте шелковицу в банку. Засыпьте ее сахаром, добавьте лимонную кислоту.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi9FNE1veDQuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Вскипятите воду в чайнике или кастрюле. Поставьте банку с ягодами в жаропрочную миску. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi8zMzV0YjIuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Залейте ягоды кипящей водой чуть выше «плечиков» банки, стараясь, чтобы струя воды не касалась стенок банки, а только самих ягод.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi9MeXVNRDQuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Закройте банку и дайте ей полностью остыть в течение 2-3 часов. Уберите компот на хранение в прохладное место.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi9zd3p5aHUuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 6054,
          weight: 240,
          custom_measure: "г",
          custom_measure_count: 240,
          title: "Шелковица",
        },
        {
          id: 312,
          weight: 120,
          custom_measure: "г",
          custom_measure_count: 120,
          title: "Сахар",
        },
        {
          id: 184,
          weight: 1.5,
          custom_measure: "г",
          custom_measure_count: 1.5,
          title: "Лимонная кислота",
        },
        {
          id: 54,
          weight: 800,
          custom_measure: "мл",
          custom_measure_count: 800,
          title: "Вода",
        },
      ],
      optional_ingredients: [
        {
          id: 183,
          weight: 10,
          custom_measure: "г",
          custom_measure_count: 10,
          title: "Лимон",
        },
      ],
      proteins: 0.15,
      fats: 0,
      carbs: 13.03,
      calories: 48.02,
    },
    {
      id: 220063,
      active_cooking_time: 10,
      total_cooking_time: 10,
      difficulty_level: 2,
      title: "Коктейль «Содовая по-французски»",
      subtitle:
        "Коктейль «Содовая по-французски» выделяется из линейки похожих напитков своей необычной подачей. Поверх бокала на ломтик лайма выкладывается кубик сахара, смоченный в ликере блю кюрасао. Коктейль получается летним и очень ярким. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS80SHhLRWUuanBlZw.jpg",
      preparation: {
        content:
          "Помойте и почистите корень имбиря. Подготовьте шейкер, мадлер, стрейнер, ложку для абсента или шпажки, бокал на ножке для подачи.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNi8zUjR2dkUuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Положите в шейкер корень имбиря и раздавите его мадлером.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS9DamFhZDIuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Налейте в шейкер сок лайма, сахарный сироп, 0,5 ст.л. кюрасао и джин.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS8zWm9BZWguanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Добавьте кубики льда. Закройте шейкер и хорошенько взболтайте коктейль.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS8zdnZENlouanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Наполните бокал ледяной крошкой. Перелейте коктейль в бокал через стрейнер или ситечко.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS8zbjQ4Z3QuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description: "Влейте в бокал спрайт и аккуратно размешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNS80TFhZNG4uanBlZw.jpg",
        },
      ],
      kitchen_type: "Французская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 9439,
          weight: 20,
          custom_measure: "мл",
          custom_measure_count: 20,
          title: "Сахарный сироп",
        },
        {
          id: 585,
          weight: 20,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Сок лайма",
        },
        {
          id: 20311,
          weight: 70,
          custom_measure: "мл",
          custom_measure_count: 70,
          title: "Спрайт",
        },
        {
          id: 139,
          weight: 5,
          custom_measure: "г",
          custom_measure_count: 5,
          title: "Корень имбиря",
        },
        {
          id: 7142,
          weight: 40,
          custom_measure: "мл",
          custom_measure_count: 40,
          title: "Джин",
        },
        {
          id: 20038,
          weight: 20,
          custom_measure: "мл",
          custom_measure_count: 20,
          title: "Кюрасао",
        },
        {
          id: 182,
          weight: 35,
          custom_measure: "стакан",
          custom_measure_count: 0.5,
          title: "Лед",
        },
      ],
      optional_ingredients: [
        {
          id: 180,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Лайм",
        },
        {
          id: 312,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Сахар",
        },
      ],
      proteins: 0.1,
      fats: 0.02,
      carbs: 14.59,
      calories: 105.48,
    },
  ],
  preserves: [
    {
      id: 219391,
      active_cooking_time: 30,
      total_cooking_time: 30,
      difficulty_level: 2,
      title: "Компот из апельсинов на зиму",
      subtitle:
        "У компота из апельсинов насыщенный аромат и приятный освежающий вкус, в нем сладость удачно сочетается с кислинкой. Компот можно охладить и пить сразу или заготовить на зиму. Для этого стерилизуйте банки, закатайте крышками и храните в темном прохладном месте. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9aZm9iNkIuanBlZw.jpg",
      preparation: {
        content:
          "Тщательно помойте апельсины. Подготовьте сотейник, стерилизуйте банки удобным способом. Кстати, о разных способах стерилизации банок вы можете прочитать в ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS92TlYzTlUuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Неочищенные апельсины нарежьте кружочками, так дольки сохранят форму. Аккуратно срежьте кожуру и отложите, она понадобится в рецепте. Удалите белые перегородки. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80RFo2M2MuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description: "Положите нарезанную мякоть апельсинов в банку.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9GTWRYN3guanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Вскипятите воду. Наполните ею банку с апельсинами примерно на 1/3 часть. После этого прикройте ее крышкой и оставьте на 3 минуты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9FNm03WmouanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description: "Всыпьте в сотейник сахар. Не включайте нагрев. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80OWNITHIuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Перелейте воду из банки с апельсинами в сотейник. Перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80UGs0ckEuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Переложите в сотейник апельсиновые корки и поставьте на средний огонь. Доведите до кипения, проварите еще 30 секунд. С помощью ложки или шумовки аккуратно достаньте апельсиновые корки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS80VUdIbUguanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Залейте апельсиновую мякоть в банке кипящим сиропом. Добавьте лимонный сок. Перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS9GY3JaUFYuanBlZw.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Плотно закройте банку крышкой. Затем накройте полотенцем и оставьте до полного остывания. Так температура сохранится дольше, и компот пройдет повторную стерилизацию. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zc0g0QW8uanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 6,
          weight: 375,
          custom_measure: "шт.",
          custom_measure_count: 3,
          title: "Апельсин",
        },
        {
          id: 312,
          weight: 720,
          custom_measure: "стакан",
          custom_measure_count: 4,
          title: "Сахар",
        },
        {
          id: 54,
          weight: 2000,
          custom_measure: "стакан",
          custom_measure_count: 10,
          title: "Вода",
        },
        {
          id: 185,
          weight: 36,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Лимонный сок",
        },
      ],
      optional_ingredients: [
        {
          id: 6,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Апельсин",
        },
        {
          id: 228,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Мята",
        },
      ],
      proteins: 0.12,
      fats: 0.03,
      carbs: 23.95,
      calories: 87.74,
    },
    {
      id: 219128,
      active_cooking_time: 30,
      total_cooking_time: 60,
      difficulty_level: 2,
      title: "Джем из замороженной клубники",
      subtitle:
        "Джем из замороженной клубники по вкусу ничем не отличается от джема из свежих ягод. Тратить много времени на приготовление не придется, а сами ягоды не нужно размораживать. Достаточно засыпать сахаром и пару раз проварить. Из указанного количества ингредиентов получается две баночки варенья объемом по 0,25 л каждая.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9BZGZnUmIuanBlZw.jpg",
      preparation: {
        content: "Подготовьте простерилизованные банки с крышкой и блендер.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9WbVl1N1guanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Выложите клубнику, не размораживая, в кастрюлю. Всыпьте к ней сахар. Влейте 50 мл воды. Поставьте на слабый огонь. Варите ягоды примерно 10 минут. Снимите образовавшуюся пену.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zR2RKSzUuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Снимите кастрюлю с плиты. Пробейте ягодную массу погружным блендером. Верните кастрюлю на плиту. Варите около 30 минут до загустения.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9kQmg2SGYuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Перелейте джем в банки, закройте крышками и дайте полностью остыть под одеялом.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zaVBXa0UuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 501,
          weight: 700,
          custom_measure: "г",
          custom_measure_count: 700,
          title: "Клубника замороженная",
        },
        {
          id: 312,
          weight: 350,
          custom_measure: "г",
          custom_measure_count: 350,
          title: "Сахар",
        },
        {
          id: 54,
          weight: 50,
          custom_measure: "мл",
          custom_measure_count: 50,
          title: "Вода",
        },
      ],
      optional_ingredients: [],
      proteins: 0.51,
      fats: 0.25,
      carbs: 36.53,
      calories: 141.27,
    },
    {
      id: 219127,
      active_cooking_time: 20,
      total_cooking_time: 40,
      difficulty_level: 2,
      title: "Варенье из базилика",
      subtitle:
        "Варенье из базилика может стать прекрасным дополнением не только к мясным или рыбным блюдам, но и к закускам: сырам или паштетам. Оно не получится насыщенно-зеленого цвета, как само растение, но будет очень аппетитным, с восхитительным пряным ароматом. Из указанного количества ингредиентов получается одна баночка варенья объемом 300 мл.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zemtnUlEuanBlZw.jpg",
      preparation: {
        content:
          "Тщательно помойте базилик. Подготовьте стерильную баночку с крышкой.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9DZzJOVnkuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Снимите листья базилика со стеблей. Выложите листочки в сотейник или кастрюльку.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zVFJIMkUuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description: "Засыпьте зелень сахаром, добавьте лимонную кислоту.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9rSzVzYVkuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Влейте в сотейник воду и поставьте на средний огонь. Доведите массу до кипения и варите 5-7 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy80S3pYVFUuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Пропустите сироп через сито в чистую миску. Листья базилика больше не понадобятся, их можно выбросить. Свой вкус и аромат они уже отдали.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zZ3pmNEIuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Перелейте сироп обратно в сотейник. Всыпьте пектин и хорошенько перемешайте. Варите на слабом огне еще 3-4 минуты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zYlIycEEuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Налейте варенье в баночку. Закройте крышкой. Дайте полностью остыть, укутав в одеяло. Дайте остыть при комнатной температуре.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9jQVhMcXIuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская, интернациональная",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 12,
          weight: 80,
          custom_measure: "г",
          custom_measure_count: 80,
          title: "Базилик",
        },
        {
          id: 312,
          weight: 135,
          custom_measure: "г",
          custom_measure_count: 135,
          title: "Сахар",
        },
        {
          id: 54,
          weight: 350,
          custom_measure: "мл",
          custom_measure_count: 350,
          title: "Вода",
        },
        {
          id: 184,
          weight: 0.5,
          custom_measure: "г",
          custom_measure_count: 0.5,
          title: "Лимонная кислота",
        },
        {
          id: 6039,
          weight: 7.5,
          custom_measure: "ч. л.",
          custom_measure_count: 1.5,
          title: "Пектин",
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
      ],
      proteins: 0.35,
      fats: 0.08,
      carbs: 25.29,
      calories: 93.31,
    },
    {
      id: 219092,
      active_cooking_time: 50,
      total_cooking_time: 550,
      difficulty_level: 2,
      title: "Варенье с кусочками персиков",
      subtitle:
        "Для красивых ровных долек в варенье возьмите спелые, но крепкие персики с плотной мякотью. Не засыпайте их сахаром, а варите в уже готовом сахарном сиропе. Так дольки хорошо размягчатся, но останутся целыми, а сироп получится густым, но прозрачным. Из указанного количества ингредиентов получается одна банка варенья объемом 0,5 л. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80OWg5WGcuanBlZw.jpg",
      preparation: {
        content:
          "Помойте и вытрите персики. Подготовьте кастрюлю, чистое тканевое полотенце и банку для хранения. Простерилизуйте банку и крышку в кипящей воде или в духовке при температуре 150 градусов в течение 10 минут.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zM3VlSFQuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Вскипятите в чайнике 1 стакан воды, ошпарьте персики. Разрежьте их на четвертинки, удалите косточки. Нарежьте дольки полукруглыми ломтиками толщиной 4-5 мм. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zZnRORlguanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Соедините в кастрюле сахар и воду для сиропа, хорошо перемешайте. Поставьте кастрюлю на средний огонь. Постоянно помешивая, полностью растворите сахар. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80emlITXUuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Выложите в горячий сахарный сироп дольки персиков. Осторожно перемешайте и дайте персикам с сиропом закипеть. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zVjVLTmIuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Уберите пену и проварите фрукты в течение 15 минут, изредка помешивая. Снимите кастрюлю с огня. Прикройте ее полотенцем и оставьте остывать на 3-4 часа.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9SZXhuUHcuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Еще раз поставьте кастрюлю на средний огонь и дайте персикам закипеть. Варите их 10-15 минут, помешивая, всыпьте лимонную кислоту. Уберите кастрюлю с огня и снова остудите варенье в течение 4-5 часов.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC82YzJQM2QuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Вскипятите варенье в третий раз и сразу снимите его с огня. Сразу переложите его в банку и закройте крышкой. Остудите заготовку при комнатной температуре и уберите на хранение в холодильник.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC95OVRwbUIuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 685,
          weight: 550,
          custom_measure: "г",
          custom_measure_count: 550,
          title: "Персики",
        },
        {
          id: 312,
          weight: 360,
          custom_measure: "г",
          custom_measure_count: 360,
          title: "Сахар",
        },
        {
          id: 184,
          weight: 1.25,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Лимонная кислота",
        },
        {
          id: 54,
          weight: 50,
          custom_measure: "мл",
          custom_measure_count: 50,
          title: "Вода",
        },
      ],
      optional_ingredients: [],
      proteins: 0.51,
      fats: 0.06,
      carbs: 43.84,
      calories: 161.89,
    },
    {
      id: 219096,
      active_cooking_time: 30,
      total_cooking_time: 60,
      difficulty_level: 2,
      title: "Варенье-ассорти",
      subtitle:
        "Такое варенье можно сделать из любого набора фруктов, которые придутся по вкусу. Не забудьте добавить цитрусовые, ведь они придадут десерту приятную, едва заметную кислинку, которая хорошо дополняет сладость остальных фруктов. Лимон можно заменить лаймом, если вы предпочитаете более выраженный цитрусовый вкус. Если выбираете виноград, то лучше взять сорта без косточек. Из указанного количества ингредиентов получается одна баночка варенья объемом 0,5 л.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zazZrd0guanBlZw.jpg",
      preparation: {
        content:
          "Тщательно вымойте все фрукты. Подготовьте простерилизованную банку и крышку.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zZ3B3M3ouanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Удалите сердцевину у яблока и груши. Нарежьте мякоть тонкими дольками.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy90YnUybTMuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Нарежьте лимон и апельсин половинками кружочков. Извлеките все косточки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zUnFuN2suanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description: "Разделите сливы пополам и уберите косточки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9od3UzR24uanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Выложите груши в кастрюлю. Залейте водой, поставьте на огонь и доведите до кипения.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zQ0doaHUuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Проварите груши пару минут в кипящей воде и переложите на тарелку. В воду из-под груш всыпьте сахар. Убавьте огонь до слабого и дождитесь, когда сахар полностью растворится.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy80NjJDWUcuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description: "Выложите в сироп половинки слив. Проварите 2-3 минуты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zZ0Foa1IuanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Добавьте к сливам яблоки, груши и виноград. Варите на слабом огне до мягкости фруктов.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9uZjkyRVYuanBlZw.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Пока варятся фрукты в сиропе, выложите в отдельную кастрюльку лимон и апельсин. Залейте водой, поставьте на огонь и доведите до кипения.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zTmZDc0MuanBlZw.jpg",
        },
        {
          title: "Шаг 9",
          description:
            "Переложите цитрусовые к остальным ингредиентам. Варите все вместе до тех пор, пока фрукты не станут прозрачными.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9hUjk3RDMuanBlZw.jpg",
        },
        {
          title: "Шаг 10",
          description:
            "Переложите варенье в стерильную банку. Закройте крышкой, укутайте полотенцем или одеялом и дайте остыть.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zNTI2S3cuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 451,
          weight: 250,
          custom_measure: "г",
          custom_measure_count: 250,
          title: "Яблоки",
        },
        {
          id: 183,
          weight: 60,
          custom_measure: "г",
          custom_measure_count: 60,
          title: "Лимон",
        },
        {
          id: 79,
          weight: 150,
          custom_measure: "г",
          custom_measure_count: 150,
          title: "Груша",
        },
        {
          id: 689,
          weight: 250,
          custom_measure: "г",
          custom_measure_count: 250,
          title: "Сливы",
        },
        {
          id: 6,
          weight: 60,
          custom_measure: "г",
          custom_measure_count: 60,
          title: "Апельсин",
        },
        {
          id: 53,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Виноград",
        },
        {
          id: 312,
          weight: 500,
          custom_measure: "г",
          custom_measure_count: 500,
          title: "Сахар",
        },
      ],
      optional_ingredients: [],
      proteins: 0.39,
      fats: 0.22,
      carbs: 42.7,
      calories: 161.82,
    },
    {
      id: 218775,
      active_cooking_time: 20,
      total_cooking_time: 150,
      difficulty_level: 2,
      title: "Варенье из замороженных ягод",
      subtitle:
        "В сезон созревания ягод не всегда получается найти время, чтобы приготовить варенье. Но ведь десерт из замороженных ягод ничуть не хуже, чем из свежих! Для этого рецепта подойдут любые ягоды или их смесь. Чтобы варенье получилось более ароматным, добавьте цедру и сок лимона. Цитрусовые поспособствуют загущению варенья благодаря содержащемуся в них пектину.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zTW5HckIuanBlZw.jpg",
      preparation: {
        content:
          "Отмерьте нужное количество всех ингредиентов. Простерилизуйте банки и крышки для хранения ягод любым удобным способом.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zaGg3NXcuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Смешайте в миске замороженные ягоды с сахаром и оставьте размораживаться на 2 часа.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC83OEQ2VnYuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Переложите ягоды с сахаром в кастрюлю и поставьте на средний огонь. После закипания уменьшите нагрев и варите 10 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80NWkzVEUuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Добавьте сок и цедру лимона. Перемешайте. Варите еще 1 минуту.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zVmlhTnouanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Разложите варенье по баночкам и плотно закатайте крышками. Дайте варенью полностью остыть при комнатной температуре, обернув баночки одеялом.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9YUW40dmcuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 805,
          weight: 145,
          custom_measure: "г",
          custom_measure_count: 145,
          title: "Замороженная клюква",
        },
        {
          id: 7120,
          weight: 140,
          custom_measure: "г",
          custom_measure_count: 140,
          title: "Замороженная брусника",
        },
        {
          id: 312,
          weight: 170,
          custom_measure: "г",
          custom_measure_count: 170,
          title: "Сахар",
        },
        {
          id: 5773,
          weight: 2,
          custom_measure: "г",
          custom_measure_count: 2,
          title: "Цедра лимона",
        },
        {
          id: 185,
          weight: 18,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Лимонный сок",
        },
      ],
      optional_ingredients: [
        {
          id: 228,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Мята",
        },
      ],
      proteins: 0.4,
      fats: 0.21,
      carbs: 39.8,
      calories: 151.45,
    },
    {
      id: 218773,
      active_cooking_time: 15,
      total_cooking_time: 1470,
      difficulty_level: 2,
      title: "Тертые огурцы в банках на зиму",
      subtitle:
        "Для этого рецепта выбирайте огурцы, которые не годятся для консервации целиком: крупные, неровные, обрезанные и т.д. Все равно они будут измельчены при помощи терки. Только перед приготовлением попробуйте шкурку на горечь и при необходимости срежьте ее. В рецепте указан минимальный набор приправ для маринования. Добавьте по вкусу острый перец, укроп или петрушку, чеснок и зерна горчицы. Также очень важно хорошо помыть и простерилизовать банки, чтобы огурцы хранились всю зиму.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9VVlZoM2suanBlZw.jpg",
      preparation: {
        content:
          "Помойте огурцы. Простерилизуйте банку любым удобным способом: над паром, в духовке или в микроволновке. Прокипятите крышку.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zOUo0RXMuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description: "Натрите огурцы на средней терке. Положите в кастрюлю.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zekduNWkuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Добавьте к огурцам соль, сахар и уксус. Тщательно перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zRkp6aGUuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Положите в банку черный и душистый перец горошком. Сверху выложите огурцы.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80M0VCOGouanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Поставьте банку с огурцами в кастрюлю. Налейте в кастрюлю воду так, чтобы она доходила до плечиков банки. Включите средний нагрев. Стерилизуйте огурцы 15 минут после закипания воды.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80RTZFZWMuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Плотно закатайте банку крышкой, накройте полотенцем и оставьте так на 24 часа. Потом уберите банку с огурцами на хранение в холодное место.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zZ2RBeEIuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 237,
          weight: 300,
          custom_measure: "шт.",
          custom_measure_count: 3,
          title: "Огурец",
        },
        {
          id: 352,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Соль",
        },
        {
          id: 312,
          weight: 25,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Сахар",
        },
        {
          id: 608,
          weight: 22.5,
          custom_measure: "ст. л.",
          custom_measure_count: 1.5,
          title: "Столовый уксус 9%",
        },
        {
          id: 438,
          weight: 1,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Черный перец горошком",
        },
        {
          id: 85,
          weight: 2,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Душистый перец горошком",
        },
      ],
      optional_ingredients: [
        {
          id: 237,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Огурец",
        },
        {
          id: 256,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Перец чили",
        },
      ],
      proteins: 0.65,
      fats: 0.14,
      carbs: 10.64,
      calories: 42.86,
    },
    {
      id: 218761,
      active_cooking_time: 30,
      total_cooking_time: 210,
      difficulty_level: 2,
      title: "Варенье из киви на зиму",
      subtitle:
        "Киви обладает ярким тропическим вкусом, но при этом фрукт легко найти практически в любом магазине. Для варенья выбирайте не слишком спелые плоды. Пусть они будут немного твердыми, чтобы кусочки киви сохранили форму во время варки. В этом рецепте мы добавляем в варенье немного лимонного сока. Он не только придает яркие цитрусовые нотки, но и помогает загустить массу. Варенье из киви получается очень красивого изумрудного цвета с черными крапинками.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zN1Biam4uanBlZw.jpg",
      preparation: {
        content:
          "Помойте и почистите киви. Простерилизуйте банки для хранения варенья любым удобным способом: над паром, в микроволновке или в духовке. Прокипятите крышки. Вымойте лимон.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zNnFtWkUuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Нарежьте очищенные киви на небольшие кубики и положите в кастрюлю.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zNTZ6UFguanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description: "Засыпьте сахаром, перемешайте и оставьте на 3 часа.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zYWRxdGouanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Поставьте кастрюлю на средний огонь и доведите до кипения. Варите 2-3 минуты и отключите нагрев. Остудите до комнатной температуры.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80RUV3WVQuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Достаньте из варенья кусочки киви при помощи шумовки. Кастрюлю с сиропом верните на плиту. Варите сироп на слабом огне 30 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80UE5HazYuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Выжмите сок из ¼ лимона в сироп. Верните в сироп кусочки киви и перемешайте. Варите еще 5 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9xV0dLOG8uanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Разложите горячее варенье по баночкам и плотно закатайте крышками. Заверните банки в одеяло и оставьте до полного остывания.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC93d3B6eTguanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 115,
          weight: 400,
          custom_measure: "г",
          custom_measure_count: 400,
          title: "Киви",
        },
        {
          id: 312,
          weight: 450,
          custom_measure: "г",
          custom_measure_count: 450,
          title: "Сахар",
        },
        {
          id: 183,
          weight: 30,
          custom_measure: "шт.",
          custom_measure_count: 0.25,
          title: "Лимон",
        },
      ],
      optional_ingredients: [
        {
          id: 19865,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Чай",
        },
      ],
      proteins: 0.39,
      fats: 0.19,
      carbs: 54.82,
      calories: 207.64,
    },
    {
      id: 218759,
      active_cooking_time: 40,
      total_cooking_time: 90,
      difficulty_level: 2,
      title: "Варенье из персиков с косточками",
      subtitle:
        "На самом деле в это варенье из персиков кладут не сами косточки, а очищенные ядрышки. Они украшают десерт и придают ему нотки миндаля, которые подчеркивает ром. С половинок персиков снимают кожицу, укладывают их в банку и заливают сиропом из воды, сахара и меда. Затем добавляют ядрышки, ром и стерилизуют банку в кипящей воде. Так фрукты размягчаются, но остаются целыми. Для безалкогольного варианта варенья замените ром ванилью.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80UnBiZFAuanBlZw.jpg",
      preparation: {
        content:
          "Помойте персики, промокните их салфетками от влаги. Подготовьте жаропрочную миску, кастрюлю, сотейник, чистое тканевое полотенце, кухонный молоточек, банку объемом 0,5 л с консервной крышкой и ключ для закатки. Простерилизуйте банку и крышку на пару или в духовке при температуре 150°C около 10-15 минут.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9tRTNjVkMuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Положите персики в жаропрочную миску. Вскипятите в чайнике 1-2 стакана воды, ошпарьте ею персики. Немного остудите фрукты и снимите с них кожицу. Аккуратно разделите персики пополам и достаньте из них косточки, а затем нарежьте мякоть произвольными кусочками. Уложите персики в простерилизованную банку.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC9FakF5RjQuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Помойте персиковые косточки и расколите их кухонным молоточком. Извлеките из косточек ядрышки, переложите их в жаропрочную миску. Залейте ядрышки оставшейся в чайнике горячей водой. Дайте им постоять 10-15 минут, затем очистите ядрышки от шелухи.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zaVRQNmUuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Налейте в сотейник 1 стакан воды, добавьте сахар и мед, все перемешайте. Поставьте сотейник на средний огонь. Дождитесь, пока смесь закипит. Поварите сироп, помешивая, в течение 5 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80cEtQZE0uanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Снимите сотейник с огня, остудите сироп до комнатной температуры и перелейте его в банку с персиками. Опустите в банку с персиками и сиропом очищенные ядрышки косточек. Влейте ром. Прикройте банку консервной крышкой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zOEtubVguanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Наполните кастрюлю водой примерно на ⅔ объема. Поставьте в кастрюлю банку с персиками, чтобы вода доходила до ее плечиков. Доведите воду в кастрюле до кипения на сильном огне, простерилизуйте банку в течение 10 минут. Переставьте банку на тканевое полотенце, закатайте на ней крышку специальной машинкой. Переверните банку на крышку и остудите.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80TUdCZlEuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская, русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 685,
          weight: 660,
          custom_measure: "г",
          custom_measure_count: 660,
          title: "Персики",
        },
        {
          id: 312,
          weight: 180,
          custom_measure: "г",
          custom_measure_count: 180,
          title: "Сахар",
        },
        {
          id: 54,
          weight: 200,
          custom_measure: "стакан",
          custom_measure_count: 1,
          title: "Вода",
        },
        {
          id: 204,
          weight: 56,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Мед",
        },
        {
          id: 20557,
          weight: 40,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Золотой ром",
        },
      ],
      optional_ingredients: [
        {
          id: 228,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Мята",
        },
      ],
      proteins: 0.54,
      fats: 0.06,
      carbs: 26.44,
      calories: 108,
    },
    {
      id: 218699,
      active_cooking_time: 50,
      total_cooking_time: 70,
      difficulty_level: 2,
      title: "Повидло из абрикосов",
      subtitle:
        "Мягкие перезревшие абрикосы не подойдут для компотов и варенья с косточками, а вот для повидла будут идеальны. Когда они проварятся с сахаром примерно 30 минут, их не понадобится долго измельчать. Слегка обработайте крупные куски погружным блендером или разомните толкушкой. У повидла из абрикосов оранжево-янтарный цвет, полупрозрачная и немного волокнистая текстура, яркий фруктовый вкус с нотками меда.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy9lY2RQQlEuanBlZw.jpg",
      preparation: {
        content:
          "Хорошо помойте абрикосы, промокните их от влаги бумажными полотенцами. Разделите абрикосы пополам и удалите из них косточки. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy95TFpVOEMuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Уложите половинки абрикосов слоями в кастрюлю, пересыпая сахаром каждый слой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zQVBwTXcuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Прикройте кастрюлю с абрикосами полотенцем и оставьте их при комнатной температуре на 3-4 часа, чтобы фрукты выделили сок, а сахар начал растворяться.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zTUhpQ2YuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Поставьте кастрюлю с абрикосами и сахаром на средний огонь. Подождите, когда масса закипит.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy9tVmpXRjQuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Снимите появившуюся пену и поварите абрикосы в течение 30 минут, часто помешивая, чтобы половинки размягчились.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy9mTGM0Ym4uanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Уберите кастрюлю с абрикосами с огня, дайте массе немного остыть. Измельчите оставшиеся целыми половинки абрикосов с помощью погружного блендера.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy80OTlUR3guanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Снова нагрейте абрикосовую массу на среднем огне, помешивая. Дайте ей закипеть и проварите повидло 1 минуту.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy9ZRVlUWm4uanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Поставьте банку на тканевое полотенце и переложите в нее горячее повидло. Закройте банку крышкой и остудите при комнатной температуре. Уберите повидло в темное прохладное место на хранение.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy80VnZFaFMuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 769,
          weight: 500,
          custom_measure: "г",
          custom_measure_count: 500,
          title: "Абрикос",
        },
        {
          id: 312,
          weight: 450,
          custom_measure: "г",
          custom_measure_count: 450,
          title: "Сахар",
        },
      ],
      optional_ingredients: [
        {
          id: 228,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Мята",
        },
      ],
      proteins: 0.47,
      fats: 0.05,
      carbs: 52.01,
      calories: 194.63,
    },
    {
      id: 218697,
      active_cooking_time: 30,
      total_cooking_time: 30,
      difficulty_level: 2,
      title: "Густое вишневое варенье с косточками",
      subtitle:
        "Густое вишневое варенье с косточками обладает неповторимым вкусом и ароматом. Это очень быстрый рецепт. Не нужно тратить время на удаление косточек из каждой вишенки, да и варится такое варенье всего 2-3 минуты. Дополнительную и очень интересную вкусовую гамму ему придадут специи: кардамон, бадьян, гвоздика, душистый перец горошком или корица. Чтобы варенье дольше хранилось, необходимо раскладывать его по банкам, когда масса полностью охладится. Если не дать ей остыть, то может быстро образоваться плесень.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy9iRlNoYlEuanBlZw.jpg",
      preparation: {
        content:
          "Помойте вишню, удалите все веточки и листочки. Простерилизуйте банки для хранения варенья любым удобным способом: над паром, в духовке или в микроволновке. Прокипятите крышки.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy80OHZVV2cuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Переложите вишню в небольшую кастрюлю. Насыпьте сахар и налейте воду, перемешайте. Поставьте на плиту.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy80TEx2eFEuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Поставьте кастрюлю с вишней на средний огонь и доведите массу до кипения, часто помешивая.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy80RXc2SnUuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Уменьшите нагрев до минимального. Добавьте пектин. Варите 2-3 минуты, постоянно перемешивая. Снимите с огня и дайте полностью остыть.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8za3R3VG0uanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "После полного остывания разложите варенье по стерилизованным банкам, плотно закройте крышками. Уберите их на хранение в холодное место.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy9yVEE5aXAuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 507,
          weight: 300,
          custom_measure: "г",
          custom_measure_count: 300,
          title: "Вишня",
        },
        {
          id: 312,
          weight: 180,
          custom_measure: "г",
          custom_measure_count: 180,
          title: "Сахар",
        },
        {
          id: 54,
          weight: 50,
          custom_measure: "мл",
          custom_measure_count: 50,
          title: "Вода",
        },
        {
          id: 6039,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Пектин",
        },
      ],
      optional_ingredients: [],
      proteins: 0.45,
      fats: 0.28,
      carbs: 40.19,
      calories: 152.31,
    },
    {
      id: 218560,
      active_cooking_time: 30,
      total_cooking_time: 760,
      difficulty_level: 3,
      title: "Салат «Зимний король»",
      subtitle:
        "Эта заготовка на зиму настолько вкусная, что ее съедают сразу, как только она появляется на столе. Именно поэтому ее и назвали «Зимний король». Из ингредиентов в ней всего лишь огурцы, лук и укроп, а также уксус и приправы. Закуска прекрасно сочетается с мясом или рыбой, а также ее можно использовать в качестве заправки к рассольнику или солянке.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMi9BOERESEsuanBlZw.jpg",
      preparation: {
        content:
          "Вымойте и обсушите огурцы, укроп и лук. Снимите с лука шелуху. Подготовьте стерильные банки и крышки.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMi84ajRXUVAuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Нарежьте огурцы полукольцами. Измельчите укроп. Нашинкуйте лук перьями. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMi81aHZ4MnMuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Соедините все нарезанные ингредиенты в кастрюле и перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMi9tSzR5SkIuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Влейте в кастрюлю растительное масло, уксус. Добавьте соль, сахар, лавровый лист и горошины перца, хорошо перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMi80UFF5M3EuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Поставьте кастрюлю на слабый огонь. Дождитесь, когда огурцы поменяют цвет. Снимите кастрюлю с плиты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMi8zYnFjVG4uanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Выложите огурцы в стерильные банки. Закатайте крышки. Переверните банки вверх дном и укутайте в одеяло. Оставьте до полного остывания.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMi9leVp6RlguanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 237,
          weight: 500,
          custom_measure: "г",
          custom_measure_count: 500,
          title: "Огурец",
        },
        {
          id: 290,
          weight: 480,
          custom_measure: "г",
          custom_measure_count: 480,
          title: "Репчатый лук",
        },
        {
          id: 418,
          weight: 75,
          custom_measure: "пучок",
          custom_measure_count: 5,
          title: "Укроп",
        },
        {
          id: 287,
          weight: 250,
          custom_measure: "мл",
          custom_measure_count: 250,
          title: "Растительное масло",
        },
        {
          id: 363,
          weight: 50,
          custom_measure: "мл",
          custom_measure_count: 50,
          title: "Столовый уксус",
        },
        {
          id: 312,
          weight: 50,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Сахар",
        },
        {
          id: 352,
          weight: 50,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Соль",
        },
        {
          id: 179,
          weight: 2,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Лавровый лист",
        },
        {
          id: 438,
          weight: 2.5,
          custom_measure: "шт.",
          custom_measure_count: 5,
          title: "Черный перец горошком",
        },
      ],
      optional_ingredients: [],
      proteins: 0.86,
      fats: 17.21,
      carbs: 8.63,
      calories: 187.75,
    },
    {
      id: 218520,
      active_cooking_time: 40,
      total_cooking_time: 220,
      difficulty_level: 2,
      title: "Салат из огурцов с луком на зиму",
      subtitle:
        "Слишком крупные, неправильной формы или с грубой кожурой огурцы тоже подходят для заготовок на зиму. Нарежьте их кружочками и соедините с нашинкованным луком, заправив солью, сахаром, уксусом и растительным маслом. Когда огуречная масса выделит сок, прогрейте ее для стерильности заготовки и переложите в консервную банку. Пряный, освежающий и хрустящий салат станет отличным дополнением к соленой сельди или малосольной красной рыбе с горячим вареным картофелем.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS84bzlRMlIuanBlZw.jpg",
      preparation: {
        content:
          "Помойте огурцы, оботрите их бумажными полотенцами от влаги. Срежьте грубые, горькие на вкус или поврежденные участки огуречной кожуры. Вымойте и почистите лук. Ополосните укроп, отделите кисточки от стеблей. Подготовьте кастрюлю, банку объемом 0,5 л с консервной крышкой, ключ для закатки. Простерилизуйте банку и крышку в кипятке, на пару или в духовке в течение 10-15 минут.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS83TTJZZGYuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Нарежьте огурцы кружочками толщиной около 2-3 мм. Если ломтики получились слишком большими, то разрежьте их пополам.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9iOVZzdXYuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Нарежьте лук полукольцами толщиной примерно как кружочки огурцов или немного меньше.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS80RWtZRXguanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description: "Мелко порубите кисточки укропа.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS83YXl2a0wuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description: "Выложите нарезанные огурцы, лук и укроп в кастрюлю.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS8zeXVzUFUuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description: "Посыпьте соединенные овощи в кастрюле сахаром и солью.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9xdENLbUUuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description: "Полейте огурцы растительным маслом и уксусом.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9SNWlyd1QuanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Хорошо размешайте овощи с приправами, прикройте их крышкой и дайте постоять при комнатной температуре около 2-3 часов.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS95Wjg1OHIuanBlZw.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Когда огурцы и лук выделят сок, поставьте кастрюлю на сильный огонь. Дайте огуречной массе закипеть. Уменьшите огонь под кастрюлей до среднего и прогрейте огуречную массу, осторожно помешивая, в течение 5-6 минут, пока огурцы не посветлеют.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS80NWczdEQuanBlZw.jpg",
        },
        {
          title: "Шаг 9",
          description:
            "Переложите горячую огуречную массу в простерилизованную банку, закройте ее крышкой и закатайте ключом. Поставьте банку дном вверх и полностью остудите. Уберите огурцы с луком на хранение в прохладное место.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9FVnU0RXUuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 237,
          weight: 400,
          custom_measure: "шт.",
          custom_measure_count: 4,
          title: "Огурец",
        },
        {
          id: 290,
          weight: 80,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Репчатый лук",
        },
        {
          id: 418,
          weight: 8,
          custom_measure: "г",
          custom_measure_count: 8,
          title: "Укроп",
        },
        {
          id: 270,
          weight: 51,
          custom_measure: "ст. л.",
          custom_measure_count: 3,
          title: "Подсолнечное масло рафинированное",
        },
        {
          id: 312,
          weight: 20,
          custom_measure: "ч. л.",
          custom_measure_count: 2,
          title: "Сахар",
        },
        {
          id: 352,
          weight: 10,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Соль",
        },
        {
          id: 608,
          weight: 22.5,
          custom_measure: "ст. л.",
          custom_measure_count: 1.5,
          title: "Столовый уксус 9%",
        },
      ],
      optional_ingredients: [
        {
          id: 108,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Картошка",
        },
        {
          id: 260,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Петрушка",
        },
      ],
      proteins: 0.7,
      fats: 8.69,
      carbs: 7.41,
      calories: 108.07,
    },
    {
      id: 218518,
      active_cooking_time: 50,
      total_cooking_time: 50,
      difficulty_level: 2,
      title: "Маринованный чеснок",
      subtitle:
        "Маринованный чеснок очень пригодится зимой для соусов, холодца, заливной рыбы, салатов, других закусок и горячих блюд. Маленькие зубчики не придется чистить, и вы сэкономите время в период предпраздничных хлопот. К тому же маринованный с пряностями чеснок будет еще ароматнее, пикантнее и вкуснее, чем свежий. Такая закуска не испортится и не высохнет, будет храниться намного дольше целых головок.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS80OEw0MkguanBlZw.jpg",
      preparation: {
        content:
          "Разделите головки чеснока на зубчики, помойте их и почистите, разложите на бумажных полотенцах обсохнуть. Подготовьте сотейник, кастрюлю, чистые тканевые полотенца, банку объемом 0,25 л с винтовой крышкой. Простерилизуйте банку и крышку в кипятке, на пару или в духовке в течение 10-15 минут.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9xY0R5ejguanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Поставьте банку на чистое тканевое полотенце. Положите в банку ⅓ палочки корицы, гвоздику, лавровый лист и горошины душистого перца.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS80QXAyU3AuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Заполните банку очищенными зубчиками чеснока, укладывая их как можно плотнее друг к другу.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9ZaUo5dXIuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Налейте в сотейник воду, всыпьте в нее соль и сахар. Все хорошо перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9BaTIzNWguanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Поставьте сотейник на средний огонь. Дождитесь, когда смесь закипит. Помешивая, проварите ее 2-3 минуты, пока сахар и соль окончательно не растворятся.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9jNDhVQjkuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Снимите сотейник с сахарно-солевым раствором с огня. Влейте в раствор 70%-ную уксусную эссенцию, размешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS80SlJHVWcuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Залейте получившимся маринадом чеснок в банке. Прикройте банку крышкой, не закрывая ее полностью.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9McFVXdGsuanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Заполните кастрюлю водой примерно на ⅔ объема и поставьте на средний огонь. Установите в кастрюлю банку с чесноком, чтобы вода доходила до плечиков банки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9zWnIybnUuanBlZw.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Доведите воду в кастрюле до кипения, простерилизуйте банку в кипящей воде в течение 7-8 минут. Извлеките банку из воды, плотно закрутите на ней крышку. Переверните банку на крышку, дайте ей полностью остыть и уберите на хранение в прохладное место.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9GcHNuNGouanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 440,
          weight: 220,
          custom_measure: "г",
          custom_measure_count: 220,
          title: "Чеснок",
        },
        {
          id: 85,
          weight: 2,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Душистый перец горошком",
        },
        {
          id: 179,
          weight: 1,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Лавровый лист",
        },
        {
          id: 59,
          weight: 1,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Гвоздика",
        },
        {
          id: 144,
          weight: 1.8,
          custom_measure: "палочка",
          custom_measure_count: 0.3,
          title: "Корица",
        },
        {
          id: 54,
          weight: 120,
          custom_measure: "мл",
          custom_measure_count: 120,
          title: "Вода",
        },
        {
          id: 312,
          weight: 20,
          custom_measure: "ч. л.",
          custom_measure_count: 2,
          title: "Сахар",
        },
        {
          id: 352,
          weight: 10,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Соль",
        },
        {
          id: 743,
          weight: 1,
          custom_measure: "мл",
          custom_measure_count: 1,
          title: "Уксусная эссенция",
        },
      ],
      optional_ingredients: [
        {
          id: 144,
          weight: 6,
          custom_measure: "палочка",
          custom_measure_count: 1,
          title: "Корица",
        },
      ],
      proteins: 3.88,
      fats: 0.47,
      carbs: 24.49,
      calories: 113.45,
    },
    {
      id: 218481,
      active_cooking_time: 60,
      total_cooking_time: 100,
      difficulty_level: 2,
      title: "Хрустящие маринованные огурцы на зиму",
      subtitle:
        "Небольшие и крепкие огурцы с тонкой кожицей идеально подойдут для маринования на зиму. В маринаде с яблочным уксусом, пряностями и зеленью они станут пикантными и хрустящими. Такие огурцы отлично дополнят мясные и картофельные блюда или станут частью вкусных салатов. Залейте подготовленные овощи в банке маринадом, а затем простерилизуйте в кипящей воде, чтобы обеспечить заготовке долгое хранение.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC9TYUNwWkouanBlZw.jpg",
      preparation: {
        content:
          "Хорошо вымойте огурцы, отрежьте у них кончики. Ополосните и почистите чеснок. Помойте укроп и петрушку, разложите их на бумажных полотенцах обсохнуть. Отделите листочки петрушки и кисточки укропа от стеблей. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC80OUtLZTUuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Положите огурцы в миску, залейте их холодной водой и оставьте на 30-40 минут. Слейте воду и протрите огурцы насухо чистым бумажным полотенцем. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC8zQ3BvSjQuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Налейте в кастрюлю 500 мл воды и уксус, всыпьте к ним соль и сахар. Поставьте кастрюлю на сильный огонь, дождитесь, когда маринад закипит. Варите его в течение 5-7 минут, пока сахар полностью не растворится. Снимите кастрюлю с маринадом с огня.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC8zeWlyNVguanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Поставьте простерилизованную банку на тканевое полотенце. Положите на дно банки зубчики чеснока, кисточки укропа и веточки петрушки. Туда же опустите лавровый лист, гвоздику и горошины черного перца.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC8zdGZHOHIuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Заполните банку огурцами, ставя их по возможности вертикально вплотную друг к другу. Налейте в банку с огурцами горячий маринад, чтобы он доходил до плечиков банки. Прикройте банку крышкой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC8zWEN3UVYuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Ополосните кастрюлю из-под маринада, налейте в нее воду примерно на ⅔ объема. Поставьте кастрюлю на средний огонь, поместите в нее банку с огурцами. Дождитесь, когда вода в кастрюле закипит, и простерилизуйте банку около 15-20 минут, пока огурцы внутри не посветлеют.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC9tanVwZTIuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Извлеките банку из кастрюли, закатайте крышку при помощи ключа и поставьте банку на полотенце вверх дном. Остудите банку при комнатной температуре и уберите на хранение в прохладное место.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC8zS3k2QTUuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 440,
          weight: 10,
          custom_measure: "зубчик",
          custom_measure_count: 2,
          title: "Чеснок",
        },
        {
          id: 418,
          weight: 8,
          custom_measure: "г",
          custom_measure_count: 8,
          title: "Укроп",
        },
        {
          id: 260,
          weight: 8,
          custom_measure: "г",
          custom_measure_count: 8,
          title: "Петрушка",
        },
        {
          id: 438,
          weight: 1.5,
          custom_measure: "шт.",
          custom_measure_count: 3,
          title: "Черный перец горошком",
        },
        {
          id: 59,
          weight: 2,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Гвоздика",
        },
        {
          id: 179,
          weight: 1,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Лавровый лист",
        },
        {
          id: 54,
          weight: 500,
          custom_measure: "мл",
          custom_measure_count: 500,
          title: "Вода",
        },
        {
          id: 632,
          weight: 30,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Яблочный уксус 9%",
        },
        {
          id: 312,
          weight: 50,
          custom_measure: "г",
          custom_measure_count: 50,
          title: "Сахар",
        },
        {
          id: 352,
          weight: 25,
          custom_measure: "г",
          custom_measure_count: 25,
          title: "Соль",
        },
        {
          id: 237,
          weight: 700,
          custom_measure: "г",
          custom_measure_count: 700,
          title: "Огурец",
        },
      ],
      optional_ingredients: [],
      proteins: 0.48,
      fats: 0.1,
      carbs: 6.22,
      calories: 24.62,
    },
    {
      id: 217469,
      active_cooking_time: 40,
      total_cooking_time: 7960,
      difficulty_level: 2,
      title: "Цукаты из вишни в домашних условиях",
      subtitle:
        "Цукаты из вишни пригодятся для кексов или украшения десертов, это натуральные сладости для детей и взрослых без красителей и других добавок. Вишню без косточек сначала варят в сиропе, а затем хорошо высушивают при комнатной температуре. Для сиропа понадобится довольно много сахара, но на самой вишне его останется лишь столько, чтобы не дать ягодам испортиться при сушке и хранении. Вкус цукатов будет зависеть от самой вишни, поэтому выбирайте сладкие спелые ягоды. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyOC96eHNTM1guanBlZw.jpg",
      preparation: {
        content:
          "Помойте вишню, откиньте ее на дуршлаг и дайте полностью обсохнуть. Аккуратно удалите косточки из ягод. Подготовьте кастрюлю подходящего размера, глубокую миску, сито и банку с крышкой объемом 0,2 л.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyOC83UXptaDQuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Налейте в кастрюлю воду, поставьте на сильный огонь и дождитесь кипения. Всыпьте в воду сахар и прогрейте, постоянно помешивая, пока он полностью не растворится. Дайте сахарному сиропу покипеть 5 минут и снимите его с огня.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyOC8zb1NrWnIuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Выложите вишню в миску, равномерно полейте ягоды горячим сиропом. Оставьте вишню в темном прохладном месте на 6 часов, чтобы ягоды выделили сок.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyOC9tU2FIbTcuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Переложите вишню в кастрюлю или сотейник, поставьте на средний огонь. Доведите ягоды в сиропе до кипения и проварите их в течение 10 минут. Уберите кастрюлю с огня и дайте вишне постоять еще 5 часов. Снова поставьте кастрюлю с вишней на средний огонь и дайте массе закипеть. Прогрейте ягоды, помешивая, 5-6 минут, пока они не посветлеют, а сироп не загустеет.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyOC8zUmlzVGMuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Откиньте вишню на дуршлаг и дайте сиропу полностью стечь в течение 1-1,5 часа.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyOC9lbnZQZ0YuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Пересыпьте вишню в сито, распределив ее одним слоем. Оставьте ягоды на 5 суток в хорошо проветриваемом месте. Переложите готовые цукаты в банку, закройте крышкой и поставьте ее в холодильник.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyOC8zVnFTVkYuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 507,
          weight: 150,
          custom_measure: "г",
          custom_measure_count: 150,
          title: "Вишня",
        },
        {
          id: 54,
          weight: 39,
          custom_measure: "мл",
          custom_measure_count: 39,
          title: "Вода",
        },
        {
          id: 312,
          weight: 180,
          custom_measure: "г",
          custom_measure_count: 180,
          title: "Сахар",
        },
      ],
      optional_ingredients: [
        {
          id: 19865,
          weight: 150,
          custom_measure: "мл",
          custom_measure_count: 150,
          title: "Чай",
        },
      ],
      proteins: 0.23,
      fats: 0.14,
      carbs: 37.59,
      calories: 140,
    },
    {
      id: 216864,
      active_cooking_time: 50,
      total_cooking_time: 1010,
      difficulty_level: 2,
      title: "Варенье-пятиминутка из абрикосов",
      subtitle:
        "Абрикосы с сахаром и небольшим количеством воды доводят до кипения, варят 5 минут и остужают. Затем еще два раза проваривают по 5 минут с перерывом на остывание. Так половинки абрикосов не развариваются, а сироп становится прозрачным и в меру густым. У абрикосового варенья-пятиминутки красивый цвет натурального меда и такой же медово-сладкий аромат. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS9wcG9Fc2guanBlZw.jpg",
      preparation: {
        content:
          "Тщательно помойте абрикосы, вытрите с них влагу бумажными полотенцами. Подготовьте кастрюлю подходящего размера, чистое тканевое полотенце, банку объемом 0,5 л, консервную крышку и ключ для закатки. Простерилизуйте банку и крышку.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS9RaDd6a3AuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Разделите абрикосы пополам, удалите из них косточки. Выложите половинки абрикосов в кастрюлю.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS80RG5yNUwuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Посыпьте абрикосы сахаром, прикройте кастрюлю полотенцем и оставьте ее на 5-6 часов, чтобы из абрикосов выделился сок. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS80UmJjbXcuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Поставьте кастрюлю с абрикосами на средний огонь, налейте в нее воду. Дождитесь, когда масса закипит. Поварите абрикосы 5 минут, осторожно помешивая и снимая пену. Снимите кастрюлю с огня и дайте варенью остыть в течение 3-4 часов.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS9TMmdKU3UuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Снова поставьте кастрюлю на огонь, доведите варенье до кипения, убавьте огонь и проварите массу 5 минут. Остудите варенье 3 часа и еще раз вскипятите.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS8zY2hGb1AuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Проварите варенье 5 минут еще раз и перелейте его в банку. Закройте банку крышкой, закатайте ее консервным ключом и дайте остыть при комнатной температуре. Уберите варенье на хранение в темное прохладное место.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS8zekt3aEguanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 769,
          weight: 500,
          custom_measure: "г",
          custom_measure_count: 500,
          title: "Абрикос",
        },
        {
          id: 312,
          weight: 450,
          custom_measure: "г",
          custom_measure_count: 450,
          title: "Сахар",
        },
        {
          id: 54,
          weight: 150,
          custom_measure: "мл",
          custom_measure_count: 150,
          title: "Вода",
        },
      ],
      optional_ingredients: [],
      proteins: 0.41,
      fats: 0.05,
      carbs: 44.92,
      calories: 168.09,
    },
    {
      id: 216521,
      active_cooking_time: 20,
      total_cooking_time: 980,
      difficulty_level: 2,
      title: "Малосольные огурцы на минеральной воде",
      subtitle:
        "Крепкие и хрустящие малосольные огурцы получатся, если взять для засолки не обычную, а минеральную газированную воду. Подойдет любая вода природной газации, главное, чтобы в ней было много пузырьков. Они помогут равномерно пропитать огурцы солью, соками укропа и чеснока, сохранят овощи плотными и упругими, не дав им размягчиться. Такой рассол делается очень быстро, а огурцы готовы уже на следующий день. Подайте их к картофелю, шашлыкам или как закуску с другими овощами.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNS94R0hienIuanBlZw.jpg",
      preparation: {
        content:
          "Тщательно помойте огурцы под проточной водой, обрежьте кончики. Выложите огурцы в миску, залейте холодной водой и оставьте на 1-2 часа. Ополосните веточки укропа, выложите их на бумажные полотенца. Вымойте и почистите чеснок. Подготовьте миску и банку объемом 1 л с полиэтиленовой крышкой. Хорошо вымойте банку и крышку.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNS81c3NkR1kuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Поломайте веточки укропа, выложите половину из них на дно банки. Нарежьте зубчики чеснока тонкими пластинками, также положите половину пластинок в банку.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNS8zeGRqTlcuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Вертикально поместите огурцы в банку. Поверх огурцов выложите оставшийся чеснок и укроп.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNS80OWE5OXAuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Насыпьте соль в миску, налейте к ней минеральную воду. Размешайте, чтобы соль полностью растворилась в воде.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNS80U21QWHIuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Залейте огурцы с чесноком и укропом в банке минеральной водой с солью, чтобы она полностью покрывала овощи. Прикройте банку крышкой и поставьте в холодильник на 12-16 часов.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNS8zQmJ5ZzcuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 237,
          weight: 400,
          custom_measure: "г",
          custom_measure_count: 400,
          title: "Огурец",
        },
        {
          id: 5771,
          weight: 500,
          custom_measure: "мл",
          custom_measure_count: 500,
          title: "Газированная вода",
        },
        {
          id: 352,
          weight: 25,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Соль",
        },
        {
          id: 440,
          weight: 25,
          custom_measure: "зубчик",
          custom_measure_count: 5,
          title: "Чеснок",
        },
        {
          id: 418,
          weight: 6,
          custom_measure: "веточка",
          custom_measure_count: 3,
          title: "Укроп",
        },
      ],
      optional_ingredients: [
        {
          id: 108,
          weight: 150,
          custom_measure: "г",
          custom_measure_count: 150,
          title: "Картошка",
        },
      ],
      proteins: 0.68,
      fats: 0.1,
      carbs: 4.2,
      calories: 19.33,
    },
    {
      id: 214708,
      active_cooking_time: 30,
      total_cooking_time: 30,
      difficulty_level: 2,
      title: "Плавленый сыр из творога с беконом",
      subtitle:
        "Такой сыр не только полезнее магазинного, но и гораздо вкуснее. Ведь вы можете положить в него любую начинку на ваш вкус. Это может быть не только бекон, как в нашем рецепте, но и грибы, зелень и даже сушеные ягоды. А еще это хороший способ приучить детей к домашней еде, ведь это привычный формат перекусов. Намажьте сыр на ломтик хлеба и устройте себе сытный перекус. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyMS9BSDl5U0UuanBlZw.jpg",
      preparation: {
        content:
          "Помойте куриное яйцо. Заранее достаньте из холодильника сливочное масло, чтобы оно стало мягким. Также вам понадобится погружной блендер.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyMS8zdkhrNWouanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Выложите творог в миску. Добавьте соду и хорошо перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyMS8zODR4TWguanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description: "Отдельно взбейте вилкой или венчиком куриное яйцо.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyMS80R1BIclUuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description: "Смешайте взбитое яйцо с творогом.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyMS9ZaXg5TkUuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Добавьте мягкое сливочное масло. Хорошенько перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyMS8zOTNvdjMuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Пробейте творожную массу погружным блендером до получения однородной консистенции.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyMS9EQVJDRWguanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Положите творожную массу в кастрюлю и поставьте на слабый огонь. Готовьте 20 минут, постоянно помешивая, пока все творожные крупинки не растворятся. После этого снимите сыр с плиты.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyMS80OTJhZlQuanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Мелко нарежьте бекон. Добавьте его к сыру и перемешайте. Дайте плавленому сыру полностью остыть.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQyMS9ySmVyQzMuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 552,
          weight: 180,
          custom_measure: "г",
          custom_measure_count: 180,
          title: "Творог 5%",
        },
        {
          id: 169,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Куриное яйцо",
        },
        {
          id: 338,
          weight: 60,
          custom_measure: "г",
          custom_measure_count: 60,
          title: "Сливочное масло",
        },
        {
          id: 348,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Сода",
        },
        {
          id: 19,
          weight: 51,
          custom_measure: "ломтик",
          custom_measure_count: 3,
          title: "Бекон",
        },
        {
          id: 352,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
          title: "Соль",
        },
      ],
      optional_ingredients: [
        {
          id: 30,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Белый хлеб",
        },
      ],
      proteins: 14.29,
      fats: 24.92,
      carbs: 1.17,
      calories: 286.54,
    },
    {
      id: 213334,
      active_cooking_time: 45,
      total_cooking_time: 180,
      difficulty_level: 1,
      title: "Славная говядина в банках",
      subtitle:
        "Простой и вкусный рецепт тушеного мяса с овощами от Славного Друже. Прекрасно хранится в банках!",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwOS8zTWY4elYucG5n.jpg",
      preparation: {
        content: "Подготовьте все ингредиенты.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9udWxs.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Говядину нарежьте произвольными кусочками длиной около 4 см.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwOS80NlJFblgucG5n.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Обжарьте в небольшом количестве растительного масла в течение 10-15 минут, перемешивая каждые 5 минут, до образования зажаристых корочек.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwOS8zOHFma0IucG5n.jpg",
        },
        {
          title: "Шаг 3",
          description: "Лук нарежьте полукольцами.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwOS80QXVDZTkucG5n.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Обжарьте лук в большом количестве растительного масла до прозрачно-золотистого цвета.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwOS9lNzVrSlAucG5n.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Баклажаны, помидоры и перец нарежьте кубиками около 1 см.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwOS9qZENQTWkucG5n.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Подготовленные мясо, лук и овощи сгрузите в кастрюлю большого объема, тушите около 20 минут до образования значительного количества влаги.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwOS8zaVNEYU4ucG5n.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Добавьте соль, сахар и свежемолотый черный перец, перемешайте и оставьте тушиться на слабом огне 2 часа.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwOS8zaDVvWUcucG5n.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "За 5 минут до окончания тушения нарежьте петрушку и чеснок, чтобы получилась однородная масса.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDQwOS8zeGJEcE0ucG5n.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 60,
          weight: 2500,
          custom_measure: "кг",
          custom_measure_count: 2.5,
          title: "Говядина",
        },
        {
          id: 290,
          weight: 800,
          custom_measure: "г",
          custom_measure_count: 800,
          title: "Репчатый лук",
        },
        {
          id: 272,
          weight: 1000,
          custom_measure: "кг",
          custom_measure_count: 1,
          title: "Помидор",
        },
        {
          id: 13,
          weight: 1500,
          custom_measure: "кг",
          custom_measure_count: 1.5,
          title: "Баклажан",
        },
        {
          id: 20020,
          weight: 700,
          custom_measure: "г",
          custom_measure_count: 700,
          title: "Сладкий перец",
        },
        {
          id: 440,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Чеснок",
        },
        {
          id: 260,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Петрушка",
        },
        {
          id: 352,
          weight: 40,
          custom_measure: "г",
          custom_measure_count: 40,
          title: "Соль",
        },
        {
          id: 312,
          weight: 40,
          custom_measure: "г",
          custom_measure_count: 40,
          title: "Сахар",
        },
        {
          id: 439,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Черный перец молотый",
        },
        {
          id: 287,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Растительное масло",
        },
      ],
      optional_ingredients: [],
      proteins: 7.73,
      fats: 6.02,
      carbs: 4.5,
      calories: 102.37,
    },
  ],
  sauces: [
    {
      id: 221243,
      active_cooking_time: 15,
      total_cooking_time: 25,
      difficulty_level: 2,
      title: "Дип из козьей рикотты с оливками",
      subtitle:
        "Дип — универсальная закуска, которую можно подать и к праздничному столу, и использовать как удобный перекус. Чтобы блюдо получилось сытным, мы взяли в качестве основы нежную козью рикотту Galbani. Добавили к ней ароматную цедру лимона, пикантные оливки и каперсы. Дип отлично подойдет к хрустящим тостам, обжаренным в кляре рыбным палочкам или наггетсам. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNS80TFZUb2MuanBlZw.jpg",
      preparation: {
        content: "Помойте и обсушите петрушку и лимон.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNS9TYjR0Z3QuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Произвольно измельчите оливки. При необходимости помельче нарежьте каперсы. Порубите листья и стебли петрушки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNS8zZFZUcHEuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Снимите мелкой теркой цедру с лимона, не задевая белую часть. Выжмите сок из мякоти цитруса.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwMy9WOTZTclUuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Поставьте сковороду на слабый огонь. Нагрейте в ней оливковое масло. Выложите оливки, каперсы и петрушку. Слегка обжарьте, постоянно помешивая.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcwMy8zS0JCZEMuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Добавьте в сковороду цедру и лимонный сок. Подержите на минимальном огне 5 минут, чтобы все ингредиенты прогрелись и обменялись своими ароматами.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNS80VHVhRFUuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description: "Смешайте козью рикотту с обжаренными продуктами.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNS9haFA1eFguanBlZw.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 20599,
          weight: 370,
          custom_measure: "г",
          custom_measure_count: 370,
          title: "Козья рикотта Galbani",
        },
        {
          id: 614,
          weight: 70,
          custom_measure: "стакан",
          custom_measure_count: 0.5,
          title: "Оливки без косточки",
        },
        {
          id: 594,
          weight: 25,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Каперсы",
        },
        {
          id: 260,
          weight: 10,
          custom_measure: "пучок",
          custom_measure_count: 0.5,
          title: "Петрушка",
        },
        {
          id: 240,
          weight: 51,
          custom_measure: "ст. л.",
          custom_measure_count: 3,
          title: "Оливковое масло",
        },
        {
          id: 183,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 0.5,
          title: "Лимон",
        },
      ],
      optional_ingredients: [
        {
          id: 9436,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Сладкая паприка хлопьями",
        },
        {
          id: 91,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Зеленый лук",
        },
        {
          id: 240,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Оливковое масло",
        },
        {
          id: 30,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Белый хлеб",
        },
      ],
      proteins: 3.13,
      fats: 35.24,
      carbs: 4.15,
      calories: 153.6,
    },
    {
      id: 219121,
      active_cooking_time: 15,
      total_cooking_time: 75,
      difficulty_level: 2,
      title: "Маринад для стейка из свинины",
      subtitle:
        "Вкусный маринад для стейка из свинины легко приготовить, просто смешав лимонный сок, ароматное оливковое масло, соль и перец. Но если под рукой есть сушеные травы, паприка или перец чили в хлопьях, то маринад будет намного пикантнее и ароматнее, а стейки получатся еще аппетитнее. Соевый соус хорошо размягчит волокна мяса и придаст поджаристой корочке коричневый цвет. Подберите специи и пряные травы по вкусу, меняя остроту маринада и составляя собственный букет ароматов.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9ucDRIRm8uanBlZw.jpg",
      preparation: {
        content:
          "Помойте лимон, промокните его от влаги бумажными полотенцами. Подготовьте соковыжималку для цитрусовых, сито, миску и сковороду-гриль.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zUmRmTFkuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Выжмите сок из половины лимона при помощи соковыжималки для цитрусовых. Процедите сок лимона через сито в миску.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy80REFMNEEuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description: "Налейте оливковое масло в миску к лимонному соку.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy80U1lmTmUuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Добавьте соевый соус к лимонному соку и маслу. Все тщательно перемешайте до образования однородной массы.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zaURQcjguanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Всыпьте соль в смесь жидких ингредиентов. Перемешайте, чтобы она начала растворяться.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9MeXljRkMuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Добавьте в миску к смешанным ингредиентам паприку, черный и красный перец. Еще раз перемешайте. Всыпьте в миску сушеные розмарин, тимьян, базилик и мелиссу. Размешайте все до однородного состояния.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zNURmYk0uanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Положите в получившийся маринад стейки из свинины. Переверните их несколько раз, чтобы они полностью покрылись смесью. Оставьте стейки мариноваться на 30-40 минут. По истечении времени смажьте сковороду-гриль растительным маслом, разогрейте на сильном огне. Обжарьте стейки из свинины по 6-7 минут с каждой стороны до плотной румяной корочки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy80SmlScUUuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская, русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 183,
          weight: 60,
          custom_measure: "г",
          custom_measure_count: 60,
          title: "Лимон",
        },
        {
          id: 241,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Оливковое масло Extra Virgin",
        },
        {
          id: 439,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Черный перец молотый",
        },
        {
          id: 257,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Перец чили молотый",
        },
        {
          id: 247,
          weight: 1.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Паприка",
        },
        {
          id: 352,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Соль",
        },
        {
          id: 350,
          weight: 7.5,
          custom_measure: "ст. л.",
          custom_measure_count: 0.5,
          title: "Соевый соус",
        },
        {
          id: 380,
          weight: 1,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Сушеный базилик",
        },
        {
          id: 384,
          weight: 1,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Сушеный тимьян / чабрец",
        },
        {
          id: 802,
          weight: 1,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Сушеный розмарин",
        },
        {
          id: 12463,
          weight: 300,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Свиной стейк",
        },
        {
          id: 287,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Растительное масло",
        },
        {
          id: 664,
          weight: 1,
          custom_measure: "г",
          custom_measure_count: 1,
          title: "Мелисса",
        },
      ],
      optional_ingredients: [],
      proteins: 16.52,
      fats: 8.07,
      carbs: 1.25,
      calories: 150.56,
    },
    {
      id: 219108,
      active_cooking_time: 5,
      total_cooking_time: 5,
      difficulty_level: 1,
      title: "Универсальный маринад для курицы и рыбы",
      subtitle:
        "Этот маринад хорошо подходит для курицы или рыбы. Смесь оливкового масла и лимонного сока размягчит волокна и передаст мясу вкус и аромат приправ. Специи могут быть как сушеные, так и свежие. Мы взяли орегано и тимьян. Не забудьте добавить в маринад пару зубчиков чеснока, он привнесет дополнительную нотку пикантности. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zRWlwSFMuanBlZw.jpg",
      preparation: {
        content: "Вымойте чеснок, лимон и тимьян. Снимите с чеснока шелуху.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy84clR1UkguanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description: "Измельчите чеснок ножом или пропустите через пресс.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zTHVZUWUuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Выложите чеснок в миску. Всыпьте сушеный орегано и тимьян. Влейте оливковое масло.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9CNURSa3ouanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Снимите цедру с лимона, а из мякоти выжмите сок. Добавьте сок и цедру к остальным ингредиентам в миске. Посолите, поперчите и тщательно смешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zckxXWnAuanBlZw.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 240,
          weight: 100,
          custom_measure: "мл",
          custom_measure_count: 100,
          title: "Оливковое масло",
        },
        {
          id: 440,
          weight: 10,
          custom_measure: "зубчик",
          custom_measure_count: 2,
          title: "Чеснок",
        },
        {
          id: 383,
          weight: 0.75,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Сушеный орегано (душица)",
        },
        {
          id: 384,
          weight: 2,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Сушеный тимьян / чабрец",
        },
        {
          id: 183,
          weight: 120,
          custom_measure: "г",
          custom_measure_count: 120,
          title: "Лимон",
        },
        {
          id: 439,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Черный перец молотый",
        },
        {
          id: 352,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Соль",
        },
      ],
      optional_ingredients: [],
      proteins: 0.86,
      fats: 43.05,
      carbs: 3.13,
      calories: 413.15,
    },
    {
      id: 219105,
      active_cooking_time: 5,
      total_cooking_time: 5,
      difficulty_level: 1,
      title: "Марокканский маринад для говядины и баранины",
      subtitle:
        "Марокканский маринад делается на основе оливкового масла и большого количества различных специй. В него добавляют сок лимона, но при желании замените его тем же количеством апельсинового сока или сока лайма. Апельсин сделает маринад чуть мягче, а лайм, наоборот, более выраженным. В этой смеси часто маринуют рыбу, но маринад подходит также для мяса и даже овощей.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zTHh4a0YuanBlZw.jpg",
      preparation: {
        content:
          "Подготовьте все ингредиенты, а также пресс для чеснока и венчик.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy9WNWlqeWUuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Пропустите чеснок через пресс. Добавьте к нему все специи. Выжмите сок из половины лимона. Перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zZTZLbjcuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Налейте оливковое масло к специям, чесноку и лимонному соку. Тщательно перемешайте венчиком.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNy8zWEt0UlAuanBlZw.jpg",
        },
      ],
      kitchen_type: "Марокканская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 240,
          weight: 60,
          custom_measure: "мл",
          custom_measure_count: 60,
          title: "Оливковое масло",
        },
        {
          id: 765,
          weight: 4,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Кардамон молотый",
        },
        {
          id: 6030,
          weight: 15,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Молотая зира / кумин",
        },
        {
          id: 439,
          weight: 10.5,
          custom_measure: "ст. л.",
          custom_measure_count: 1.5,
          title: "Черный перец молотый",
        },
        {
          id: 440,
          weight: 15,
          custom_measure: "зубчик",
          custom_measure_count: 3,
          title: "Чеснок",
        },
        {
          id: 352,
          weight: 10,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Соль",
        },
        {
          id: 183,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 0.5,
          title: "Лимон",
        },
      ],
      optional_ingredients: [],
      proteins: 2.77,
      fats: 35.17,
      carbs: 10.25,
      calories: 365.21,
    },
    {
      id: 218783,
      active_cooking_time: 5,
      total_cooking_time: 5,
      difficulty_level: 1,
      title: "Лимонный маринад для рыбы и креветок",
      subtitle:
        "Этот маринад отлично подойдет для морепродуктов. Лимонный сок размягчит волокна рыбы или креветок и отдаст им свой цитрусовый вкус и аромат, нейтрализовав рыбный запах. Добавьте для пикантности пару зубчиков чеснока, немного перца и соли. Измельченная свежая петрушка также придаст маринаду пряности.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zclhqTHYuanBlZw.jpg",
      preparation: {
        content:
          "Помойте лимон. Очистите чеснок. Подготовьте пресс для чеснока.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC92Q3pVb3ouanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Пропустите чеснок через пресс или натрите его на самой мелкой терке.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zZExUOTkuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Выложите в миску измельченные петрушку и чеснок. Выжмите из лимона 2 ст.л. сока. Влейте сок к петрушке с чесноком. Снимите цедру с половины лимона и добавьте к остальным ингредиентам. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zVTdtckQuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Посолите и поперчите смесь для маринада. Влейте оливковое масло. Перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC8zYXE2dEUuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Залейте маринадом креветки. Затяните посуду пищевой пленкой. Оставьте их на 40 минут при комнатной температуре или поставьте в холодильник.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxNC80VEVCc1EuanBlZw.jpg",
        },
      ],
      kitchen_type: "Средиземноморская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 240,
          weight: 50,
          custom_measure: "мл",
          custom_measure_count: 50,
          title: "Оливковое масло",
        },
        {
          id: 183,
          weight: 60,
          custom_measure: "г",
          custom_measure_count: 60,
          title: "Лимон",
        },
        {
          id: 440,
          weight: 10,
          custom_measure: "зубчик",
          custom_measure_count: 2,
          title: "Чеснок",
        },
        {
          id: 352,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Соль",
        },
        {
          id: 154,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Креветки",
        },
        {
          id: 260,
          weight: 25,
          custom_measure: "г",
          custom_measure_count: 25,
          title: "Петрушка",
        },
      ],
      optional_ingredients: [
        {
          id: 183,
          weight: 7,
          custom_measure: "ломтик",
          custom_measure_count: 1,
          title: "Лимон",
        },
      ],
      proteins: 8.13,
      fats: 20.36,
      carbs: 3.11,
      calories: 232.35,
    },
    {
      id: 218706,
      active_cooking_time: 5,
      total_cooking_time: 5,
      difficulty_level: 1,
      title: "Итальянский маринад для морепродуктов, курицы и свинины",
      subtitle:
        "Итальянский маринад подойдет как для рыбы, так и для птицы или мяса. Для него можно взять готовую смесь итальянских трав или составить ее самостоятельно, смешав орегано, базилик, тимьян, розмарин, чабрец и шалфей. Добавьте дижонскую горчицу и чеснок для остринки. Смешайте все ингредиенты с оливковым маслом и уксусом и маринуйте мясо не меньше часа, а морепродукты и птицу — 30 минут.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zalZXOGIuanBlZw.jpg",
      preparation: {
        content: "Помойте и почистите чеснок. Подготовьте венчик.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zZnB3M0wuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Пропустите чеснок через пресс или натрите его на самой мелкой терке.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zanZXdmguanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Смешайте чеснок с итальянскими травами, дижонской горчицей, уксусом и оливковым маслом. Хорошенько взбейте венчиком до однородного состояния.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMy8zQW1BSDYuanBlZw.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 440,
          weight: 15,
          custom_measure: "зубчик",
          custom_measure_count: 3,
          title: "Чеснок",
        },
        {
          id: 82,
          weight: 50,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Дижонская горчица",
        },
        {
          id: 97,
          weight: 5,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Итальянские травы",
        },
        {
          id: 51,
          weight: 65,
          custom_measure: "мл",
          custom_measure_count: 65,
          title: "Винный уксус белый",
        },
        {
          id: 240,
          weight: 190,
          custom_measure: "мл",
          custom_measure_count: 190,
          title: "Оливковое масло",
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
      ],
      optional_ingredients: [],
      proteins: 2.01,
      fats: 60.42,
      carbs: 3.78,
      calories: 560.25,
    },
    {
      id: 218545,
      active_cooking_time: 25,
      total_cooking_time: 25,
      difficulty_level: 2,
      title: "Подливка как в столовой",
      subtitle:
        "Молочно-мучная подливка с жареным на сливочном масле луком подойдет к котлетам, жареному мясу, курице или рыбе. Советская интерпретация соуса бешамель смягчит суховатые блюда, но не перебьет основной вкус в отличие от многих других. Количество перца и соли подберите по вкусу и при желании не кладите в подливку лук, заменив его свежей или сушеной зеленью.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS80QnJKVEcuanBlZw.jpg",
      preparation: {
        content:
          "Подержите молоко при комнатной температуре, чтобы оно немного согрелось. Вскипятите в чайнике 0,5 стакана воды, остудите ее до теплого состояния. Вымойте и почистите лук. Подготовьте сковороду с высокими бортиками и миску.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9zTEtBMzQuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description: "Нарежьте лук кубиками со стороной 4-5 мм.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS8zOXVzTDMuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Разогрейте сковороду на среднем огне. Выложите на нее сливочное масло. Подождите, когда оно растает. Положите нарезанный лук на сковороду. Обжарьте его в сливочном масле 2-3 минуты, помешивая, пока он слегка не подрумянится и не размягчится.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS8zUTZrWTIuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Влейте в сковороду к обжаренному луку 50 мл теплой воды и молоко комнатной температуры. Перемешайте и подождите, когда смесь закипит.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS90WDN6dlkuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Помешивая, всыпьте в массу соль и перец. Еще раз прогрейте ее до закипания, постоянно помешивая.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS8zYkhCYXMuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description: "Соедините в миске муку и оставшиеся 50 мл теплой воды.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS80NndMZ2kuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Хорошо размешайте муку с водой венчиком или вилкой, чтобы в смеси не осталось сухих комочков муки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9TY0YzdXQuanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Влейте муку с водой в смесь на сковороде, тщательно размешайте. Продолжая перемешивать, прогрейте подливку до тех пор, пока она снова не закипит.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS9QeFFUemsuanBlZw.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "Тушите подливку в течение 2-3 минут, не переставая мешать, пока она не загустеет. После этого снимите сковороду с огня.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMS80V3o1Q0YuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская, советская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 696,
          weight: 100,
          custom_measure: "мл",
          custom_measure_count: 100,
          title: "Молоко 2,5% жирности",
        },
        {
          id: 54,
          weight: 100,
          custom_measure: "мл",
          custom_measure_count: 100,
          title: "Вода",
        },
        {
          id: 290,
          weight: 40,
          custom_measure: "шт.",
          custom_measure_count: 0.5,
          title: "Репчатый лук",
        },
        {
          id: 282,
          weight: 25,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Пшеничная мука хлебопекарная",
        },
        {
          id: 338,
          weight: 40,
          custom_measure: "г",
          custom_measure_count: 40,
          title: "Сливочное масло",
        },
        {
          id: 439,
          weight: 0.3,
          custom_measure: "г",
          custom_measure_count: 0.3,
          title: "Черный перец молотый",
        },
        {
          id: 352,
          weight: 1.5,
          custom_measure: "г",
          custom_measure_count: 1.5,
          title: "Соль",
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
      ],
      proteins: 2.05,
      fats: 11.68,
      carbs: 8.54,
      calories: 147.82,
    },
    {
      id: 218481,
      active_cooking_time: 60,
      total_cooking_time: 100,
      difficulty_level: 2,
      title: "Хрустящие маринованные огурцы на зиму",
      subtitle:
        "Небольшие и крепкие огурцы с тонкой кожицей идеально подойдут для маринования на зиму. В маринаде с яблочным уксусом, пряностями и зеленью они станут пикантными и хрустящими. Такие огурцы отлично дополнят мясные и картофельные блюда или станут частью вкусных салатов. Залейте подготовленные овощи в банке маринадом, а затем простерилизуйте в кипящей воде, чтобы обеспечить заготовке долгое хранение.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC9TYUNwWkouanBlZw.jpg",
      preparation: {
        content:
          "Хорошо вымойте огурцы, отрежьте у них кончики. Ополосните и почистите чеснок. Помойте укроп и петрушку, разложите их на бумажных полотенцах обсохнуть. Отделите листочки петрушки и кисточки укропа от стеблей. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC80OUtLZTUuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Положите огурцы в миску, залейте их холодной водой и оставьте на 30-40 минут. Слейте воду и протрите огурцы насухо чистым бумажным полотенцем. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC8zQ3BvSjQuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Налейте в кастрюлю 500 мл воды и уксус, всыпьте к ним соль и сахар. Поставьте кастрюлю на сильный огонь, дождитесь, когда маринад закипит. Варите его в течение 5-7 минут, пока сахар полностью не растворится. Снимите кастрюлю с маринадом с огня.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC8zeWlyNVguanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Поставьте простерилизованную банку на тканевое полотенце. Положите на дно банки зубчики чеснока, кисточки укропа и веточки петрушки. Туда же опустите лавровый лист, гвоздику и горошины черного перца.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC8zdGZHOHIuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Заполните банку огурцами, ставя их по возможности вертикально вплотную друг к другу. Налейте в банку с огурцами горячий маринад, чтобы он доходил до плечиков банки. Прикройте банку крышкой.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC8zWEN3UVYuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Ополосните кастрюлю из-под маринада, налейте в нее воду примерно на ⅔ объема. Поставьте кастрюлю на средний огонь, поместите в нее банку с огурцами. Дождитесь, когда вода в кастрюле закипит, и простерилизуйте банку около 15-20 минут, пока огурцы внутри не посветлеют.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC9tanVwZTIuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Извлеките банку из кастрюли, закатайте крышку при помощи ключа и поставьте банку на полотенце вверх дном. Остудите банку при комнатной температуре и уберите на хранение в прохладное место.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC8zS3k2QTUuanBlZw.jpg",
        },
      ],
      kitchen_type: "Русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 440,
          weight: 10,
          custom_measure: "зубчик",
          custom_measure_count: 2,
          title: "Чеснок",
        },
        {
          id: 418,
          weight: 8,
          custom_measure: "г",
          custom_measure_count: 8,
          title: "Укроп",
        },
        {
          id: 260,
          weight: 8,
          custom_measure: "г",
          custom_measure_count: 8,
          title: "Петрушка",
        },
        {
          id: 438,
          weight: 1.5,
          custom_measure: "шт.",
          custom_measure_count: 3,
          title: "Черный перец горошком",
        },
        {
          id: 59,
          weight: 2,
          custom_measure: "шт.",
          custom_measure_count: 2,
          title: "Гвоздика",
        },
        {
          id: 179,
          weight: 1,
          custom_measure: "шт.",
          custom_measure_count: 1,
          title: "Лавровый лист",
        },
        {
          id: 54,
          weight: 500,
          custom_measure: "мл",
          custom_measure_count: 500,
          title: "Вода",
        },
        {
          id: 632,
          weight: 30,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Яблочный уксус 9%",
        },
        {
          id: 312,
          weight: 50,
          custom_measure: "г",
          custom_measure_count: 50,
          title: "Сахар",
        },
        {
          id: 352,
          weight: 25,
          custom_measure: "г",
          custom_measure_count: 25,
          title: "Соль",
        },
        {
          id: 237,
          weight: 700,
          custom_measure: "г",
          custom_measure_count: 700,
          title: "Огурец",
        },
      ],
      optional_ingredients: [],
      proteins: 0.48,
      fats: 0.1,
      carbs: 6.22,
      calories: 24.62,
    },
    {
      id: 220346,
      active_cooking_time: 30,
      total_cooking_time: 60,
      difficulty_level: 3,
      title: "Сырно-беконовые шарики",
      subtitle:
        "Попробуйте новый формат привычной сырной намазки. Мягкий творожный сыр в этих закусочных шариках сочетается с соленым хрустящим беконом, жареными орехами, пикантным сыром чеддер и острым зеленым луком. Можно обмакивать крекеры или соломку в намазку, а можно просто выложить шарик на тост и размазать столовым ножом. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy9VNXVlUGouanBlZw.jpg",
      preparation: {
        content:
          "Помойте перья зеленого лука, выложите их на бумажное полотенце обсохнуть. Подготовьте терку, сковороду, разделочную доску, миски, миксер, пищевую пленку, а также тарелку или доску для подачи. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy96ZUp6b2MuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Нарежьте ломтики бекона полосками шириной 5-6 мм. Мелко порубите зеленый лук и орехи пекан. Крупно натрите чеддер в отдельную миску.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy80S1hGTWEuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Разогрейте сухую сковороду на среднем огне. Выложите на нее орехи. Прокалите их, постоянно помешивая, в течение 3-4 минут. Переложите обжаренные орехи в чистую миску.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy80VkRtdVEuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Положите на горячую сковороду полоски бекона. Обжарьте их, перемешивая, 4-5 минут, пока из бекона не вытопится большая часть жира, а края полосок не станут хрустящими. Снимите сковороду с огня и дайте бекону немного остыть.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy9hc3E4YWMuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Выложите в глубокую миску творожный сыр и сметану. Всыпьте к ним сушеный чеснок и черный перец. Взбейте все миксером на средней скорости до однородной пышной массы.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy9TbWVjcnguanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Добавьте к сырной массе по половине тертого чеддера, зеленого лука, полосок бекона и орехов. Аккуратно перемешайте массу лопаткой. Придайте массе форму шара, заверните его в пищевую пленку и уберите в холодильник на 30 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy8zVDM1cXEuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Соедините в миске оставшиеся бекон, тертый чеддер, зеленый лук и орехи. Всыпьте туда же мак, все хорошо перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy8zWWdBejIuanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Достаньте охлажденную сырно-беконовую массу из холодильника, освободите ее от пленки. Разделите массу на 6 частей, придайте каждой форму шарика.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy8zcUNTdVEuanBlZw.jpg",
        },
        {
          title: "Шаг 8",
          description:
            "По очереди обваляйте сырно-беконовые шарики со всех сторон в сухой смеси бекона, тертого чеддера, орехов, лука и мака.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy9wUWU4N1kuanBlZw.jpg",
        },
      ],
      kitchen_type: "Североамериканская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 398,
          weight: 140,
          custom_measure: "г",
          custom_measure_count: 140,
          title: "Творожный сыр",
        },
        {
          id: 345,
          weight: 25,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Сметана 15% жирности",
        },
        {
          id: 386,
          weight: 1.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.5,
          title: "Сушеный чеснок",
        },
        {
          id: 439,
          weight: 1.25,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Черный перец молотый",
        },
        {
          id: 434,
          weight: 50,
          custom_measure: "г",
          custom_measure_count: 50,
          title: "Чеддер",
        },
        {
          id: 91,
          weight: 5,
          custom_measure: "перо",
          custom_measure_count: 1,
          title: "Зеленый лук",
        },
        {
          id: 5759,
          weight: 51,
          custom_measure: "ломтик",
          custom_measure_count: 3,
          title: "Сырокопченый бекон",
        },
        {
          id: 252,
          weight: 60,
          custom_measure: "ст. л.",
          custom_measure_count: 2,
          title: "Пекан",
        },
        {
          id: 93,
          weight: 15,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Мак (зерна)",
        },
      ],
      optional_ingredients: [
        {
          id: 14770,
          weight: 24,
          custom_measure: "шт.",
          custom_measure_count: 6,
          title: "Соленая хлебная соломка",
        },
      ],
      proteins: 9.89,
      fats: 35.41,
      carbs: 7.41,
      calories: 402.59,
    },
    {
      id: 220334,
      active_cooking_time: 10,
      total_cooking_time: 10,
      difficulty_level: 2,
      title: "Соус блю-чиз со сметаной",
      subtitle:
        "Сочетание сметаны, голубого сыра и специй создает хорошо сбалансированный сливочный соус. Кислинка лимонного сока помогает подчеркнуть насыщенный вкус остальных ингредиентов. Это универсальный соус, который подойдет и к мясным, и к овощным закускам, и даже к чипсам. Чтобы смешать все компоненты до однородной консистенции, соус нужно нагревать, постоянно помешивая, пока сыр полностью не расплавится. Сначала может показаться, что соус получился слишком жидким. Но по мере остывания он загустеет.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy8zUkN4dHUuanBlZw.jpg",
      preparation: {
        content:
          "Подготовьте небольшой ковшик или сотейник. Отмерьте нужное количество всех ингредиентов.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy8zcE5hakEuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description: "Нарежьте сыр на маленькие кусочки.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy9EVDV0YUsuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Положите в сотейник сметану и кусочки сыра. Добавьте соль, черный молотый перец и лимонный сок.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy80WGN5bm8uanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Поставьте сотейник на слабый огонь. Нагревайте, постоянно помешивая, пока сыр не расплавится. Сначала может показаться, что соус жидковат, но по мере остывания он загустеет.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy8zdThGQW4uanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для соуса",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 345,
          weight: 150,
          custom_measure: "г",
          custom_measure_count: 150,
          title: "Сметана 15% жирности",
        },
        {
          id: 12577,
          weight: 100,
          custom_measure: "г",
          custom_measure_count: 100,
          title: "Сыр с голубой плесенью",
        },
        {
          id: 185,
          weight: 9,
          custom_measure: "ст. л.",
          custom_measure_count: 0.5,
          title: "Лимонный сок",
        },
        {
          id: 352,
          weight: 1,
          custom_measure: "щепотка",
          custom_measure_count: 1,
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
          id: 231,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Овощи",
        },
        {
          id: 177,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Курица",
        },
      ],
      proteins: 8.31,
      fats: 20.51,
      carbs: 2.67,
      calories: 231.4,
    },
    {
      id: 218466,
      active_cooking_time: 50,
      total_cooking_time: 50,
      difficulty_level: 2,
      title: "Клубничный конфитюр",
      subtitle:
        "Зачастую густой конфитюр готовят из фруктов или ягод с большим содержанием пектина. Они хорошо увариваются, а после остывания масса приобретает консистенцию мягкого желе. В клубнике естественного пектина меньше, чем в смородине или вишне, и варить ее приходится дольше. Вместо этого добавьте в клубничный конфитюр желатин или агар-агар. Благодаря этому десерт приготовится намного быстрее, станет вязким и тягучим, будет долго храниться. Из указанного количества ингредиентов получается 1 банка варенья объемом 0,5 л.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC9RWEN2ZVguanBlZw.jpg",
      preparation: {
        content:
          "Удалите у клубники чашелистики. Помойте ягоды и разложите обсохнуть на чистом тканевом полотенце. Вымойте и промокните бумажными салфетками лимон. ",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC84dHNleWEuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Выложите клубнику в глубокую миску. Перебейте ее погружным блендером до состояния пюре с небольшими кусочками ягод.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC9NeUNxWEguanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Переложите клубничное пюре в сотейник. Засыпьте его сахаром и хорошо размешайте. Дайте клубнично-сахарной массе постоять около 30 минут при комнатной температуре, чтобы сахар слегка растворился.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyNy9LNzhxOXcuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description: "Снимите цедру с ¼",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC9IWjdRaHYuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Поставьте сотейник с клубникой на средний огонь. Дождитесь, когда масса закипит, периодически ее помешивая. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC80QlNNQWYuanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Снимите с клубничной массы образовавшуюся пену, уменьшите огонь до слабого. Поварите конфитюр в течение 10 минут. Всыпьте агар-агар. Хорошо размешайте массу до однородности. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC8zaWFaWVcuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Варите массу еще около 7-8 минут, постоянно помешивая. Снимите кастрюлю с огня.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC80REFBbmIuanBlZw.jpg",
        },
        {
          title: "Шаг 7",
          description:
            "Поставьте сухую простерилизованную банку на тканевое полотенце. Аккуратно перелейте в нее горячий конфитюр. Дайте банке полностью остыть и уберите на хранение в темное прохладное место. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxMC9vUnBKWFUuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 117,
          weight: 500,
          custom_measure: "г",
          custom_measure_count: 500,
          title: "Клубника",
        },
        {
          id: 312,
          weight: 450,
          custom_measure: "г",
          custom_measure_count: 450,
          title: "Сахар",
        },
        {
          id: 183,
          weight: 30,
          custom_measure: "шт.",
          custom_measure_count: 0.25,
          title: "Лимон",
        },
        {
          id: 726,
          weight: 3,
          custom_measure: "ч. л.",
          custom_measure_count: 1.5,
          title: "Агар-агар",
        },
      ],
      optional_ingredients: [
        {
          id: 263,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Печенье",
        },
      ],
      proteins: 0.45,
      fats: 0.21,
      carbs: 49.83,
      calories: 188.53,
    },
    {
      id: 217272,
      active_cooking_time: 15,
      total_cooking_time: 15,
      difficulty_level: 2,
      title: "Соус сацебели из томатной пасты",
      subtitle:
        "Сацебели из томатной пасты можно приготовить, пока жарится или запекается мясо. Этот универсальный соус прекрасно дополнит свинину, говядину или баранину. К тому же, его можно приготовить про запас. Переложите готовый сацебели в стерильную баночку с крышкой и отправьте в холодильник. Правда, стоять в холоде соус может не дольше недели. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi8zeU1LalYuanBlZw.jpg",
      preparation: {
        content:
          "Ополосните водой кинзу и чеснок. Снимите с чеснока шелуху. Простерилизуйте баночку на 200 мл с крышкой.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi80QmI3MkcuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Измельчите кинзу и смешайте в миске с сухой аджикой, хмели-сунели и перцем.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi8zUTZIZkIuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Влейте уксус и пропустите чеснок через пресс. Перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi9ndHpCaXcuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description: "Добавьте томатную пасту и еще раз перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi8zVlNBR0QuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Посолите и влейте воду. Ориентируйтесь на желаемую густоту соуса. Переложите в стерильную баночку и закройте крышку.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi9UUEF6U2UuanBlZw.jpg",
        },
      ],
      kitchen_type: "Грузинская, кавказская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 116,
          weight: 0,
          custom_measure: "г",
          custom_measure_count: 60,
          title: "Кинза",
        },
        {
          id: 440,
          weight: 20,
          custom_measure: "зубчик",
          custom_measure_count: 4,
          title: "Чеснок",
        },
        {
          id: 404,
          weight: 200,
          custom_measure: "г",
          custom_measure_count: 200,
          title: "Томатная паста",
        },
        {
          id: 2,
          weight: 5,
          custom_measure: "г",
          custom_measure_count: 5,
          title: "Аджика",
        },
        {
          id: 363,
          weight: 15,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Столовый уксус",
        },
        {
          id: 54,
          weight: 200,
          custom_measure: "мл",
          custom_measure_count: 200,
          title: "Вода",
        },
        {
          id: 429,
          weight: 10,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Хмели-сунели",
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
      ],
      optional_ingredients: [],
      proteins: 2.32,
      fats: 1.17,
      carbs: 10.12,
      calories: 54.1,
    },
    {
      id: 217265,
      active_cooking_time: 15,
      total_cooking_time: 55,
      difficulty_level: 1,
      title: "Стейки из кеты в духовке",
      subtitle:
        "Чтобы стейки из кеты получились максимально вкусными, рыбу нужно замариновать и правильно запечь. Старайтесь выбирать для приготовления охлажденную, а не замороженную рыбу, тогда блюдо получится намного сочнее и вкуснее. Запекайте рыбу вместе с маринадом и постарайтесь не пересушить. Лучше отправить стейки в духовку минут на 15-20, а до подачи подержать их под фольгой.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi8zeHhRQVkuanBlZw.jpg",
      preparation: {
        content: "Помойте рыбу и выложите обсушиться на бумажные полотенца.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi8zb3ZpVGMuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Смешайте соевый соус, горчицу и мед в небольшой миске. Хорошенько перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi8zdEZVSjMuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Присыпьте стейки из кеты сухими специями. Слегка вотрите их в рыбу. Обмакните стейки в маринад с обеих сторон и оставьте в нем на 20 минут. Тем временем разогрейте духовку до 180°C.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi80TG9LUmouanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Выложите рыбу в форму для запекания. Влейте туда же весь маринад. Сверху на кету положите розмарин. Отправьте стейки запекаться на 20 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNi9jVkhXTHguanBlZw.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для маринада",
      main_ingredients: [
        {
          id: 531,
          weight: 600,
          custom_measure: "г",
          custom_measure_count: 600,
          title: "Стейк кеты",
        },
        {
          id: 301,
          weight: 4,
          custom_measure: "веточка",
          custom_measure_count: 1,
          title: "Розмарин",
        },
        {
          id: 604,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Специи для рыбы",
        },
      ],
      optional_ingredients: [
        {
          id: 350,
          weight: 32,
          custom_measure: "ч. л.",
          custom_measure_count: 4,
          title: "Соевый соус",
        },
        {
          id: 204,
          weight: 7,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Мед",
        },
        {
          id: 14698,
          weight: 8,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Зернистая горчица",
        },
      ],
      proteins: 20.79,
      fats: 5.26,
      carbs: 1.4,
      calories: 135.42,
    },
    {
      id: 217019,
      active_cooking_time: 30,
      total_cooking_time: 120,
      difficulty_level: 2,
      title: "Абрикосовый конфитюр",
      subtitle:
        "Благодаря лимонному соку и цедре конфитюр из абрикосов не будет приторным и приобретет приятный цитрусовый аромат. В отличие от варенья, абрикосы на конфитюр варят без кожицы, поэтому они становятся очень мягкими и почти прозрачными. Сироп за время варки густеет, а после охлаждения превращается в желе. Получается легкий, очень красивый и в меру сладкий десерт, идеально дополняющий хрустящие тосты, вафли или крекеры. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMS8zZHQ2WTUuanBlZw.jpg",
      preparation: {
        content:
          "Вымойте абрикосы и лимон, вытрите их бумажными полотенцами. Подготовьте жаропрочную миску, кастрюлю, терку и банку объемом 0,5 л с винтовой или консервной крышкой. Простерилизуйте банку и крышку.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMS8zM01ySk4uanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Выложите абрикосы в жаропрочную миску. Вскипятите в чайнике 2 стакана воды, залейте ей абрикосы. Подержите абрикосы в воде 2-3 минуты, затем снимите с них кожицу.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMS8zRmlQN0wuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Разрежьте абрикосы пополам, удалите из них косточки. Нарежьте абрикосы кусочками размером 2-3 см, выложите их в кастрюлю.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMS8zZXB0OU0uanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Снимите с половины лимона цедру при помощи терки, выжмите из мякоти сок. Добавьте сок и цедру лимона в кастрюлю с абрикосами.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMS9MelA5Qk0uanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Всыпьте в кастрюлю с фруктами сахар, хорошо перемешайте. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMS8zNEtSeUguanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Поставьте кастрюлю на средний огонь. Помешивая смесь, дождитесь, когда она закипит. Уменьшите огонь до слабого и варите конфитюр 1,5 часа, изредка перемешивая и снимая появляющуюся пену.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMS9ydmtiREUuanBlZw.jpg",
        },
        {
          title: "Шаг 6",
          description:
            "Перелейте горячий конфитюр в простерилизованную банку, плотно закройте ее крышкой. Дайте конфитюру остыть и уберите его на хранение в прохладное место.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMS8zazJGOFAuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская, русская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 769,
          weight: 500,
          custom_measure: "г",
          custom_measure_count: 500,
          title: "Абрикос",
        },
        {
          id: 312,
          weight: 360,
          custom_measure: "стакан",
          custom_measure_count: 2,
          title: "Сахар",
        },
        {
          id: 183,
          weight: 60,
          custom_measure: "шт.",
          custom_measure_count: 0.5,
          title: "Лимон",
        },
      ],
      optional_ingredients: [
        {
          id: 19865,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Чай",
        },
      ],
      proteins: 0.55,
      fats: 0.06,
      carbs: 44.14,
      calories: 167.78,
    },
    {
      id: 216960,
      active_cooking_time: 10,
      total_cooking_time: 10,
      difficulty_level: 1,
      title: "Зеленое сливочное масло",
      subtitle:
        "Вместо обычного бутербродного масла приготовьте ароматное, вкусное зеленое масло с петрушкой. Хотя подойдет и другая зелень. Например, розмарин, рукола или базилик. Измельчите зелень в блендере для получения однородной консистенции готового продукта. Но это не обязательно. Достаточно просто очень мелко покрошить зелень и смешать с мягким сливочным маслом. Учтите, что хранится такое масло недолго. Поэтому лучше готовить его в небольшом количестве.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMS9NcTR5TEUuanBlZw.jpg",
      preparation: {
        content:
          "Помойте зеленый лук, петрушку, укроп. Обсушите их на бумажных полотенцах. Достаньте заранее сливочное масло из холодильника, чтобы оно стало мягким.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMS8zZnVjSjcuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description: "Отделите листочки укропа и петрушки от стеблей.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMS8zcU43Y24uanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description: "Очень мелко покрошите зеленый лук, укроп и петрушку.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMS80VnRuVzkuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Смешайте измельченную зелень с мягким сливочным маслом.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMS9jUmp6dkUuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Выложите масло на пищевую пленку и сформируйте колбаску. Уберите его в холодильник как минимум на 30 минут.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyMS8zVUZaQWYuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 91,
          weight: 16.5,
          custom_measure: "пучок",
          custom_measure_count: 0.33,
          title: "Зеленый лук",
        },
        {
          id: 260,
          weight: 6.6,
          custom_measure: "пучок",
          custom_measure_count: 0.33,
          title: "Петрушка",
        },
        {
          id: 418,
          weight: 4.95,
          custom_measure: "пучок",
          custom_measure_count: 0.33,
          title: "Укроп",
        },
        {
          id: 338,
          weight: 90,
          custom_measure: "г",
          custom_measure_count: 90,
          title: "Сливочное масло",
        },
      ],
      optional_ingredients: [
        {
          id: 418,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Укроп",
        },
        {
          id: 91,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Зеленый лук",
        },
        {
          id: 500,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Ржаной хлеб",
        },
      ],
      proteins: 0.95,
      fats: 62.94,
      carbs: 1.97,
      calories: 577.14,
    },
    {
      id: 216888,
      active_cooking_time: 15,
      total_cooking_time: 15,
      difficulty_level: 1,
      title: "Песто из руколы с миндалем",
      subtitle:
        "Как насчет соуса песто, но не с базиликом, а с руколой? У нее более терпкий вкус, а поэтому специй в таком соусе понадобится меньше. И все же, без пармезана и свежего чеснока тут никуда. А для орехового аромата накрошите и взбейте в блендере горсть миндаля. Такой соус может храниться в холодильнике не дольше двух дней, так что лучше щедро класть его в любые блюда на ваш вкус. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS8zVWh1RDMuanBlZw.jpg",
      preparation: {
        content:
          "Ополосните руколу, выложите ее на бумажные полотенца обсохнуть. Помойте и почистите чеснок. Подготовьте терку, блендер с чашей и соусник.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS92Rndld3cuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Мелко натрите пармезан. Нарежьте пластинками зубчик чеснока.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS8zeXB2Y0YuanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Выложите руколу в чашу блендера, всыпьте соль, влейте 1 ст.л. оливкового масла. Перебейте все на небольшой скорости в течение 1-2 минуты, чтобы рукола дала сок.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS84N1RNZGYuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Положите в чашу блендера к руколе чеснок и тертый пармезан. Добавьте миндаль, влейте оставшееся оливковое масло. Взбейте соус до однородности.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS84SmU0M0UuanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская, итальянская",
      main_ingredient_title: "Для блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 303,
          weight: 50,
          custom_measure: "г",
          custom_measure_count: 50,
          title: "Рукола",
        },
        {
          id: 248,
          weight: 20,
          custom_measure: "г",
          custom_measure_count: 20,
          title: "Пармезан",
        },
        {
          id: 440,
          weight: 5,
          custom_measure: "зубчик",
          custom_measure_count: 1,
          title: "Чеснок",
        },
        {
          id: 207,
          weight: 10,
          custom_measure: "г",
          custom_measure_count: 10,
          title: "Миндаль",
        },
        {
          id: 241,
          weight: 51,
          custom_measure: "ст. л.",
          custom_measure_count: 3,
          title: "Оливковое масло Extra Virgin",
        },
        {
          id: 352,
          weight: 2.5,
          custom_measure: "ч. л.",
          custom_measure_count: 0.25,
          title: "Соль",
        },
      ],
      optional_ingredients: [
        {
          id: 358,
          weight: 150,
          custom_measure: "г",
          custom_measure_count: 150,
          title: "Спагетти",
        },
        {
          id: 767,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Миндаль тертый",
        },
      ],
      proteins: 8.71,
      fats: 22.2,
      carbs: 38.65,
      calories: 392.68,
    },
    {
      id: 217210,
      active_cooking_time: 3,
      total_cooking_time: 3,
      difficulty_level: 1,
      title: "Розмариновый маринад для курицы",
      subtitle:
        "У розмарина очень приятный и ненавязчивый вкус, чуть сладковатый, пряный и с легкой остринкой. Он идеально подходит для рыбы, курицы и мясных блюд. Замаринуйте курицу в розмариновом маринаде, добавив оливковое масло с минералкой и лимонным соком. Мясо получится очень нежным и невероятно вкусным.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNC80QUx5YTUuanBlZw.jpg",
      preparation: {
        content: "Вымойте чеснок и снимите с него шелуху.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNC95NG9lcVQuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description: "Очистите чеснок и пропустите через пресс.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNC9QQnpOQW0uanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Высыпьте в глубокую миску розмарин, тимьян, чеснок и цедру.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNC9HR2ZjeEguanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description: "Влейте воду и лимонный сок. Хорошо перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNC9YN0xobWguanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description: "Добавьте оливковое масло еще раз перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNC80UzdwZEIuanBlZw.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 240,
          weight: 60,
          custom_measure: "мл",
          custom_measure_count: 60,
          title: "Оливковое масло",
        },
        {
          id: 514,
          weight: 60,
          custom_measure: "мл",
          custom_measure_count: 60,
          title: "Минеральная вода",
        },
        {
          id: 185,
          weight: 60,
          custom_measure: "мл",
          custom_measure_count: 60,
          title: "Лимонный сок",
        },
        {
          id: 440,
          weight: 10,
          custom_measure: "зубчик",
          custom_measure_count: 2,
          title: "Чеснок",
        },
        {
          id: 384,
          weight: 2,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Сушеный тимьян / чабрец",
        },
        {
          id: 802,
          weight: 2,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Сушеный розмарин",
        },
        {
          id: 5773,
          weight: 2,
          custom_measure: "г",
          custom_measure_count: 2,
          title: "Цедра лимона",
        },
      ],
      optional_ingredients: [],
      proteins: 0.74,
      fats: 30.74,
      carbs: 2.96,
      calories: 291.77,
    },
    {
      id: 216849,
      active_cooking_time: 10,
      total_cooking_time: 10,
      difficulty_level: 1,
      title: "Греческий соус «Дзадзики»",
      subtitle:
        "Главным ингредиентом соуса «Дзадзики» являются огурцы. Их нужно натереть на средней терке или очень мелко покрошить. Смешайте огурцы со сметаной, натуральным йогуртом или кефиром. Добавьте измельченные укроп и мяту. В зимний период подойдет сушеная зелень. С мятой важно не переборщить, чтобы ее аромат не получился слишком ярким, перебивающим остальные компоненты. Положите в это греческое блюдо измельченный чеснок и другие специи по вкусу. Добавьте растительное масло и подайте к столу.",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS80S0RLcDYuanBlZw.jpg",
      preparation: {
        content:
          "Помойте огурцы, мяту и укроп. Обсушите зелень на бумажных полотенцах. Вымойте и почистите чеснок.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS80UVczc2suanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description: "Натрите огурцы на средней терке.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS93Rmt6VFguanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description:
            "Мелко покрошите свежую мяту и укроп. Пропустите чеснок через пресс.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS9KbVlGSmouanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Смешайте в миске сметану, огурцы, укроп, чеснок, сушеную и свежую мяту. Полейте растительным маслом.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxOS9LYVN4UXUuanBlZw.jpg",
        },
      ],
      kitchen_type: "Турецкая",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: "Для подачи",
      main_ingredients: [
        {
          id: 237,
          weight: 200,
          custom_measure: "г",
          custom_measure_count: 200,
          title: "Огурец",
        },
        {
          id: 346,
          weight: 210,
          custom_measure: "г",
          custom_measure_count: 210,
          title: "Сметана 20% жирности",
        },
        {
          id: 781,
          weight: 1,
          custom_measure: "г",
          custom_measure_count: 1,
          title: "Сушеная мята",
        },
        {
          id: 228,
          weight: 10,
          custom_measure: "г",
          custom_measure_count: 10,
          title: "Мята",
        },
        {
          id: 418,
          weight: 10,
          custom_measure: "г",
          custom_measure_count: 10,
          title: "Укроп",
        },
        {
          id: 287,
          weight: 17,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Растительное масло",
        },
        {
          id: 440,
          weight: 5,
          custom_measure: "зубчик",
          custom_measure_count: 1,
          title: "Чеснок",
        },
      ],
      optional_ingredients: [
        {
          id: 228,
          weight: 0,
          custom_measure: "по желанию",
          custom_measure_count: 0,
          title: "Мята",
        },
      ],
      proteins: 1.68,
      fats: 13.09,
      carbs: 3.83,
      calories: 138.83,
    },
    {
      id: 217191,
      active_cooking_time: 20,
      total_cooking_time: 160,
      difficulty_level: 2,
      title: "Кешью-соус «Морне»",
      subtitle:
        "Отличный соус, который подойдет для заправки салатов вместо майонеза или сметаны. Также его можно добавить в пасту. Измельченные орехи кешью придают соусу сливочную консистенцию и делают его очень сытным. Мы добавили в него немного копченой паприки и сушеный чеснок. Но по желанию можно положить и другие специи, например, органо или прованские травы. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNC8zcGtEVWsuanBlZw.jpg",
      preparation: {
        content: "Помойте и обсушите капусту. Подготовьте блендер.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNC8zN1c3b3kuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Замочите кешью в горячей кипяченой воде на 2 часа, а затем хорошенько промойте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNC84czhRcGouanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description: "Разделите капусту на соцветия и отварите на пару.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNC80OUJpY1ouanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description:
            "Выложите капусту и промытые после замачивания орехи в чашу блендера. Добавьте кокосовое молоко и перебейте до консистенции нежной густой сметаны.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNC8zakx1cXcuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Добавьте чеснок, паприку, соль и еще раз хорошо взбейте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUyNC80RVlydWEuanBlZw.jpg",
        },
      ],
      kitchen_type: "Интернациональная",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 114,
          weight: 150,
          custom_measure: "г",
          custom_measure_count: 150,
          title: "Кешью",
        },
        {
          id: 430,
          weight: 60,
          custom_measure: "г",
          custom_measure_count: 60,
          title: "Цветная капуста",
        },
        {
          id: 123,
          weight: 50,
          custom_measure: "мл",
          custom_measure_count: 50,
          title: "Кокосовое молоко",
        },
        {
          id: 386,
          weight: 1.5,
          custom_measure: "г",
          custom_measure_count: 1.5,
          title: "Сушеный чеснок",
        },
        {
          id: 352,
          weight: 0,
          custom_measure: "по вкусу",
          custom_measure_count: 0,
          title: "Соль",
        },
        {
          id: 137,
          weight: 1.5,
          custom_measure: "г",
          custom_measure_count: 1.5,
          title: "Копченая паприка",
        },
      ],
      optional_ingredients: [],
      proteins: 11.68,
      fats: 32.39,
      carbs: 15.19,
      calories: 394.79,
    },
    {
      id: 216633,
      active_cooking_time: 15,
      total_cooking_time: 20,
      difficulty_level: 2,
      title: "Мятный соус к мясу и овощам",
      subtitle:
        "Соусы из пряных трав прекрасно дополняют сытные блюда из картофеля, жареное мясо и курицу. К самому зажаристому стейку или жирной свинине не понадобится овощной гарнир, если вы подадите к ним соус из свежей мяты. Характерный мятный вкус в соусе хорошо сочетается с кислинкой винного уксуса и травянисто-горьковатыми нотками нерафинированного оливкового масла. ",
      image_path:
        "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNi80NkFWOVIuanBlZw.jpg",
      preparation: {
        content:
          "Тщательно помойте мяту, выложите ее на бумажные полотенца обсохнуть. Хорошо охладите воду. Подготовьте блендер с чашей, миску и соусник.",
        image_path:
          "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNi80VENOeEwuanBlZw.jpg",
      },
      cooking: [
        {
          title: "Шаг 1",
          description:
            "Выложите веточки мяты в чашу блендера. Всыпьте к ним сахар, влейте холодную воду.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNi8zVkR2QVguanBlZw.jpg",
        },
        {
          title: "Шаг 2",
          description: "Перебейте все до образования однородной густой пасты. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNi80M3JnSEsuanBlZw.jpg",
        },
        {
          title: "Шаг 3",
          description: "Влейте в пасту винный уксус, все хорошо перемешайте.",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNi8zN1V5YzkuanBlZw.jpg",
        },
        {
          title: "Шаг 4",
          description:
            "Налейте к мятной массе оливковое масло, размешайте до однородного состояния. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNi80NkprVHouanBlZw.jpg",
        },
        {
          title: "Шаг 5",
          description:
            "Оставьте соус настояться 5-7 минут при комнатной температуре, затем перелейте его в соусник. ",
          image_path:
            "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDUxNi9NS05iS2ouanBlZw.jpg",
        },
      ],
      kitchen_type: "Европейская",
      main_ingredient_title: "Для основного блюда",
      optional_ingredient_title: null,
      main_ingredients: [
        {
          id: 228,
          weight: 10,
          custom_measure: "пучок",
          custom_measure_count: 1,
          title: "Мята",
        },
        {
          id: 240,
          weight: 51,
          custom_measure: "ст. л.",
          custom_measure_count: 3,
          title: "Оливковое масло",
        },
        {
          id: 54,
          weight: 18,
          custom_measure: "ст. л.",
          custom_measure_count: 1,
          title: "Вода",
        },
        {
          id: 312,
          weight: 20,
          custom_measure: "ч. л.",
          custom_measure_count: 2,
          title: "Сахар",
        },
        {
          id: 352,
          weight: 3.3,
          custom_measure: "ч. л.",
          custom_measure_count: 0.33,
          title: "Соль",
        },
        {
          id: 9408,
          weight: 5,
          custom_measure: "ч. л.",
          custom_measure_count: 1,
          title: "Винный уксус 6%",
        },
      ],
      optional_ingredients: [],
      proteins: 0.34,
      fats: 47.47,
      carbs: 19.62,
      calories: 499.52,
    },
  ],
};
