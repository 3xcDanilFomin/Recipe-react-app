export interface ICategory {
  title: string;
  imgPath: string;
  urlPath: string;
}

export interface ITypeMeal {
  title: string;
  imgPath: string;
}

interface IPreparation {
  content: string;
  image_path: string | null;
}

interface ICooking {
  title: string;
  description: string;
  image_path: string;
}

interface IIngredients {
  id: number;
  weight: number;
  custom_measure: string;
  custom_measure_count: number | null;
  title: string;
}

export interface IRecipe {
  id: number;
  active_cooking_time?: number;
  total_cooking_time: number;
  difficulty_level?: number;
  title: string;
  subtitle?: string;
  image_path: string;
  preparation?: IPreparation;
  cooking?: ICooking[];
  kitchen_type?: string;
  main_ingredient_title?: string;
  optional_ingredient_title?: string | null;
  main_ingredients?: IIngredients[];
  optional_ingredients?: IIngredients[] | [];
  proteins?: number;
  fats?: number;
  carbs?: number;
  calories?: number;
}

export interface ICategoryRecipe {
  "first-courses": IRecipe[];
  "second-courses": IRecipe[];
  salads: IRecipe[];
  snacks: IRecipe[];
  garnish: IRecipe[];
  desserts: IRecipe[];
  bakery: IRecipe[];
  drinks: IRecipe[];
  preserves: IRecipe[];
  sauces: IRecipe[];
}
