import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { user, appURL } from '../mobx/constants';

import './TodoSignup.css';

const TodoSignup = () => {
  let history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signupUser = async () => {
    const res = await user.signupRequest(appURL + 'api/signup', {
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    res.error ? alert(res.error.message) : history.push('login');
  };

  return (
    <div className="todo-signup">
      <h2 className="todo-signup__header">Create new account</h2>
      <form
        name="todo-form"
        className="todo-signup__form"
        onSubmit={e => {
          e.preventDefault();
          signupUser();
        }}
      >
        <p className="todo-signup__email">Your email</p>
        <input
          type="text"
          className="todo-signup__login-text"
          onChange={e => setEmail(e.currentTarget.value)}
        />
        <p className="todo-signup__password">Your password</p>
        <input
          type="text"
          className="todo-signup__password-text"
          onChange={e => setPassword(e.currentTarget.value)}
        />
        <br />
        <input
          type="submit"
          value="Submit"
          className="todo-signup__submit"
        ></input>
      </form>
    </div>
  );
};

export default TodoSignup;
