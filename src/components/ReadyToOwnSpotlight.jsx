import React from "react";

export default function ReadyToOwnSpotlight() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-tr from-insta-blue via-insta-pink to-insta-yellow/90 flex items-center justify-center overflow-visible">
      <div className="max-w-3xl w-full mx-auto rounded-3xl shadow-2xl bg-white/30 backdrop-blur-xl p-10 md:p-16 flex flex-col items-center text-center border-4 border-white/20 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow mb-3">
          Ready to Own the Spotlight?
        </h2>
        <div className="text-lg md:text-xl text-white/90 font-medium mb-6">
          Going live without an audience is like shouting in an empty room. Let’s change that. Whether you’re trying to grow your brand, promote a product, or connect with fans — <b className="text-insta-pink">InstaLiveViews</b> puts you front and center.
        </div>
        <div className="w-full flex flex-col gap-5 mb-6">
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl mb-1">🌟 Why Choose Us Again?</span>
            <ul className="list-none text-base md:text-lg text-white/90 space-y-2 mt-2">
              <li className="flex items-center gap-2"><span className="text-xl">⚡</span> Instant delivery during your stream</li>
              <li className="flex items-center gap-2"><span className="text-xl">👀</span> Realistic views with safe, organic delivery</li>
              <li className="flex items-center gap-2"><span className="text-xl">💸</span> Affordable pricing with no hidden fees</li>
              <li className="flex items-center gap-2"><span className="text-xl">💬</span> 24/7 customer support</li>
              <li className="flex items-center gap-2"><span className="text-xl">🔒</span> No password ever required</li>
            </ul>
          </div>
        </div>
        <div className="text-xl md:text-2xl font-bold text-white mb-4">
          👉 Take your Instagram Live from zero to viral — starting now.
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:scale-110 transition-all duration-300 bg-gradient-to-r from-insta-pink via-insta-yellow to-insta-blue text-white border-0 mt-3"
        >
          <span className="text-2xl">🎥</span> Buy Instagram Live Views Today
        </a>
      </div>
      <style>{`
        .text-insta-pink { color: #C13584; }
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 1s ease forwards;
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
