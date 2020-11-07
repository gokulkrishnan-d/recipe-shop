import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
    private ingredients = [new Ingredient('Tea Power', 10),
                             new Ingredient('Sugar', 20)];

    ingredientsChanged = new Subject<Ingredient[]>();
    getIngredients() {
        return this.ingredients.slice();
    }

    addItemsInIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredientsArray: Ingredient[]) {
        this.ingredients.push(...ingredientsArray);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

}
