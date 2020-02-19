import { Component, OnInit } from '@angular/core';

import {Store} from '@ngrx/store';
//import { Observable } from 'rxjs/observable';
import * as fromStore from '../../../store';
import { Pizza } from '../../../models/pizza.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private store: Store<fromStore.ProductState>) { }

  ngOnInit() {
    this.store.select<any>('products').subscribe(state =>{
      console.log('state');
      console.log(state);
    })
  }

}
