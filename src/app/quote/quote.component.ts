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

    {description:'Momentum is power', author:'Nelson Mandela', submitter:'Jackline Njoroge'},
    {description:'Setting an example is not the main means of influencing others, it is the only means ', author:'Albert Einstein', submitter:'Jackline Njoroge'},
    {description:'Being a good example teaches others to be good', author:'Aesop', submitter:'Jackline Njoroge'},
  ];
 
  

  constructor() { }

  ngOnInit(): void {
  }

}
