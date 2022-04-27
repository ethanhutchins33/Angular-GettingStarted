import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  //Our custom project directives, modules and pipes are defined in declarations
  declarations: [ 
    AppComponent,
    ProductListComponent
  ],
  //3rd party directives, modules and pipes are defined here in Imports
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
