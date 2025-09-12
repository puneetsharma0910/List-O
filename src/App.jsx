import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoContext, TodoProvider } from './context/TodoContext'

function App() {

  const [todos, settodos] = useState([])

  const addTodo = (todo)=>{
    settodos((prev)=>[{id : Date.now(), ...todo}, ...prev])

  }
  const updateTodo = (id, todo) =>{
    settodos((prev) => prev.map((todoIt)=>(todoIt.id === id  ? todo : todoIt)))
  }

  const deleteTodo = (id)=>{
    settodos((prev)=>prev.filter((todo)=>todo.id === id))

  }
     
  useEffect(() => {
    
  }, [todos])
  

  return (
    <TodoProvider value={{todos, updateTodo, deleteTodo, addTodo, toggleComplete}}>

    </TodoProvider>
      
  )
}

export default App
