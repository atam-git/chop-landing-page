const documents = [
  {
    label: "Valid ID (NIN/DL)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="#006E21" strokeWidth="1.5" />
        <circle cx="8" cy="11" r="2.5" stroke="#006E21" strokeWidth="1.5" />
        <path d="M4 17c0-2 1.8-3 4-3s4 1 4 3" stroke="#006E21" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 9h4M14 12h3" stroke="#006E21" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "CAC Registration",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="#006E21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 2v6h6" stroke="#006E21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 13h8M8 17h5" stroke="#006E21" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Utility Bill",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" stroke="#006E21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" stroke="#006E21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Full Business Info",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="#006E21" strokeWidth="1.5" />
        <path d="M12 8v1M12 11v5" stroke="#006E21" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Storefront Photos",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2v11z" stroke="#006E21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="13" r="4" stroke="#006E21" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function ReadyDocuments() {
  return (
    <section className="ready-docs-section">
      <div className="ready-docs-inner">
        <h2 className="ready-docs-title">Ready Any of Your Documents</h2>
        <div className="ready-docs-grid">
          {documents.map((doc) => (
            <div key={doc.label} className="ready-doc-card">
              <div className="ready-doc-icon">{doc.icon}</div>
              <span className="ready-doc-label">{doc.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
