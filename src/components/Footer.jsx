import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-gradient-to-tr from-insta-blue via-insta-pink to-insta-yellow text-white text-center mt-auto">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
        <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0">
          <div className="text-2xl font-extrabold mb-2 flex items-center gap-2">InstaLiveViews</div>
          <div className="flex items-center gap-3 mb-2 text-white/90">
            <span className="text-xl">📧</span> <span>Email: <a href="mailto:support@instaliveviews.com" className="underline hover:text-insta-yellow transition">support@instaliveviews.com</a></span>
          </div>
          <div className="flex items-center gap-3 text-white/90">
            <span className="text-xl">🕒</span> <span>Available: 24/7</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div className="text-lg font-bold mb-2 flex items-center gap-2"><span className="text-xl">📃</span> Useful Links</div>
          <ul className="space-y-2">
            <li><a href="/privacy-policy" className="underline hover:text-insta-yellow transition" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="underline hover:text-insta-yellow transition" target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
            <li><a href="/refund-policy" className="underline hover:text-insta-yellow transition" target="_blank" rel="noopener noreferrer">Refund Policy</a></li>
            <li><a href="/contact-support" className="underline hover:text-insta-yellow transition" target="_blank" rel="noopener noreferrer">Contact Support</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-sm text-white/80">
        &copy; 2025 InstaLiveViews. Not affiliated with Instagram.<br/>
        <span className="font-semibold text-white">Powering your presence — one live stream at a time.</span>
      </div>
    </footer>
  );
}
