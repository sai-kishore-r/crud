import { addTodo } from '../action/addTodo'

const initialState = {
  todos: [{ id: 1, task: 'wake up' }]
}
const todoReducer = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case 'ADD_TODO':
      console.log('reducer')
        const hasTodo = state.todos.find(i => i.task === action.payload)
        console.log(hasTodo,"action",action.payload)
        if (!hasTodo && action.payload !== '') {
        console.log("yes")
      const newTodo = {
        id: Math.ceil(Math.random() * 100),
        task: action.payload
      }
      const addedTodos = [...state.todos, newTodo]
      return {
        ...state,
        todos: addedTodos
      }
      }

    case 'REMOVE_TODO':
      console.log('reducer')
      const removeTodo = state.todos.filter(t => t.id !== action.payload)

      return {
        ...state,
        todos: removeTodo
      }

    case 'EDIT_TODO':
      console.log('reducer')
      console.log(action.payload)
      const editTodo = state.todos.map(t => {
        if (t.id === action.payload.editID) {
          return { ...t, task: action.payload.porp }
        }
        return t
      })
      console.log(editTodo)

      return {
        ...state,
        todos: editTodo
      }
    default:
      return state
  }
}
export default todoReducer
