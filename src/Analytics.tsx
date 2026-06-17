import ReactGA from "react-ga4";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackMetaEvent } from "./utils/metaPixel";

export const trackEvent = (
  category: string,
  action: string,
  label?: string
) => {
  ReactGA.event(action, {
    category,
    label,
  });

  // If this is a Lead-related GA event, also send to Meta Pixel
  try {
    if (category && category.toLowerCase() === 'lead') {
      trackMetaEvent('Lead');
    }
  } catch (e) {
    // ignore
  }
};

// Helper to track a Lead in both GA and Meta Pixel
export const trackLead = (label?: string) => {
  // GA event
  try {
    ReactGA.event('lead', {
      category: 'Lead',
      label,
    });
  } catch (e) {
    // ignore
  }

  // Meta Pixel
  try {
    trackMetaEvent('Lead');
  } catch (e) {
    // ignore
  }
};

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    // React GA page view
    try {
      ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
    } catch (e) {
      // ignore
    }

    // Meta Pixel page view
    try {
      if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        window.fbq('track', 'PageView');
      }
    } catch (e) {
      // swallow
    }
  }, [location]);

  return null;
}