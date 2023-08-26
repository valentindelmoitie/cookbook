import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { RecipeSummary } from 'src/app/models/recipe-summary';
import { RecipeDetails } from 'src/app/models/recipe-details';

@Injectable({
  providedIn: 'root'
})
export class CookbookService {
  constructor(private http: HttpClient) {
  }

  public getRecipes(): Observable<RecipeSummary[]>  {
    return this.http.get('http://localhost:3000/list-summary') as Observable<RecipeSummary[]>;
  }

  public getRecipeDetails(id: number): Observable<RecipeDetails> {
    return this.http.get(`http://localhost:3000/recipe/${id}`) as Observable<RecipeDetails>;
  }
}
