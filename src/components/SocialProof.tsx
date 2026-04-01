import Image from "next/image";

const testimonials = [
  {
    quote:
      '"Since getting our verification badge, we\'ve seen a 40% increase in calls from the Lagos area. People trust us more now."',
    name: 'Emeka O., Lagos',
    business: 'Furniture Manufacturer',
    image: '/Background-3.png',
  },
  {
    quote:
      '"The process was surprisingly fast. I uploaded my ID and CAC doc, and by the next day, we had our checkmark. The rewards were a great bonus!"',
    name: 'Fatima A., Abuja',
    business: 'Tech Solutions Hub',
    image: '/Background-2.png',
  },
  {
    quote:
      '"Connect Nigeria is the best way for small businesses in Kano to get national reach. Highly recommend verification."',
    name: 'Sani B., Kano',
    business: 'Logistics Services',
    image: '/Background-1.png',
  },
];

export default function SocialProof() {
  return (
    <section className="social-proof-section">
      <div className="social-proof-inner">
        <h2 className="social-proof-title">Voices of Verified Success</h2>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    quality={100}
                    unoptimized
                  />
                </div>
                <div className="testimonial-author-info">
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-business">{t.business}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
