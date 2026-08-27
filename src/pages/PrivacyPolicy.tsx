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
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
            when you access our website, AI-powered tools, upskilling platforms, agentic automation solutions, 
            and mobile applications(enterprise applications distributed under our developer account).
          </p>

          <h2>1. Information We Collect</h2>

          <h3>  1.1 Personal Information</h3>
          <ul>
            <li>  Full name</li>
            <li>  Email address</li>
            <li>  Phone number</li>
            <li>  Company name and job title</li>
            <li>  Billing and payment information</li>
            <li>  Information voluntarily submitted through forms or registrations</li>
          </ul>

          <h3>  1.2 Mobile App & Device Data</h3>
          <ul><li>When you use our mobile applications, we may automatically collect or request access to:</li>
          
            <li><strong>Device Identifiers:</strong> Device ID, operating system version, model, network operator, and IP address.</li>
            <li><strong>App Usage & Diagnostics:</strong> Crash logs, performance statistics, feature usage, and interaction data.</li>
            <li><strong>Device Permissions (with consent):</strong> Camera or media access (if required for field audits, document uploads, or profile photos), location data (if required for enterprise workflow verification), and push notifications.</li>
          </ul>

          <h3>  1.3 Usage Data & Analytics</h3>
          <ul>
            <li>IP address, browser type, and version</li>
            <li>Pages visited, feature interaction, date and time of visits</li>
            <li>Referring website and operating system details</li>
          </ul>

          <h3>  1.4 Cookies and Tracking Technologies</h3>
          <ul><li>Cookies, tracking pixels, local storage, and similar technologies to maintain session state, improve functionality, and analyze usage.</li></ul>
           
          <h2>2. How We Use Your Information</h2> 
            <ul>Provide, operate, and maintain our platform and mobile applications.</ul>

            <ul>Authenticate user accounts and manage enterprise access controls.</ul>

            <ul>Process AI-driven workflows, agentic automation tasks, and field executions.</ul>

            <ul>Improve user experience, app stability, and platform performance.</ul>

            <ul>Send transactional updates, system notifications, and product announcements.</ul>

            <ul>Process transactions and manage billing.</ul>

            <ul>Enforce our Terms of Service and comply with legal obligations.</ul>

          <h2>3. AI Data Processing & Third-Party SDKs</h2>
          <ul><li>
            AI & Automation Tools: Data submitted into our AI tools is processed to execute requested workflow actions. We do not sell your proprietary data to train public third-party models.
          </li>
          <li>
            Third-Party Service Providers: We may share necessary data with trusted cloud infrastructure providers, payment processors, analytics tools, and mobile SDK services strictly to deliver our services.
          </li>
          </ul>

          <h2>4. Information Sharing</h2>   
          <ul>
            <li>We do not sell, rent, or trade your personal information. We may disclose information only:</li>
            <li>With Service Providers: Trusted third parties acting on our behalf under confidentiality agreements.</li>
            <li>For Enterprise Clients: If you use the app under a corporate subscription, your employer or administrative account holder may access usage reports and submitted data.</li>
            <li>Legal Requirements: To comply with court orders, laws, or regulatory requests.</li>
            <li>Business Transfers: In connection with any merger, acquisition, financing, or sale of company assets.</li>
          </ul>


          <h2>5. Data Security</h2>
          <ul><li>
            We implement appropriate administrative, technical, and physical safeguards—including encryption in transit 
            and at rest—designed to protect your personal information against unauthorized access, loss, or misuse.
          </li></ul>

          <h2>6. User Rights & Data Retention</h2>
          <ul><li>
            You have the right to access, update, correct, or request the deletion of your personal data. 
            We retain personal data only as long as necessary to fulfill the purposes outlined in this policy or 
            to comply with legal, tax, and reporting obligations.
          </li></ul>

          <h2>7. Account and Data Deletion Request (Google Play Mandate)</h2>
          <ul><li>
            Users of the mobile application have the right to request account deletion and the purging of associated personal data at any time.
          </li>
          
          <li>
            Data Handling: Upon verification, we will permanently delete or anonymize your personal account data, except where retention is required by law or active enterprise agreement.
          </li></ul>

          <h2>8. International Data Transfers</h2>
          <ul><li>
            If you access Workfloww.ai or the mobile apps from outside India, your information may be transferred to, stored, and processed in India or other jurisdictions where our servers or third-party service providers reside.
          </li></ul>

          <h2>9. Third-Party Links</h2>
          <ul><li>
            Our platform may contain links to external third-party websites or services. We are not responsible for the privacy practices or content of third parties.
          </li></ul>

          <h2>10. Changes To This Privacy Policy</h2>
          <ul><li>
            We may update this Privacy Policy from time to time to reflect changes in our practices, app features, or legal requirements. Updated versions will be posted on this page with a revised effective date.
          </li></ul>

          <h2>11. Contact Us</h2>
          <ul><li>
            If you have questions, concerns, or requests regarding this Privacy Policy or data processing, please contact us at:
          </li></ul>

          
          <ul><li>
            <strong>Email:</strong> manish.chum@workfloww.ai
          </li></ul>

          <ul><li>
            <strong>Website:</strong> <a href="https://www.workfloww.ai" target="_blank" rel="noopener noreferrer">https://www.workfloww.ai</a>
          </li></ul>

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
