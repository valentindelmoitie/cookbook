import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientDetails } from 'src/app/models/ingredient-details';
import { RecipeStepDetails } from 'src/app/models/recipe-step-details';

@Component({
  selector: 'app-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent {
  @Input({required: true}) step!: RecipeStepDetails;
}
