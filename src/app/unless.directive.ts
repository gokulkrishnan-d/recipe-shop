import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
        this.viRef.createEmbeddedView(this.templateRef);
    } else {
        this.viRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private viRef: ViewContainerRef ) {

   }

}
