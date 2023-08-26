import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';
import { RecipeStep } from '../models/recipe_step';

const gratinDauphinoisIngredients = [
    new Ingredient(8, 'pommes de terre', 'grosses pommes de terre épluchées et tranchées'),
    new Ingredient(2, 'gousses', 'ail émincées'),
    new Ingredient(2, 'tasses', 'crème fraîche'),
    new Ingredient(1, 'tasse', 'lait'),
    new Ingredient(1, 'tasse', 'fromage gruyère râpé'),
    new Ingredient(2, 'cuillères à soupe', 'beurre'),
    new Ingredient(1, 'pincée', 'noix de muscade'),
    new Ingredient(1, 'pincée', 'sel'),
    new Ingredient(1, 'pincée', 'poivre')
];

const gratinDauphinoisSteps = [
    new RecipeStep(1, 'Préchauffez le four à 180°C (350°F).'),
    new RecipeStep(2, 'Frottez un plat à gratin avec une gousse d\'ail émincée.'),
    new RecipeStep(3, 'Beurrez le plat avec une cuillère à soupe de beurre.'),
    new RecipeStep(4, 'Disposez une couche de pommes de terre dans le plat, saupoudrez d\'ail émincé, de sel, de poivre et de noix de muscade.'),
    new RecipeStep(5, 'Répétez les couches jusqu\'à ce que toutes les pommes de terre soient utilisées.'),
    new RecipeStep(6, 'Dans une casserole, faites chauffer la crème fraîche et le lait jusqu\'à ébullition.'),
    new RecipeStep(7, 'Versez le mélange de crème et de lait sur les pommes de terre.'),
    new RecipeStep(8, 'Saupoudrez de fromage gruyère râpé.'),
    new RecipeStep(9, 'Coupez le beurre restant en petits morceaux et disposez-les sur le dessus.'),
    new RecipeStep(10, 'Couvrez le plat avec du papier aluminium et enfournez pendant environ 45 minutes.'),
    new RecipeStep(11, 'Retirez le papier aluminium et poursuivez la cuisson pendant 20 à 30 minutes, jusqu\'à ce que le dessus soit doré et croustillant.'),
    new RecipeStep(12, 'Laissez reposer quelques minutes avant de servir.'),
];

const gratinDauphinois = new Recipe(
    1,
    'Gratin Dauphinois',
    gratinDauphinoisIngredients,
    gratinDauphinoisSteps,
    'https://i.imgur.com/mTe5lYR.jpg'
);

const ratatouilleIngredients = [
    new Ingredient(1, 'aubergine', 'aubergine coupée en dés'),
    new Ingredient(2, 'courgettes', 'courgettes coupées en dés'),
    new Ingredient(1, 'poivron', 'poivron coupé en dés'),
    new Ingredient(2, 'tomates', 'tomates coupées en dés'),
    new Ingredient(1, 'oignon', 'oignon coupé en dés'),
    new Ingredient(2, 'gousses', 'ail émincées'),
    new Ingredient(2, 'cuillères à soupe', 'huile d\'olive'),
    new Ingredient(1, 'cuillère à café', 'herbes de Provence'),
    new Ingredient(1, 'pincée', 'sel'),
    new Ingredient(1, 'pincée', 'poivre')
];

const ratatouilleSteps = [
    new RecipeStep(1, 'Dans une grande poêle, chauffez l\'huile d\'olive à feu moyen.'),
    new RecipeStep(2, 'Ajoutez les dés d\'oignon et faites cuire jusqu\'à ce qu\'ils soient translucides.'),
    new RecipeStep(3, 'Ajoutez les dés d\'aubergine, de courgettes et de poivron. Faites sauter pendant environ 5 minutes jusqu\'à ce qu\'ils commencent à ramollir.'),
    new RecipeStep(4, 'Ajoutez les dés d\'ail et les herbes de Provence. Faites sauter pendant 2 minutes de plus.'),
    new RecipeStep(5, 'Ajoutez les dés de tomates, le sel et le poivre. Mélangez bien.'),
    new RecipeStep(6, 'Réduisez le feu à moyen-doux, couvrez la poêle et laissez mijoter pendant environ 20 à 25 minutes, en remuant de temps en temps, jusqu\'à ce que les légumes soient tendres.'),
    new RecipeStep(7, 'Goûtez et ajustez l\'assaisonnement si nécessaire.'),
    new RecipeStep(8, 'Retirez du feu et laissez reposer quelques minutes avant de servir.'),
];

const ratatouille = new Recipe(
    2,
    'Ratatouille',
    ratatouilleIngredients,
    ratatouilleSteps,
    'https://i.imgur.com/k3oGxv2.jpg'
);

const mousseChocolatIngredients = [
    new Ingredient(200, 'g', 'chocolat noir'),
    new Ingredient(4, 'œufs', 'œufs'),
    new Ingredient(40, 'g', 'sucre'),
    new Ingredient(1, 'pincée', 'sel'),
    new Ingredient(1, 'cuillère à soupe', 'beurre'),
    new Ingredient(1, 'cuillère à soupe', 'café fort (facultatif)')
];

const mousseChocolatSteps = [
    new RecipeStep(1, 'Faites fondre le chocolat avec le beurre au bain-marie.'),
    new RecipeStep(2, 'Séparez les blancs des jaunes d\'œufs.'),
    new RecipeStep(3, 'Ajoutez le sucre aux jaunes d\'œufs et battez jusqu\'à ce que le mélange blanchisse.'),
    new RecipeStep(4, 'Versez le chocolat fondu dans le mélange jaunes d\'œufs et sucre. Mélangez bien.'),
    new RecipeStep(5, 'Si vous utilisez du café, ajoutez-le au mélange.'),
    new RecipeStep(6, 'Montez les blancs d\'œufs en neige avec une pincée de sel.'),
    new RecipeStep(7, 'Incorporez délicatement les blancs d\'œufs montés en neige dans le mélange au chocolat en pliant doucement jusqu\'à obtenir une texture homogène.'),
    new RecipeStep(8, 'Répartissez la mousse dans des ramequins ou des verres.'),
    new RecipeStep(9, 'Laissez reposer au réfrigérateur pendant au moins 2 heures avant de servir.'),
    new RecipeStep(10, 'Vous pouvez garnir les mousses au chocolat de copeaux de chocolat, de crème fouettée ou de fruits avant de servir.'),
];

const mousseChocolat = new Recipe(
    3,
    'Mousse au Chocolat',
    mousseChocolatIngredients,
    mousseChocolatSteps,
    'https://i.imgur.com/g3DsXWM.jpg'
);


export const recipes: Recipe[] = [
    gratinDauphinois,
    ratatouille,
    mousseChocolat
];

