import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import PaymentRequestForm from './PaymentRequestForm';

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      console.log('PaymentMethod:', paymentMethod);
      // Handle successful payment method creation
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="mb-3">
          <CardElement className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary" disabled={!stripe}>
          Pay
        </button>
      </form>
      <PaymentRequestForm />
    </div>
  );
}

export default PaymentForm;
