import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header, Segment, Grid } from 'semantic-ui-react'

import Navigation from '../Navigation';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import Stripe from '../Stripe';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import Background from '../../images/backgroundImage.png';

const App = () => (
  <div style={ sectionStyle }>
  <Router>
    <div >
    <Grid stackable centered style={ loginStyle }>
    <Grid.Column>
    <Header as='h1' attached='top'>COMM HIVE</Header>
    <Segment>
      <Navigation />
      <br></br>
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.STRIPE} component={Stripe} />
      </Segment>
      </Grid.Column>
    </Grid>
    </div>
  </Router>
  </div>
);

const sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${Background})`
};

const loginStyle = {
  height: "100%",
  width: "100%",
  padding: 65,
  opacity: 0.87
};

export default withAuthentication(App);
