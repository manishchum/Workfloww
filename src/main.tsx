import { StrictMode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ReactGA from "react-ga4";
import { initMetaPixel } from "./utils/metaPixel";

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

if (GA_ID) {
  ReactGA.initialize(GA_ID);
}

// Initialize Meta Pixel once on startup (non-blocking)
if (typeof window !== 'undefined') {
  initMetaPixel().catch(() => {
    /* ignore init errors */
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
     <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);