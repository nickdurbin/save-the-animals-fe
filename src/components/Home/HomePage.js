import React from 'react';
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: {
    margin: '1% auto 0',
    width: '90%'
  },
}));

const zoomInAnimation = keyframes`${zoomIn}`;

const MainContainer = styled.div` 
  background-image: url();
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
  text-align: center;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  max-width: 500px;
  height: 600px;
  background-color: white;
  border: none;
  border-radius: 10px;
  animation: 1s ${zoomInAnimation};
`;

const Content = styled.div`
  padding: 1% 5%;
`;

const Logo = styled.div`
  background-image: url();
  height: 150px;
  background-repeat: no-repeat;
  background-position: center;
`;

const Header = styled.h1`
  width: 100%;
  margin: 0 auto;
  font-size: 2.5rem;
  text-align: center;
`;

const Line = styled.hr`
  width: 10%;
  border: 3px solid #ff3366;
`;

const Para = styled.p`
  font-size: 1rem;
  text-align: center;
  color: gray;
`;

const CreateButton = styled.button`
  color: #fff;
  background-color: #ff3366;
  width: 80%;
  height: 55px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #fc003f;
    transform: scale(1.02);
  }
`;

const BrowseButton = styled.button`
  color: #fff;
  background-color: #3f51b5;
  width: 80%;
  height: 55px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #052af7;
    transform: scale(1.02);
  }
`;

function HomePage(props) {
  const classes = useStyles();

  function handleCreateButton() {
    props.history.push('/createcampaign')
  }

  function handleListingButton() {
    props.history.push('/campaigns')
  }

  return (
    <MainContainer>
      <ContentContainer>
        <Content> 
          <Header>HAVE A DESTINATION IN MIND?</Header>
          <Logo />
          <Line />
          <TextField
            id="outlined-search"
            label="Search for a location..."
            type="search"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </Content>
        <CreateButton onClick={handleCreateButton}>
          Create Campaign
        </CreateButton>
        <h2> - OR - </h2>
        <BrowseButton onClick={handleListingButton}>
           Browse Campaigns
        </BrowseButton>
      </ContentContainer>
    </MainContainer>
  )
}

export default HomePage;