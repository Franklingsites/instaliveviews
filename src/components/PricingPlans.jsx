import React from "react";

const plans = [
  {
    name: "Starter Boost",
    views: "100 Views",
    price: "$4.99",
    delivery: "Instantly starts",
    cta: "Buy Now",
    highlight: false,
  },
  {
    name: "Creator Growth",
    views: "500 Views",
    price: "$12.99",
    delivery: "1–2 mins",
    cta: "Buy Now",
    highlight: false,
  },
  {
    name: "Influencer Pro",
    views: "1000 Views",
    price: "$19.99",
    delivery: "1–3 mins",
    cta: "Buy Now",
    highlight: true, // Most Popular
  },
  {
    name: "Trending Now",
    views: "2500 Views",
    price: "$39.99",
    delivery: "3–5 mins",
    cta: "Buy Now",
    highlight: false,
  },
  {
    name: "Viral Stream Pack",
    views: "5000 Views",
    price: "$74.99",
    delivery: "5–10 mins",
    cta: "Buy Now",
    highlight: false,
  },
  {
    name: "Broadcast Domination",
    views: "10,000+ Views",
    price: "$129.99",
    delivery: "5–15 mins",
    cta: "Buy Now",
    highlight: false,
  },
];

export default function PricingPlans() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-insta-pink via-insta-yellow to-insta-blue/80">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center drop-shadow">
          Our Pricing Plans
        </h2>
        <p className="text-lg text-white/90 mb-8 text-center max-w-2xl mx-auto">
          <b>Affordable Plans. Powerful Results.</b><br/>
          We’ve crafted flexible packages for every type of creator — whether you're just starting out or running a major live launch. All packages come with instant delivery, secure checkout, and viewer retention guarantees.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`rounded-2xl shadow-xl p-8 flex flex-col items-center border-4 ${plan.highlight ? 'border-insta-yellow scale-105 ring-4 ring-insta-yellow/40' : 'border-white/40'} bg-white/90 hover:scale-105 transition-transform duration-300 animate-fade-in`}
            >
              {plan.highlight && <div className="mb-2 px-3 py-1 bg-insta-yellow text-insta-pink font-bold rounded-full text-xs uppercase tracking-wider">⭐ Most Popular</div>}
              <div className="text-2xl font-bold text-insta-pink mb-1">{plan.name}</div>
              <div className="text-lg font-semibold text-insta-blue mb-2">{plan.views}</div>
              <div className="text-3xl font-extrabold text-insta-pink mb-2">{plan.price}</div>
              <div className="text-sm text-insta-blue mb-4">{plan.delivery}</div>

            </div>
          ))}
        </div>
        <div className="text-center mb-6 text-white/90">
          <span className="font-bold text-white drop-shadow-lg">⭐ Most Popular Plan: Influencer Pro</span> – Perfect balance of reach and cost!<br/>
          <span className="block mt-2">Need something custom? <a href="#contact" className="underline text-insta-pink hover:text-insta-yellow">Contact us</a> for bulk or regional targeting options.</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-white font-medium shadow">
            ✔ Real-looking active viewers
          </div>
          <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-white font-medium shadow">
            ✔ Guaranteed delivery during your live stream
          </div>
          <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-white font-medium shadow">
            ✔ No password needed
          </div>
          <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-white font-medium shadow">
            ✔ 24/7 support
          </div>
        </div>
      </div>
    </section>
  );
}
