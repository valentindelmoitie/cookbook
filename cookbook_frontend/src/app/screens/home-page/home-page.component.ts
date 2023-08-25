import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCardListComponent } from 'src/app/components/recipe-card-list/recipe-card-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RecipeCardListComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

}
