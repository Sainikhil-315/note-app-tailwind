import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import AuthForm from './AuthForm';

const Register = ({ toggleAuthMode }) => {
  const { register, loading } = useContext(AuthContext);

  return (
    <div>
      <AuthForm isLogin={false} onSubmit={register} loading={loading} />
      <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
        Already have an account?{' '}
        <button
          onClick={toggleAuthMode}
          className="text-blue-500 hover:underline focus:outline-none"
        >
          Login here
        </button>
      </p>
    </div>
  );
};

export default Register;