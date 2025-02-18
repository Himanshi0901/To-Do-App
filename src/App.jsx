import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (text.trim() !== "") { // Prevent adding empty tasks
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };


  return (
    <div className="app-container flex justify-center items-center min-h-screen bg-black text-white">
      <div className='w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg'>
        <Header onAddTodo={addTodo} />
        <ToDoList
          todos={todos}
          onToggleComplete={toggleComplete}
          onDeleteTodo={deleteTodo}
          onEditTodo={editTodo}
        />
      </div>
    </div>
  );
}

export default App;
