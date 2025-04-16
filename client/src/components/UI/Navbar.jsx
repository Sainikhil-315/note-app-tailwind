import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto px-8 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Todo App</h1>
          </div>
          <div className="flex items-center space-x-4">
            {/* <ThemeToggle /> */}
            {user && (
              <div className="flex items-center space-x-6">
                <span className="text-gray-700 bold font-bold dark:text-gray-200">
                  Hello, {user.username}
                </span>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition-transform transform hover:scale-105 duration-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;