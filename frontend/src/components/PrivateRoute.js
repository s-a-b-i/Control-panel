// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  const isAuthenticated = !!token && user?.role === 'admin';

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;