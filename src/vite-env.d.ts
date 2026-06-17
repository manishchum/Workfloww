/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RAZORPAY_KEY_ID?: string;
  readonly VITE_META_PIXEL_ID?: string;
}

interface Window {
  fbq?: (
    command: 'init' | 'track' | string,
    eventName?: string,
    parameters?: Record<string, unknown>
  ) => void & { __initialized?: boolean; queue?: unknown[] };
  _fbq?: unknown;
}
