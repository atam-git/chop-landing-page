'use client';

export default function AprilRewards() {
  return (
    <section className="april-rewards-section">
      <div className="april-rewards-inner">
        <div className="april-rewards-heading">
          <h2 className="april-rewards-title">
            This is <span className="april-rewards-not">NOT</span> April Fools.
          </h2>
          <p className="april-rewards-subtitle">
            Exclusive rewards for businesses that confirm during this campaign window.
          </p>
        </div>

        <div className="april-rewards-cards">
          {/* Option A */}
          <div className="april-reward-card">
            <div className="april-card-icon">
              <svg width="140" height="140" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="6" y="58" fontSize="60" fill="rgba(163,213,72,0.12)" fontWeight="900" fontFamily="Plus Jakarta Sans, sans-serif">%</text>
              </svg>
            </div>
            <div className="april-card-content">
              <span className="april-option-label">OPTION A</span>
              <h3 className="april-card-title">50% Off Top-Spot Placement</h3>
              <p className="april-card-desc">
                Get featured on our homepage at half the price for the first 3 months.
              </p>
            </div>
            <button className="april-select-btn">Select Reward</button>
          </div>

          {/* Option B */}
          <div className="april-reward-card april-reward-card--coming-soon">
            <div className="april-card-icon april-card-icon--blur">
              <svg width="140" height="140" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 14h6l8 28h28l6-18H22" stroke="rgba(163,213,72,0.18)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="30" cy="48" r="3" fill="rgba(163,213,72,0.18)"/>
                <circle cx="46" cy="48" r="3" fill="rgba(163,213,72,0.18)"/>
              </svg>
            </div>
            <div className="april-card-content april-card-content--blur">
              <span className="april-option-label">OPTION B</span>
              <h3 className="april-card-title">Buy 1 Get 2 Ads Free</h3>
              <p className="april-card-desc">
                Book one category ad and we'll boost your business in two additional sub-categories.
              </p>
            </div>
            <button className="april-select-btn april-select-btn--coming-soon" disabled>Coming Soon</button>
          </div>
        </div>
      </div>
    </section>
  );
}
