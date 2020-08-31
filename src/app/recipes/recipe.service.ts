import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[] =  [
        new Recipe('Tea', 'This is for Testing',
        // tslint:disable-next-line:max-line-length
        'https://www.telegraph.co.uk/content/dam/health-fitness/2020/01/09/TELEMMGLPICT000169578515_trans_NvBQzQNjv4BqbTl4D02iCM3NuMfK2RT0HTjsyN2j3JnAYXPi059mk8g.jpeg?imwidth=1400'),
        new Recipe('Maggie', 'This is for Eating',
        'https://i1.wp.com/indiacanteen.tastyfix.com/wp-content/uploads/2018/11/2-2.png')
      ];

      getRecipes() {
          return this.recipes.slice();
      }


}
