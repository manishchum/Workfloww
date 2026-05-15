import * as React from "react";

const BACKEND_URL = (import.meta as any).env?.VITE_LEADS_API_URL ?? "http://localhost:8000";

export type SubmitStatus = "idle" | "loading" | "success" | "error";

export interface LeadPayload {
  source:   string;
  name:     string;
  email:    string;
  org?:     string;
  phone?:   string;
  message?: string;
}

export function useFormSubmit() {
  const [status, setStatus] = React.useState<SubmitStatus>("idle");
  const [error,  setError]  = React.useState<string | null>(null);

  const submit = React.useCallback(async (payload: LeadPayload) => {
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch(`${BACKEND_URL}/leads`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
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
