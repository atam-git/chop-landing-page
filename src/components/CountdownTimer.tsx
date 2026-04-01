"use client";

import { useEffect, useState, useRef } from "react";

// April Campaign ends April 30, 2026 at midnight WAT (UTC+1)
const CAMPAIGN_END = new Date("2026-04-30T23:59:59+01:00").getTime();

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function getTimeLeft() {
  const diff = Math.max(0, CAMPAIGN_END - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  return { days, hrs, mins, secs };
}

function ScrambleNumber({ target }: { target: string }) {
  const [display, setDisplay] = useState("00");
  const [hasScrambled, setHasScrambled] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasScrambled) {
            setHasScrambled(true);
            const targetNum = parseInt(target, 10);
            let current = 0;
            
            const countUp = () => {
              if (current <= targetNum) {
                setDisplay(String(current).padStart(2, "0"));
                
                // Calculate delay: starts at 10ms, exponentially increases
                const progress = current / targetNum;
                const delay = 10 + Math.pow(progress, 2) * 100;
                
                current++;
                setTimeout(countUp, delay);
              }
            };
            
            countUp();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasScrambled, target]);

  // Update display when target changes (for live countdown)
  useEffect(() => {
    if (hasScrambled) {
      setDisplay(target);
    }
  }, [target, hasScrambled]);

  return <span ref={elementRef} className="tile-value">{display}</span>;
}

export default function CountdownTimer() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: pad(time.days), label: "DAYS" },
    { value: pad(time.hrs), label: "HRS" },
    { value: pad(time.mins), label: "MINS" },
    { value: pad(time.secs), label: "SECS" },
  ];

  return (
    <section className="countdown-section">
      <div className="countdown-inner">
        <p className="countdown-eyebrow">OFFER WINDOW</p>
        <h2 className="countdown-heading">Now.</h2>

        <div className="countdown-tiles">
          {units.map(({ value, label }) => (
            <div key={label} className="countdown-tile">
              <ScrambleNumber target={value} />
              <span className="tile-label">{label}</span>
            </div>
          ))}
        </div>

        <p className="countdown-subtext">
          The April Campaign priority window closes soon. Confirm
          <br className="countdown-br" />
          today to lock in your verification rewards.
        </p>
      </div>
    </section>
  );
}
