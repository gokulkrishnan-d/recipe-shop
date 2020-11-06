import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.less']
})
export class RecipeDetailsComponent implements OnInit {
  // @Input() recipe: Recipe;

  recipe: Recipe;
  id: number;
  constructor(private rsService: RecipeService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.route.params.subscribe(
        (data: Params) => {
          this.id = +data.id;
          this.recipe = this.rsService.getRecipe(this.id);
        }
      );
  }

  editRecipe(): void {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onAddToShoppingList(): void {
    this.rsService.addIngredientsToShopping(this.recipe.ingredients);
  }

}
