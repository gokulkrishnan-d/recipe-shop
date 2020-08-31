import { Component, OnInit } from '@angular/core';
import {Ingredient } from '../shared/ingredient.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.less']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Tea Power', 10),
    new Ingredient('Sugar', 20)
   ];
  constructor() { }

  ngOnInit(): void {
  }

  addItem(newIngredient: Ingredient): void {
    if (newIngredient.name && newIngredient.amount) {
    this.ingredients.push(newIngredient);
    }
}
}
