import React, { useState } from 'react';
import todo_icon from "../assets/todo_icon.png";

function Header({ onAddTodo }) {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(inputText);
    setInputText(''); // Clear input after adding
  };

  return (
    <header className='mb-4 p-4 bg-pink-500 rounded-lg text-center'>
      <h1 className='text-3xl font-bold mb-2'>To-Do List</h1>
      <form onSubmit={handleSubmit} className='flex '>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Add a new task..."
          className='border border-gray-700 bg-black text-white rounded px-3 py-2 flex-grow mr-2 focus:outline-none focus:ring-2 focus:ring-orange-400'
        />
        <button type="submit" className='bg-black hover:bg-gray-800 text-pink-500 font-bold py-2 px-4 rounded'>Add</button>
      </form>
    </header>
  );
}

export default Header;