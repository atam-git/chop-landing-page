const existingSteps = [
  "Search for your business name in the directory",
  'Click on the "Claim This Business" button',
  "Upload your supporting identity documents",
  "Receive confirmation badge within 24 hours",
];

const newSteps = [
  'Click "Register Business" to create a profile',
  "Fill in your full business profile details",
  'Select "Submit for Verification" option',
  "Go live with a verified status immediately",
];

export default function StepProcess() {
  return (
    <section className="step-process-section">
      <div className="step-process-inner">
        <div className="step-process-header">
          <h2 className="step-process-title">Simple 4–Step Process</h2>
          <p className="step-process-subtitle">
            Whether you are already listed or starting fresh.
          </p>
        </div>

        <div className="step-columns">
          <div className="step-column">
            <div className="step-column-label">If Business Exists</div>
            <ol className="step-list">
              {existingSteps.map((text, i) => (
                <li key={i} className="step-item">
                  <span className="step-number">{i + 1}</span>
                  <span className="step-text">{text}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="step-column">
            <div className="step-column-label">If Not Listed Yet</div>
            <ol className="step-list">
              {newSteps.map((text, i) => (
                <li key={i} className="step-item">
                  <span className="step-number">{i + 1}</span>
                  <span className="step-text">{text}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
