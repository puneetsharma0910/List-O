import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoContext, TodoProvider } from './context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

  const [todos, settodos] = useState([])

  const addTodo = (todo)=>{
    settodos((prev)=>[{id : Date.now(), ...todo}, ...prev])

  }
  const updateTodo = (id, todo) =>{
    settodos((prev) => prev.map((todoIt)=>(todoIt.id === id  ? todo : todoIt)))
  }

  const deleteTodo = (id)=>{
    settodos((prev)=>prev.filter((todo)=>todo.id !== id))

  }

  const toggleComplete = (id)=>{

    settodos((prev)=>prev.map((todo)=>todo.id === id ?   {...todo, hasCompleted : !hasCompleted}  : todo))

  }
     
  useEffect(() => {
    
  }, [todos])
  

  return (
    <TodoProvider value={{todos, updateTodo, deleteTodo, addTodo, toggleComplete}}>
             <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        <TodoItem/>
                    </div>
                </div>
            </div>
    </TodoProvider>
      
  )
}

export default App
