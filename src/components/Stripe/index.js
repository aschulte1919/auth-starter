import React from 'react';
import { compose } from 'recompose';
import { withAuthorization, withEmailVerification, withPaymentVerification } from '../Session';
import GenerateQRCode from '../Generate'
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../Checkout/CheckoutForm';

const Stripe= () => (
  <div>
      <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
        <div className="example">
          <h1>Event Payment</h1>
          <h4>Your event is 4 days long</h4>
          <h4>You will be charged $4 and recieve a QR code that will last from 12:00am on the starting day and end at 11:59pm on the final day</h4>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    {/* <GenerateQRCode /> */}
  </div>
);

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(Stripe);

