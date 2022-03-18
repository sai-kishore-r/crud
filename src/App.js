import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { addTodo, removeTodo, editTodo } from './action/addTodo'

function App () {
  const state = useSelector(state => (
    state.todos
  ))
  console.log(state)
  let dispatch = useDispatch()
  const [task, setTask] = useState()
  const [newTodo, setNewTodo] = useState()
  const [edit, setEdit] = useState(false)
  const [selectedTodo, setSelectedTodo] = useState()
  const [editID, setEditID] = useState()
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addTodo(newTodo))
    console.log(newTodo)
  }
  const DeleteTodo = e => {
    dispatch(removeTodo(e))
  }
  const updateTodo = e => {
    console.log(e)
    let porp = e.target[0].value
    e.preventDefault()
    dispatch(editTodo({ editID, porp}))
    setEdit(false)
    console.log(e.target[0].value)
  }
  
  //
  return (
    <div>
      <h1> TODO LIST</h1>
      <form onSubmit={edit ? updateTodo : handleSubmit}>
        <input
          type='text'
          name='todo'
          value={edit ? selectedTodo : task}
          placeholder='Enter your todo...'
          onChange={e => {
            edit ? setSelectedTodo(e.target.value) : setNewTodo(e.target.value)
          }}
        />
        <button type='submit'>{edit ? 'Update Todo' : 'Add Todo'} </button>
      </form>
      <div>
        <ul>
          {state?.todos &&
            state?.todos?.map(todo => {
              return (
                <div>
                  <li key={todo.id}>
                    <div style={{ margin: '10px' }}>{todo.task}</div>
                  </li>
                  <button
                    onClick={() => {
                      // updateTodo(todo)
                      setSelectedTodo(todo.task)
                      setEdit(true)
                      setEditID(todo.id)
                    }}
                  >
                    {' '}
                    Edit
                  </button>
                  <button onClick={() => DeleteTodo(todo.id)}> Delete</button>
                </div>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

export default App
