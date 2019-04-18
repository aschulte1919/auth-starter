import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header, Segment, Grid } from 'semantic-ui-react'

import Navigation from '../Navigation';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <div >
    <Grid stackable columns={2} centered>
    <Grid.Column>
    <Segment textAlign='center' class="ui raised very padded text container">
    <Header textAlign='center'>COMM HIVE</Header>
      <Navigation />
      
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      </Segment>
      </Grid.Column>
    </Grid>
    </div>
  </Router>
);

export default withAuthentication(App);
