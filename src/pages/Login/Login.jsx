import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth} from '../../firebase';
import { useAuth } from '../../AuthContext';
import './login.css';
import './SignUp';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
  
  const navigate = useNavigate();
  const { currentUser } = useAuth(); // Obtén el estado de autenticación desde el contexto


  const [email, setEmail ] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault(); 

    signInWithEmailAndPassword( auth, email, password)
      .then((userCredential) => {
        //Signed In
        const user = userCredential.user;
        if (currentUser) {
          // El usuario está autenticado, redirige a la página de inicio
          console.log(user);
          navigate('/home');
        } else {
          // El usuario no está autenticado, maneja según tus necesidades
          navigate('/login');
        }
      })
      // Puedes redirigir al usuario a otra página o realizar otras acciones después del inicio de sesión
      .catch ((error) =>{
      console.error('Error al iniciar sesión:', error.message);
      });
  };

  return (
    <form onSubmit={handleLogin}>
        <div className='container'>
          <h1>Login</h1>
          <div className="inputs">
            <div className="input">
              <EmailIcon className='icon'/>
              <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input">
              <LockIcon className='icon'/>
              <input type="password"  placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <button type="submit" className='submit' >Login</button>
            <div className="link">
              <span>No tienes cuenta? <Link to='/SignUp' >Registrate</Link></span>
            </div>
        </div>
    </form>
  )
}

export default Login