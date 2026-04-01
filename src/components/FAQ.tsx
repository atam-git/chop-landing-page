'use client';

import { useState, useRef, useEffect } from 'react';

const faqs = [
  {
    question: 'What is this campaign about?',
    answer:
      'A limited-time opportunity to help your business grow by confirming your listing and unlocking exclusive benefits.',
  },
  {
    question: 'Is it free to list my business?',
    answer:
      'Yes, creating and confirming your business listing is simple and accessible.',
  },
  {
    question: 'How long does confirmation take?',
    answer:
      'Confirmation is done in one business day or less.',
  },
  {
    question: 'What happens after I confirm my business?',
    answer:
      'Your business becomes more visible, more trusted, and eligible for exclusive offers.',
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
      <button className="faq-question-btn" onClick={onToggle} aria-expanded={isOpen}>
        <span className="faq-question-text">{faq.question}</span>
        <span className="faq-chevron">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="#1B1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div 
        ref={contentRef}
        className="faq-answer-wrapper"
        style={{ height: `${height}px` }}
      >
        <div className="faq-answer">
          <p className="faq-answer-text">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq-section">
      <div className="faq-inner">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
