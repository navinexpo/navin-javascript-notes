import  { useState, useEffect } from 'react';
import { useStripe } from '@stripe/react-stripe-js';

function PaymentRequestForm() {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState(null);

  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: 'US',
        currency: 'usd',
        total: {
          label: 'Total',
          amount: 5000,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      pr.canMakePayment().then((result) => {
        if (result) {
          setPaymentRequest(pr);
        }
      });

      pr.on('paymentmethod', async (ev) => {
        const { error, paymentIntent } = await stripe.confirmCardPayment(
          'your-client-secret-here', 
          { payment_method: ev.paymentMethod.id },
          { handleActions: false }
        );

        if (error) {
          ev.complete('fail');
          console.error(error);
        } else {
          ev.complete('success');
          if (paymentIntent.status === 'requires_action') {
            stripe.confirmCardPayment('your-client-secret-here');
          }
        }
      });
    }
  }, [stripe]);

  if (paymentRequest) {
    return (
      <div>
        <button
          className="btn btn-secondary"
          onClick={() => paymentRequest.show()}
        >
          Pay with Payment Request
        </button>
      </div>
    );
  }

  return null;
}

export default PaymentRequestForm;
