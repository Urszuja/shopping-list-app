import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Omelette du fromage',
      'omlette with cottage cheese',
      'https://live.staticflickr.com/4198/34816100336_4a4a79baae_c.jpg',
      [new Ingredient('egg', 3), new Ingredient('fromage', 1)]
    ),
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }
}
