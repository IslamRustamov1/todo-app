import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { user, appURL } from '../mobx/constants';

import './TodoLogin.css';

const TodoLogin = () => {
  let history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async () => {
    const res = await user.loginRequest(appURL + 'api/login', {
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (res.error) alert(res.error.message);

    if (localStorage.getItem('token')) {
      history.push('todos');
      window.location.reload();
    }
  };

  return (
    <div className="todo-login">
      <h2 className="todo-login__header">Log into your account</h2>
      <form
        name="todo-form"
        method="post"
        className="todo-login__form"
        onSubmit={e => {
          e.preventDefault();
          loginUser();
        }}
      >
        <p className="todo-login__email">Your email</p>
        <input
          type="text"
          className="todo-login__login-text"
          onChange={e => setEmail(e.currentTarget.value)}
        />
        <p className="todo-login__password">Your password</p>
        <input
          type="text"
          className="todo-login__password-text"
          onChange={e => setPassword(e.currentTarget.value)}
        />
        <br />
        <input
          type="submit"
          value="Submit"
          className="todo-login__submit"
        ></input>
      </form>
    </div>
  );
};

export default TodoLogin;
