export const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID as string;

// TODO: Replace with your order-creation API endpoint
export const ORDER_ENDPOINT = '/api/ai-metamind/create-order';
export const VERIFY_ENDPOINT = '/api/ai-metamind/verify-payment';
export const FAILURE_ENDPOINT = '/api/ai-metamind/payment-failed';

// TODO: Replace with your post-purchase thank-you page URL
export const THANK_YOU_URL = '/ai-metamind/thank-you';

// Workshop price in INR
export const PRICE = 499;

