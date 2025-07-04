import React from "react";

export default function AboutSection() {
  return (
    <section className="relative py-28 px-4 min-h-[800px] flex items-center justify-center bg-gradient-to-br from-insta-blue via-insta-pink to-insta-yellow overflow-visible">

      <div className="max-w-3xl w-full mx-auto relative z-10 flex flex-col items-center gap-16">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-4 animate-fade-in">
          <span className="text-5xl mb-2 animate-bounce-slow">💡</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-insta-pink via-insta-yellow to-insta-blue drop-shadow-lg mb-2 text-center">
            About InstaLiveViews
          </h2>
          <div className="text-xl md:text-2xl font-bold text-insta-blue tracking-tight text-center">
            Fueling Growth, One Stream at a Time
          </div>
        </div>
        {/* Timeline Journey Stops */}
        <div className="flex flex-col gap-16 w-full relative">
          {/* Stop 1: Mission */}
          <div className="flex flex-col md:flex-row items-center gap-8 relative animate-fade-in delay-100">
            <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-insta-pink via-insta-yellow to-insta-blue flex items-center justify-center shadow-xl border-4 border-white/40 text-4xl md:text-5xl animate-float-fast">💡</div>
            <div className="flex-1 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg p-6 md:p-8 border-l-8 border-insta-pink/70 hover:scale-105 transition-transform duration-300">
              <div className="font-bold text-insta-pink text-xl mb-1">Our Mission</div>
              <div className="text-insta-blue text-lg">To empower creators, entrepreneurs, and brands by enhancing their live stream visibility and creating opportunities for organic growth through smart, ethical engagement tools.</div>
            </div>
          </div>
          {/* Stop 2: What We Believe */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 relative animate-fade-in delay-200">
            <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-insta-blue via-insta-yellow to-insta-pink flex items-center justify-center shadow-xl border-4 border-white/40 text-4xl md:text-5xl animate-float-mid">🛠️</div>
            <div className="flex-1 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg p-6 md:p-8 border-r-8 border-insta-blue/70 hover:scale-105 transition-transform duration-300">
              <div className="font-bold text-insta-blue text-xl mb-1">What We Believe</div>
              <ul className="list-none pl-0 text-base md:text-lg mt-2 space-y-2">
                <li className="flex items-center gap-2"><span className="text-xl">🔍</span><b>Transparency:</b> <span className="opacity-80">Clear pricing. Honest delivery. No tricks.</span></li>
                <li className="flex items-center gap-2"><span className="text-xl">🔒</span><b>Privacy:</b> <span className="opacity-80">Your account details remain your own. Always.</span></li>
                <li className="flex items-center gap-2"><span className="text-xl">🚀</span><b>Results:</b> <span className="opacity-80">We’re here to help you grow — whether you’re going live for 10 or 10,000.</span></li>
                <li className="flex items-center gap-2"><span className="text-xl">🤝</span><b>Support:</b> <span className="opacity-80">We treat every customer like a creator in progress, not just another order.</span></li>
              </ul>
            </div>
          </div>
          {/* Stop 3: Track Record */}
          <div className="flex flex-col md:flex-row items-center gap-8 relative animate-fade-in delay-300">
            <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-insta-yellow via-insta-pink to-insta-blue flex items-center justify-center shadow-xl border-4 border-white/40 text-4xl md:text-5xl animate-float">📈</div>
            <div className="flex-1 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg p-6 md:p-8 border-l-8 border-insta-yellow/70 hover:scale-105 transition-transform duration-300">
              <div className="font-bold text-insta-yellow text-xl mb-1">Our Track Record</div>
              <div className="text-insta-blue text-lg">Since day one, we’ve delivered over <b>1.2 million+</b> Instagram Live Views and supported creators across fashion, fitness, business, education, music, and more. Whether you're an emerging voice or an established brand, our tools are designed to help you go further, faster.</div>
            </div>
          </div>
        </div>
        {/* CTA at the end of the journey */}
        <div className="text-center animate-fade-in delay-400">
          <a href="#" className="inline-block px-10 py-5 rounded-full text-xl font-bold shadow-lg hover:scale-110 transition-all duration-300 bg-gradient-to-r from-insta-pink via-insta-yellow to-insta-blue text-white border-0 mt-8">
            👉 Buy Instagram Live Views Now
          </a>
        </div>
      </div>
      <style>{`
        .text-insta-pink { color: #C13584; }
        .text-insta-blue { color: #405DE6; }
        .text-insta-yellow { color: #FCAF45; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-mid {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-40px); }
        }
        @keyframes bounce-custom {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-float-mid {
          animation: float-mid 7s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-custom 2.5s infinite;
        }
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 1s ease forwards;
        }
        .animate-fade-in.delay-100 { animation-delay: 0.1s; }
        .animate-fade-in.delay-200 { animation-delay: 0.2s; }
        .animate-fade-in.delay-300 { animation-delay: 0.3s; }
        .animate-fade-in.delay-400 { animation-delay: 0.4s; }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
