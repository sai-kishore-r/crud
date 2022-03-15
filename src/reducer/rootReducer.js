import { combineReducers } from 'redux'
import todoReducer from './addTodo.reducer'

const rootReducer = combineReducers ({
  todos: todoReducer
})
export default rootReducer
