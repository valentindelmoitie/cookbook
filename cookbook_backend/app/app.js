const express = require('express');
const { getRecipeSummaries } = require('./repositories/recipe_repository');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

app.get('/list-summary', (req, res) => {
    const recipes  = getRecipeSummaries();

    res.send(recipes);
});

app.listen(port, () => {
    console.log('App is listening on port 3000');
});