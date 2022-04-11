import { Quote } from '@angular/compiler';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Input() quote!: Quote;
  @Output() isComplete= new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete)
  }
  
 

  constructor() { }

  ngOnInit(): void {
  }

}
