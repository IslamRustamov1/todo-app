import React, { useState } from 'react';
import AuthenticationApi from '../api/AuthenticationApi';
import ApiRequests from '../api/ApiRequests';

import './TodoSignup.css';

const TodoSignup = () => {
  const apiReqs = new ApiRequests();
  const user = new AuthenticationApi(apiReqs);
  const appURL = 'https://mysterious-savannah-44011.herokuapp.com/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signupUser = () => {
    user.signupRequest(appURL + 'api/signup', {
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
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
