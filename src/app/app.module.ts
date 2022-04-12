import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/**import the form  */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgForm } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './delete/delete.component';
import { DateCountPipe } from './date-count.pipe';
import { QuoteHighlightDirective } from './quote-highlight.directive';



@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteFormComponent,
    QuoteDetailComponent,
    DeleteComponent,
    DateCountPipe,
    QuoteHighlightDirective,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,     
    ReactiveFormsModule,
    CommonModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
