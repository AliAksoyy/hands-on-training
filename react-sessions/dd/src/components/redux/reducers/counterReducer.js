import { CLEAR, DECREMENT, INCREMENT } from "../types/counterType"

export const initialState = {
    counter:0
}

export const reducer=(state=initialState,action)=> {
    switch(action.type){
        case INCREMENT :
            return {counter:state.counter++}
        case DECREMENT:
            return {counter:state.counter--}
        case CLEAR :
            return  initialState
        default : 
        return state
    }
}