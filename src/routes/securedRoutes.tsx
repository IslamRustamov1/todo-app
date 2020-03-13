import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import TodoForm from '../components/TodoForm/TodoForm';

import './routes.css';

function SecuredRoutes() {
  return (
    <div className="todo-routes">
      <Switch>
        <Route path="/todos">
          <TodoForm />
        </Route>
        <Route path="/">
          <TodoForm />
        </Route>
      </Switch>
      <div className="todo-routes__buttons">
        <button
          className="todo-routes__logout-button"
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          <Link to="/login">Logout</Link>
        </button>
      </div>
    </div>
  );
}

export default SecuredRoutes;
