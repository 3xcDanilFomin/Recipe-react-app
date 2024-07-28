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
  imagePath: string | null;
}

export interface ICooking {
  title: string;
  description: string;
  imagePath: string;
}

export interface IImpression {
  description: string;
  imagePath: string;
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
  value: number;
}

export interface IRecipe {
  id: number;
  activeCookingTime: number;
  totalCookingTime: number;
  title: string;
  subtitle: string;
  imagePath: string;
  preparation: IPreparation;
  cooking: ICooking[];
  impression: IImpression[];
  kitchenType: string;
  mainIngredientTitle: string;
  optionalIngredientTitle: string | null;
  mainIngredients: IIngredients[];
  optionalIngredients: IIngredients[] | [];
  nutritionDetails: INutritionDetail[];
  difficultyLevel: number;
  acuityLevel: number;
  measure: string;
  measureCount: number;
  allergens: string;
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
