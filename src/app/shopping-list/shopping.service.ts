import { Injectable } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Injectable()
export class ShoppingService {
  private ingredients: Ingredient[] = [
    new Ingredient("Flour", 30),
    new Ingredient("Egg", 2)
  ];

  constructor() { }

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  public addIngredients(ingredients: Ingredient[]) {
    console.log("addToList method has been called");
    this.ingredients.push(...ingredients);
  }
}
