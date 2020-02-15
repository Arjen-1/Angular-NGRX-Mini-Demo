import { createAction  } from '@ngrx/store';
import { Action } from '@ngrx/store';

// export const ACTION_CONST_increment =  createAction(
//     '[Counter Compoonent] Increment'
//     //  props<{ user: User }>()
//     //  (response: Response) => response.user
//     );
// export const ACTION_CONST_decrement =  createAction('[Counter Compoonent] Decrement');
// export const ACTION_CONST_reset = createAction('[Counter Component] Reset');


export const NEW_ACT_INCREMENT = '[NEW ACT] increment';
export const NEW_ACT_DECREMENT = '[NEW ACT] decrement';

export class New_act_increment implements Action{
    readonly type = NEW_ACT_INCREMENT

    constructor(public payload: any){}
}

export class New_act_decrement implements Action{
    readonly type = NEW_ACT_DECREMENT

    constructor(public payload: any){}
}

export type Actions = New_act_decrement | New_act_increment