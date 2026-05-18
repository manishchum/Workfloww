import { useState } from "react";
const BACKEND_URL = (import.meta as any).env?.VITE_LEADS_API_URL ?? "http://localhost:8000";

type LeadData = {
  source: string;
  name: string;
  phone: string;
  email: string;
  org: string;
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
            message: `Phone: ${data.phone}
Source: ${data.source}`
          }),
        }
      );

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || "Failed");
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