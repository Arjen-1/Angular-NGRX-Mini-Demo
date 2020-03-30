import {
  createReducer,
  on,
  createSelector,
  createFeatureSelector
} from "@ngrx/store";
import {
  Tracks,
  changeColorCodeUpdateTracks,
  TimeSlot
} from "../actions/wop.actions";

export const timeSlotsCreator = quantity => {
  var timeSlots = [];
  for (let index = 0; index < quantity; index++) {
    let timeSlot: TimeSlot = {
      slotIndex: "slot-index-" + index.toString(),
      beginOfTimeSlot: index.toString() + ":00",
      endOfTimeSlot: index.toString() + ":59",
      colorCode: "empty"
    };
    timeSlots.push(timeSlot);
  }
  return timeSlots;
};

export interface initialStateInterface {
  name: string;
  waterSchedule: Tracks;
}

export const initialState: initialStateInterface = {
  name: "Default name",
  waterSchedule: {
    tracks: [
      {
        track_id: "K12",
        timeSlots: timeSlotsCreator(24)
      },
      {
        track_id: "K11",
        timeSlots: timeSlotsCreator(24)
      },
      {
        track_id: "K10",

        timeSlots: timeSlotsCreator(24)
      },
      {
        track_id: "K9",
        timeSlots: timeSlotsCreator(24)
      }
    ]
  }
};

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}

// Select states
//    overall state
export const selectOverallAppState = createFeatureSelector<any>("myAppState");
//    Water Schedule State
export const selectWaterScheduleState = createSelector(
  selectOverallAppState,
  (state: any) => state.waterSchedule
);
//    Tracks State
export const selectTracksState = createSelector(
  selectWaterScheduleState,
  (state: Tracks) => state.tracks
);

//reducers
const _counterReducer = createReducer(
  initialState,
  on(changeColorCodeUpdateTracks, (state, { tracks }) => ({
    ...state,
    waterSchedule: {
      ...state.waterSchedule,

      open: true,
      tracks: tracks
    }
  }))
);
