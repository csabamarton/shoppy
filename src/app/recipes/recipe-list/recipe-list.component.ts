import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Cibatta', 'Italian bakker stuff', 'https://23991-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2017/02/ciabatta-recipe-fp.jpg'),
    new Recipe('Cibatta', 'Italian bakker stuff', 'https://23991-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2017/02/ciabatta-recipe-fp.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
