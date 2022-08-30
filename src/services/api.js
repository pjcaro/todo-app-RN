import axios from 'axios';
import Config from 'react-native-config';

const BASE_URL = Config.BASE_URL;

const HEADERS = {
  'Content-Type': 'application/json',
};

const REGISTER_URL = '/user/register';
const LOGIN_URL = '/user/login';
const GET_TASK = '/task';
const CREATE_TASK = '/task';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 40000,
  headers: HEADERS,
});

export const setTokenAuthentication = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const userRegister = async data => {
  return instance.post(REGISTER_URL, data);
};

const userLogin = async data => {
  return instance.post(LOGIN_URL, data);
};

const getTask = () => {
  return instance.get(GET_TASK);
};

const createTask = data => {
  return instance.post(CREATE_TASK, data);
};

export { userRegister, userLogin, getTask, createTask };
