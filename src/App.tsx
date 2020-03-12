import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import TodoForm from './components/TodoForm/TodoForm';
import TodoLogin from './components/TodoLogin/TodoLogin';
import TodoSignup from './components/TodoSignup/TodoSignup';

//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import AuthenticationApi from './components/api/AuthenticationApi';
// import TodoApi from './components/api/todoApi';
// import ApiRequests from '../src/components/api/ApiRequests';

import './App.css';

// const apiReqs = new ApiRequests();

const appURL = 'https://mysterious-savannah-44011.herokuapp.com/';

// const getBody = {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// };

// const user = new AuthenticationApi(apiReqs);
// const todos = new TodoApi(apiReqs, user);

function App() {
  return (
    <div className="todo-interface">
      <h1>todos</h1>
      <TodoLogin />
      <h6>Double-click to edit a todo</h6>
    </div>
  );
}

export default App;
