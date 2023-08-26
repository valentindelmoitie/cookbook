import { IngredientDetails } from "./ingredient-details";
import { RecipeStepDetails } from "./recipe-step-details";

export class RecipeDetails {
    id: number;
    title: string;
    ingredients: IngredientDetails[];
    steps: RecipeStepDetails[];
    imageUrl: string;

    constructor(id: number, title: string, ingredients: IngredientDetails[], steps: RecipeStepDetails[], imageUrl: string) {
        this.id = id;
        this.title = title;
        this.ingredients = ingredients;
        this.steps = steps;
        this.imageUrl = imageUrl;
    }
}