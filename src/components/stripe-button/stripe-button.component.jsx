import React from "react";
import StripeCheckout from "react-stripe-checkout"


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_mnAXIMwSiNQld5nGC4BL6gSm000oQQqlGf'

  const onToken = (token) => {
    alert('Payment successful')
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey} />
  )
}

export default StripeCheckoutButton