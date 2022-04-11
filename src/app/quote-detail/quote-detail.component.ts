import { Component, Input, OnInit } from '@angular/core';

import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  /**input data binding to make quote-detail.ts recieve data fr om parent quote component.ts*/
  /**input data binding to make quote-detail.ts recieve data fr om parent quote component.ts*/
  @Input()quote!: Quote;

  

  constructor() { }

  ngOnInit(): void {
  }

}
