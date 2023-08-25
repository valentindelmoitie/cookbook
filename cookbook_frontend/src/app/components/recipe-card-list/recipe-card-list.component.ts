import { Component, Inject, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { CookbookService } from 'src/app/services/api/cookbook/cookbook.service';
import { RecipeSummary } from 'src/app/models/recipe-summary';

@Component({
  selector: 'app-recipe-card-list',
  standalone: true,
  imports: [CommonModule, RecipeCardComponent],
  templateUrl: './recipe-card-list.component.html',
  styleUrls: ['./recipe-card-list.component.css']
})
export class RecipeCardListComponent {

  private cookbookService = inject(CookbookService);

  private state = signal({
    isLoading: false,
    recipes: [] as RecipeSummary[]
  });

  isLoading = computed(() => this.state().isLoading);
  recipes = computed(() => this.state().recipes);

  private recipes$ = this.cookbookService.getRecipes();

  constructor() {
    this.recipes$
      .subscribe(recipes => {
        this.state.update((state) => ({
          ...state,
          recipes
        }))
      })
  }

  ngOnInit() {
  }
}
