const supportingDocuments = [
  {
    label: "Valid ID",
    description: "NIN, Voter's Card, Driver's License, International Passport",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="#006E21" strokeWidth="1.5" />
        <circle cx="8" cy="11" r="2.5" stroke="#006E21" strokeWidth="1.5" />
        <path d="M4 17c0-2 1.8-3 4-3s4 1 4 3" stroke="#006E21" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 9h4M14 12h3" stroke="#006E21" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Proof of Business",
    description: "Utility bill or business address confirmation",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="#006E21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 2v6h6" stroke="#006E21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 13h8M8 17h5" stroke="#006E21" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Business Information",
    description: "Accurate name, contact details, address and business category",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="#006E21" strokeWidth="1.5" />
        <path d="M12 8v1M12 11v5" stroke="#006E21" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Visual Proof",
    description: "Logo, Business card, Menu, Vended letterhead, Photo of storefront",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2v11z" stroke="#006E21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="13" r="4" stroke="#006E21" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "Online Presence",
    description: "Website URL or social media handle (Instagram, Facebook, etc.)",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#006E21" strokeWidth="1.5" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#006E21" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function ReadyDocuments() {
  return (
    <section className="ready-docs-section">
      <div className="ready-docs-inner">
        <h2 className="ready-docs-title">Documents Needed for Confirmation</h2>
        <p className="ready-docs-subtitle">
          Have these ready to make your confirmation quick and smooth. You'll need your CAC or TIN plus any one of the supporting documents below.
        </p>

        {/* Required Document */}
        <div className="required-doc-card">
          <div className="required-doc-content">
            <div className="required-doc-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="#006E21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 2v6h6" stroke="#006E21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 13h8M8 17h5" stroke="#006E21" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="required-doc-text">
              <p className="required-doc-label">Required for all businesses:</p>
              <h3 className="required-doc-title">CAC Certificate or TIN</h3>
              <p className="required-doc-description">
                Your CAC registration certificate or Tax Identification Number is mandatory for all confirmations.
              </p>
            </div>
          </div>
          <div className="required-badge">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6 8L7.5 9.5L10 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Required
          </div>
        </div>

        {/* Divider */}
        <div className="docs-divider">
          <span className="docs-divider-text">PLUS ANY ONE OF THE FOLLOWING:</span>
        </div>

        {/* Supporting Documents Grid */}
        <div className="supporting-docs-grid">
          {supportingDocuments.map((doc) => (
            <div key={doc.label} className="supporting-doc-card">
              <div className="supporting-doc-icon-wrap">
                {doc.icon}
              </div>
              <h4 className="supporting-doc-label">{doc.label}</h4>
              <p className="supporting-doc-description">{doc.description}</p>
              <span className="supporting-doc-accepted">ACCEPTED ✓</span>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="docs-info-box">
          <div className="docs-info-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#006E21" strokeWidth="2" />
              <path d="M12 8v1M12 11v5" stroke="#006E21" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="docs-info-text">
            <p className="docs-info-main">
              You only need ONE of the five supporting documents above in addition to your CAC or TIN. Choose whichever is easiest for you to provide.
            </p>
            <p className="docs-info-sub">
              The more documents you provide, the faster your confirmation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
