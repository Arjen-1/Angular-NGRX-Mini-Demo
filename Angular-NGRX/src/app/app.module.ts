import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchemaComponent } from './components/schema/schema.component';
import { MyCounterComponent } from './my-counter/my-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    SchemaComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer }),
    // StoreModule.forRoot({ message: reduxReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
