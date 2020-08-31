import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.less']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name', {static: false}) ingredientName: ElementRef ;
  @ViewChild('quantity', {static: false}) ingredientQuantity: ElementRef ;
  // @Output() shoppingArray =  new EventEmitter<Ingredient>();
  ingredientNameValue: string;
  ingredientQuantityValue: number;
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addData(): void {
    // this.shoppingArray.emit(new Ingredient(this.ingredientName.nativeElement.value, this.ingredientQuantity.nativeElement.value));
    this.ingredientNameValue  = this.ingredientName.nativeElement.value;
    this.ingredientQuantityValue =  this.ingredientQuantity.nativeElement.value;
    if (this.ingredientQuantityValue && this.ingredientNameValue) {
      this.slService.addItemsInIngredients(new Ingredient(
                                          this.ingredientName.nativeElement.value,
                                          this.ingredientQuantity.nativeElement.value));
    }
  }

}
