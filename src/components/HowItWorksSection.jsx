import React from "react";

const steps = [
  {
    icon: "🛒",
    title: "Choose Your Package",
    desc: "Browse our plans and pick the one that fits your goals. Whether you need a small boost or want to dominate the live feed, we’ve got you covered.",
  },
  {
    icon: "🔗",
    title: "Enter Your Instagram Details",
    desc: "All we need is your Instagram username or the link to your upcoming live video. No passwords. No unnecessary info.",
  },
  {
    icon: "💳",
    title: "Make a Secure Payment",
    desc: "Our payment system is encrypted and trusted — choose from multiple payment options, including cards and digital wallets.",
  },
  {
    icon: "📈",
    title: "Go Live & Watch Your Audience Grow",
    desc: "Once you go live, our system activates automatically. You’ll see the views start flowing in — usually within a minute or two!",
  }
];

export default function HowItWorksSection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-insta-blue via-insta-pink to-insta-yellow/80">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-2">
          <span className="uppercase tracking-widest text-base font-extrabold bg-gradient-to-r from-insta-pink via-insta-yellow to-insta-blue text-transparent bg-clip-text animate-bounce drop-shadow-lg px-6 py-2 rounded-full shadow-lg inline-block mb-2 border-2 border-white/40">How it works</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center drop-shadow">
          Go Live. Get Views. It’s That Simple.
        </h2>
        <p className="text-lg text-white/90 mb-8 text-center max-w-2xl mx-auto">
          We’ve made the process of buying Instagram Live Views so easy, you can set it up in under a minute. Whether you're preparing for a product launch, a Q&A session, or just a spontaneous live chat — we’re here to make sure you have an audience waiting.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`rounded-2xl shadow-xl p-8 flex flex-col items-center border-4 border-white/40 bg-gradient-to-br from-insta-pink via-insta-yellow to-insta-blue/80 hover:scale-105 transition-transform duration-300 animate-fade-in`}
            >
              <div className="text-4xl mb-4 drop-shadow-lg">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white text-center">{step.title}</h3>
              <p className="text-base text-white/90 text-center">{step.desc}</p>
              <div className="mt-2 text-xs text-white/60">{`Step ${i+1}`}</div>
            </div>
          ))}
        </div>
        <div className="bg-white/10 rounded-xl p-6 text-white/90 text-base text-center max-w-2xl mx-auto">
          <span className="font-bold text-insta-yellow">Bonus Tips:</span> Let us know in advance if your live is scheduled at a specific time — we’ll be ready to activate your views.<br/>
          You can combine Live Views with Story Views or Followers for even more engagement <span className="italic">(bundle options coming soon!)</span>.
        </div>
      </div>
    </section>
  );
}
