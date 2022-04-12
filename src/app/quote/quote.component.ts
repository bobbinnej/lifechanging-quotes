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

    new Quote(1,'I am  not a profilic writer but i will try..', 'Kendrick Mulamwa','Jackline Njoroge',new Date(2021,4,5)),
    new Quote(2,'Setting an example is not the main means of influencing others, it is the only means ','Albert Einstein','Jackline Njoroge' ,new Date(2022,1,4)),
    new Quote(3,'Sometimes the heart sees what  is invisible to the eye','H Jackson Brown jr','Jackline Njoroge' ,new Date(2021,3,3)),
  ];

 
  addNewQuote(quote: any){
   
    let quoteLength=this.quotes.length;
    quote.id = quoteLength+1;
    quote.description=quoteLength+1;
    quote.author=quoteLength+1;
    quote.submitter=quoteLength+1;
    // let quoteObject =new Quote (0,quote.description, quote.author,quote.submitter,new Date());
    this.quotes.push(quote)
    // let quotesLength=this.quotes.length+1;
    
    // this.quotes.push(quoteObject)


 
 
   }
 
  
  
 
  toggleDetails(index:any){
    this.quotes[index].showAuthor=!this.quotes[index].showAuthor;
    this.quotes[index].showSubmitter=!this.quotes[index].showSubmitter;
  }

/**Upvote logic */
uvotes = 0;
dvotes = 0;

upVote(){
  this.uvotes = this.uvotes + 1;//adds one on mouse click
}

/**Downvote logic */
downVote(){
  this.dvotes=this.dvotes+1;
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
