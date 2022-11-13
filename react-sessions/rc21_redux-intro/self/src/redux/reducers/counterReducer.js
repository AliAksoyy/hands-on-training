import { CLEAR, DECREMENT, INCREMENT } from "../types/counterType"

const initialState = {
    counter:0
}

export const counterReducer = (state=initialState, {type})=> {
        switch (type) {
            case INCREMENT:
                return {counter:state.counter +1};
            case DECREMENT :
                return {counter:state.counter -1};
            case CLEAR :
                return initialState;
            default:
                return initialState
        }
}