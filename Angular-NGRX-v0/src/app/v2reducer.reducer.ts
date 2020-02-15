import { createReducer , on } from '@ngrx/store';
//import { ACTION_CONST_increment, ACTION_CONST_decrement, ACTION_CONST_reset  } from './v2reducer.actions';
import { appState } from './somecomponent/somecomponent.component';
import * as MyActions from './v2reducer.actions';

const initialState:appState = { 
        message: 'Default' ,
        count: 0,
        isWatered: [true] 
};

// const _counterReducer = createReducer(initialState , 
//     // on(ACTION_CONST_increment, state => state),
//     // on(ACTION_CONST_decrement, state => state),
//     // on(ACTION_CONST_reset, state => initialState )
//     )

// export function v2reducer(state, action){ 
//     return _counterReducer(state, action);
// }
    

export function oohaReducer(state = initialState , action:MyActions.Actions){
    switch(action.type){
        case MyActions.NEW_ACT_INCREMENT:
            return {}...state, action.payload}
        default: 
            return state;
    }
}