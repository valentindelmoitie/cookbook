import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeSummary } from 'src/app/models/recipe-summary';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent {
  // TODO
}
