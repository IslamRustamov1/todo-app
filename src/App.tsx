import React from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import './App.css';

function App() {
  return (
    <div className="todo-interface">
      <h1>todos</h1>
      <TodoForm />
      <h6>Double-click to edit a todo</h6>
    </div>
  );
}

export default App;
