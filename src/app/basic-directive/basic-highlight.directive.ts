import { Directive, ElementRef, OnInit } from '@angular/core';
import { BetterHighlightDirective } from './better-highlight.directive';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef) {
   }
   ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
   }

}
