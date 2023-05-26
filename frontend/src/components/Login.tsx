import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Paper, TextField, Button, Box } from '@mui/material';
import { User } from './models/User';
import axios from 'axios';
import { BACKEND_API_URL } from '../constants';
import { Await } from 'react-router-dom';
import { UserDTO } from './models/UserDTO';
import { setUsernameToSend } from './GloabalUsername';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here
    // You can use a library like Axios to make API requests
    var userDTO = new UserDTO()
    userDTO.username = username;
    userDTO.password = password;
    axios.post(`${BACKEND_API_URL}/login`, userDTO).then((response) =>{
      if (username === 'admin' && password === 'admin') {
        navigate('/admin');
      } else {
          navigate('/user');
      }
    })
    .catch((error) => {
      window.alert("Invalid credentials!");
    })
    setUsernameToSend(username);
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
        {error ? <p>An error occurred: {error}</p> : null}
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