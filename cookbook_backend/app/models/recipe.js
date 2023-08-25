class Recipe {
    constructor(id, title, ingredients, instructions, imageUrl) {
        this.id = id;
        this.title = title;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.imageUrl = imageUrl;
    }
}

module.exports = {
    Recipe
};