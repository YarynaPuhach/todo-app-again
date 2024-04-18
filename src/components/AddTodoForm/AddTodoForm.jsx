import { useState } from 'react';
export const AddTodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputValue)
    setInputValue('');
  }
  return (
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='What needs to be done?'
          value={inputValue}
          onChange={handleChange}
      />
      <button type='submit'>Add todo</button>
      </form>
  )
}