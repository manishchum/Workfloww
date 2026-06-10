import * as React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, Grid3x3, Zap, BookOpen, MessageSquare, BarChart3, ArrowRight } from "lucide-react";
import { trackEvent } from "../Analytics";

export default function ContentEngine() {
  const navigate = useNavigate();
  React.useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="lucid-content-engine">
      <style>{`
        :root {
          --accent: #5b4ef5;
          --accent-light: #ede9ff;
          --accent-mid: #7b6ef8;
          --ink: #0f0e17;
          --ink-2: #3a3850;
          --ink-3: #7a7891;
          --surface: #ffffff;
          --surface-2: #f5f4f9;
          --dark-card: #0e0c1f;
          --danger: #e8412a;
          --success: #1a9e68;
          --warn: #d97706;
        }
        
        .lucid-content-engine {
          font-family: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: var(--ink);
          background: var(--surface);
          overflow-x: hidden;
        }
        
        /* ──────────── NAV ──────────── */
        nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(91, 78, 245, 0.08);
          padding: 14px 24px;
        }
        
        nav .container {
          max-width: 1180px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 24px;
        }
        
        .nav-logo {
          font-family: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-weight: 800;
          font-size: 18px;
          color: var(--accent);
        }
        
        .nav-links {
          display: flex;
          gap: 32px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .nav-links a {
          font-size: 14px;
          color: var(--ink);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        .nav-links a:hover {
          color: var(--accent);
        }
        
        .nav-cta {
          background: var(--accent);
          color: white;
          border: none;
          padding: 10px 24px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .nav-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(91, 78, 245, 0.3);
        }
        
        @media (max-width: 900px) {
          .nav-links { display: none; }
        }
        
        /* ──────────── HERO ──────────── */
        .section {
          padding: 2rem 24px;
        }
        
        .section#hero {
          padding: 80px 24px 60px;
        }
        
        .section.surface {
          background: var(--surface-2);
        }
        
        .container {
          max-width: 1180px;
          margin: 0 auto;
          padding-left: 45px;
          padding-right: 42px;
        }
        
        .hero-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 60px;
          align-items: center;
        }
        
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: #fce7f3;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: #be185d;
          margin-bottom: 24px;
        }
        
        .hero-eyebrow::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: #be185d;
        }
        
        .hero-title {
          font-family: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 800;
          letter-spacing: -0.015em;
          line-height: 1.06;
          margin: 0 0 24px;
          color: var(--ink);
        }
        
        .hero-title span {
          color: var(--accent);
        }
        
        .hero-copy {
          font-size: 17px;
          color: var(--ink-2);
          line-height: 1.65;
          margin-bottom: 32px;
        }
        
        .cta-group {
          display: flex;
          gap: 14px;
        }
        
        .btn-primary {
          background: var(--accent);
          color: white;
          border: none;
          padding: 14px 32px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 15px;
          box-shadow: 0 4px 20px rgba(91, 78, 245, 0.3);
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(91, 78, 245, 0.4);
        }
        
        /* ──────────── HERO CARD (Content Library) ──────────── */
        .hero-card {
          border-radius: 18px;
          background: white;
          border: 1px solid rgba(91, 78, 245, 0.1);
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
          animation: slideInUp 0.6s ease;
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .card-header {
          background: #9d174d;
          padding: 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .card-header-left {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          flex: 1;
        }
        
        .card-icon {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          display: grid;
          place-items: center;
          color: white;
          flex-shrink: 0;
        }
        
        .card-header-text h3 {
          font-size: 14px;
          font-weight: 500;
          color: white;
          margin: 0;
        }
        
        .card-header-text p {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.75);
          margin: 2px 0 0;
        }
        
        .card-badge {
          background: rgba(255, 255, 255, 0.18);
          border-radius: 100px;
          padding: 6px 10px;
          text-align: center;
        }
        
        .card-badge-number {
          font-family: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: white;
          display: block;
        }
        
        .card-badge-label {
          font-size: 9px;
          color: rgba(255, 255, 255, 0.75);
          display: block;
        }
        
        .card-body {
          background: white;
          padding: 20px;
        }
        
        .section-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: var(--ink-3);
          margin-bottom: 12px;
          display: block;
        }
        
        .content-rows {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .content-row {
          display: grid;
          grid-template-columns: 36px 1fr 80px;
          gap: 12px;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid rgba(15, 14, 23, 0.06);
        }
        
        .content-row:last-child {
          border-bottom: none;
        }
        
        .row-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: grid;
          place-items: center;
          font-size: 16px;
        }
        
        .row-content h5 {
          font-size: 13px;
          font-weight: 600;
          color: var(--ink);
          margin: 0;
        }
        
        .row-content p {
          font-size: 11px;
          color: var(--ink-3);
          margin: 2px 0 0;
        }
        
        .status-pill {
          font-size: 9px;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 100px;
          text-align: center;
        }
        
        .st-live {
          background: rgba(26, 158, 104, 0.12);
          color: #1a9e68;
        }
        
        .st-pending {
          background: rgba(217, 119, 6, 0.12);
          color: #b45309;
        }
        
        .st-draft {
          background: var(--accent-light);
          color: var(--accent);
        }
        
        .st-review {
          background: var(--accent-light);
          color: var(--accent);
        }
        
        /* ──────────── FEATURE ROWS ──────────── */
        .feature-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 60px;
          align-items: center;
          margin: 96px 0;
        }
        
        .feature-row.rtl {
          direction: rtl;
        }
        
        .feature-row.rtl > * {
          direction: ltr;
        }
        
        .feature-text h3 {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: var(--ink-3);
          margin: 0 0 12px;
        }
        
        .feature-title {
          font-family: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: clamp(28px, 3.5vw, 48px);
          font-weight: 800;
          letter-spacing: -0.015em;
          line-height: 1.06;
          margin: 0 0 20px;
          color: var(--ink);
        }
        
        .feature-copy {
          font-size: 16px;
          color: var(--ink-2);
          line-height: 1.65;
          margin-bottom: 28px;
        }
        
        .feature-checklist {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        
        .feature-check-item {
          display: flex;
          gap: 12px;
          font-size: 15px;
          color: var(--ink-2);
          line-height: 1.5;
        }
        
        .feature-check-icon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--accent-light);
          display: grid;
          place-items: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .feature-check-icon svg {
          width: 12px;
          height: 12px;
          color: var(--accent);
          stroke-width: 3;
        }
        
        /* ──────────── DARK CARD (Content Ingestion) ──────────── */
        .dark-card {
          background: var(--dark-card);
          border: 1px solid rgba(91, 78, 245, 0.15);
          border-radius: 18px;
          padding: 20px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }
        
        .dark-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .dark-card-title {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        
        .dark-card-icon {
          width: 22px;
          height: 22px;
          border-radius: 6px;
          background: linear-gradient(135deg, #5b4ef5, #7c3aed);
          display: grid;
          place-items: center;
          color: white;
        }
        
        .dark-card-title h4 {
          font-size: 14px;
          font-weight: 500;
          color: white;
          margin: 0;
        }
        
        .dark-card-subtitle {
          font-size: 12px;
          color: #a78bfa;
        }
        
        .upload-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-bottom: 14px;
        }
        
        .upload-tile {
          border: 1.5px dashed rgba(255, 255, 255, 0.12);
          border-radius: 10px;
          padding: 16px;
          text-align: center;
          transition: border-color 0.2s ease, background 0.2s ease;
          cursor: pointer;
        }
        
        .upload-tile:hover {
          border-color: rgba(91, 78, 245, 0.5);
          background: rgba(91, 78, 245, 0.05);
        }
        
        .upload-tile-emoji {
          font-size: 24px;
          margin-bottom: 8px;
        }
        
        .upload-tile-name {
          font-size: 13px;
          font-weight: 700;
          color: white;
          margin-bottom: 2px;
        }
        
        .upload-tile-desc {
          font-size: 11px;
          color: #a78bfa;
        }
        
        .upload-center-label {
          text-align: center;
          font-size: 11px;
          color: #a78bfa;
          padding: 10px 0;
        }
        
        .ready-row {
          background: rgba(26, 158, 104, 0.1);
          border: 1px solid rgba(26, 158, 104, 0.25);
          border-radius: 10px;
          padding: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }
        
        .ready-left {
          display: flex;
          gap: 8px;
          flex: 1;
        }
        
        .ready-icon {
          font-size: 16px;
          flex-shrink: 0;
        }
        
        .ready-text h5 {
          font-size: 13px;
          font-weight: 700;
          color: white;
          margin: 0;
        }
        
        .ready-text p {
          font-size: 11px;
          color: #a78bfa;
          margin: 2px 0 0;
        }
        
        .ready-badge {
          background: rgba(26, 158, 104, 0.2);
          color: #1a9e68;
          font-size: 10px;
          font-weight: 600;
          padding: 4px 8px;
          border-radius: 100px;
          flex-shrink: 0;
        }
        
        /* ──────────── LIGHT CARD (Voice Insights) ──────────── */
        .light-card {
          background: white;
          border-radius: 18px;
          border: 1px solid rgba(91, 78, 245, 0.1);
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
        }
        
        .light-card-header {
          background: var(--dark-card);
          color: white;
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }
        
        .light-card-header-left {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        
        .light-card-icon {
          font-size: 20px;
        }
        
        .light-card-header h4 {
          font-size: 14px;
          font-weight: 500;
          margin: 0;
        }
        
        .light-card-body {
          padding: 16px;
        }
        
        .insights-header {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: var(--ink-3);
          margin-bottom: 12px;
        }
        
        .insight-rows {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 14px;
        }
        
        .insight-row {
          border-radius: 8px;
          border-left: 3px solid;
          padding: 12px 14px;
        }
        
        .insight-amber {
          background: #fffbeb;
          border-left-color: #fbbf24;
        }
        
        .insight-blue {
          background: #eff6ff;
          border-left-color: #3b82f6;
        }
        
        .insight-green {
          background: #f0fdf4;
          border-left-color: #22c55e;
        }
        
        .insight-row h4 {
          font-size: 13px;
          font-weight: 600;
          margin: 0 0 4px;
        }
        
        .insight-amber h4 { color: #92400e; }
        .insight-blue h4 { color: #1e40af; }
        .insight-green h4 { color: #166534; }
        
        .insight-row p {
          font-size: 12px;
          font-style: italic;
          opacity: 0.75;
          margin: 0;
        }
        
        .insight-amber p { color: #92400e; }
        .insight-blue p { color: #1e40af; }
        .insight-green p { color: #166534; }
        
        .ai-recommendation {
          background: linear-gradient(135deg, #5b4ef5, #7c3aed);
          border-radius: 8px;
          padding: 14px 16px;
        }
        
        .ai-recommendation-label {
          font-size: 9px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 6px;
          display: block;
        }
        
        .ai-recommendation-text {
          font-size: 13px;
          color: white;
          line-height: 1.5;
          margin: 0;
        }

        /* ──────────── SPRINT EDITOR CARD ──────────── */
        .sprint-editor-card {
          background: white;
          border-radius: 18px;
          border: 1px solid rgba(91, 78, 245, 0.1);
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
        }

        .sprint-editor-header {
          background: var(--dark-card);
          padding: 16px 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .sprint-editor-header-left {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .sprint-editor-header h4 {
          font-size: 14px;
          font-weight: 500;
          color: white;
          margin: 0;
        }

        .sprint-editor-subtitle {
          font-size: 12px;
          color: #a78bfa;
        }

        .sprint-editor-body {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .sprint-editor-sprint-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--ink-3);
          margin-bottom: 4px;
        }

        .sprint-q-row {
          border-radius: 10px;
          padding: 12px 14px;
          border: 1px solid;
        }

        .sprint-q-approved {
          background: #f0fdf4;
          border-color: #bbf7d0;
        }

        .sprint-q-edit {
          background: #fefce8;
          border-color: #fde047;
        }

        .sprint-q-pending {
          background: #f8fafc;
          border-color: #e2e8f0;
        }

        .sprint-q-meta {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .sprint-q-approved .sprint-q-meta { color: #166534; }
        .sprint-q-edit .sprint-q-meta { color: #854d0e; }
        .sprint-q-pending .sprint-q-meta { color: var(--ink-3); }

        .sprint-q-text {
          font-size: 13px;
          color: var(--ink);
          line-height: 1.5;
          margin: 0;
        }

        .sprint-q-pending .sprint-q-text { color: var(--ink-3); }

        .sprint-q-comment {
          font-size: 11px;
          color: #92400e;
          margin: 6px 0 0;
          font-style: italic;
        }

        .sprint-editor-actions {
          display: flex;
          gap: 8px;
        }

        .sprint-btn-primary {
          flex: 1;
          background: var(--accent);
          border: none;
          border-radius: 8px;
          padding: 10px;
          font-size: 12px;
          font-weight: 700;
          color: white;
          cursor: pointer;
          transition: opacity 0.2s;
        }

        .sprint-btn-primary:hover { opacity: 0.88; }

        .sprint-btn-secondary {
          flex: 1;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 10px;
          font-size: 12px;
          font-weight: 600;
          color: var(--ink-3);
          cursor: pointer;
          transition: border-color 0.2s;
        }

        .sprint-btn-secondary:hover { border-color: var(--accent); }

        .sprint-awaiting-bar {
          background: #ede9ff;
          border-radius: 8px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .sprint-awaiting-bar span {
          font-size: 12px;
          font-weight: 600;
          color: var(--accent);
        }

        /* ──────────── CONTENT PERFORMANCE CARD ──────────── */
        .perf-card {
          background: white;
          border-radius: 18px;
          border: 1px solid rgba(91, 78, 245, 0.1);
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
        }

        .perf-card-header {
          background: var(--dark-card);
          padding: 16px 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .perf-card-header-left {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .perf-card-header h4 {
          font-size: 14px;
          font-weight: 500;
          color: white;
          margin: 0;
        }

        .perf-card-subtitle {
          font-size: 12px;
          color: #a78bfa;
        }

        .perf-card-body {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .perf-kpi-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }

        .perf-kpi-tile {
          background: #f8fafc;
          border-radius: 10px;
          padding: 12px;
          text-align: center;
          border: 1px solid #e8ecf0;
        }

        .perf-kpi-value {
          font-size: 22px;
          font-weight: 800;
          color: var(--ink);
          margin: 0 0 2px;
          font-family: "DM Sans", sans-serif;
        }

        .perf-kpi-value.green { color: #10b981; }

        .perf-kpi-label {
          font-size: 10px;
          color: var(--ink-3);
          margin: 0 0 2px;
        }

        .perf-kpi-trend {
          font-size: 9px;
          color: #10b981;
          font-weight: 600;
        }

        .perf-leaderboard {
          background: #f8fafc;
          border-radius: 10px;
          padding: 12px 14px;
          border: 1px solid #e8ecf0;
        }

        .perf-leaderboard-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--ink-3);
          margin-bottom: 10px;
        }

        .perf-leaderboard-rows {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .perf-lb-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .perf-lb-name {
          font-size: 11px;
          color: var(--ink-2);
          flex: 1;
          min-width: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .perf-lb-bar-track {
          width: 64px;
          height: 5px;
          background: #e8ecf0;
          border-radius: 3px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .perf-lb-bar-fill {
          height: 100%;
          border-radius: 3px;
        }

        .perf-lb-score {
          font-size: 11px;
          font-weight: 700;
          width: 30px;
          text-align: right;
          flex-shrink: 0;
        }

        .perf-flag-bar {
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 8px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .perf-flag-bar span {
          font-size: 11px;
          font-weight: 600;
          color: #991b1b;
        }
        
        /* ──────────── STATS BAR ──────────── */
        .stats-bar {
          background: var(--dark-card);
          padding: 56px 24px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0;
          text-align: center;
        }
        
        .stats-bar-item {
          border-right: 1px solid rgba(255, 255, 255, 0.07);
          padding: 0 24px;
        }
        
        .stats-bar-item:last-child {
          border-right: none;
        }
        
        .stat-number {
          font-family: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 800;
          color: white;
          margin: 0;
        }
        
        .stat-accent {
          color: #a78bfa;
        }
        
        .stat-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.45);
          margin-top: 10px;
          line-height: 1.5;
        }
        
        /* ──────────── FEATURES GRID ──────────── */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-top: 40px;
        }
        
        .feature-card {
          background: white;
          border: 1px solid rgba(15, 14, 23, 0.07);
          border-radius: 14px;
          padding: 24px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(91, 78, 245, 0.09);
        }
        
        .feature-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--accent-light);
          display: grid;
          place-items: center;
          font-size: 22px;
          margin-bottom: 14px;
        }
        
        .feature-card h4 {
          font-family: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: var(--ink);
          margin: 0 0 10px;
        }
        
        .feature-card p {
          font-size: 14px;
          color: var(--ink-2);
          line-height: 1.6;
          margin: 0;
        }
        
        @media (max-width: 1000px) {
          .features-grid { grid-template-columns: repeat(2, 1fr); }
        }
        
        @media (max-width: 600px) {
          .features-grid { grid-template-columns: 1fr; }
        }
        
        /* ──────────── CTA BLOCK ──────────── */
        .cta-section {
          background: var(--surface-2);
          padding: 80px 24px;
        }
        
        .cta-inner {
          max-width: 1180px;
          margin: 0 auto;
          background: var(--accent);
          border-radius: 24px;
          padding: 72px 48px;
          text-align: center;
        }
        
        .cta-inner h2 {
          font-family: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800;
          color: white;
          margin: 0 0 28px;
          letter-spacing: -0.015em;
        }
        
        .cta-btn {
          background: white;
          color: var(--accent);
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          padding: 14px 32px;
          border-radius: 100px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: inline-block;
        }
        
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.18);
        }
        
        /* ──────────── FOOTER ──────────── */
        footer {
          background: white;
          border-top: 1px solid rgba(91, 78, 245, 0.08);
          padding: 24px;
        }
        
        .footer-container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .footer-logo {
          font-family: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-weight: 800;
          font-size: 16px;
          color: var(--accent);
        }
        
        .footer-copy {
          font-size: 13px;
          color: var(--ink-3);
        }
        
        /* ──────────── REVEAL ANIMATION ──────────── */
        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.55s ease;
        }
        
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* ──────────── RESPONSIVE ──────────── */
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .nav-links { display: none; }
          
          .feature-row {
            grid-template-columns: 1fr;
            gap: 40px;
            margin: 60px 0;
          }
          
          .feature-row.rtl {
            direction: ltr;
          }
          
          .stats-bar {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          
          .stats-bar-item {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.07);
            padding: 24px 0;
          }
          
          .stats-bar-item:last-child {
            border-bottom: none;
          }
          
          .container {
            padding-left: 24px;
            padding-right: 24px;
          }
          
          .cta-inner {
            padding: 48px 24px;
          }

          .perf-kpi-row {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (max-width: 600px) {
          .section#hero {
            padding: 60px 16px 40px;
          }
          
          .section {
            padding: 1.5rem 16px;
          }
          
          .container {
            padding-left: 16px;
            padding-right: 16px;
          }
          
          .hero-title {
            font-size: 36px;
          }
          
          .feature-title {
            font-size: 28px;
          }
          
          .feature-row {
            margin: 40px 0;
          }
          
          .cta-section {
            padding: 60px 16px;
          }
          
          .footer-container {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>

      {/* ─────────── HERO ─────────── */}
      <section id="hero" className="section">
        <div className="container">
          <div className="hero-grid">
            {/* Left Column */}
            <div>
              <h1 className="hero-title">
                Your Best Knowledge,<br />in Every <span>Rep's</span><br />Hands
              </h1>
              <p className="hero-copy">
                The knowledge that wins deals sits in documents, decks, and the heads of your best people. Lucid extracts it, structures it, and delivers it to every rep — before their next customer conversation.
              </p>
              <div className="cta-group">
                <button
  onClick={() => {
    trackEvent(
      "Lead",
      "Book Demo Click",
      "CTA Button"
    );

    navigate("/contact");
  }}
  className="bg-[#6357d4] hover:bg-[#5146c7] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
>
  Book Demo <ArrowRight className="w-5 h-5" />
</button>
              </div>
            </div>

            {/* Right Column - Content Library Card */}
            <div>
              <div className="hero-card">
                <div className="card-header">
                  <div className="card-header-left">
                    <div className="card-icon">
                      <Grid3x3 size={20} />
                    </div>
                    <div className="card-header-text">
                      <h3>Content Library</h3>
                      <p>Sales Content · Live</p>
                    </div>
                  </div>
                  <div className="card-badge">
                    <span className="card-badge-number">24</span>
                    <span className="card-badge-label">active</span>
                  </div>
                </div>

                <div className="card-body">
                  <span className="section-label">Recently Deployed</span>
                  <div className="content-rows">
                    <div className="content-row">
                      <div className="row-icon" style={{ background: '#fce7f3' }}>📦</div>
                      <div className="row-content">
                        <h5>Q3 Product Launch Sprints</h5>
                        <p>3 sprints · 847 reps assigned</p>
                      </div>
                      <span className="status-pill st-live">LIVE</span>
                    </div>
                    <div className="content-row">
                      <div className="row-icon" style={{ background: '#ede9ff' }}>🎬</div>
                      <div className="row-content">
                        <h5>Objection Handling Roleplay</h5>
                        <p>5 scenarios · All regions</p>
                      </div>
                      <span className="status-pill st-live">LIVE</span>
                    </div>
                    <div className="content-row">
                      <div className="row-icon" style={{ background: '#f5f4f9' }}>⚖️</div>
                      <div className="row-content">
                        <h5>Compliance Update — July</h5>
                        <p>1 sprint · 2 mins · Mandatory</p>
                      </div>
                      <span className="status-pill st-pending">PENDING</span>
                    </div>
                  </div>

                  <span className="section-label" style={{ marginTop: '16px' }}>In Creation</span>
                  <div className="content-rows">
                    <div className="content-row">
                      <div className="row-icon" style={{ background: '#ede9ff' }}>✍️</div>
                      <div className="row-content">
                        <h5>New FMCG Scheme Brief</h5>
                        <p>AI processing · ETA 4 hrs</p>
                      </div>
                      <span className="status-pill st-draft">DRAFT</span>
                    </div>
                    <div className="content-row">
                      <div className="row-icon" style={{ background: '#fce7f3' }}>💬</div>
                      <div className="row-content">
                        <h5>QSR Upsell Scripts — Q4</h5>
                        <p>Awaiting L&D review</p>
                      </div>
                      <span className="status-pill st-review">REVIEW</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── FEATURE ROW 1: Multi-Format Ingestion ─────────── */}
      <section className="section surface" id="how-it-works" data-reveal>
        <div className="container">
          <div className="feature-row">
            <div>
              <h3 className="feature-text">
                <div style={{ marginBottom: '8px' }}>MULTI-FORMAT INGESTION</div>
              </h3>
              <h2 className="feature-title">
                Whatever Format Your Knowledge Lives In — Lucid Converts It
              </h2>
              <p className="feature-copy">
                Your SOPs are in PPT. Your playbooks are in Word. Your best trainer's knowledge is in a voice note. Lucid ingests all of it and turns it into structured, deployable learning content. No reformatting. No L&D agency.
              </p>
              <ul className="feature-checklist">
                {[
                  "PDF, PPT, Word docs, URLs, voice notes all accepted",
                  "AI extracts key concepts, structures them into sprint modules",
                  "Your team reviews and approves before deployment",
                  "Source document always preserved and traceable",
                ].map((item) => (
                  <li className="feature-check-item" key={item}>
                    <div className="feature-check-icon"><CheckCircle2 size={12} /></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="dark-card">
                <div className="dark-card-header">
                  <div className="dark-card-title">
                    <div className="dark-card-icon">🔄</div>
                    <h4>Content Ingestion</h4>
                  </div>
                  <div className="dark-card-subtitle">All formats supported</div>
                </div>
                <div className="upload-grid">
                  {[
                    { emoji: "📄", name: "PDF / Word", desc: "SOPs, manuals" },
                    { emoji: "📊", name: "PowerPoint", desc: "Decks, playbooks" },
                    { emoji: "🎙️", name: "Voice Notes", desc: "Trainer insights" },
                    { emoji: "🔗", name: "URLs", desc: "Web pages, docs" },
                  ].map((t) => (
                    <div className="upload-tile" key={t.name}>
                      <div className="upload-tile-emoji">{t.emoji}</div>
                      <div className="upload-tile-name">{t.name}</div>
                      <div className="upload-tile-desc">{t.desc}</div>
                    </div>
                  ))}
                </div>
                <div className="upload-center-label">AI processes in under 6 hours</div>
                <div className="ready-row">
                  <div className="ready-left">
                    <div className="ready-icon">✨</div>
                    <div className="ready-text">
                      <h5>Ready-to-deploy WhatsApp Sprint</h5>
                      <p>Questions, scenarios & assessments included</p>
                    </div>
                  </div>
                  <div className="ready-badge">READY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── FEATURE ROW 2: Voice Insights ─────────── */}
      <section className="section" id="voice-insights" data-reveal>
        <div className="container">
          <div className="feature-row rtl">
            <div>
              <div className="light-card">
                <div className="light-card-header">
                  <div className="light-card-header-left">
                    <div className="light-card-icon">🎙️</div>
                    <h4>Voice Insights Report</h4>
                  </div>
                  <div style={{ fontSize: '12px', color: '#a78bfa' }}>This week · 234 responses</div>
                </div>
                <div className="light-card-body">
                  <span className="insights-header">Top Field Challenges This Week</span>
                  <div className="insight-rows">
                    <div className="insight-row insight-amber">
                      <h4>Pricing Objections · 47 mentions</h4>
                      <p>"Customers say competitors are 20% cheaper"</p>
                    </div>
                    <div className="insight-row insight-blue">
                      <h4>Product Confusion · 31 mentions</h4>
                      <p>"Reps unsure about new feature differences"</p>
                    </div>
                    <div className="insight-row insight-green">
                      <h4>Positive Signal · 28 mentions</h4>
                      <p>"Customers responding well to demo video"</p>
                    </div>
                  </div>
                  <div className="ai-recommendation">
                    <span className="ai-recommendation-label">💡 AI Recommendation</span>
                    <p className="ai-recommendation-text">
                      Deploy 'Competitive Pricing' sprint to all 847 reps — estimated impact: +12% conversion
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="feature-text">
                <div style={{ marginBottom: '8px' }}>GROUND-LEVEL VOICE INSIGHTS</div>
              </h3>
              <h2 className="feature-title">
                What Your Frontline Is Actually Saying — Surfaced Automatically
              </h2>
              <p className="feature-copy">
                Lucid captures open responses from your field team inside WhatsApp sprints and surfaces patterns your managers would never otherwise see. Real intel from the ground — not a survey that nobody fills.
              </p>
              <ul className="feature-checklist">
                {[
                  "Open-text responses captured in sprint flows",
                  "AI clusters common themes and objections",
                  "Surface product gaps, market intel, and customer questions",
                  "Feeds directly into your next content sprint",
                ].map((item) => (
                  <li className="feature-check-item" key={item}>
                    <div className="feature-check-icon"><CheckCircle2 size={12} /></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── FEATURE ROW 3: Sprint Editor & Approval ─────────── */}
      <section className="section surface" id="sprint-editor" data-reveal>
        <div className="container">
          <div className="feature-row">
            {/* Left - Text */}
            <div>
              <h3 className="feature-text">
                <div style={{ marginBottom: '8px' }}>SPRINT EDITOR & APPROVAL</div>
              </h3>
              <h2 className="feature-title">
                AI Builds the First Draft. Your Team Controls What Goes Live.
              </h2>
              <p className="feature-copy">
                Lucid's AI generates the sprint — questions, scenarios, knowledge checks — from your source document. Your L&D or enablement team reviews, edits, and approves before anything reaches a single rep. Full creative control. Zero heavy lifting.
              </p>
              <ul className="feature-checklist">
                {[
                  "AI-generated first draft ready in under 6 hours",
                  "Inline editor — reorder, rewrite, add or remove questions",
                  "Multi-level approval workflow before deployment",
                  "Version history — track every edit, rollback anytime",
                  "Deploy to specific cohorts, regions, or roles — not everyone",
                ].map((item) => (
                  <li className="feature-check-item" key={item}>
                    <div className="feature-check-icon"><CheckCircle2 size={12} /></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Sprint Editor Card */}
            <div>
              <div className="sprint-editor-card">
                <div className="sprint-editor-header">
                  <div className="sprint-editor-header-left">
                    <span style={{ fontSize: '18px' }}>✍️</span>
                    <h4>Sprint Editor</h4>
                  </div>
                  <div className="sprint-editor-subtitle">Draft v2 · Pending Approval</div>
                </div>

                <div className="sprint-editor-body">
                  <div className="sprint-editor-sprint-label">
                    📋 Sprint: Objection Handling — Premium Plans
                  </div>

                  <div className="sprint-q-row sprint-q-approved">
                    <div className="sprint-q-meta">Q1 · MCQ · ✅ Approved</div>
                    <p className="sprint-q-text">
                      What's the first thing you establish when a customer says "too expensive"?
                    </p>
                  </div>

                  <div className="sprint-q-row sprint-q-edit">
                    <div className="sprint-q-meta">Q2 · Roleplay · ✏️ Edit suggested</div>
                    <p className="sprint-q-text">
                      Customer: "I'll think about it." Respond as you would in the field.
                    </p>
                    <p className="sprint-q-comment">💬 Reviewer: "Add a follow-up prompt here"</p>
                  </div>

                  <div className="sprint-q-row sprint-q-pending">
                    <div className="sprint-q-meta">Q3 · Case Study · ⏳ Pending review</div>
                    <p className="sprint-q-text">
                      Amit meets a customer comparing 4 insurers...
                    </p>
                  </div>

                  <div className="sprint-editor-actions">
                    <button className="sprint-btn-primary">Request Approval</button>
                    <button className="sprint-btn-secondary">Save Draft</button>
                  </div>

                  <div className="sprint-awaiting-bar">
                    <span>👤</span>
                    <span>Awaiting approval from: Priya (L&D Head)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── FEATURE ROW 4: Content Performance Analytics ─────────── */}
      <section className="section" id="content-performance" data-reveal>
        <div className="container">
          <div className="feature-row rtl">
            {/* Left - Performance Card */}
            <div>
              <div className="perf-card">
                <div className="perf-card-header">
                  <div className="perf-card-header-left">
                    <span style={{ fontSize: '18px' }}>📈</span>
                    <h4>Content Performance</h4>
                  </div>
                  <div className="perf-card-subtitle">Q3 · All Regions</div>
                </div>

                <div className="perf-card-body">
                  <div className="perf-kpi-row">
                    <div className="perf-kpi-tile">
                      <p className="perf-kpi-value">24</p>
                      <p className="perf-kpi-label">Active Sprints</p>
                      <p className="perf-kpi-trend">↑ 6 this quarter</p>
                    </div>
                    <div className="perf-kpi-tile">
                      <p className="perf-kpi-value">89%</p>
                      <p className="perf-kpi-label">Avg Completion</p>
                      <p className="perf-kpi-trend">↑ vs 61% LMS</p>
                    </div>
                    <div className="perf-kpi-tile">
                      <p className="perf-kpi-value green">4.2x</p>
                      <p className="perf-kpi-label">Avg ROI</p>
                      <p className="perf-kpi-trend">Across all sprints</p>
                    </div>
                  </div>

                  <div className="perf-leaderboard">
                    <div className="perf-leaderboard-label">Sprint Performance Leaderboard</div>
                    <div className="perf-leaderboard-rows">
                      {[
                        { name: "Objection Handling — Premium", pct: 95, color: "#10b981" },
                        { name: "New Product Launch — Term Plus", pct: 88, color: "#10b981" },
                        { name: "Compliance Refresh — July", pct: 72, color: "#f59e0b" },
                        { name: "Upsell Techniques — Q3", pct: 41, color: "#ef4444" },
                      ].map((row) => (
                        <div className="perf-lb-row" key={row.name}>
                          <div className="perf-lb-name">{row.name}</div>
                          <div className="perf-lb-bar-track">
                            <div
                              className="perf-lb-bar-fill"
                              style={{ width: `${row.pct}%`, background: row.color }}
                            />
                          </div>
                          <div className="perf-lb-score" style={{ color: row.color }}>
                            {row.pct}%
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="perf-flag-bar">
                    <span>⚠️</span>
                    <span>1 sprint flagged for revision — low completion + poor KPI correlation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Text */}
            <div>
              <h3 className="feature-text">
                <div style={{ marginBottom: '8px' }}>CONTENT PERFORMANCE ANALYTICS</div>
              </h3>
              <h2 className="feature-title">
                See What's Moving the Needle. Kill What Isn't.
              </h2>
              <p className="feature-copy">
                Every sprint Lucid deploys is tracked against real outcomes. Completion rates, assessment scores, KPI movement post-sprint — all in one view. You finally know which content is earning its place and which is just noise.
              </p>
              <ul className="feature-checklist">
                {[
                  "Sprint-level completion, drop-off, and score data",
                  "KPI movement tracked pre and post each sprint",
                  "Identify top-performing content across verticals and regions",
                  "Auto-flag underperforming sprints for revision",
                  "Share ROI reports with leadership in one click",
                ].map((item) => (
                  <li className="feature-check-item" key={item}>
                    <div className="feature-check-icon"><CheckCircle2 size={12} /></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── STATS BAR ─────────── */}
      <section className="stats-bar" data-reveal>
        <div className="stats-bar-item">
          <p className="stat-number">70<span className="stat-accent">%</span></p>
          <p className="stat-label">Reduction in content creation time vs manual process</p>
        </div>
        <div className="stats-bar-item">
          <p className="stat-number">6<span className="stat-accent">hrs</span></p>
          <p className="stat-label">From raw document to live WhatsApp sprint</p>
        </div>
        <div className="stats-bar-item">
          <p className="stat-number">4<span className="stat-accent">+</span></p>
          <p className="stat-label">formats — PDF, PPT, Word, voice — all converted by AI</p>
        </div>
      </section>

      {/* ─────────── MORE FEATURES GRID ─────────── */}
      <section className="section surface" id="features" data-reveal>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="feature-title" style={{ marginBottom: '12px' }}>More Content Features</h2>
            <p className="feature-copy" style={{ fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
              The full content engine your sales organisation needs
            </p>
          </div>
          <div className="features-grid">
            {[
              { icon: "📦", title: "Multi-Format Ingestion", desc: "PDF, PPT, Word, voice notes, URLs — whatever format your knowledge lives in, Lucid converts it into a deployable sprint." },
              { icon: "✏️", title: "Sprint Editor & Approval", desc: "AI builds the first draft. Your L&D or enablement team edits, approves, and deploys. Hours, not weeks." },
              { icon: "🏗️", title: "Vertical-Ready Templates", desc: "Pre-built sprint structures for insurance, QSR, pharma, FMCG — plug in your content and go live." },
              { icon: "🌐", title: "Auto-Translation", desc: "Every sprint auto-translated into regional languages. One source content, every language, every region." },
              { icon: "🔍", title: "RAG Quality Assurance", desc: "AI-generated content audited against source documents before deployment. Accuracy guaranteed." },
              { icon: "📈", title: "Content Performance Analytics", desc: "See which sprints move the needle on KPIs. Kill what doesn't work. Double down on what does." },
            ].map((card) => (
              <div className="feature-card" key={card.title}>
                <div className="feature-card-icon">{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CTA BLOCK ─────────── */}
      <section className="cta-section" data-reveal>
        <div className="cta-inner">
          <h2>Ready to put your best knowledge in every rep's hands?</h2>
          <button
  onClick={() => {
    trackEvent(
      "Lead",
      "Book Demo Click",
      "CTA Button"
    );

    navigate("/contact");
  }}
  className="bg-[#6357d4] hover:bg-[#5146c7] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
>
  Book Demo <ArrowRight className="w-5 h-5" />
</button>
        </div>
      </section>

      {/* ─────────── FOOTER ─────────── */}
      {/* <footer>
        <div className="footer-container">
          <div className="footer-logo">Lucid</div>
          <div className="footer-copy">© 2026 Lucid. All rights reserved.</div>
        </div>
      </footer> */}
    </div>
  );
}