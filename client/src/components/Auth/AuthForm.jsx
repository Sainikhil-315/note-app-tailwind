import { useState } from 'react';
import LoadingSpinner from '../UI/LoadingSpinner';

const AuthForm = ({ isLogin, onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); 
  };

  const validate = () => {
    const newErrors = {};
    if (!isLogin && formData.username.trim().length < 3) {
      newErrors.username = 'Username must be at least 3 characters.';
    }
    if (!formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); 
      return;
    }

    try {
      if (isLogin) {
        await onSubmit(formData.email, formData.password);
      } else {
        await onSubmit(formData.username, formData.email, formData.password);
      }
    } catch (err) {
      setErrors({ form: err.message });
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">
        {isLogin ? 'Login' : 'Register'}
      </h2>

      {errors.form && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {errors.form}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.username
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
              required={!isLogin}
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.email
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-blue-500'
            } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.password
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-blue-500'
            } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
            required
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          {loading ? <LoadingSpinner /> : isLogin ? 'Login' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
