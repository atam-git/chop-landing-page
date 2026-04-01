'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Is business confirmation mandatory?',
    answer:
      'Business confirmation is not mandatory, but it significantly improves your visibility and credibility on Connect Nigeria. Verified businesses appear higher in search results and earn the trust badge displayed to potential customers.',
  },
  {
    question: 'How long does the process take?',
    answer:
      'The confirmation process typically takes 24–48 hours after you submit your documents. In many cases, approvals come through the same day. You\'ll receive a notification once your business is confirmed.',
  },
  {
    question: "What if my business isn't CAC registered?",
    answer:
      'CAC registration is recommended but not strictly required for all business types. We accept alternative proofs of business operation. Contact our support team to discuss what documents may qualify for your specific situation.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq-section">
      <div className="faq-inner">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${openIndex === i ? ' faq-item--open' : ''}`}>
              <button className="faq-question-btn" onClick={() => toggle(i)} aria-expanded={openIndex === i}>
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-chevron">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="#1B1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <div className="faq-answer">
                  <p className="faq-answer-text">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
