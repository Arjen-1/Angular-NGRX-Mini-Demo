import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import {
  //waterSchedule,
  changeColorCodeUpdateTracks
} from "../../store/actions/wop.actions";

import {
  selectWaterScheduleState,
  timeSlotsCreator,
  selectTracksState
} from "../../store/reducers/counter.reducer";

import { Tracks, Track } from "../../store/actions/wop.actions";

@Component({
  selector: "app-wateringSchedule",
  templateUrl: "./wateringSchedule.component.html",
  styleUrls: ["./wateringSchedule.component.scss"]
})
export class MyCounterComponent {
  tracks: Tracks;
  //tracks$: Observable<number>;

  timeslotIndicators = [
    "0:00",
    "1:00",
    "2:00",
    "3:00",
    "4:00",
    "5:00",
    "6:00",
    "0:00",
    "0:00",
    "0:00",
    "0:00",
    "0:00",
    "0:00",
    "0:00",
    "0:00",
    "0:00",
    "0:00",
    "0:00",
    "0:00",
    "0:00",
    "0:00",
    "0:00",
    "0:00",
    "0:00"
  ];

  constructor(private store: Store<{ name: string; waterSchedule: any }>) {}

  // <schema functions>

  timeSlotClick = (timeSlot, track_id, indexVanTimeslot) => {
    let tracks;
    if (this.tracks instanceof Array) {
      tracks = this.tracks.map((track: any) => {
        let id = track.track_id;
        let theIdIWantToUpdate = track_id;
        console.log(track.track_id);
        if (id === theIdIWantToUpdate) {
          track.timeSlots[indexVanTimeslot].colorCode = "red";
        }
        return track;
      });
    }
    this.store.dispatch(changeColorCodeUpdateTracks({ tracks }));
  };

  sendOveralSate() {
    this.store.select<any>("myAppState").subscribe(state => {
      console.log("overallState could be sended away now", state);
    });
  }

  // </schema functions>

  ngOnInit() {
    this.store.select<any>("myAppState").subscribe(state => {
      console.log("overallState", state);
    });

    this.store.select<any>(selectTracksState).subscribe(state => {
      console.log("tracksState", state);
      this.tracks = state;
    });
  }
}
