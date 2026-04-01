export default function ContactSupport() {
  return (
    <section className="contact-support-section">
      <div className="contact-support-inner">
        <a href="mailto:businesses@connectnigeria.com" className="contact-card">
          <div className="contact-icon-wrap">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#006e21"/>
            </svg>
          </div>
          <div className="contact-details">
            <span className="contact-label">Email Support</span>
            <span className="contact-value">businesses@connectnigeria.com</span>
          </div>
        </a>

        <a href="https://wa.me/2348098005000" target="_blank" rel="noopener noreferrer" className="contact-card">
          <div className="contact-icon-wrap">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z" fill="#006e21"/>
              <path d="M7 9H17V11H7V9ZM7 12H14V14H7V12ZM7 6H17V8H7V6Z" fill="#006e21"/>
            </svg>
          </div>
          <div className="contact-details">
            <span className="contact-label">WhatsApp &amp; Call</span>
            <span className="contact-value">+234 809 800 5000</span>
          </div>
        </a>
      </div>
    </section>
  );
}
