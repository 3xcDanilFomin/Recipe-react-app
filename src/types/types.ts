export interface ICategory {
  title: string;
  imgPath: string;
  urlPath: string;
}

export interface ITypeMeal {
  title: string;
  imgPath: string;
}

export interface IPreparation {
  content: string;
  image_path: string | null;
}

export interface ICooking {
  title: string;
  description: string;
  image_path: string;
}

export interface IIngredients {
  id: number;
  weight: number;
  custom_measure: string;
  custom_measure_count: number | null;
  title: string;
}

export interface INutritionDetail {
  title: string;
  value: string;
}

export interface IRecipe {
  id: number;
  active_cooking_time: number;
  total_cooking_time: number;
  difficulty_level: number;
  title: string;
  subtitle: string;
  image_path: string;
  preparation: IPreparation;
  cooking: ICooking[];
  kitchen_type: string;
  main_ingredient_title: string;
  optional_ingredient_title: string;
  main_ingredients: IIngredients[];
  optional_ingredients: IIngredients[];
  nutritionDetails: INutritionDetail[];
}

export interface ICategoryRecipe {
  [key: string]: IRecipe[];
}

export interface ICategoryRecipes {
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
