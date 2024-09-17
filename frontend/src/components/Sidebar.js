import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, List, ListItem, ListItemText, ListItemIcon, Collapse } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import DevicesIcon from '@mui/icons-material/Devices';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const CustomLink = styled(Link)(({ theme, active }) => ({
  textDecoration: 'none',
  color: active === 'true' ? theme.palette.primary.main : '#ffffff',
  '&:visited': {
    color: active === 'true' ? theme.palette.primary.main : '#ffffff',
  },
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const Sidebar = ({ open }) => {
  const [openItems, setOpenItems] = useState({});
  const { t } = useTranslation();
  const location = useLocation();

  const handleClick = (item) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [item]: !prevOpenItems[item],
    }));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <Box
      sx={{
        width: 250,
        height: '100vh',
        backgroundColor: '#3a3f55',
        position: 'fixed',
        top: 56,
        left: open ? 0 : -250,
        transition: 'left 0.3s ease',
        overflowY: 'auto',
      }}
    >
      <List>
        <ListItem button component={CustomLink} to="/dashboard" active={isActive('/dashboard').toString()}>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary={t('Dashboard')} />
        </ListItem>
        <ListItem button onClick={() => handleClick('systemConfig')}>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary={t('System Configuration')} />
          {openItems.systemConfig ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openItems.systemConfig} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={CustomLink} to="/server-configuration" active={isActive('/server-configuration').toString()}>
              <ListItemText inset primary={t('Server Configuration')} />
            </ListItem>
            <ListItem button component={CustomLink} to="/app-configuration" active={isActive('/app-configuration').toString()}>
              <ListItemText inset primary={t('App Configuration')} />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button component={CustomLink} to="/users" active={isActive('/users').toString()}>
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary={t('User Management')} />
        </ListItem>

        <ListItem button onClick={() => handleClick('device')}>
          <ListItemIcon><DevicesIcon /></ListItemIcon>
          <ListItemText primary={t('Device Management')} />
          {openItems.device ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openItems.device} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={CustomLink} to="/device-list" active={isActive('/device-list').toString()}>
              <ListItemText inset primary={t('Device List')} />
            </ListItem>
            <ListItem button component={CustomLink} to="/control-records" active={isActive('/control-records').toString()}>
              <ListItemText inset primary={t('Control Records')} />
            </ListItem>
            <ListItem button component={CustomLink} to="/transaction-records" active={isActive('/transaction-records').toString()}>
              <ListItemText inset primary={t('Transaction Records')} />
            </ListItem>
            <ListItem button component={CustomLink} to="/asset-records" active={isActive('/asset-records').toString()}>
              <ListItemText inset primary={t('Asset Records')} />
            </ListItem>
            <ListItem button component={CustomLink} to="/key-Logger" active={isActive('/key-Logger').toString()}>
              <ListItemText inset primary={t('Keylogger')} />
            </ListItem>
            <ListItem button component={CustomLink} to="/application-list" active={isActive('/application-list').toString()}>
              <ListItemText inset primary={t('Application List')} />
            </ListItem>
            <ListItem button component={CustomLink} to="/triggering-rules" active={isActive('/triggering-rules').toString()}>
              <ListItemText inset primary={t('Triggering Rules')} />
            </ListItem>
            <ListItem button component={CustomLink} to="/address-list" active={isActive('/address-list').toString()}>
              <ListItemText inset primary={t('Address List')} />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button component={CustomLink} to="/role-management" active={isActive('/role-management').toString()}>
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary={t('Role Management')} />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;