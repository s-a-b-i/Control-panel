import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemText, ListItemIcon, Collapse } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

// Custom styled Link component
const CustomLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: '#ffffff', // Always use light color for links
    '&:visited': {
        color: '#ffffff', // Ensure visited links are also light
    },
    '&:hover': {
        color: theme.palette.primary.main, // Change color on hover
    },
}));

// Custom styled ListItem
const CustomListItem = styled(ListItem)(({ theme }) => ({
    color: '#ffffff', // Set item text color to white
    '& .MuiListItemIcon-root': {
        color: '#ffffff', // Set icon color to white
    },
    '& .MuiListItemText-primary': {
        color: '#ffffff', // Set ListItemText color to white
    },
}));

// Custom styled Collapse
const CustomCollapse = styled(Collapse)(({ theme }) => ({
    '& .MuiListItem-root': {
        paddingLeft: theme.spacing(4), // Indent sub-items
    },
}));

const Sidebar = ({ open }) => {
    const theme = useTheme();
    const [openItems, setOpenItems] = useState({});

    const handleClick = (item) => {
        setOpenItems((prevOpenItems) => ({
            ...prevOpenItems,
            [item]: !prevOpenItems[item],
        }));
    };

    return (
        <Box
            sx={{
                width: 250,
                height: '100vh',
                backgroundColor: '#3a3f55',
                position: 'fixed',
                top: 56,
                left: open ? 0 : -250, // Hide the sidebar by shifting it left
                transition: 'left 0.3s ease', // Smooth transition for opening/closing
                overflowY: 'auto', // Ensure content scrolls if too long
            }}
        >
            <List>
                <ListItem button component={CustomLink} to="/dashboard">
                    <ListItemIcon><DashboardIcon /></ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button onClick={() => handleClick('systemConfig')}>
                    <ListItemIcon><SettingsIcon /></ListItemIcon>
                    <ListItemText primary="System Configuration" />
                    {openItems.systemConfig ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openItems.systemConfig} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button component={CustomLink} to="/users/subitem1">
                            <ListItemText inset primary="Server Configuration" />
                        </ListItem>
                        <ListItem button component={CustomLink} to="/users/subitem2">
                            <ListItemText inset primary="App Configuration" />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button component={CustomLink} to="/users">
                    <ListItemIcon><PeopleIcon /></ListItemIcon>
                    <ListItemText primary="User Management" />
                </ListItem>



                <ListItem button onClick={() => handleClick('device')}>
                    <ListItemIcon><SettingsIcon /></ListItemIcon>
                    <ListItemText primary="Device Management" />
                    {openItems.device ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={openItems.device} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button component={CustomLink} to="/settings/subitem1">
                            <ListItemText inset primary="Device List" />
                        </ListItem>
                        <ListItem button component={CustomLink} to="/settings/subitem2">
                            <ListItemText inset primary="Control Records" />
                        </ListItem>
                        <ListItem button component={CustomLink} to="/settings/subitem2">
                            <ListItemText inset primary="Transaction Records" />
                        </ListItem>
                        <ListItem button component={CustomLink} to="/settings/subitem2">
                            <ListItemText inset primary="Asset Records" />
                        </ListItem>
                        <ListItem button component={CustomLink} to="/settings/subitem2">
                            <ListItemText inset primary="Keyboard Recording" />
                        </ListItem>
                        <ListItem button component={CustomLink} to="/settings/subitem2">
                            <ListItemText inset primary="Application list" />
                        </ListItem>
                        <ListItem button component={CustomLink} to="/settings/subitem2">
                            <ListItemText inset primary="Triggering rules" />
                        </ListItem>
                        <ListItem button component={CustomLink} to="/settings/subitem2">
                            <ListItemText inset primary="Address list" />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button component={CustomLink} to="/users">
                    <ListItemIcon><PeopleIcon /></ListItemIcon>
                    <ListItemText primary="Role Management" />
                </ListItem>
                {/* 
                <ListItem button component={CustomLink} to="/users">
                    <ListItemIcon><PeopleIcon /></ListItemIcon>
                    <ListItemText primary="Group Management" />
                </ListItem>

                <ListItem button component={CustomLink} to="/users">
                    <ListItemIcon><PeopleIcon /></ListItemIcon>
                    <ListItemText primary="Single Chat record" />
                </ListItem>

                <ListItem button component={CustomLink} to="/users">
                    <ListItemIcon><PeopleIcon /></ListItemIcon>
                    <ListItemText primary="Red Envelope Record" />
                </ListItem>

                <ListItem button component={CustomLink} to="/users">
                    <ListItemIcon><PeopleIcon /></ListItemIcon>
                    <ListItemText primary="Report Management" />
                </ListItem>

                <ListItem button component={CustomLink} to="/users">
                    <ListItemIcon><PeopleIcon /></ListItemIcon>
                    <ListItemText primary="Friends circle" />
                </ListItem>

                <ListItem button component={CustomLink} to="/users">
                    <ListItemIcon><PeopleIcon /></ListItemIcon>
                    <ListItemText primary="Offical account platform" />
                </ListItem> */}

            </List>
        </Box>
    );
};

export default Sidebar;
