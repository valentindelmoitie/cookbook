export class RecipeStepDetails {
    stepNumber: number;
    description: string;

    constructor(stepNumber: number, description: string) {
        this.stepNumber = stepNumber;
        this.description = description;
    }
}