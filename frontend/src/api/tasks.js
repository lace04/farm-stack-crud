import axios from 'axios';

const URL = 'http://localhost:8000';
const endpoint = `${URL}/api/tasks`;

export const fetchTasks = async () => await axios.get(endpoint);

export const fetchTask = async (id) => await axios.get(`${endpoint}/${id}`);

export const createTask = (newTask) => axios.post(endpoint, newTask);

export const updateTask = (id, updatedTask) =>
  axios.put(`${endpoint}/${id}`, updatedTask);

export const deleteTask = (id) => axios.delete(`${endpoint}/${id}`);
