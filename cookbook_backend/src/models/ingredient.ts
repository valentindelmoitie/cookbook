export class Ingredient {
    quantity: number;
    unit: string;
    name: string;

    constructor(quantity: number, unit: string, name: string) {
        this.quantity = quantity;
        this.unit = unit;
        this.name = name;
    }
}

module.exports = {
    Ingredient
};