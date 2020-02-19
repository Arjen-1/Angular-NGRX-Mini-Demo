import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromStore from './products/store';

import { ProductsComponent } from './products/containers/products/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //StoreModule.forRoot({}, { metaReducers })
    StoreModule.forRoot({ myReducer: fromStore.reducers.pizzas }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      //logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
