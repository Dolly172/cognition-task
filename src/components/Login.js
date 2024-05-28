import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 67vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      localStorage.setItem('token', 'mock-token');
      navigate('/');
    }
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      <LoginForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
