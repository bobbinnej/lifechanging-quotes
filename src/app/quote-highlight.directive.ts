import { Directive,ElementRef,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appQuoteHighlight]'
})
export class QuoteHighlightDirective {


  constructor(private elem: ElementRef) { }
  @HostListener("click")upVote(){
    this.highlight("highlight")
  }
  @HostListener("dblclick") onDoubleClicks() {
    this.highlight("highlight")
  }
  private highlight(highlight: string){
    this.elem.nativeElement.style.backgroundColor = 'black';

}
}
