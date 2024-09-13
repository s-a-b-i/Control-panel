import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from './theme';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Settings from './pages/Settings';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  const toggleTheme = () => {
    setIsDarkMode(prevState => !prevState);
  };

  const ProtectedLayout = ({ children }) => (
    <>
      <TopBar toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} />
      <Sidebar open={sidebarOpen} />
      <main
        style={{
          marginLeft: sidebarOpen ? 250 : 0,
          marginTop: 56,
          transition: 'margin 0.3s',
          padding: '20px',
        }}
      >
        {children}
      </main>
    </>
  );

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <ProtectedLayout>
                  <Dashboard />
                </ProtectedLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/users"
            element={
              <PrivateRoute>
                <ProtectedLayout>
                  <Users />
                </ProtectedLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <ProtectedLayout>
                  <Settings />
                </ProtectedLayout>
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;