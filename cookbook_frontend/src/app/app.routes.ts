import { Routes } from '@angular/router';
import { HomePageComponent } from './screens/home-page/home-page.component';
import { RecipeDetailsComponent } from './screens/recipe-details/recipe-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'recipe/:id',
    component: RecipeDetailsComponent,
  }
];
