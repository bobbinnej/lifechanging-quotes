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

    new Quote('I am  not a profilic writer but i will try..', 'Kendrick Mulamwa','Jackline Njoroge'),
    new Quote('Setting an example is not the main means of influencing others, it is the only means ','Albert Einstein','Jackline Njoroge'),
    new Quote('Keilah is not my kid','Kendrick Mulamwah','Jackline Njoroge'),
  ];
  
 
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



  addNewQuote(quote: any){
   
    //  quote.author =quoteLength+1;
    //  quote.submitter =quoteLength+1;
    let quoteObject=new Quote(quote.description,quote.author,quote.submitter);

    this.quotes.push(quoteObject)

  }

  /**Upvote to add when clicked */
  uvotes=0;
  upVoteQuote(){
    this.uvotes=this.uvotes+1;
  }
  /**Down vote button adds1 when clicked */
   dvotes=0;
   downVoteQuote(){
     this.dvotes=this.dvotes+1;
   }



  constructor() { }

  ngOnInit(): void {
  }

}
