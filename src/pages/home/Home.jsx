import './home.css';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Datatables from '../../components/datatables/Datatables';
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const handClick = ()=>{
    signOut(auth).then(val=>{
      console.log(val,"val")
      navigate('/login');
    })
  }

  return (
    <div className='home'>
      <Navbar/>
      <div className="menu">
        <Sidebar/>
        <div className="datatables">
          <Datatables/>
          <Datatables/>
          <Datatables/>
        </div>
        <div>
          <button type='submit' onClick={handClick}>
            LOGOUT
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default Home;