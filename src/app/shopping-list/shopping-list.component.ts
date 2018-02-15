import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingreditens: Ingredient[] = [
    new Ingredient("Flour", 30),
    new Ingredient("Egg", 2)
  ];

  constructor() { }

  ngOnInit() {
  }

}
