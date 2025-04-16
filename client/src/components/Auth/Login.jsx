import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import AuthForm from './AuthForm';

const Login = ({ toggleAuthMode }) => {
  const { login, loading } = useContext(AuthContext);

  return (
    <div>
      <AuthForm isLogin={true} onSubmit={login} loading={loading} />
      <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
        Don't have an account?{' '}
        <button
          onClick={toggleAuthMode}
          className="text-blue-500 hover:underline focus:outline-none"
        >
          Register here
        </button>
      </p>
    </div>
  );
};

export default Login;