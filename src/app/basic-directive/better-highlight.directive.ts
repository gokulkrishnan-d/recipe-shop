import { Directive, Renderer2, OnInit, ElementRef, AfterViewInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit, AfterViewInit {

  @Input('appBetterHighlight') defaultSize: string; // if input value is used as the name of 
  // directive u can bind the property directly to the name of the directive
  @Input() highLightSize: string;

  @HostBinding('style.fontSize') fontSize: string;

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit(): void {
    this.fontSize = this.defaultSize;
  }
  ngAfterViewInit() {
    // this.renderer.setProperty(this.elRef.nativeElement, 'innerText', '<h1>Hello world</h1>');
    this.renderer.setProperty(this.elRef.nativeElement, '', 'Cute alligator');
  }

  @HostListener('mouseover') mouseOver(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue' );
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white' );
    this.fontSize = this.highLightSize;
  }

  @HostListener('mouseout') mouseLeave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent' );
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black' );
    this.fontSize = this.defaultSize;
  }


}
