import axios from 'axios';
import Config from 'react-native-config';

const BASE_URL = Config.BASE_URL;

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

const userRegister = async data => {
  return instance.post(REGISTER_URL, data);
};

const userLogin = data => {
  instance
    .post(LOGIN_URL, data)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

export { userRegister, userLogin };
