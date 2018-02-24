import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Cibatta',
      'Italian bakker stuff',
      'https://23991-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2017/02/ciabatta-recipe-fp.jpg',
      [
        new Ingredient('Flour', 1),
        new Ingredient('Water', 30)]),
    new Recipe(
      'Pastel de nata',
      'Pastel from Belém',
      'https://cdn-images-1.medium.com/max/1000/0*lw57xiFVYi--3nOB.jpg',
      [
        new Ingredient('Eggs', 7),
        new Ingredient('Milk', 40)]),
  ];

  constructor() {
  }


  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
