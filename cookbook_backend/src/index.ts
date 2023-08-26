const express = require('express');
const { getRecipeSummaries, getRecipeDetails } = require('./repositories/recipe_repository');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

app.get('/list-summary', (req: any, res: any) => {
    const recipes  = getRecipeSummaries();

    res.send(recipes);
});

app.get('/recipe/:id', (req: any, res: any) => {
    console.log(req.params.id);

    const recipeDetails = getRecipeDetails(req.params.id);
    
    res.send(recipeDetails);
});

app.listen(port, () => {
    console.log('App is listening on port 3000');
});