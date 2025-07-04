import React from "react";

const features = [
  {
    icon: "🔥",
    title: "Instant Delivery, Every Time",
    desc: "As soon as your live session begins, we get to work. Most packages start delivering within seconds, so you never go live to an empty room.",
    border: "border-insta-pink"
  },
  {
    icon: "🔒",
    title: "No Password Needed",
    desc: "We respect your privacy. Just provide your Instagram username or live video link — that’s it. No logins. No personal info. No funny business.",
    border: "border-insta-yellow"
  },
  {
    icon: "👥",
    title: "Real & Active Viewers",
    desc: "We don’t use shady bots that risk your account. Our service focuses on safe, organic-looking viewers that help your stream grow naturally.",
    border: "border-insta-blue"
  },
  {
    icon: "📞",
    title: "24/7 Friendly Support",
    desc: "Have a question or concern? Our support team is always here to help — no matter your time zone.",
    border: "border-insta-purple"
  },
  {
    icon: "💡",
    title: "Flexible Packages for All",
    desc: "Whether you're a budding influencer or a full-time brand, we have view packages that suit your needs — from 100 to 10,000+ live viewers.",
    border: "border-insta-magenta"
  },
  {
    icon: "💸",
    title: "Transparent Pricing & Refund Policy",
    desc: "No hidden fees. No surprise charges. And yes — we offer refunds if your order doesn’t deliver as promised.",
    border: "border-insta-yellowOrange"
  },
];

export default function WhyChooseInstaLiveViews() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-insta-blue via-insta-pink to-insta-yellow/80">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center drop-shadow">
          Why Choose InstaLiveViews
        </h2>
        <p className="text-lg text-white/90 mb-10 text-center max-w-2xl mx-auto">
          <b>Not All Live Views Are Created Equal</b><br/>
          You’re not just buying numbers. You’re investing in growth, credibility, and a stronger Instagram presence. At InstaLiveViews, we take that seriously — which is why thousands of creators trust us to deliver real, reliable live view boosts when it matters most.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`rounded-2xl shadow-xl bg-white/90 p-8 flex flex-col items-start border-l-4 ${f.border} hover:scale-105 transition-transform duration-300 animate-fade-in`}
            >
              <div className="text-4xl mb-4 drop-shadow-lg">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-insta-pink">{f.title}</h3>
              <p className="text-base text-gray-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
