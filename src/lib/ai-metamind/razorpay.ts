import { RAZORPAY_KEY_ID, PRICE, THANK_YOU_URL, ORDER_ENDPOINT } from './config';
import { trackInitiateCheckout, trackPurchase } from './pixel';

declare global {
  interface Window {
    Razorpay: any;
  }
}

function loadScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.getElementById('rzp-checkout-js')) {
      resolve();
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
): Promise<void> {
  const res = await fetch('/api/ai-metamind/verify-payment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ razorpay_order_id, razorpay_payment_id, razorpay_signature }),
  });

  const data = (await res.json()) as { verified?: boolean; error?: string };

  if (!res.ok || !data.verified) {
    throw new Error(data.error ?? 'Payment verification failed');
  }
}

export async function openCheckout(): Promise<void> {
  if (!RAZORPAY_KEY_ID) {
    console.error('[openCheckout] Razorpay key not configured');
    alert('Payment system is not configured. Please contact support.');
    return;
  }

  trackInitiateCheckout();

  try {
    await loadScript();

    const orderRes = await fetch(ORDER_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: PRICE * 100, currency: 'INR' }),
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
      handler: (response: any) => {
        // Run async verification without blocking Razorpay's handler
        verifyPayment(
          response.razorpay_order_id,
          response.razorpay_payment_id,
          response.razorpay_signature,
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

    rzp.open();
  } catch (err) {
    console.error('[openCheckout]', err);
    alert('Payment could not be initiated. Please try again or contact support.');
  }
}
