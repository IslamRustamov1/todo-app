import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import SecuredRoutes from './routes/securedRoutes';
import './App.css';

function App() {
  return (
    <div className="todo-interface">
      <h1>todos</h1>
      <BrowserRouter>
        {localStorage.getItem('token') ? <SecuredRoutes /> : <Routes />}
      </BrowserRouter>
    </div>
  );
}

export default App;
