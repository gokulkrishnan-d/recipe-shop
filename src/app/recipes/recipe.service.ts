import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();

    constructor(private slService: ShoppingListService) {}

    private recipes: Recipe[] =  [
        new Recipe('Tea',
         'This is for Testing',
        // tslint:disable-next-line:max-line-length
        'https://www.telegraph.co.uk/content/dam/health-fitness/2020/01/09/TELEMMGLPICT000169578515_trans_NvBQzQNjv4BqbTl4D02iCM3NuMfK2RT0HTjsyN2j3JnAYXPi059mk8g.jpeg?imwidth=1400',
        [new Ingredient('Sugar', 40), new Ingredient('Tea Powder', 10)]),
        new Recipe('Maggie', 'This is for Eating',
        'https://i1.wp.com/indiacanteen.tastyfix.com/wp-content/uploads/2018/11/2-2.png',
        [new Ingredient('Masala', 10), new Ingredient('Salt', 5)])
      ];

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShopping(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }

      getRecipe(id: number) {
        return this.recipes.slice()[id]; // use a cope of the array
      }


}
