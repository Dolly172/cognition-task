import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #282c34;
  padding: 10px;
  color: white;
  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    <p>© 2024 My Gallery</p>
  </FooterContainer>
);

export default Footer;
