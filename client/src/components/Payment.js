import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../store/actions";

class Payment extends React.Component {
  render() {
    return (
      <StripeCheckout
        name="Get Feedback"
        description="25 Credits for &#8377;5"
        amount={2500}
        currency="INR"
        token={(token) => this.props.handlePayments(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlePayments: (token) => dispatch(actions.handlePayments(token)),
  };
};

export default connect(null, mapDispatchToProps)(Payment);
