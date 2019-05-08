import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  async submit(response) {
    if (response.ok) this.setState({complete: true});
  }

  render() {
    if (this.state.complete)
    return <h1>Purchase Complete!</h1>;
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Complete Payment</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);