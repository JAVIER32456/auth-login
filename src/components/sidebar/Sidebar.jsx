import React from 'react'
import './sidebar.css';
import { Link } from 'react-router-dom'
import BookIcon from '@mui/icons-material/Book';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import FolderIcon from '@mui/icons-material/Folder';
import LogoutIcon from '@mui/icons-material/Logout';
import ListAltIcon from '@mui/icons-material/ListAlt';
import StorageIcon from '@mui/icons-material/Storage';
import ArticleIcon from '@mui/icons-material/Article';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="item">
            <span className="title">MAIN</span>
            <Link to="/home" className='listItem'>
                <HomeIcon/>
                <span className='ListItemTitle'>Home</span>
            </Link>
            

            <span className='title'>ESTUDIANTES</span>
            <Link to="/datatables" className='listItem'>
                <StorageIcon/>
                <span className='ListItemTitle'>Datos</span>
            </Link>
            <Link to="/formularios" className='listItem'>
                <ArticleIcon/>
                <span className='ListItemTitle'>Calificaciones</span>
            </Link>
            <Link to="/setting" className='listItem'>
                <FormatListBulletedIcon/>
                <span className='ListItemTitle'>Formularios</span>
            </Link>

            <span className='title'>DOCENTES</span>
            <Link to="/formularios" className='listItem'>
                <ListAltIcon/>
                <span className='ListItemTitle'>Formularios</span>
            </Link>
            <Link to="/setting" className='listItem'>
                <BookIcon/>
                <span className='ListItemTitle'>Materias</span>
            </Link>

            <span className='title'>INSTITUCION</span>
            <Link to="/formularios" className='listItem'>
                <FolderIcon/>
                <span className='ListItemTitle'>Proyectos</span>
            </Link>

            <span className='title'>AJUSTES</span>
            <Link to="/formularios" className='listItem'>
                <PersonIcon/>
                <span className='ListItemTitle'>Perfil</span>
            </Link>
            <Link to="/setting" className='listItem'>
                <LogoutIcon/>
                <span className='ListItemTitle'>Logout</span>
            </Link>
            
        </div>    
    </div>
  )
}

export default Sidebar