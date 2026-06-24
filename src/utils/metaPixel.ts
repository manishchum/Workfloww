// Meta Pixel has been removed. Export no-op functions to avoid breaking imports elsewhere.
export async function initMetaPixel(): Promise<void> {
  // Intentionally no-op when Meta Pixel is removed from the site
  return;
}

export function trackMetaEvent(eventName: string, params?: Record<string, unknown>) {
  // Intentionally no-op
  return;
}

export default {
  initMetaPixel,
  trackMetaEvent,
};
