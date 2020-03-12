const { ApiRequests } = require('./ApiRequests');

const URL = 'https://mysterious-savannah-44011.herokuapp.com/';

const userEmail = 'test@test.test';
const userPassword = 'test';

const signupLoginBody = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: userEmail,
    password: userPassword,
  }),
};

const getBody = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const req = new ApiRequests();

class APIRequest {
  createNewUser = () => {
    req.signupRequest(`${URL}api/signup`, signupLoginBody);
  };

  loginUser = () => {
    req.loginRequest(`${URL}api/login`, signupLoginBody);
  };

  getTodos = () => {
    req.getRequest(`${URL}user/todos`, getBody);
  };
}

req.loginRequest(`${URL}api/login`, signupLoginBody);

const postTodo = new APIRequest();

// postTodo.createNewUser();
postTodo.loginUser();
// postTodo.getTodos();

// class APIRequest {
//   postTodo = todo => {

//     const todod = await APIRequests.Post('url', body)

//     fetch('https://mysterious-savannah-44011.herokuapp.com/api/user/todos', {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer  + ${USER_TOKEN}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         value: todo.value,
//         completed: todo.completed,
//         editing: todo.editing,
//       }),
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Request succeeded with JSON response', data);
//       })
//       .catch(error => {
//         console.log('Request failed', error);
//       });
//   };
// }

// const postTodo = new APIRequest();

// postTodo.postTodo({ value: 'asd', completed: false, editing: false });
