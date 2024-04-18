import React from "react"
export const TodoItem = ({ todo,toggleTodo, deleteTodo }) => {
  return (
    <>
      <li className={`todo ${todo.completed && 'todo-completed'}`}>
        <button onClick={() => toggleTodo(todo.id)}>toggle</button>
        {todo.title} {todo.completed? ': completed': ''}
        <button onClick={()=>deleteTodo(todo.id)}>X</button>
      </li>
    </>
  )
}