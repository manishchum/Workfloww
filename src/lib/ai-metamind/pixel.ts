import { trackMetaEvent } from "../../utils/metaPixel";

export function trackPageView(): void {
  // No-op if Meta Pixel removed
  try {
    trackMetaEvent('PageView');
  } catch (e) {
    // ignore
  }
}

export function trackInitiateCheckout(value: number = 499): void {
  try {
    trackMetaEvent('InitiateCheckout', { value, currency: 'INR' });
  } catch (e) {
    // ignore
  }
}

export function trackPurchase(value: number, currency: string): void {
  try {
    trackMetaEvent('Purchase', { value, currency });
  } catch (e) {
    // ignore
  }
}
