export class Quote {
    /*These are all the detalis we expect to be present in our Quote application.
    A user will be able to add quotes that have author and submitter name below the quote 
    */
   
    showAuthor:boolean;
    showSubmitter:boolean;
  
    constructor(public id:number, public description:string, public author:string, public submitter:string, public datePublished:Date ){
       this.showAuthor=false;
       this.showSubmitter=false;


    }
}
