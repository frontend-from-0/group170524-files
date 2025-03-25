export interface NewRecipeFormState {
  success: boolean;
  message: string;

  errors?: {
    [K in keyof RecipeFormData]?: string[];
  };
  inputs?: Partial<RecipeFormData>;
}

export interface RecipeFormData {
  idMeal?: string;
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
  // TODO: Add more fields here similar to data in the api
}