// src/components/TopBar.js

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/logo.png';
import axios from 'axios';

// Styled component for the logo
const LogoImage = styled('img')({
  height: 40,
  marginRight: 16,
});

// Styled component for the language select
const LanguageSelect = styled(Select)(({ theme }) => ({
  color: theme.palette.common.white,
  '&:before': {
    borderColor: theme.palette.common.white,
  },
  '&:after': {
    borderColor: theme.palette.common.white,
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.common.white,
  },
}));

const TopBar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/v1/admin/logout', {}, {
        headers: { Authorization: `Bearer ${token}` }
      });

      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login');
    }
  };

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
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
          {t('Admin Panel')}
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <LanguageSelect
            value={i18n.language}
            onChange={handleLanguageChange}
            sx={{ mr: 2, width: 100 }}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="zh">中文</MenuItem>
          </LanguageSelect>
          <IconButton
            color="inherit"
            aria-label="logout"
            onClick={handleLogout}
          >
            <LogoutIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;