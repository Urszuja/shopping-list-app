import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('carrots', 5),
    new Ingredient('apples', 3),
  ];

  ingredientsChanged = new Subject<Ingredient[]>();
  recipeAdded = new EventEmitter<Recipe>();

  constructor() {}

  getShoppingList() {
    return this.ingredients.slice();
  }

  onIngredientAdded = (ingredient: Ingredient) => {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  };

  onRecipeAdded = (recipe: Recipe) => {
    recipe.ingredients.forEach((ingredient: Ingredient) => {
      this.onIngredientAdded(ingredient);
    });
  };
}
