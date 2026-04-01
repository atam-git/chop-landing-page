export default function Footer() {
  return (
    <footer className="site-footer-main">
      <div className="footer-inner">
        <span className="footer-brand">Connect Nigeria</span>
        <nav className="footer-links">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
          <a href="#" className="footer-link">Contact Support</a>
        </nav>
        <div className="footer-copyright-wrap">
          <p className="footer-copyright">© 2024 Connect Nigeria. Empowering African Business.</p>
        </div>
      </div>
      
      {/* Sticky Campaign Banner */}
      <div className="footer-campaign-banner">
        <div className="footer-campaign-inner">
          <div className="footer-campaign-content">
            <span className="footer-campaign-badge">LIVE CAMPAIGN</span>
            <span className="footer-campaign-text">April window closing in 4 days. Claim your rewards today.</span>
          </div>
          <a href="#" className="footer-campaign-btn">
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
