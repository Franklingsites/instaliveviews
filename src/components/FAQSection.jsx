import React, { useState } from "react";

const faqs = [
  {
    q: "Is it safe to buy Instagram Live Views?",
    a: "Absolutely. We don’t require your password or access to your account. Our delivery is designed to appear natural and risk-free, following safe practices that don’t violate Instagram’s policies.",
  },
  {
    q: "Do the views come from real people?",
    a: "We deliver realistic, active-looking viewers — not bots or junk traffic. While we don’t guarantee engagement like likes or comments, our views are algorithm-friendly and designed to boost credibility and visibility.",
  },
  {
    q: "How fast will I receive the views?",
    a: "Once you go live, you’ll typically start seeing views within 30–60 seconds, depending on your selected package. Larger packages may take slightly longer, but everything is delivered during your stream.",
  },
  {
    q: "Do I need to schedule my live with you beforehand?",
    a: "It’s not required, but we recommend notifying us if you have a specific live time in mind. This helps us prepare for smooth, instant delivery at the right moment.",
  },
  {
    q: "Will these views stay after the live ends?",
    a: "Yes — the viewer count remains visible even after the stream ends. Anyone watching the replay will still see how many joined your live, which helps with ongoing trust and visibility.",
  },
  {
    q: "What if my views don’t arrive?",
    a: "In the rare case of a delay or delivery issue, just reach out to our support team. We offer refunds or redelivery — no questions asked.",
  },
  {
    q: "Can I target views by country or audience type?",
    a: "We currently provide global delivery for most packages. For targeted campaigns (e.g., USA-only or niche audiences), reach out to us for custom solutions.",
  },
  {
    q: "Is there a subscription option for regular live sessions?",
    a: "We’re working on it! If you go live often and want automatic delivery, contact us to get on the waitlist for our upcoming subscription-based viewer booster.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-insta-yellow via-insta-pink to-insta-blue/80">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-4xl md:text-5xl mb-2 animate-bounce">❓</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow mb-2">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="text-xl text-white/90 font-semibold mb-3">Still Got Questions? We’ve Got You.</div>
          <p className="text-white/80 max-w-xl mx-auto mb-6">
            Here are some of the most common questions users ask before purchasing Instagram Live Views from us.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className={`transition-transform duration-300 ${open === i ? 'scale-105' : 'scale-100'}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className={`w-full flex items-center justify-between px-6 py-5 rounded-2xl shadow-lg bg-white/90 text-left font-bold text-insta-blue text-lg focus:outline-none border-2 border-insta-pink hover:bg-white transition-all duration-300`}
                aria-expanded={open === i}
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl">❓</span>
                  {faq.q}
                </span>
                <span className={`transform transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}>▼</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 bg-white/70 rounded-b-2xl px-6 ${open === i ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                style={{transitionProperty: 'max-height, opacity, padding'}}
              >
                <div className="text-insta-pink text-base">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center text-white/90 text-base max-w-xl mx-auto bg-white/10 rounded-xl p-6">
          <b>Have another question?</b> <span className="inline-block">💬 Contact our support team anytime — we’re always happy to help.</span>
        </div>
      </div>
    </section>
  );
}
