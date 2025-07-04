import React from "react";

export default function RefundPolicy() {
  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-insta-yellow via-insta-pink to-insta-blue text-white">
      <div className="max-w-3xl mx-auto bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-10 md:p-14">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-insta-yellow">Refund Policy</h1>
        <ul className="list-disc pl-6 mb-4 text-white/90 space-y-2">
          <li>If your live views are not delivered as promised, you are eligible for a full refund or redelivery.</li>
          <li>Refunds are not provided for completed orders where the service was delivered successfully.</li>
          <li>To request a refund, contact us within 48 hours of your scheduled live stream.</li>
          <li>Refunds are processed within 3-5 business days to your original payment method.</li>
        </ul>
        <p className="mb-4 text-white/80">For refund requests or questions, please email <a href="mailto:support@instaliveviews.com" className="underline text-insta-pink">support@instaliveviews.com</a>.</p>
        <p className="text-sm text-white/60">Last updated: July 4, 2025</p>
      </div>
    </section>
  );
}
