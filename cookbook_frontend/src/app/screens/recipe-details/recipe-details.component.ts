import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RecipeDetails } from 'src/app/models/recipe-details';
import { CookbookService } from 'src/app/services/api/cookbook/cookbook.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StepComponent } from 'src/app/components/step/step.component';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [CommonModule, StepComponent],
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
  private cookbookService = inject(CookbookService);
  private route = inject(ActivatedRoute);

  recipe$: Observable<RecipeDetails>;

  constructor() {
    const recipeId: number = this.route.snapshot.params['id'];

    this.recipe$ = this.cookbookService.getRecipeDetails(recipeId);

    this.recipe$.subscribe((recipe: RecipeDetails) => {
      console.log(recipe);
    });
  }
}
