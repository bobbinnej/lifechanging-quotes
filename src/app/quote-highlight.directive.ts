import { Directive,ElementRef,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appQuoteHighlight]'
})
export class QuoteHighlightDirective {


  constructor(private elementRef: ElementRef) { 
    this.elementRef.nativeElement.style.cssText = 'background-color: black;';
  }
 
 
}
