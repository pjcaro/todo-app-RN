import axios from 'axios';
import Config from 'react-native-config';

const BASE_URL = Config.BASE_URL;

//cambiar el multi part cuando se use la camara
const HEADERS = {
  'Content-Type': 'application/json',
};

/*const HEADERS_UPLOAD = {
  'Content-Type':
    'multipart/form-data; charset=utf-8; boundary="another cool boundary";',
};*/

const REGISTER_URL = '/user/register';
const LOGIN_URL = '/user/login';
const GET_TASK = '/task';
const CREATE_TASK = '/task';
const EDIT_TASK = '/task';
const GET_TASK_BY_ID = '/task';
const DELETE_TASK = '/task';
const UPLOAD_IMAGE = '/user/me/avatar';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 40000,
  headers: HEADERS,
});

/*const instance1 = axios.create({
  baseURL: BASE_URL,
  timeout: 40000,
  headers: HEADERS_UPLOAD,
});*/

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

const editTask = (data, id) => {
  return instance.put(`${EDIT_TASK}/${id}`, data);
};

const getTaskById = id => {
  return instance.get(`${GET_TASK_BY_ID}/${id}`);
};

const deleteTask = id => {
  return instance.delete(`${DELETE_TASK}/${id}`);
};

const uploadImage = async data => {
  console.tron.log('data: ', data);
  return instance.post(UPLOAD_IMAGE, data);
};

export {
  userRegister,
  userLogin,
  getTask,
  createTask,
  editTask,
  getTaskById,
  deleteTask,
  uploadImage,
};
