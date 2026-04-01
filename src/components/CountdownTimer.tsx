"use client";

import { useEffect, useState } from "react";

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
        <p className="countdown-eyebrow">VERIFICATION WINDOW</p>
        <h2 className="countdown-heading">Now.</h2>

        <div className="countdown-tiles">
          {units.map(({ value, label }) => (
            <div key={label} className="countdown-tile">
              <span className="tile-value">{value}</span>
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
