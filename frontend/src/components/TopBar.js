// src/components/TopBar.js

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import logo from '../assets/images/logo.png';
import axios from 'axios';

// Styled component for the logo
const LogoImage = styled('img')({
  height: 40, // Adjust based on your design
  marginRight: 16, // Space between the logo and the hamburger icon
});

const TopBar = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/v1/admin/logout', {}, {
        headers: { Authorization: `Bearer ${token}` }
      });

      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      // Redirect to login page
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      // Even if the server-side logout fails, we should still clear local storage and redirect
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login');
    }
  };

  return (
    <AppBar position="fixed" sx={{ height: 56 }}>
      <Toolbar sx={{ minHeight: 56, display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleSidebar}
          >
            <MenuIcon />
          </IconButton>
          <LogoImage src={logo} alt="Logo" />
        </div>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          Admin Panel
        </Typography>
        <IconButton
          color="inherit"
          aria-label="logout"
          onClick={handleLogout}
        >
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;