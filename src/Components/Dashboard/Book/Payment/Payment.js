import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckOutForm from './CheckOutFrom';

const stripePromise = loadStripe('pk_test_51Ie9NNKHiPKkwCpw0Wme9ITM83uRn4HsPZVKd7fWdNKf7WheERPdQzhUlfTvxgE9geRRTSPePUUBGO8hLsnfIiwC00S0H2C8Yt');

const Payment = ({handleBooking}) => {
    return (
        <Elements stripe={stripePromise}>
            <CheckOutForm handleBooking={handleBooking}></CheckOutForm>
        </Elements>
    );
};

export default Payment; 
