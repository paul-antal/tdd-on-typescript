import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArabToRomanConverter } from './arabToRomanConverter.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ArabToRomanConverter
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
