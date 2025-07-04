import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-insta-blue via-insta-pink to-insta-yellow text-white">
      <div className="max-w-3xl mx-auto bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-10 md:p-14">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-insta-pink">Privacy Policy</h1>
        <p className="mb-4 text-white/90">At InstaLiveViews, your privacy is our top priority. We only collect information necessary to process your orders and provide support. We never ask for your Instagram password or access to your account.</p>
        <ul className="list-disc pl-6 mb-4 text-white/80">
          <li>We collect your Instagram username and email address solely to deliver your order and send updates.</li>
          <li>All payment information is processed securely via trusted third-party providers. We never store your payment details.</li>
          <li>We do not share, sell, or rent your information to third parties.</li>
          <li>Our site uses cookies only to enhance your browsing experience and track order status.</li>
        </ul>
        <p className="mb-4 text-white/80">If you have any questions or wish to have your data removed, please contact us at <a href="mailto:support@instaliveviews.com" className="underline text-insta-yellow">support@instaliveviews.com</a>.</p>
        <p className="text-sm text-white/60">Last updated: July 4, 2025</p>
      </div>
    </section>
  );
}
