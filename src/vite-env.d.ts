/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly RAZORPAY_KEY_ID?: string;
}

interface Window {
  fbq?: (
    command: "track",
    eventName: string,
    parameters?: Record<string, unknown>
  ) => void;
}
