import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const ProfileMenu = ({ onClose }) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <Menu
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={true}  // Aquí puedes gestionar el estado del menú
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Perfil</MenuItem>
      <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
    </Menu>
  );
};

export default ProfileMenu;
