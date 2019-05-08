import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Icon, Menu } from 'semantic-ui-react'
import HomePage from '../Home';

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
    <Menu>
        <Menu.Item contentAlign='center'>
      <Link to={ROUTES.HOME}><Button><Icon name='home' />Home</Button></Link>
      <br></br>
      </Menu.Item>
      <Menu.Item>
      <Link to={ROUTES.ACCOUNT}><Button><Icon name='settings' />Account</Button></Link>
      <br></br>
      </Menu.Item>
      <Menu.Item>
      <SignOutButton />
      </Menu.Item>
      </Menu>
    </div>
);

const NavigationNonAuth = () => (
  <HomePage />
);

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);
