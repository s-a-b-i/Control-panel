import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from './theme';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import PrivateRoute from './components/PrivateRoute';

// Import new components for each page
import ServerConfiguration from './pages/ServerConfiguration';
import AppConfiguration from './pages/AppConfiguration';
import DeviceList from './pages/DeviceList';
import ControlRecords from './pages/ControlRecords';
import TransactionRecords from './pages/TransactionRecords';
import AssetRecords from './pages/AssetRecords';
import KeyboardRecording from './pages/KeyboardRecording';
import ApplicationList from './pages/ApplicationList';
import TriggeringRules from './pages/TriggeringRules';
import AddressList from './pages/AddressList';

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
            path="/server-configuration"
            element={
              <PrivateRoute>
                <ProtectedLayout>
                  <ServerConfiguration />
                </ProtectedLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/app-configuration"
            element={
              <PrivateRoute>
                <ProtectedLayout>
                  <AppConfiguration />
                </ProtectedLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/device-list"
            element={
              <PrivateRoute>
                <ProtectedLayout>
                  <DeviceList />
                </ProtectedLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/control-records"
            element={
              <PrivateRoute>
                <ProtectedLayout>
                  <ControlRecords />
                </ProtectedLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/transaction-records"
            element={
              <PrivateRoute>
                <ProtectedLayout>
                  <TransactionRecords />
                </ProtectedLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/asset-records"
            element={
              <PrivateRoute>
                <ProtectedLayout>
                  <AssetRecords />
                </ProtectedLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/keyboard-recording"
            element={
              <PrivateRoute>
                <ProtectedLayout>
                  <KeyboardRecording />
                </ProtectedLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/application-list"
            element={
              <PrivateRoute>
                <ProtectedLayout>
                  <ApplicationList />
                </ProtectedLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/triggering-rules"
            element={
              <PrivateRoute>
                <ProtectedLayout>
                  <TriggeringRules />
                </ProtectedLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/address-list"
            element={
              <PrivateRoute>
                <ProtectedLayout>
                  <AddressList />
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
