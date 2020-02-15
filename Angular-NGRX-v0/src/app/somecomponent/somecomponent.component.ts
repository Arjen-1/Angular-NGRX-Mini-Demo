import { Component, OnInit } from '@angular/core';
import { Store , select } from '@ngrx/store';
import { Observable } from 'rxjs';
//import { ACTION_CONST_increment , ACTION_CONST_decrement , ACTION_CONST_reset } from '../v2reducer.actions';

export interface appState { 
    message:string ,
    count:number,
    isWatered: boolean[]
  };
     

@Component({
  selector: 'app-somecomponent',
  templateUrl: './somecomponent.component.html',
  styleUrls: ['./somecomponent.component.scss']
})
export class SomecomponentComponent implements OnInit {

  

  $theAppState;
  $message;
  $isWatered
  $count
  $newCount

  processedStore;

//, pizza : object[] 
  constructor(private store: Store<any> ) {
    //this.$count = store.pipe(select('count'))
    //this.$theAppState = store.pipe(select<any>('myAppState'))
    //this.$newCount = this.store.select('count')
    //this.processedStore = this.store.select<any>('myStore')
    //this.processedStore = store.pipe(select('count'));
   }

   increment(){
    // this.store.dispatch(ACTION_CONST_increment())
   }
   
   decrement(){
  //  this.store.dispatch(ACTION_CONST_decrement())
   }
   
   reset(){
  //  this.store.dispatch(ACTION_CONST_reset())
   }

  ngOnInit() {
   

    this.store.select('message').subscribe(data => {
      //console.log(this.processedStore)
      //data = data.myStore
      console.log(data  )
      this.$message = data.message;
      this.$count = data.count;
      this.$isWatered = data.isWatered;
    })

  }

}
