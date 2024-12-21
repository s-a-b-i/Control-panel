import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import loginImage from '../assets/images/login.jpg';
import axios from 'axios';

// Container for the entire login page
const LoginContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100vh',
  overflow: 'hidden', // Prevent scrolling
}));

// Form box
const LoginForm = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  maxWidth: 400,
  width: '100%',
  textAlign: 'center',
  zIndex: 1,
  position: 'relative',
}));

// Background image styling
const BackgroundImage = styled('img')({
  position: 'relative',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  objectFit: 'cover',
  height: '100%',
  width: '50%', // Adjust width as needed
});

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(' https://control-panel-15mm.onrender.com/api/v1/admin/login', { username, password },
        {
          withCredentials: true, // This ensures that credentials like cookies are included
        }
      );
      const { token, user } = response.data;
      
      // Store the token and user info in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      
      // Redirect to dashboard
      navigate('/dashboard');
    } catch (error) {
      setError(error.response?.data?.error || 'An error occurred during login.');
    }
  };

  return (
    <LoginContainer>
      <BackgroundImage src={loginImage} alt="Login Background" />
      <LoginForm>
        <Typography variant="h4" component="h1" gutterBottom>
          Admin Login
        </Typography>
        {error && (
          <Typography color="error" sx={{ marginBottom: 2 }}>
            {error}
          </Typography>
        )}
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" onClick={handleLogin} fullWidth>
          Login
        </Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;