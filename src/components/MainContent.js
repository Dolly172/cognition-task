import React from 'react';
import styled from 'styled-components';
import DataList from './DataList';

const MainContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainContent = () => (
  <MainContainer>
    <h2>Welcome to the app!</h2>
    <DataList />
  </MainContainer>
);

export default MainContent;
