import React, { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
        id : 1,
        todo : "new todo",
        hasCompleted : false
    },
    ],
    updateTodo : (id, todo)=>{},
    deleteTodo : (id) =>{},
    addTodo :(id)=>{},
    toggleComplete : (id)=>{}
})

export const useTodo = ()=>{
   return useContext(TodoContext.Provider)
}

export const TodoProvider = TodoContext.Provider