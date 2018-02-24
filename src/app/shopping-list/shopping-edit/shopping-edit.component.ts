import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingService} from "../shopping.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() newShoppingItem = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
  }

  onShoppingItemAdd() {
    console.log("onShoppingItemAdd method has been called");
    this.shoppingService.addIngredients(
      [new Ingredient(
        this.nameInput.nativeElement.value,
        this.amountInput.nativeElement.value
      )]
    );
  }

}
