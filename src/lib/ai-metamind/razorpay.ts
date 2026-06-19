import {
  RAZORPAY_KEY_ID,
  PRICE,
  THANK_YOU_URL,
  ORDER_ENDPOINT,
  VERIFY_ENDPOINT,
  FAILURE_ENDPOINT,
} from './config';
import { trackInitiateCheckout, trackPurchase } from './pixel';

declare global {
  interface Window {
    Razorpay?: RazorpayConstructor;
  }
}

type RazorpayPaymentResponse = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
};

type RazorpayOptions = {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  handler: (response: RazorpayPaymentResponse) => void;
  modal: {
    ondismiss: () => void;
  };
  theme: {
    color: string;
  };
};

type RazorpayInstance = {
  open: () => void;
  on: (event: 'payment.failed', handler: (response: RazorpayFailureResponse) => void) => void;
};

type RazorpayConstructor = new (options: RazorpayOptions) => RazorpayInstance;

type RazorpayFailureResponse = {
  error?: {
    code?: string;
    description?: string;
    source?: string;
    step?: string;
    reason?: string;
    metadata?: {
      order_id?: string;
      payment_id?: string;
    };
  };
};

function loadScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.Razorpay) {
      resolve();
      return;
    }

    const existingScript = document.getElementById('rzp-checkout-js');
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(), { once: true });
      existingScript.addEventListener(
        'error',
        () => reject(new Error('Failed to load Razorpay SDK')),
        { once: true },
      );
      return;
    }

    const script = document.createElement('script');
    script.id = 'rzp-checkout-js';
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Razorpay SDK'));
    document.body.appendChild(script);
  });
}

async function verifyPayment(
  razorpay_order_id: string,
  razorpay_payment_id: string,
  razorpay_signature: string,
  customer: CustomerDetails,
): Promise<void> {
  const res = await fetch(VERIFY_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      designation: customer.designation,
      company_name: customer.companyName,
      source: customer.source,
    }),
  });

  const data = (await res.json()) as { verified?: boolean; error?: string };

  if (!res.ok || !data.verified) {
    throw new Error(data.error ?? 'Payment verification failed');
  }
}

async function recordPaymentFailure(response: RazorpayFailureResponse): Promise<void> {
  await fetch(FAILURE_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      code: response.error?.code,
      description: response.error?.description,
      source: response.error?.source,
      step: response.error?.step,
      reason: response.error?.reason,
      razorpay_order_id: response.error?.metadata?.order_id,
      razorpay_payment_id: response.error?.metadata?.payment_id,
    }),
  });
}

export type CustomerDetails = {
  name: string;
  email: string;
  phone: string;
  designation?: string;
  companyName?: string;
  source?: string;
};

export async function openCheckout(customer: CustomerDetails): Promise<void> {
  if (!RAZORPAY_KEY_ID) {
    console.error('[openCheckout] Razorpay key not configured');
    alert('Payment system is not configured. Please contact support.');
    return;
  }

  trackInitiateCheckout();

  try {
    await loadScript();

    if (!window.Razorpay) {
      throw new Error('Razorpay SDK is unavailable');
    }

    const orderRes = await fetch(ORDER_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        designation: customer.designation,
        company_name: customer.companyName,
        source: customer.source,
      }),
    });

    if (!orderRes.ok) throw new Error(`Order API returned ${orderRes.status}`);

    const order = (await orderRes.json()) as { order_id: string };

    const rzp = new window.Razorpay({
      key: RAZORPAY_KEY_ID,
      amount: PRICE * 100,
      currency: 'INR',
      name: 'AI MetaMind – HR Series',
      description: 'Live AI Upskilling Workshop',
      order_id: order.order_id,
      prefill: {
        name: customer.name,
        email: customer.email,
        contact: customer.phone,
      },
      handler: (response) => {
        // Run async verification without blocking Razorpay's handler
        verifyPayment(
          response.razorpay_order_id,
          response.razorpay_payment_id,
          response.razorpay_signature,
          customer,
        )
          .then(() => {
            trackPurchase(PRICE, 'INR');
            window.location.href = THANK_YOU_URL;
          })
          .catch((err) => {
            console.error('[verify-payment]', err);
            alert(
              `Payment received but verification failed. ` +
              `Please contact support with Payment ID: ${response.razorpay_payment_id}`,
            );
          });
      },
      modal: {
        ondismiss: () => console.log('[checkout] dismissed by user'),
      },
      theme: { color: '#6357d4' },
    });

    rzp.on('payment.failed', (response) => {
      recordPaymentFailure(response).catch((err) => {
        console.error('[payment-failed]', err);
      });

      alert(
        response.error?.description ??
          'Payment failed. Please try again or use another payment method.',
      );
    });

    rzp.open();
  } catch (err) {
    console.error('[openCheckout]', err);
    alert('Payment could not be initiated. Please try again or contact support.');
  }
}
