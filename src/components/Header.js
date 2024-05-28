import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: #282c34;
  padding: 20px;
  color: white;
  text-align: center;
`;

const Header = () => (
  <HeaderContainer>
    <h1>My Gallery</h1>
  </HeaderContainer>
);

export default Header;
