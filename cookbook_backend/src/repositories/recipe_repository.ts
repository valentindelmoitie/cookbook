import { RecipeDetails } from '../dto/recipe-details';
import { RecipeSummary } from '../dto/recipe-summary';
import { recipes } from './recipes';

function getRecipeSummaries(): RecipeSummary[] {
    return recipes.map(recipe => {
        const mappedRecipe: RecipeSummary = {
            id: recipe.id,
            title: recipe.title,
            imageUrl: recipe.imageUrl
        };

        return mappedRecipe;
    });
}

function getRecipeDetails(id: number): RecipeDetails {
    const recipe = recipes.find(r => r.id == id)!;

    return {
        id: recipe.id,
        title: recipe.title,
        imageUrl: recipe.imageUrl,
        ingredients: recipe.ingredients.map(i => {
            return {
                name: i.name,
                quantity: i.quantity,
                unit: i.unit
            };
        }
        ),
        steps: recipe.steps.map(s => {
            return {
                stepNumber: s.stepNumber,
                description: s.description
            };
        }
        )
    };
}

module.exports = {
    getRecipeSummaries,
    getRecipeDetails
};