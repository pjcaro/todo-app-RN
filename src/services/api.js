import axios from 'axios';

const TOKEN = `Bearer ${process.env.REACT_APP_TOKEN}`;
const BASE_URL = 'https://api-nodejs-todolist.herokuapp.com';

const userRegister = data => {
  axios
    .post(`${BASE_URL}/user/register`, data, {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

const userLogin = data => {
  axios
    .post(`${BASE_URL}/user/login`, data)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

export { userRegister, userLogin };
