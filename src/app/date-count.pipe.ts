import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): string {
    let today: any = new Date();
    let timeCounter: string = "";
    
    var difference = Math.abs(value - today) / 1000;
    var dayPass       = Math.floor(difference / 86400);

    if(dayPass > 0){
      timeCounter   += Math.floor(dayPass) +" days ";
    }
    difference    -= dayPass * 86400;
    var hours      = Math.floor(difference / 3600) % 24;
    if(hours > 0){
      timeCounter   += Math.floor(hours)+" hrs ";
    }
    difference    -= hours * 3600;

    var minutes    = Math.floor(difference / 60) % 60;
    if(minutes > 0){
      timeCounter   += Math.floor(minutes)+" mins ";
    }
    difference    -= minutes * 60;
    var seconds    = difference % 60;
    if(seconds > 0){
      timeCounter  += Math.floor(seconds)+" secs ";
    }

    return timeCounter;
  }

    // let today:Date = new Date(); //get current date and time
    // let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    // var dateDifference = Math.abs(todayWithNoTime - value) //returns value in miliseconds
    // const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    // var dateDifferenceSeconds = dateDifference*0.001; //converts miliseconds to seconds
    // var dateCounter = dateDifferenceSeconds/secondsInDay;

    // if (dateCounter >= 1 && todayWithNoTime > value){
    //   return dateCounter;
    // }else{
    //   return 0;
    // }
  
  
  
  

}
