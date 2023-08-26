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

// TODO : Implement getRecipeDetails && create DTOs

module.exports = {
    getRecipeSummaries,
};