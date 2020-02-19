import { Pizza } from '../../models/pizza.model';
import * as fromPizzas from "../actions/pizza.action";

export interface PizzaState {
    data: Pizza[];
    loaded:boolean;
    loading:boolean;
}


export const initialState : PizzaState = {
    data: [{
        name:"Tonno",
        toppings:[
            {
                id:"T_0",
                name:"Cheese"
            },
            {
                id:"T_1",
                name:"Bacon"
            }
        ]
    }],
    loaded: false,
    loading: false
}

export function reducer (
    state = initialState,
    action: fromPizzas.PizzaAction 
):PizzaState{

    switch(action.type){
        case fromPizzas.LOAD_PIZZAS: {
            return {
                ...state, 
                loading: true
            }
        }

        case fromPizzas.LOAD_PIZZAS_SUCCES: {
            return {
                ...state, 
                loading: false,
                loaded: true
            }
        }

        case fromPizzas.LOAD_PIZZAS_FAIL: {
            return {
                ...state, 
                loading: false,
                loaded: false
            }
        }
    }

    return state
}

