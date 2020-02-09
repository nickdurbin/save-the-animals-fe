import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Background = styled.div` 
  display: flex;
  align-items: center;
  height: 90vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Bio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  height: 100vh;
  background-color: #3f51b5;
  color: white;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    justify-content: center;
  }
`;

const Dashboard = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 75%;
  height: 100vh;
`;

const Card = styled.div`
  border: none;
  box-shadow: 1px 3px 5px;
  margin: 2% auto;
  min-width: 400px;
  max-width: 800px;
  width: 100%;
  min-height: 450px;
  max-height: 450px;
  padding: 2% 2% 10%;
  overflow: hidden;
  text-align: center;
  border-radius: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25%;
  margin-top: 5%;
  padding: 5%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
  width: 100%;
  margin-top: 1%;
  @media (max-width: 768px) {
    margin-top: 5%;
  }
`;

const Avatar = styled.img`
    width: 200px;
    height: 200px;
    border: 2px solid black;
    border-radius: 100%;
    background-image: url();
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

function Profile(props) {

  return (
    <Background>
      <Bio>
        <ImageContainer>
          <Avatar />
        </ImageContainer>
        <ContentContainer>
          <h1>Nick Durbin</h1>
        </ContentContainer>
      </Bio>
      <Dashboard>
        <Link to='/campaigns/:id'>
          <Card>

          </Card>
        </Link>
        <Link to='/organizations'>
        <Card>
        </Card>
        </Link>
      </Dashboard>
    </Background>
  )
}

export default Profile;