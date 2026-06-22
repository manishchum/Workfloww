export async function initMetaPixel(): Promise<void> {
  if (typeof window === 'undefined') return;

  const pixelId = (import.meta.env as any).VITE_META_PIXEL_ID as string | undefined;
  if (!pixelId) return; // do not initialize if env var not provided

  // Avoid double-initialization
  const w = window as any;
  if (w.fbq && (w.fbq.__initialized || w.fbq.__initializing)) return;

  // Minimal fbq stub to queue commands until the real script loads
  if (!w.fbq) {
    w._fbq = w.fbq;
    w.fbq = function fbqStub() {
      (w.fbq.queue = w.fbq.queue || []).push(arguments);
    };
    w.fbq.queue = w.fbq.queue || [];
    w.fbq.callMethod = w.fbq.callMethod || null;
    w.fbq.loaded = false;
    w.fbq.version = '2.0';
  }

  w.fbq.__initializing = true;

  // Dynamically load the official fbevents script
  return new Promise((resolve) => {
    try {
      const existing = document.querySelector("script[src*='fbevents']");
      if (existing || (w.fbq && w.fbq.loaded)) {
        if (w.fbq) {
          w.fbq.__initialized = true;
          w.fbq.__initializing = false;
        }
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      script.onload = () => {
        try {
          // real fbq should be available now
          if (typeof w.fbq === 'function') {
            w.fbq('init', pixelId);
            w.fbq('track', 'PageView');
            w.fbq.__initialized = true;
            w.fbq.__initializing = false;
          }
        } catch (err) {
          // no-op
        }
        resolve();
      };
      script.onerror = () => {
        if (w.fbq) w.fbq.__initializing = false;
        resolve();
      };
      document.head.appendChild(script);
    } catch (e) {
      if (w.fbq) w.fbq.__initializing = false;
      resolve();
    }
  });
}

export function trackMetaEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  try {
    if (typeof window.fbq === 'function') {
      window.fbq('track', eventName, params ?? {});
    }
  } catch (e) {
    // swallow errors to avoid breaking UI
  }
}

export default {
  initMetaPixel,
  trackMetaEvent,
};
