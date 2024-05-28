import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ListContainer = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #f9f9f9;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const LogoutButton = styled.button`
  padding: 10px 20px;
  background: #ff4d4d;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #ff1a1a;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }
`;

const DataList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://api.slingacademy.com/v1/sample-data/photos')
      .then(response => response.json())
      .then(data => setData(data.photos))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <ListContainer>
      <Header>
        <h2>Images</h2>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Header>
      <ImageGrid>
        {data.map(item => (
          <span key={item.id}>
            <img src={item.url} alt={`Photo by ${item.photographer}`} />
          </span>
        ))}
      </ImageGrid>
    </ListContainer>
  );
};

export default DataList;
