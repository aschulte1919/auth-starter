import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Icon, Input } from 'semantic-ui-react'

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
      <Link to={ROUTES.HOME}><Button><Icon name='home' />Home</Button></Link>
      
      <Link to={ROUTES.ACCOUNT}><Button><Icon name='settings' />Account</Button></Link>
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
