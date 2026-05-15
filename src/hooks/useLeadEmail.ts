import * as React from "react";

// ── Config — edit these two lines ────────────────────────────────────────────
const RESEND_API_KEY = (import.meta as any).env?.VITE_RESEND_API_KEY ?? "";
const TO_EMAIL       = "manish.chum@workfloww.ai";
const FROM_EMAIL     = "onboarding@resend.dev"; // swap to your verified domain later
// ─────────────────────────────────────────────────────────────────────────────

export type EmailStatus = "idle" | "loading" | "success" | "error";

export interface LeadData {
  source:   string;
  name:     string;
  email:    string;
  org?:     string;
  phone?:   string;
  message?: string;
}

function buildEmailHtml(lead: LeadData): string {
  return `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#0f172a">
      <div style="background:#1e3a5f;padding:24px 32px;border-radius:12px 12px 0 0">
        <h1 style="color:#fff;margin:0;font-size:22px;font-weight:800;letter-spacing:-0.5px">
          New Lead — Lucid
        </h1>
        <p style="color:#94a3b8;margin:6px 0 0;font-size:13px">
          Source: <strong style="color:#fff">${lead.source}</strong>
        </p>
      </div>
      <div style="border:1px solid #e2e8f0;border-top:none;padding:28px 32px;border-radius:0 0 12px 12px">
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;width:130px">Name</td>
            <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-weight:600">${lead.name}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px">Email</td>
            <td style="padding:10px 0;border-bottom:1px solid #f1f5f9">
              <a href="mailto:${lead.email}" style="color:#2563eb">${lead.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px">Organisation</td>
            <td style="padding:10px 0;border-bottom:1px solid #f1f5f9">${lead.org || "—"}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px">Phone</td>
            <td style="padding:10px 0;border-bottom:1px solid #f1f5f9">${lead.phone || "—"}</td>
          </tr>
          ${lead.message ? `
          <tr>
            <td style="padding:10px 0;color:#64748b;font-size:13px;vertical-align:top">Message</td>
            <td style="padding:10px 0">${lead.message}</td>
          </tr>` : ""}
        </table>
        <div style="margin-top:28px;padding:16px;background:#f8fafc;border-radius:8px;font-size:12px;color:#94a3b8">
          Submitted ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
        </div>
      </div>
    </div>
  `;
}

export function useLeadEmail() {
  const [status, setStatus] = React.useState<EmailStatus>("idle");
  const [error,  setError]  = React.useState<string | null>(null);

  const sendEmail = React.useCallback(async (lead: LeadData) => {
    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method:  "POST",
        headers: {
          "Content-Type":  "application/json",
          "Authorization": `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from:     FROM_EMAIL,
          to:       [TO_EMAIL],
          subject:  `New Lucid Lead: ${lead.name} (${lead.org || lead.email})`,
          html:     buildEmailHtml(lead),
          reply_to: lead.email,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error((err as any)?.message ?? `HTTP ${res.status}`);
      }

      setStatus("success");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      console.error("[useLeadEmail]", msg);
      setError("Could not send — please email manish.chum@workfloww.ai directly.");
      setStatus("error");
    }
  }, []);

  const reset = React.useCallback(() => { setStatus("idle"); setError(null); }, []);

  return { sendEmail, status, error, reset };
}
