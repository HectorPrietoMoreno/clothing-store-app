import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    console.log(token);
    alert('Payment successful');
}

const StripeButton= ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_9SC776Mn4OGD5BkdcfzIjPnz00YTo8st66';

    return (
        <StripeCheckout
            label="Pay now"
            name="CRNW Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeButton;