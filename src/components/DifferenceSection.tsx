export default function DifferenceSection() {
  return (
    <section className="difference-section">
      <div className="difference-inner">
        <h2 className="difference-title">The Difference is Clear</h2>

        <div className="difference-cards">
          {/* Left: Unverified card */}
          <div className="diff-card diff-card--unverified">
            <div className="diff-card-header">
              <div className="diff-biz-info">
                <div className="diff-avatar diff-avatar--gray" />
                <div className="diff-biz-text">
                  <span className="diff-biz-name">Standard Business</span>
                  <span className="diff-biz-sub">Unverified Listing</span>
                </div>
              </div>
              <div className="diff-trust-badge diff-trust-badge--bad">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="#dc2626" strokeWidth="2" />
                  <path d="M12 8v4M12 16h.01" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>Not Trusted</span>
              </div>
            </div>
            <div className="diff-skeleton-row">
              <div className="diff-skeleton diff-skeleton--long diff-skeleton--gray" />
              <div className="diff-skeleton diff-skeleton--short diff-skeleton--gray" />
            </div>
            <div className="diff-card-footer diff-card-footer--bad">
              <span>Limited Search Visibility</span>
            </div>
          </div>

          {/* Right: Verified card */}
          <div className="diff-card diff-card--verified">
            <div className="diff-premium-badge">PREMIUM</div>
            <div className="diff-card-header">
              <div className="diff-biz-info">
                <div className="diff-avatar diff-avatar--green">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" stroke="#006E21" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 22V12h6v10" stroke="#006E21" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="diff-biz-text">
                  <span className="diff-biz-name">Growth-Oriented Enterprise</span>
                  <span className="diff-biz-sub diff-biz-sub--green">Verified Listing</span>
                </div>
              </div>
              <div className="diff-trust-badge diff-trust-badge--good">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.6 14.6L15.65 7.55L14.25 6.15L8.6 11.8L5.75 8.95L4.35 10.35L8.6 14.6M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" fill="#006E21" />
                </svg>
                <span>Trusted</span>
              </div>
            </div>
            <div className="diff-skeleton-row">
              <div className="diff-skeleton diff-skeleton--long diff-skeleton--green" />
              <div className="diff-skeleton diff-skeleton--mid diff-skeleton--green" />
            </div>
            <div className="diff-card-footer diff-card-footer--good">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Maximum Visibility Boost</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
