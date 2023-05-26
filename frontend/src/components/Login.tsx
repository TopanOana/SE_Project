import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Paper, TextField, Button, Box } from '@mui/material';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here
    // You can use a library like Axios to make API requests

    // Example logic: If the login is successful, redirect to the home page
    if (username === 'admin' && password === 'password') {
      navigate('/home');
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <h2>Login</h2>
          <form>
            <TextField
              label="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <Box style={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" onClick={handleLogin}>
                Login
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;