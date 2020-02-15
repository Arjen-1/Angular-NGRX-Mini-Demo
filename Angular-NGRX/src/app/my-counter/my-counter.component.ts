import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset, changeName } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss'],
})
export class MyCounterComponent {

  nameInUI;
  countInUI;

  

  count$: Observable<number>;

  constructor(private store: Store<{ count: number , name: string }>) {
    this.count$ = store.pipe(select('myAppState'));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  changeName(){
    this.store.dispatch(changeName());
  }

  ngOnInit(){
    this.count$.subscribe(data => {
      console.log(data.name , data.count)

      this.nameInUI = data.name;
      this.countInUI = data.count;
    })
  }
}