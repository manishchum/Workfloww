export function trackPageView(): void {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'PageView');
  }
}

export function trackInitiateCheckout(): void {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'InitiateCheckout', { value: 499, currency: 'INR' });
  }
}

export function trackPurchase(value: number, currency: string): void {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Purchase', { value, currency });
  }
}
