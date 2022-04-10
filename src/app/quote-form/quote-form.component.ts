import { Component, OnInit, Output,EventEmitter } from '@angular/core';
/**import the quote blueprint */
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css'],
  exportAs:'quoteForm'
})
export class QuoteFormComponent implements OnInit {
  /**Create newQuote property and assign it to the goal bluperint class */
   newQuote=new  Quote("","","") 
   @Output() addQuote =new EventEmitter<Quote> ();
   inputNewQuote(){
     this.addQuote.emit(this.newQuote);

  }

  
  
  


  constructor() { }

  ngOnInit(): void {
  }

}
