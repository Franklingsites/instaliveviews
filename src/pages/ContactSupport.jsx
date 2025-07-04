import React from "react";

export default function ContactSupport() {
  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-insta-blue via-insta-yellow to-insta-pink text-white">
      <div className="max-w-3xl mx-auto bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-10 md:p-14">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-insta-pink">Contact Support</h1>
        <p className="mb-4 text-white/90">Our support team is available 24/7 to help with any questions, issues, or custom requests. We pride ourselves on fast, friendly, and knowledgeable service.</p>
        <ul className="list-disc pl-6 mb-4 text-white/80">
          <li>Email us anytime at <a href="mailto:support@instaliveviews.com" className="underline text-insta-yellow">support@instaliveviews.com</a></li>
          <li>For urgent issues, please include your order number and a description of the problem.</li>
          <li>We typically respond within 1 hour, day or night.</li>
        </ul>
        <p className="text-base text-white/80">Prefer live chat? DM us on Instagram <a href="https://instagram.com/instaliveviews" target="_blank" rel="noopener noreferrer" className="underline text-insta-blue">@instaliveviews</a></p>
        <p className="text-sm text-white/60 mt-6">Thank you for choosing InstaLiveViews!</p>
      </div>
    </section>
  );
}
