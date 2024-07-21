import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './components/PaymentForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const stripePromise = loadStripe('your-public-key-here');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <div className="container">
        <h1 className="text-center my-5">React Stripe Payment Integration</h1>
        <PaymentForm />
      </div>
    </Elements>
  );
}

export default App;
