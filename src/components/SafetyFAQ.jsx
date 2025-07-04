import React, { useState } from "react";

const faqs = [
  {
    question: "No Password Ever Required",
    answer:
      "We never ask for your Instagram password, login credentials, or any sensitive data. Just your username or live link is enough to deliver views.",
    icon: "🔒",
  },
  {
    question: "Clean Delivery System",
    answer:
      "We don’t use bots that violate Instagram’s terms. Our system delivers organic-looking, active viewers to keep everything natural and consistent with typical engagement patterns.",
    icon: "🧹",
  },
  {
    question: "Zero Impact on Your Account Health",
    answer:
      "We follow safe delivery practices. No spammy activity, no sudden view spikes, and no mass-flooding that would raise red flags. Your account remains secure and authentic — always.",
    icon: "🛡️",
  },
  {
    question: "Trusted by Thousands",
    answer:
      "From small creators to verified influencers, thousands of users have trusted InstaLiveViews. And not a single user has reported a penalty, warning, or account action.",
    icon: "🌟",
  },
];

export default function SafetyFAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-insta-pink via-insta-yellow to-insta-blue/80">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow mb-2">
            Is It Safe to Buy Instagram Live Views?
          </h2>
          <div className="text-xl text-white/90 font-semibold mb-3">Yes — 100% Safe, Secure & Risk-Free</div>
          <p className="text-white/80 max-w-xl mx-auto mb-6">
            We understand the concern. Your Instagram account is your brand, your business, your voice — and risking it for fake or sketchy services? Never worth it. That’s why InstaLiveViews is built with safety as the top priority.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className={`transition-transform duration-300 ${open === i ? 'scale-105' : 'scale-100'}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl shadow-lg bg-white/90 text-left font-bold text-insta-pink text-lg focus:outline-none border-2 border-insta-yellow hover:bg-white transition-all duration-300`}
                aria-expanded={open === i}
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl">{faq.icon}</span>
                  {faq.question}
                </span>
                <span className={`transform transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}>▼</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 bg-white/70 rounded-b-2xl px-6 ${open === i ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                style={{transitionProperty: 'max-height, opacity, padding'}}
              >
                <div className="text-insta-blue text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center text-white/90 text-base max-w-xl mx-auto bg-white/10 rounded-xl p-6">
          <b>Bottom line?</b> Our goal is to boost your visibility — not jeopardize your account. When used responsibly, buying Instagram Live Views from us is just another growth tool in your creator toolkit.
        </div>
      </div>
    </section>
  );
}
