import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const CheckOutForm = ({handleBooking}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const cardElement = elements.getElement(CardElement);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
      handleBooking(paymentMethod.id)
    }
  };

  return (
    <div>
        <form className="col-md-6 px-5" onSubmit={handleSubmit}>
            <CardElement/>
            <div className="my-4">
              <button style={{width: '100px'}} className="btn-brand text-white p-2" type="submit" disabled={!stripe}>Submit</button>
            </div>
        </form>
        {
            paymentError && <p className="text-danger">{paymentError}</p>
        }
        {
            paymentSuccess && <p className="text-success">Your Payment was Successful</p>
        }
    </div>
  );
};

export default CheckOutForm;