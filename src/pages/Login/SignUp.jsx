import "./signup.css";
import "./Login";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";


const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName ] = useState('');
  const [email, setEmail ] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  
  
  const handleSignUp = async () => {
    
    if (password !== conPassword) {
      console.error('Las contraseñas no coinciden');
      return;
    }

    try {

      await createUserWithEmailAndPassword( auth, email, password);
      console.log('Usuario creado exitosamente');
      navigate('/login');
    } catch (error) {
      console.error('Error al crear usuario:', error.message);
    }
  };

  return (
    <form>
        <div className='container'>
          <h1>Sign Up</h1>
          <div className="inputs">
            <div className="input">
              <PersonIcon className='icon'/>
              <input type="text" placeholder='Nombre' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input">
              <EmailIcon className='icon'/>
              <input type="email"  placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input">
              <LockIcon className='icon'/>
              <input type="password"  placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="input">
              <LockIcon className='icon'/>
              <input type="password" placeholder='Confirm Password' value={conPassword} onChange={(e) => setConPassword(e.target.value)}/>
            </div>
          </div>
          <button type="button" className='submit' onClick={handleSignUp}>Sign Up</button>
          <div className="link">
            <span> Ya tienes cuenta¡ <Link to='/Login'> Ingresa aqui</Link></span>
          </div>
        </div>
    </form>
  )
}

export default SignUp