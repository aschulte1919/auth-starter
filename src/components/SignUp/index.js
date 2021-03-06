import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Input, Form, Header, Grid} from 'semantic-ui-react'

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { SignInGoogle, SignInFacebook, SignInTwitter } from '../SignIn';

const SignUpPage = () => (
  <div>
    <Header textAlign='center'>Sign Up</Header>
    <SignUpForm />
    {/* <SignInGoogle />
    <br></br>
    <SignInFacebook />
    <br></br>
    <SignInTwitter /> */}
    <SignInLink />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
        });
      })
      .then(() => {
        return this.props.firebase.doSendEmailVerification();
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }

        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <Grid centered>
      <Form onSubmit={this.onSubmit} style={ formStyles }>
       <Form.Field>
      <label>Full Name</label>
        <Input 
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        </Form.Field>
        <Form.Field>
        <label>Email</label>
        <Input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        </Form.Field>
        <Form.Field>
        <label>Password</label>
        <Input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        </Form.Field>
        <Form.Field>
        <label>Password</label>
        <Input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        </Form.Field>
        
        <Button fluid disabled={isInvalid} type="submit">
          Sign Up
        </Button>

        {error && <p>{error.message}</p>}
      </Form>
      </Grid>
    );
  }
}
const SignInLink = () => (
  <Grid centered>
  <br></br>
  <p>
    Already have an account? <Link to={ROUTES.SIGN_IN}>Sign In</Link>
  </p>
  <br></br>
  <br></br>
  </Grid>
);


const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

const formStyles = {
  width: '35%',
  padding: 10,
  textAlign: 'left'
};

export default SignUpPage;

export { SignUpForm, SignUpLink };
