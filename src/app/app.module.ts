import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';
import { FormsModule } from '@angular/forms';
import { NumberToWordsPipe } from './number-to-words.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    NumberToWordsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [NumberToWordsPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
