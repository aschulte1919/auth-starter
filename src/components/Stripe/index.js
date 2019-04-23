import React from 'react';
import { compose } from 'recompose';
import { Header, Segment, Grid } from 'semantic-ui-react'
import { withAuthorization, withEmailVerification } from '../Session';

const Stripe= () => (
  <div>
  </div>
);

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(Stripe);

