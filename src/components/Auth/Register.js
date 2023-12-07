// Register.js
import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Container, Typography, TextField, Button } from '@mui/material';
import './Register.css';


const FormContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

const Register = ({handleFormToggle}) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    ReTypepassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className="container">
      <FormContainer maxWidth="sm">
        <Typography variant="h4" component="h2" gutterBottom>
          User Registration
        </Typography>
        <form onSubmit={handleSubmit}>
          <div className="text-field">
            <TextField
              type="text"
              name="username"
              label="Username"
              value={formData.username}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </div>
          <div className="text-field">
            <TextField
              type="email"
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </div>
          <div className="text-field">
            <TextField
              type="password"
              name="password"
              label="Password"
              value={formData.password}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </div>
          <div className="text-field">
            <TextField
              type="password"
              name="ReTypepassword"
              label="Re-Type-Password"
              value={formData.ReTypepassword}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </form>
        <p>
          Already Have an account?{' '}
          <a href="#" onClick={handleFormToggle}>
            Login
          </a>
        </p>
      </FormContainer>
    </div>
  );
};

export default Register;
