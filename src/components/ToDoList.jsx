import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, onToggleComplete, onDeleteTodo, onEditTodo }) {
  return (
    <ul className='space-y-2'>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDeleteTodo={onDeleteTodo}
          onEditTodo={onEditTodo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
