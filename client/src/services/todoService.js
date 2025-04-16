import { api } from './api';

export const todoService = {
  getAllTodos: () => {
    return api.get('/todos');
  },
  
  createTodo: (title) => {
    return api.post('/todos', { title });
  },
  
  toggleTodoStatus: (id) => {
    return api.put(`/todos/${id}`);
  },
  
  deleteTodo: (id) => {
    return api.delete(`/todos/${id}`);
  },
};