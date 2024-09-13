// src/components/MainLayout.js

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TopBar from './TopBar';
import Sidebar from './Sidebar';

const MainLayout = ({ children }) => {
  const drawerWidth = 240; // Sidebar width
  const topBarHeight = 56; // Adjust this value to match the height of your TopBar

  // State to control sidebar visibility
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopBar toggleSidebar={toggleSidebar} />
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Sidebar
          topBarHeight={topBarHeight}
          drawerWidth={drawerWidth}
          isOpen={isSidebarOpen}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            mt: `${topBarHeight + 1}px`,
            ml: isSidebarOpen ? `${drawerWidth}px` : '0px', // Adjust main content margin based on sidebar state
            transition: 'margin-left 0.3s ease', // Smooth transition
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
