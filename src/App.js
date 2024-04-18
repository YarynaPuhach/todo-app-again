import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { AddTodoForm } from './components/AddTodoForm';
import { TodoList } from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([{id:Date.now(),title:'test', completed:true}]);
  const addTodo = (title) => {
    setTodos(prev => (
      [...prev, {
        id: Date.now(),
        title,
        completed: false,
      }]));
  }
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {
        ...todo, completed: !todo.completed
      } : todo)
    );
  }
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  return (
    <div className="App">
      <h1>TODOS</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo } />
    </div>
  );
}

export default App;
