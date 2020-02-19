import { createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.actions';
import { waterSchedule, Tracks , changeColorCodeUpdateTracks, TimeSlot, Track } from '../actions/wop.actions';

// let timeSlot = {
//   beginOfTimeSlot:'0:00',
//   endOfTimeSlot:'0:59',
//   colorCode:'red'
// }

export const timeSlotsCreator = (quantity) =>{
  var timeSlots = []; 
  for (let index = 0; index < quantity; index++) {   
    let timeSlot:TimeSlot = {
      slotIndex: 'slot-index-'+index.toString(),
      beginOfTimeSlot: index.toString() +':00',
      endOfTimeSlot: index.toString()+':59',
      colorCode:'empty'
    } 
    timeSlots.push(timeSlot)  
  } 
  return timeSlots
} 

export interface initialStateInterface {
  entities: { [id:string] : Track }
  count:number;
  name:string;
  waterSchedule: Tracks;  
}
 
export const initialState: initialStateInterface = {
  entities: {},
  count:0,
  name:'Default name',
  waterSchedule: {
    tracks:[ 
    {
      track_id:'K12', 
      //timeSlots:[{timeSlot},{timeSlot}]
      timeSlots:timeSlotsCreator(24)
    } , 
    {
      track_id:'K11', 
      //timeSlots:[{timeSlot},{timeSlot}]
      timeSlots:timeSlotsCreator(24)
    } , 
    {
      track_id:'K10', 
      //timeSlots:[{timeSlot},{timeSlot}]
      timeSlots:timeSlotsCreator(24)
    } , 
    {
      track_id:'K9', 
      //timeSlots:[{timeSlot},{timeSlot}]
      timeSlots:timeSlotsCreator(24)
    } , 
    

    ]
  }
}; 
 

 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
} 



// Select states 
  //overall state 
export const selectOverallAppState =  createFeatureSelector<any>(
  'myAppState'
) 
  //Water Schedule State
export const selectWaterScheduleState = createSelector(
  selectOverallAppState,
  (state: any) => state.waterSchedule
); 
//Tracks State
export const selectTracksState = createSelector(
  selectWaterScheduleState,
  (state: Tracks) => state.tracks
); 



/////////////////////////////////////////////////////////////////// WOP  ///////////////////////////////////////

// const _wopReducer = wopReducer(initialState,
//   on(waterSchedule, state => ({ ...state, waterSchedule: state.waterSchedule = [true,false,false,false,false,false] }) ),
// );
 
// export function wopReducer(state, action) {
//   return _wopReducer(state, action);
// }



////////////////////////////////// --- all reducers --- ///////////////////
const _counterReducer = createReducer(initialState, 
  on(increment, state => ({ ...state, count: state.count + 1 }) ),
  on(decrement, state => ({ ...state, count: state.count - 1 }) ),
  on(reset, state => ({ ...state, count: state.count = 0 }) ), 
  on(waterSchedule, (state, { arraydata })      => ({ ...state, waterSchedule: arraydata }) ),  
  on(changeColorCodeUpdateTracks, (state, { tracks })      => ({
     ...state, 
     waterSchedule: {
      ...state.waterSchedule, 

      open:true,
      tracks:tracks
      } 
    }) ),  
);

// const tracksReducer = createReducer(selectTracksState, 
  
//   on(changeColorCodeUpdateTracks, (state, { newTracksState })      => ({ 
//      ...state, 
//      abc: newTracksState 
//     }) ),  
// );