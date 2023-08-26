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

// TODO: Implement get for recipe details

app.listen(port, () => {
    console.log('App is listening on port 3000');
});