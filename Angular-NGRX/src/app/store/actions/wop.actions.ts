
import { createAction, props } from '@ngrx/store';

export interface Tracks {  
    tracks:Array<Track>
}



export interface TimeSlot {
    slotIndex:string;
    beginOfTimeSlot?:string
    endOfTimeSlot?:string
    colorCode:string
}

export interface Track { 
    track_id:string
    timeSlots:Array<string>; // interface Timeslot would be better. but will be updated with real data. 
} 



export const waterSchedule = createAction(
    '[Wop Component] Update array',  
    props<{ arraydata:Tracks  }>() 
); 

export const changeColorCodeUpdateTracks = createAction(
    '[Wop Component] changeColorCodeUpdateTracks',  
    props<{ tracks  }>() 
);   