import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import TodoLogin from '../components/TodoLogin/TodoLogin';
import TodoSignup from '../components/TodoSignup/TodoSignup';

import './routes.css';

function Routes() {
  return (
    <div className="todo-routes">
      <div className="todo-routes__buttons">
        <button className="todo-routes__login-button">
          <Link to="login">Login</Link>
        </button>
        <button className="todo-routes__signup-button">
          <Link to="signup">Signup</Link>
        </button>
      </div>
      <Switch>
        <Route path="/login">
          <TodoLogin />
        </Route>
        <Route path="/signup">
          <TodoSignup />
        </Route>
        <Route path="/">
          <TodoLogin />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
