
import { ADD_TODO, CLEAR_TODO } from "../types/todoType"

const initialState = {
    todoList:[{
      id:new Date().getTime(),
      text:"ali",
      completed:false,
    }]
}

const todoReducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD_TODO:
    return {
      todoList:[...state.todoList, {id:new Date().getTime(), text:payload, completed:false}]
    }
  case CLEAR_TODO:
    return initialState


  default:
    return state
  }
}
export default todoReducer
