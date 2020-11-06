import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.less']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() index: number;
  // @Output() selectedRecipe =  new EventEmitter<void>();
  // constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  // recipeSelected(): void {
  //   // this.selectedRecipe.emit();
  //   this.recipeService.selectedRecipe.emit(this.recipe);
  // }

}
