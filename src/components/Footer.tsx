"use client";

import { useEffect, useState } from "react";

// April Campaign ends April 30, 2026 at midnight WAT (UTC+1)
const CAMPAIGN_END = new Date("2026-04-30T23:59:59+01:00").getTime();

function getDaysLeft() {
  const diff = Math.max(0, CAMPAIGN_END - Date.now());
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export default function Footer() {
  const [daysLeft, setDaysLeft] = useState(getDaysLeft());

  useEffect(() => {
    const id = setInterval(() => setDaysLeft(getDaysLeft()), 60000); // Update every minute
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="site-footer-main">
      <div className="footer-inner">
        <span className="footer-brand">Connect Nigeria</span>
        <nav className="footer-links">
          <a href="https://www.connectnigeria.com/about-us/privacy-policy" className="footer-link">Privacy Policy</a>
          <a href="https://www.connectnigeria.com/about-us/term-of-use" className="footer-link">Terms of Service</a>
          <a href="https://www.connectnigeria.com/about-us/contact-us" className="footer-link">Contact Support</a>
        </nav>
        <div className="footer-copyright-wrap">
          <p className="footer-copyright">© 2026 Connect Nigeria. Empowering African Business.</p>
        </div>
      </div>
      
      {/* Sticky Campaign Banner */}
      <div className="footer-campaign-banner">
        <div className="footer-campaign-inner">
          <div className="footer-campaign-content">
            <span className="footer-campaign-badge">LIVE CAMPAIGN</span>
            <span className="footer-campaign-text">April window closing in {daysLeft} days. Claim your rewards today.</span>
          </div>
          <a href="https://www.connectnigeria.com/user-manager/business/my-business?confirmbiz=yes" className="footer-campaign-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6 8L7.5 9.5L10 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Confirm My Business
          </a>
        </div>
      </div>
    </footer>
  );
}
