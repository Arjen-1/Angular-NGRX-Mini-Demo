
import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
export const changeName = createAction('[Counter Component] Change name');


// export const homeScore = createAction('[Scoreboard Page] Home Score');
// export const awayScore = createAction('[Scoreboard Page] Away Score');
// export const resetScore = createAction('[Scoreboard Page] Score Reset');
// export const setScores = createAction('[Scoreboard Page] Set Scores', props<{game: Game}>());