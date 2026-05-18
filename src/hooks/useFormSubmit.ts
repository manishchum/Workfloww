import * as React from "react";

// Robust backend URL detection
const getBackendUrl = (): string => {
  // Local development fallback
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    if (hostname === "localhost" || hostname === "127.0.0.1" || hostname.startsWith("192.168.")) {
      return "http://localhost:8000";
    }
  }
  // In production (Vercel), always use relative routing on the same origin (prevents CORS mismatches)
  return "";
};

const BACKEND_URL = getBackendUrl();

export type SubmitStatus = "idle" | "loading" | "success" | "error";

export interface LeadPayload {
  source:        string;
  name:          string;
  email:         string;
  org?:          string;
  phone?:        string;
  message?:      string;
  website_trap?: string; // Honeypot trap to catch automated bots
}

export function useFormSubmit() {
  const [status, setStatus] = React.useState<SubmitStatus>("idle");
  const [error,  setError]  = React.useState<string | null>(null);

  const submit = React.useCallback(async (payload: LeadPayload) => {
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch(`${BACKEND_URL}/send-email`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({
          name:         payload.name,
          email:        payload.email,
          company:      payload.org ?? "",
          phone:        payload.phone ?? "",
          message:      payload.message ?? "",
          source:       payload.source,
          website_trap: payload.website_trap ?? "",
        }),
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        throw new Error((d as any)?.detail ?? `HTTP ${res.status}`);
      }
      setStatus("success");
    } catch (err: unknown) {
      setError("Submission failed — please email manish.chum@workfloww.ai directly.");
      setStatus("error");
    }
  }, []);

  const reset = React.useCallback(() => { setStatus("idle"); setError(null); }, []);

  return { submit, status, error, reset };
}

