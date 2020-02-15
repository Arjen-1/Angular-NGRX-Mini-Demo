import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchemaComponent } from './components/schema/schema.component';
import { MyCounterComponent } from './my-counter/my-counter.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import * as fromScoreboard from './counter.reducer';



@NgModule({
  declarations: [
    AppComponent,
    SchemaComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer })
    //StoreModule.forRoot({ count: counterReducer }),
    //StoreDevtoolsModule.instrument({
      //maxAge: 25, // Retains last 25 states
      //logOnly: environment.production, // Restrict extension to log-only mode
    //}),
    // StoreModule.forRoot({ message: reduxReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
