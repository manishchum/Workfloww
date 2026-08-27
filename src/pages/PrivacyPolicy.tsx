import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div style={{ 
      backgroundColor: "#f4f7f9", 
      minHeight: "100vh", 
      paddingTop: "60px", 
      paddingBottom: "80px", 
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" 
    }}>
      <style>
        {`
          .privacy-policy-card h2 {
            color: #0f172a;
            font-size: 1.15rem;
            font-weight: 700;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
          }
          .privacy-policy-card h3 {
            color: #1e293b;
            font-size: 1.05rem;
            font-weight: 600;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
          }
          .privacy-policy-card p {
            color: #475569;
            line-height: 1.8;
            margin-bottom: 1rem;
            font-size: 0.95rem;
          }
          .privacy-policy-card ul {
            color: #475569;
            line-height: 1.8;
            margin-bottom: 1rem;
            padding-left: 1.5rem;
            font-size: 0.95rem;
          }
          .privacy-policy-card li {
            margin-bottom: 0.5rem;
          }
          .btn-primary {
            background-color: #0f172a;
            color: white;
            padding: 10px 24px;
            border-radius: 9999px;
            text-decoration: none;
            font-weight: 500;
            font-size: 0.9rem;
            border: none;
            cursor: pointer;
            transition: background-color 0.2s;
          }
          .btn-primary:hover {
            background-color: #1e293b;
          }
          .btn-secondary {
            background-color: white;
            color: #0f172a;
            padding: 10px 24px;
            border-radius: 9999px;
            text-decoration: none;
            font-weight: 500;
            font-size: 0.9rem;
            border: 1px solid #cbd5e1;
            cursor: pointer;
            transition: background-color 0.2s;
          }
          .btn-secondary:hover {
            background-color: #f8fafc;
          }
        `}
      </style>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px" }}>
        
        {/* Top Banner */}
        <div style={{
          background: "linear-gradient(135deg, #1d4ed8 0%, #10b981 100%)",
          borderRadius: "16px",
          padding: "48px 40px",
          color: "white",
          marginBottom: "24px",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
        }}>
          <div style={{ 
            textTransform: "uppercase", 
            letterSpacing: "0.1em", 
            fontSize: "0.75rem", 
            fontWeight: 600, 
            marginBottom: "16px",
            color: "rgba(255, 255, 255, 0.8)"
          }}>
            Workfloww Legal
          </div>
          <h1 style={{ 
            fontSize: "2.5rem", 
            fontWeight: 800, 
            marginBottom: "16px",
            marginTop: 0
          }}>
            Privacy Policy
          </h1>
          <p style={{ 
            fontSize: "1rem", 
            color: "rgba(255, 255, 255, 0.9)", 
            marginBottom: "24px",
            maxWidth: "600px"
          }}>
            This page explains how we collect, use, and protect your personal data when you use Workfloww.ai.
          </p>
          <div style={{ 
            fontSize: "0.85rem", 
            color: "rgba(255, 255, 255, 0.7)" 
          }}>
            Last updated: August 27, 2026
          </div>
        </div>

        {/* Main Content Card */}
        <div className="privacy-policy-card" style={{
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "48px 40px",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)"
        }}>
          
          {/* Warning Banner */}
          <div style={{
            backgroundColor: "#fffbeb",
            border: "1px solid #fef08a",
            borderRadius: "8px",
            padding: "16px 20px",
            marginBottom: "32px",
            color: "#92400e",
            fontSize: "0.95rem"
          }}>
            Please read this Privacy Policy together with our Terms and any notices shown when specific data is collected.
          </div>

          <p>
            Welcome to <strong>Workfloww.ai</strong> ("we", "our", or "us").
            This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you use our website,
            AI-powered tools, upskilling platforms, and agentic automation solutions.
          </p>

          <h2>1. Information We Collect</h2>

          <h3>1.1 Personal Information</h3>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name and job title</li>
            <li>Billing and payment information</li>
            <li>Information voluntarily submitted through forms or registrations</li>
          </ul>

          <h3>1.2 Usage Data</h3>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages visited</li>
            <li>Date and time of visits</li>
            <li>Referring website</li>
            <li>Device and operating system information</li>
          </ul>

          <h3>1.3 Cookies and Tracking Technologies</h3>
          <p>
            We use cookies, tracking pixels, and similar technologies
            to improve website functionality and analyze usage.
          </p>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>Provide, operate, and maintain services</li>
            <li>Improve user experience and website performance</li>
            <li>Send updates, product news, and communications</li>
            <li>Process transactions and payments</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>We do not sell or rent personal information.</p>
          <p>Information may be shared:</p>
          <ul>
            <li>With service providers</li>
            <li>To comply with legal requests</li>
            <li>To enforce policies</li>
            <li>During mergers, acquisitions, or asset sales</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement administrative, technical, and physical safeguards
            designed to protect your information.
          </p>

          <h2>5. Your Rights</h2>
          <ul>
            <li>Access your information</li>
            <li>Update or correct information</li>
            <li>Request deletion</li>
            <li>Withdraw consent</li>
            <li>Lodge complaints with authorities</li>
          </ul>

          <h2>6. Data Retention</h2>
          <p>
            Information is retained only as long as necessary to fulfill
            the purposes outlined in this policy and comply with legal obligations.
          </p>

          <h2>7. International Data Transfers</h2>
          <p>
            If you access Workfloww.ai outside India, information may be transferred
            and processed in India or other jurisdictions.
          </p>

          <h2>8. Third-Party Links</h2>
          <p>
            Our services may contain links to third-party websites.
            We are not responsible for their privacy practices.
          </p>

          <h2>9. Changes To This Policy</h2>
          <p>
            We may periodically update this Privacy Policy.
            Updated versions will be posted with a revised effective date.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            For questions regarding this Privacy Policy:
          </p>
          <p>
            <strong>Email:</strong> manish.chum@workfloww.ai
          </p>

          {/* Action Buttons */}
          <div style={{ 
            display: "flex", 
            gap: "16px", 
            marginTop: "48px",
            alignItems: "center"
          }}>
            <button className="btn-primary" onClick={() => window.location.href = '/'}>
              Back to Home
            </button>
            <button className="btn-secondary" onClick={() => window.location.href = 'mailto:manish.chum@workfloww.ai'}>
              Contact Support
            </button>
          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <div style={{ 
        maxWidth: "800px", 
        margin: "0 auto", 
        padding: "32px 20px 0",
        display: "flex",
        justifyContent: "flex-end"
      }}>
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "8px", 
          fontSize: "0.8rem", 
          color: "#475569" 
        }}>
          <div style={{ 
            width: "20px", 
            height: "20px", 
            backgroundColor: "#ffffffff", 
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            {/* <div style={{ width: "8px", height: "8px", backgroundColor: "white", borderRadius: "2px" }}></div> */}
          </div>
          {/* 2026 Powered by Workfloww.ai */}
        </div>
      </div>
    </div>
  );
}
