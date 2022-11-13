import { createStore, combineReducers } from "redux";
import {counterReducer} from "./reducers/counterReducer"
import todoReducer from "./reducers/todoReducers"


const rootReducer = combineReducers({
    counter:counterReducer,
    todo:todoReducer
});

export const store = createStore(rootReducer)


