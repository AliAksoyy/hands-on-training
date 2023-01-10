import {createStore, combineReducers} from "redux"
import {counterReducer} from "../redux/reducers/counterReducer"
import todoReducer from "../redux/reducers/todoReducer"

const rootReducer=combineReducers({
    count:counterReducer,
    todo:todoReducer
})

export const store=createStore(rootReducer)