

export const addTodo = todo => ({
  type: 'ADD_TODO',
  payload: todo,
})

export const removeTodo = todo => ({
    type: 'REMOVE_TODO',
    payload: todo,
  })
  export const editTodo = todo => ({
    type: 'EDIT_TODO',
    payload: todo,
  })