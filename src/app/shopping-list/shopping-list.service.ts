import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    private ingredients = [new Ingredient('Tea Power', 10),
                             new Ingredient('Sugar', 20)];

    ingredientsChanged = new EventEmitter<Ingredient[]>();
    getIngredients() {
        return this.ingredients.slice();
    }

    addItemsInIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

}
