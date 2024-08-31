import React, {useState} from 'react'
import './navbar.css'
import perfil from '../../img/Perfil.jpg'
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsOverscanIcon from '@mui/icons-material/SettingsOverscan';
import ProfileMenu from '../profile/ProfileMenu';



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleProfileClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div className='navbar'>
        <div className='logo'>
            <img src="" alt="" />
            <span>/ ROJA</span>
        </div>
        <div className="icons">
            <div className='search'>
                <SearchIcon/>
                <input type="text" placeholder='search'/>
            </div>
            <SettingsIcon className='icon'/>
            <SettingsOverscanIcon className="icon"/>
            <div className="notification">
                <NotificationsIcon/>
                <span>1</span>
            </div>
            <div className="user"  onClick={handleProfileClick}>
                <img src={perfil} alt="" />
                <span>Jhon</span>
                {isMenuOpen && <ProfileMenu onClose={() => setIsMenuOpen(false)} />}
            </div>
          
        </div>
    </div>
  )
}

export default Navbar