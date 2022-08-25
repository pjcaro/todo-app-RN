import axios from 'axios';

const BASE_URL = 'https://api-nodejs-todolist.herokuapp.com';

const HEADERS = {
  'Content-Type': 'application/json',
};

const REGISTER_URL = '/user/register';
const LOGIN_URL = '/user/login';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 40000,
  headers: HEADERS,
});

const userRegister = data => {
  instance
    .post(REGISTER_URL, data)
    .then(res => console.log(res))
    .catch(err => console.log(JSON.stringify(err)));
};

const userLogin = data => {
  instance
    .post(LOGIN_URL, data)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

export { userRegister, userLogin };
