import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react'

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

const Navigation = ({ authUser }) =>
  authUser ? (
    <NavigationAuth authUser={authUser} />
  ) : (
    <NavigationNonAuth />
  );

const NavigationAuth = ({ authUser }) => (
  <div>
      <Link to={ROUTES.HOME}><Button fluid><Icon name='home' />Home</Button></Link>
      <br></br>
      <Link to={ROUTES.ACCOUNT}><Button fluid><Icon name='settings' />Account</Button></Link>
      <br></br>
      <SignOutButton />
    </div>
);

const NavigationNonAuth = () => (
  <ul>
  </ul>
);

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);
