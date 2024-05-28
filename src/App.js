import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App = () => {
  return (
    <Router>
      <Container>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute element={<MainContent />} />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
