import React from 'react';
import { Button, Icon } from 'semantic-ui-react'

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <Button onClick={firebase.doSignOut}><Icon name='sign out' />Sign Out</Button>
);

export default withFirebase(SignOutButton);
