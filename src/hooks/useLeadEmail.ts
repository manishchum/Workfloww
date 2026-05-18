import { useState } from "react";

// Robust backend URL detection
const getBackendUrl = (): string => {
  const envUrl = (import.meta as any).env?.VITE_LEADS_API_URL;
  if (envUrl) {
    return envUrl.endsWith("/") ? envUrl.slice(0, -1) : envUrl;
  }
  
  // Fallback: local backend on 8000 for local development, relative root for Vercel production
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    if (hostname === "localhost" || hostname === "127.0.0.1" || hostname.startsWith("192.168.")) {
      return "http://localhost:8000";
    }
  }
  return "";
};

const BACKEND_URL = getBackendUrl();

type LeadData = {
  source: string;
  name: string;
  phone: string;
  email: string;
  org: string;
  website_trap?: string; // Honeypot trap to catch automated bots
};

export const useLeadEmail = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [error, setError] = useState("");

  const sendEmail = async (data: LeadData) => {
    try {
      setStatus("loading");
      setError("");

      const response = await fetch(
        `${BACKEND_URL}/send-email`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: data.name,
            email: data.email,
            company: data.org,
            message: `Phone: ${data.phone}\nSource: ${data.source}`,
            source: data.source,
            phone: data.phone,
            website_trap: data.website_trap ?? "",
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || result.detail || "Failed to submit lead");
      }

      setStatus("success");

      return result;

    } catch (err: any) {

      console.error(
        "[useLeadEmail]",
        err
      );

      setStatus("error");

      setError(
        err.message || "Something went wrong"
      );

      return null;
    }
  };

  return {
    sendEmail,
    status,
    error
  };
};