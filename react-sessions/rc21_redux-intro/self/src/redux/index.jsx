import { createStore, combineReducers } from "redux";
import {counterReducer} from "./reducers/counterReducer"
import todoReducer from "./reducers/todoReducers"


const rootReducer = combineReducers({
    count:counterReducer,
    todo:todoReducer
});

export const store = createStore(rootReducer)


