import { useState, useEffect } from 'react';
import { todoService } from '../../services/todoService';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import LoadingSpinner from '../UI/LoadingSpinner';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const data = await todoService.getAllTodos();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (title) => {
    try {
      setLoading(true);
      const newTodo = await todoService.createTodo(title);
      setTodos([newTodo, ...todos]);
    } catch (error) {
      console.error('Error adding todo:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleTodo = async (id) => {
    try {
      setLoading(true);
      const updatedTodo = await todoService.toggleTodoStatus(id);
      setTodos(todos.map(todo => todo._id === id ? updatedTodo : todo));
    } catch (error) {
      console.error('Error toggling todo:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteTodo = async (id) => {
    try {
      setLoading(true);
      await todoService.deleteTodo(id);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <div className="max-w-lg mx-auto p-4">
      <TodoForm onAddTodo={addTodo} loading={loading} />
      
      <div className="flex justify-center mb-4">
        <div className="inline-flex rounded-md shadow-sm">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              filter === 'all'
                ? 'bg-blue-500 text-white'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-white'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-4 py-2 text-sm font-medium ${
              filter === 'pending'
                ? 'bg-blue-500 text-white'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-white'
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              filter === 'completed'
                ? 'bg-blue-500 text-white'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-white'
            }`}
          >
            Completed
          </button>
        </div>
      </div>
      
      {loading && todos.length === 0 ? (
        <LoadingSpinner />
      ) : (
        <div>
          {filteredTodos.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400">
              No todos found. Add one above!
            </p>
          ) : (
            filteredTodos.map(todo => (
              <TodoItem
                key={todo._id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                loading={loading}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default TodoList;