import { IngredientDetails } from "./ingredient-details";
import { RecipeStepDetails } from "./recipe-step-details";

export interface RecipeDetails {
    id: number;
    title: string;
    ingredients: IngredientDetails[];
    steps: RecipeStepDetails[];
    imageUrl: string;
}