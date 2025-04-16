import { useState, useContext } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Layout from './components/Layout';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import TodoList from './components/Todo/TodoList';
import LoadingSpinner from './components/UI/LoadingSpinner';

const AppContent = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { user, loading } = useContext(AuthContext);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      {user ? (
        <TodoList />
      ) : (
        isLogin ? (
          <Login toggleAuthMode={toggleAuthMode} />
        ) : (
          <Register toggleAuthMode={toggleAuthMode} />
        )
      )}
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Layout>
          <AppContent />
        </Layout>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;