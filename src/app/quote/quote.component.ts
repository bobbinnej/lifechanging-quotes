import { Component, OnInit } from '@angular/core';
 /*Import Quote blueprint class */
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  /*Lets create Sample Array of Quotes using the quote blueprint class */
  /*Create an object quotes and attribute it to the Quote blueprint class 
    then define an array of quotes with author and submitter
  */
  quotes:Quote[] =[

    new Quote('I am  not a profilic writer but i will try..', 'Kendrick Mulamwa','Jackline Njoroge'),
    new Quote('Setting an example is not the main means of influencing others, it is the only means ','Albert Einstein','Jackline Njoroge'),
    new Quote('Keilah is not my kid','Kendrick Mulamwah','Jackline Njoroge'),
  ];
 
  toggleDetails(index:any){
    this.quotes[index].showAuthor=!this.quotes[index].showAuthor;
    this.quotes[index].showSubmitter=!this.quotes[index].showSubmitter;
  }

  addNewQuote(quote: any){
    let quoteLength=this.quotes.length;
    quote.description=quoteLength+1;
    this.quotes.push(quote)

  }

  constructor() { }

  ngOnInit(): void {
  }

}
