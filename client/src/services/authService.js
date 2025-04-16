import { api } from './api';

export const authService = {
  register: (username, email, password) => {
    return api.post('/users/register', { username, email, password });
  },
  
  login: (email, password) => {
    return api.post('/users/login', { email, password });
  },
  
  getProfile: () => {
    return api.get('/users/profile');
  },
};