const TodoItem = ({ todo, onToggle, onDelete, loading }) => {
    return (
      <div className={`flex items-center justify-between p-4 mb-2 dark:bg-gray-700 rounded-lg shadow ${todo.completed? "bg-green-700 dark:bg-green-700" : ""}`}>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => onToggle(todo._id)}
            disabled={loading}
            className="flex-shrink-0 w-5 h-5"
          >
            {todo.completed ? (
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="10" />
              </svg>
            )}
          </button>
          <span className={`text-gray-800 dark:text-white ${todo.completed ? 'line-through text-gray-400 dark:text-gray-400' : ''}`}>
            {todo.title}
          </span>
        </div>
        <button
          onClick={() => onDelete(todo._id)}
          disabled={loading}
          className="text-red-500 hover:text-red-700 focus:outline-none"
          aria-label="Delete todo"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    );
  };
  
  export default TodoItem;