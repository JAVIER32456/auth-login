import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';

import Home from './pages/home/Home';
import Login from './pages/Login/Login';
import Datatables from './components/datatables/Datatables';
import SignUp from './pages/Login/SignUp';


function App() {
  
  return (
    <AuthProvider>
      <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/informes" element={<PrivateRoute><Datatables /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Si el usuario no está autenticado, redirige a la página de inicio de sesión
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  // Si el usuario está autenticado, muestra los componentes secundarios
  return <>{children}</>;
};

export default App;