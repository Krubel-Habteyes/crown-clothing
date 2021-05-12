import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishabelKey =
		"pk_test_51H3ksBCd8utmWSYVxFv9lKJPp0YHMT0hcWSObRBK0YPRmaGDu2M1OBAOSak7eIyFKeslW7Dv6NnJxrdSjUKVXAAh00eYJGRPm5";

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishabelKey}
		/>
	);
};

export default StripeCheckoutButton;
