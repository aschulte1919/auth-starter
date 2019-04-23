import React from 'react';
import { compose } from 'recompose';
import { Header } from 'semantic-ui-react'

import { withAuthorization, withEmailVerification } from '../Session';
import GenerateQRCode from '../Generate'

const HomePage = () => (
  <div>
    <Header as='h1' textAlign='center'>Home Page</Header>
    <Header as='h3'>Are you holding an event and want to be able to communitcate to all you attendees?</Header>
    <Header as='h5'>For $1 you are able to generate a unique QR code for your event. Your attendees will be able to downlaod our app scan your QR code and you can broadcast messages directly to there phones without using wifi or data.</Header>
    <Header as='h5'>It is a lightweight, seemless, solution to reach your audience</Header>
    <GenerateQRCode />
  </div>
);

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
