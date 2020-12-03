import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.less']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[] = [];
  private idChanged: Subscription;
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
      this.ingredients = this.shoppingService.getIngredients();
      this. idChanged = this.shoppingService.ingredientsChanged.subscribe(
        (ingredientsArray: Ingredient[]) => {
          this.ingredients = ingredientsArray;
        }
      );
  }

  // addItem(newIngredient: Ingredient): void {
  //   if (newIngredient.name && newIngredient.amount) {
  //     this.shoppingService.addItemsInIngredients(newIngredient);
  //   }
  // }

  ngOnDestroy(): void {
    this.idChanged.unsubscribe();
  }
}
