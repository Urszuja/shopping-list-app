import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Omelette du fromage',
      'omlette with cottage cheese',
      'https://live.staticflickr.com/4198/34816100336_4a4a79baae_c.jpg'
    ),
  ];
}
