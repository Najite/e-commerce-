import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51LkovQHyH9vUKWdGQ6DmCqF8UecnoJPYr2XQGso7G1vCCgoP6nWgDBLGj0k5XxvqfbjA8jAjF9Db1X8GGNERIXaH00OQ4zjfzs';
    const onToken = token => {
        console.log(token)
        alert('successful')
    }

    return (
        <StripeCheckout 
        label='Pay Now'
        name= ' my store'
        billingAddress
        shippingAddress
        description={`your total is ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;