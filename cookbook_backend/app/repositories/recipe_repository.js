const { Recipe } = require('../models/recipe');

const recipes = [
    new Recipe(
        1,
        'Gratin dauphinois',
        [
            '1 kg de pommes de terre',
            '1 gousse d\'ail',
            '50 cl de lait',
            '50 cl de crème liquide',
            'Sel',
            'Poivre',
            'Noix de muscade',
            'Gruyère râpé'
        ],
        'Préchauffer le four à 180°C (thermostat 6).',
        'https://i.imgur.com/mTe5lYR.jpg'
    ),
    new Recipe(
        2,
        'Ratatouille', 
        [
            '1 aubergine',
            '1 courgette',
            '1 poivron rouge',
            '1 poivron vert',
            '1 poivron jaune',
            '2 tomates',
            '1 oignon',
            '2 gousses d\'ail',
            'Huile d\'olive',
        ],
        'Laver et couper tous les légumes en petits dés.',
        'https://i.imgur.com/k3oGxv2.jpg'
    ),
    new Recipe(
        3,
        'Mousse au chocolat',
        [
            '200 g de chocolat noir',
            '6 oeufs',
            '1 pincée de sel',
        ],
        'Faire fondre le chocolat au bain-marie.',
        'https://i.imgur.com/g3DsXWM.jpg'
    ),
];

function getRecipeSummaries() {
    return recipes.map(recipe => {
        const mappedRecipe = {
            id: recipe.id,
            title: recipe.title,
            imageUrl: recipe.imageUrl
        };

        return mappedRecipe;
    });
}

module.exports = {
    getRecipeSummaries
};