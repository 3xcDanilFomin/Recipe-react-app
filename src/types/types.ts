export interface ICategory {
  title: string;
  imgPath: string;
  urlPath: string;
}

export interface ITypeMeal extends ICategory {}

export interface IRecipe {
  title: string;
  imgPath: string;
  cookingTime: string;
}
