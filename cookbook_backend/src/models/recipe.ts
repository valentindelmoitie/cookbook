import { Ingredient } from "./ingredient";
import { RecipeStep } from "./recipe_step";

export class Recipe {
    id: number;
    title: string;
    ingredients: Ingredient[];
    steps: RecipeStep[];
    imageUrl: string;

    constructor(id: number, title: string, ingredients: Ingredient[], steps: RecipeStep[], imageUrl: string) {
        this.id = id;
        this.title = title;
        this.ingredients = ingredients;
        this.steps = steps;
        this.imageUrl = imageUrl;
    }
}
