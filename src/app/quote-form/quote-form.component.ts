import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
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
   newQuote=new  Quote(0,"","","",0,0,new Date()) ;
   
   @Output() addQuote =new EventEmitter<Quote>();
  
   submitQuote(quoteForm:NgForm){
     let quote=new Quote(0,"","","",0,0,new Date());
     quote.description=quoteForm.value.description;
     quote.author=quoteForm.value.author;
     quote.submitter=quoteForm.value.submitter;
     this.addQuote.emit(quote);
     quoteForm.resetForm();
     
     
   }

  
  
  


  constructor() { }

  ngOnInit(): void {
  }

}
