import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Container, Typography, TextField, Button } from '@mui/material';
import Register from './Register';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const FormContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });


  const [isRegistering, setIsRegistering] = useState(false);

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    navigate('/StudentDashboard');

  };

  const handleFormToggle = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="container">
      {isRegistering ? (
        <Register handleFormToggle={handleFormToggle} />
      ) :(
      <FormContainer maxWidth="sm">
        <Typography variant="h4" component="h2" className="heading" gutterBottom>
          User Login
        </Typography>

        <div className="form-container">
          <form onSubmit={handleLoginSubmit}>
            <div className="text-field">
              <TextField
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleLoginChange}
                label="Username"
                variant="outlined"
                fullWidth
              />
            </div>
            <div className="text-field">
              <TextField
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                label="Password"
                variant="outlined"
                fullWidth
              />
            </div>

            <Button type="submit" variant="contained" color="primary">
              {isRegistering ? 'Register' : 'Login'}
            </Button>
          </form>

          <p>
            {isRegistering
              ? "Already have an account? "
              : "Don't have an account? "}
            <a href="#" onClick={handleFormToggle}>
              {isRegistering ? 'Login' : 'Register'}
            </a>
          </p>
        </div>
      </FormContainer>
      )}</div>
  );
};

export default Login;
