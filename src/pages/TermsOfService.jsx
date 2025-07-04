import React from "react";

export default function TermsOfService() {
  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-insta-pink via-insta-yellow to-insta-blue text-white">
      <div className="max-w-3xl mx-auto bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-10 md:p-14">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-insta-blue">Terms of Service</h1>
        <ul className="list-disc pl-6 mb-4 text-white/90 space-y-2">
          <li>By placing an order on InstaLiveViews, you agree to use our services in accordance with Instagram’s terms and applicable laws.</li>
          <li>We do not guarantee any specific results, such as increased followers or engagement beyond the purchased live views.</li>
          <li>Orders are typically delivered instantly or within the stated timeframe. Delays may occur due to Instagram platform changes or technical issues.</li>
          <li>No refunds are provided once live views are delivered, except in cases of non-delivery or technical failure on our part.</li>
          <li>We reserve the right to refuse or cancel orders that violate our policies or Instagram’s guidelines.</li>
        </ul>
        <p className="mb-4 text-white/80">For any questions or disputes, please contact our support team at <a href="mailto:support@instaliveviews.com" className="underline text-insta-yellow">support@instaliveviews.com</a>.</p>
        <p className="text-sm text-white/60">Last updated: July 4, 2025</p>
      </div>
    </section>
  );
}
