import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.less']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name', {static: false}) ingredientName: ElementRef ;
  @ViewChild('amount', {static: false}) ingredientAmount: ElementRef ;
  @Output() shoppingArray =  new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  addData(): void {
    this.shoppingArray.emit(new Ingredient(this.ingredientName.nativeElement.value, this.ingredientAmount.nativeElement.value));
  }

}
