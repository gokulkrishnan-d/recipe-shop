import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.less']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private rsService: RecipeService ) { }

  ngOnInit(): void {
  }

  onAddToShoppingList(): void {
    this.rsService.addIngredientsToShopping(this.recipe.ingredients);
  }

}
