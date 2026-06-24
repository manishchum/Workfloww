import { StrictMode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ReactGA from "react-ga4";

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

if (GA_ID) {
  ReactGA.initialize(GA_ID);
}

// Meta Pixel removed: no initialization

createRoot(document.getElementById("root")!).render(
  <StrictMode>
     <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);