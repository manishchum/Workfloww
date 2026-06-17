export {}; // module augmentation

declare global {
  interface Window {
    fbq?: (
      command: 'init' | 'track' | string,
      eventName?: string,
      parameters?: Record<string, unknown>
    ) => void & { __initialized?: boolean; queue?: unknown[] };
    _fbq?: unknown;
  }
}
