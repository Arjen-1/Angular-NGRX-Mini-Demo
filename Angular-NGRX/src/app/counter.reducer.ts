// import { Action, createReducer, on } from '@ngrx/store';
// import * as ScoreboardPageActions from './counter.actions';

// export interface State {
//   home: number;
//   away: number;
// }

// export const initialState: State = {
//   home: 0,
//   away: 0,
// };

// export const scoreboardFeatureKey = 'game';

// const scoreboardReducer = createReducer(
//   initialState,
//   on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
//   on(ScoreboardPageActions.awayScore, state => ({ ...state, away: state.away + 1 })),
//   on(ScoreboardPageActions.resetScore, state => ({ home: 0, away: 0 })),
//   on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
// );

// export function reducer(state: State | undefined, action: Action) {
//   return scoreboardReducer(state, action);
// }

import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, changeName } from './counter.actions';
 
export const initialState = {
  count:0,
  name:'Default name'
};
 
const _counterReducer = createReducer(initialState,
  //on(increment, state => state.count + 1),
  //on(decrement, state => state.count - 1),
  //on(reset, state => state.count = 0),
  on(increment, state => ({ ...state, count: state.count + 1 }) ),
  on(decrement, state => ({ ...state, count: state.count - 1 }) ),
  on(reset, state => ({ ...state, count: state.count = 0 }) ),
  on(changeName, state => ({ ...state, name: state.name = 'Mike Ross' }) ),
);
 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}