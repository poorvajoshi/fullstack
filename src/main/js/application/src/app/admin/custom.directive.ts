import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[host]',
})
export class CustomDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}