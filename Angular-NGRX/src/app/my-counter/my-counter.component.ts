import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../store/actions/counter.actions';
import { waterSchedule, changeColorCodeUpdateTracks  } from '../store/actions/wop.actions';

import { selectWaterScheduleState , timeSlotsCreator, selectTracksState } from '../store/reducers/counter.reducer';

import { Tracks, Track } from '../store/actions/wop.actions'; 

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss'],
})
export class MyCounterComponent {

  nameInUI;
  countInUI; 
  tracks:Tracks;  

  count$: Observable<number>;
  tracks$: Observable<number>;

  timeslotIndicators=['0:00','1:00','2:00','3:00','4:00','5:00','6:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00',]

  constructor(private store: Store<{ count: number , name: string, waterSchedule: any }>) { 

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
  
  updateArray(e, WOPForm){
    e.preventDefault();   
    let wopform = WOPForm.value; 
    let obj_values:any[] = Object.values(wopform) 
    
    let _obj_values = obj_values.map((checkbox)=>{
      return checkbox ? checkbox=true : checkbox=false;
    }) 
    
    let _tracks:Tracks = {
      tracks:[ {
          track_id:'_id_0', 
          timeSlots:timeSlotsCreator(24)
      },
      {
          track_id:'_id_1', 
          timeSlots:timeSlotsCreator(24)
      }
      ]
  } 
    
    this.store.dispatch(waterSchedule( { arraydata: _tracks } ));
  }


  // <schema functions>

  timeSlotClick = (timeSlot, track_id, indexVanTimeslot) => { 
    let tracks 
    if (this.tracks instanceof Array) {
      tracks = this.tracks.map((track:any) => {
        let id = track.track_id;
        let theIdIWantToUpdate = track_id;
        console.log(track.track_id ) 
        if(id === theIdIWantToUpdate){ 
          track.timeSlots[indexVanTimeslot].colorCode = 'red'; 
        }
        return track
      });
    }
    this.store.dispatch(changeColorCodeUpdateTracks({ tracks }));
  }


  sendOveralSate(){
    this.store.select<any>('myAppState').subscribe(state =>{
      console.log('overallState could be sended away now',state)
    });
  }

  // </schema functions>

  ngOnInit(){ 

    this.store.select<any>('myAppState').subscribe(state =>{
      console.log('overallState',state)
    });
    
    // this.store.select<any>(selectWaterScheduleState).subscribe(state =>{
    //   console.log('waterState',state)
    //   //this.waterState = state.tracks
    // });
    
    this.store.select<any>(selectTracksState).subscribe(state =>{
      console.log('tracksState',state)
      this.tracks = state
    });
    
    
    






  }
}