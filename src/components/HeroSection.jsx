import React from "react";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-tr from-insta-blue via-insta-pink to-insta-yellow animate-gradient-x">
  <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 max-w-3xl">
    Get More Eyes on Your Live Broadcasts — <span className="bg-clip-text text-transparent bg-gradient-to-r from-insta-pink via-insta-yellow to-insta-blue">Instantly</span>
  </h1>
  <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
    Whether you're going live for fun, brand exposure, or building a fanbase — <b>InstaLiveViews</b> helps you attract real-time viewers and skyrocket your reach.
  </p>
  <a
    href="#contact"
    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-r from-insta-pink via-insta-yellow to-insta-blue text-white border-0"
    style={{textShadow: '0 2px 8px rgba(0,0,0,0.18)'}}
  >
    <span role="img" aria-label="Buy">👉</span> Buy Instagram Live Views Now
  </a>
  <div className="flex flex-wrap justify-center gap-4 mt-10">
    <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-white font-medium shadow">
      <span role="img" aria-label="check">✔</span> 100% Real & Active Viewers
    </div>
    <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-white font-medium shadow">
      <span role="img" aria-label="check">✔</span> Instant Delivery
    </div>
    <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-white font-medium shadow">
      <span role="img" aria-label="check">✔</span> No Password Required
    </div>
    <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-white font-medium shadow">
      <span role="img" aria-label="check">✔</span> 24/7 Friendly Support
    </div>
  </div>
</section>
  );
}
