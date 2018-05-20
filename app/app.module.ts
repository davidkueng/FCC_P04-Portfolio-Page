import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientJsonpModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { Search_barComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    Search_barComponent,

   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
