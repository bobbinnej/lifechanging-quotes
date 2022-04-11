import { Component, OnInit} from '@angular/core';
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

    new Quote('I am  not a profilic writer but i will try..', 'Kendrick Mulamwa','Jackline Njoroge',40,3,new Date(2021,4,5)),
    new Quote('Setting an example is not the main means of influencing others, it is the only means ','Albert Einstein','Jackline Njoroge' ,100,2,new Date(2022,1,4)),
    new Quote('Keilah is not my kid','Kendrick Mulamwah','Jackline Njoroge' ,45,60,new Date(2021,3,3)),
  ];

 
  addNewQuote(quote: any){
   
    let sizeArray =this.quotes.length;
    quote.description=sizeArray+1;
    quote.completeDate= new Date (quote.completeDate)
    this.quotes.push(quote)
 
 
   }
 
  
  
 
  toggleDetails(index:any){
    this.quotes[index].showAuthor=!this.quotes[index].showAuthor;
    this.quotes[index].showSubmitter=!this.quotes[index].showSubmitter;
  }

/**Delete quote */
deleteQuote(isComplete: any, index: number){
  if(isComplete){

    let toDelete = confirm("Are you sure you want to delete this quote?")
    if(toDelete){
      this.quotes.splice(index, 1)
    }
  
  }
}



 
  
  ngOnInit(): void {
  }

}
