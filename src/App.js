import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/Home/HomePage';
import LoginForm from './components/Login/LoginForm';
import ResetPassword from './components/Login/ResetPassword';
import RegisterForm from './components/Login/RegisterForm';
import Profile from './components/Profile/Profile';
import CreateCampaign from './components/Campaigns/CreateCampaign';
import Campaign from './components/Campaigns/Campaign';
import CampaignList from './components/Campaigns/CampaignList'
import decode from 'jwt-decode';
import { connect } from 'react-redux';
import { setUserId } from './store/actions/userActions';


function App({ setUserId, user_id }) {

  useEffect(() => {
    if (user_id === '' && localStorage.getItem('token')) {
      const token = localStorage.getItem('token')
      const { subject }= decode(token)

      setUserId(subject)
    }
  })

  return (
    <>
    <Navigation />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/login' component={LoginForm}/>
      <Route path='/reset-password' component={ResetPassword} />
      <Route path='/register' component={RegisterForm} />
      <Route path='/profile' component={Profile}/>

      <Route path='/createcampaign' component={CreateCampaign} />
      <Route path='/campaigns/:id' component={Campaign}/>
      <Route path='/campaigns' component={CampaignList}/>
    </Switch>
    </>
  );
}

const mapStateToProps = ({ userReducer }) => ({
  user_id: userReducer.user_id
})

export default connect(mapStateToProps, { setUserId })(withRouter(App));