import React from "react";
import InstagramLiveEngagement from '../assets/instagram-live-engagement.png';

export default function WhyLiveViewsMatter() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-insta-yellow via-insta-pink to-insta-blue/80 flex flex-col md:flex-row items-center gap-12 overflow-hidden animate-fade-in-up">
      {/* Animated gradient background blob */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-tr from-insta-pink via-insta-yellow to-insta-blue rounded-full opacity-20 blur-3xl animate-pulse z-0"></div>
      {/* Placeholder for image */}
      <div className="flex-1 flex justify-center items-center z-10 mb-8 md:mb-0">
        <img
          src={InstagramLiveEngagement}
          alt="Instagram Live engagement"
          width={600}
          height={900}
          className="w-[600px] h-[900px] max-w-full max-h-[90vh] object-cover rounded-3xl shadow-xl animate-float-image"
        />
      </div>
      <div className="flex-1 z-10 max-w-2xl grid grid-cols-1 gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-left drop-shadow">
          Why Instagram Live Views Matter
        </h2>
        {/* Card 1: The Problem */}
        <div className="rounded-2xl shadow-lg bg-white p-6 flex flex-col gap-2 border-l-4 border-insta-pink hover:scale-[1.03] transition-transform duration-300 animate-fade-in">
          <div className="text-lg font-semibold text-insta-blue mb-1">Go Live — and Actually Get Seen</div>
          <div className="text-gray-700">
            Instagram Live is one of the most powerful tools for creators, influencers, and brands to connect directly with followers. But what happens when you go live… and no one shows up? It’s awkward. It’s discouraging. And worst of all — it ruins your engagement potential.
          </div>
        </div>
        {/* Card 2: The Solution */}
        <div className="rounded-2xl shadow-lg bg-white p-6 flex flex-col gap-2 border-l-4 border-insta-yellow hover:scale-[1.03] transition-transform duration-300 animate-fade-in delay-100">
          <div className="text-lg font-semibold text-insta-pink mb-1">How Live Views Help</div>
          <div className="text-gray-700">
            More views don’t just make you look popular — they actually boost your visibility on Instagram’s algorithm, helping you reach more people organically.
          </div>
        </div>
        {/* Card 3: The Power of Instagram Live */}
        <div className="rounded-2xl shadow-lg bg-white p-6 flex flex-col gap-2 border-l-4 border-insta-blue hover:scale-[1.03] transition-transform duration-300 animate-fade-in delay-200">
          <div className="text-lg font-semibold text-insta-pink mb-1">The Power of Instagram Live</div>
          <ul className="pl-5 list-disc text-gray-700 space-y-1">
            <li>You show up first in more feeds</li>
            <li>You attract new live viewers who join because “others are already watching”</li>
            <li>You build instant social proof that encourages others to stay</li>
          </ul>
        </div>
        {/* Card 4: It's Not Just Vanity */}
        <div className="rounded-2xl shadow-lg bg-white p-6 flex flex-col gap-2 border-l-4 border-insta-purple hover:scale-[1.03] transition-transform duration-300 animate-fade-in delay-300">
          <div className="text-lg font-semibold text-insta-blue mb-1">It's Not Just Vanity — It's Strategy</div>
          <div className="text-gray-700">
            High live views send a strong signal: This content is worth watching. Whether you’re launching a product, doing a Q&A, performing, or casually chatting — starting with an audience already tuned in makes all the difference.<br/>
            <span className="font-bold text-insta-pink">More views = more engagement = more growth.</span><br/>
            And in today’s algorithm-driven world, momentum is everything. A live with just 5 viewers might go unnoticed. A live with 500? That’s a whole different story.
          </div>
        </div>
        {/* Card 5: Use Cases */}
        <div className="rounded-2xl shadow-lg bg-white p-6 flex flex-col gap-2 border-l-4 border-insta-magenta hover:scale-[1.03] transition-transform duration-300 animate-fade-in delay-400">
          <div className="text-lg font-semibold text-insta-pink mb-1">Use-Cases Where Live Views Help:</div>
          <ul className="pl-5 list-disc text-gray-700 space-y-1 mb-2">
            <li><b>Influencers:</b> Look more credible when collaborating with brands</li>
            <li><b>Small Businesses:</b> Promote products/services with real-time buzz</li>
            <li><b>Musicians & Artists:</b> Draw a crowd for virtual gigs or showcases</li>
            <li><b>Coaches & Educators:</b> Deliver live sessions with higher participation</li>
            <li><b>Anyone Going Live:</b> Build energy, trust, and retention</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
