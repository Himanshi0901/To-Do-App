import React, { useState } from 'react';

function ToDoItem({ todo, onToggleComplete, onDeleteTodo, onEditTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleEditChange = (e) => {
        setEditText(e.target.value);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        onEditTodo(todo.id, editText);
        setIsEditing(false);
    };

  return (
    <li className={`flex items-center p-3 rounded shadow-lg ${todo.completed ? 'bg-gray-700 text-pink-400 line-through' : 'bg-gray-800 text-white'}`}>
        <div className="flex items-center flex-grow"> {/* Container for checkbox and text */}
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={() => onToggleComplete(todo.id)} 
          className="mr-2" // Tailwind classes
        />
        {isEditing ? (
            <form onSubmit={handleEditSubmit} className='flex-grow'>
                <input type="text" value={editText} onChange={handleEditChange} className='border border-gray-600 bg-black text-white rounded px-2 py-1 mr-2 flex-grow focus:outline-none focus:ring-2 focus:ring-pink-400' />
                <button type="submit" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-1 px-2 rounded mr-2">Save</button>
                <button onClick={() => setIsEditing(false)} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded" >Cancel</button>
            </form>
        ) : (
            <span onClick={() => onToggleComplete(todo.id)} className="flex-grow cursor-pointer">
                {todo.text}
            </span>
        )}
        </div>
      <button onClick={() => handleEditClick()} className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-1 px-2 rounded mr-2">Edit</button> {/* Edit Button */}
      <button onClick={() => onDeleteTodo(todo.id)} className="bg-red-600 hover:bg-red-800 text-white font-bold py-1 px-2 rounded">Delete</button>
    </li>
  );
}

export default ToDoItem;