import React, { useState } from "react";

const benefits = [
  {
    icon: "🎯",
    title: "Attract Real Viewers Organically",
    front: "1. Attract Real Viewers Organically",
    back: "When new users see that hundreds are already watching your stream, they’re more likely to tap in and stay. People follow where the crowd is — it’s psychology, not trickery.",
  },
  {
    icon: "🚀",
    title: "Beat the Instagram Algorithm",
    front: "2. Beat the Instagram Algorithm",
    back: "Higher engagement during lives boosts your chances of landing in Explore pages, top stories, and feeds. Instagram promotes what performs — and we help you perform better.",
  },
  {
    icon: "👑",
    title: "Build Instant Credibility",
    front: "3. Build Instant Credibility",
    back: "Whether you’re pitching a product or speaking to followers, high view counts signal authority. You don’t look like a beginner — you look like a brand.",
  },
  {
    icon: "💰",
    title: "Boost Conversions & Sales",
    front: "4. Boost Conversions & Sales",
    back: "Doing a product demo, live drop, or coaching session? More eyes on your live = more potential buyers. Even if only 5% convert, the difference is huge with bigger viewership.",
  },
  {
    icon: "🤝",
    title: "Get Noticed by Brands & Collabs",
    front: "5. Get Noticed by Brands & Collabs",
    back: "Brands love creators who can draw a crowd. Your live viewer count is a public metric — and one that can influence sponsorships and partnerships.",
  },
  {
    icon: "🎥",
    title: "Create Replay Impact",
    front: "6. Create Replay Impact",
    back: "Even after your live ends, the view count stays visible. So, when users replay the video, they’re still influenced by how many people were tuned in live.",
  },
];

export default function BenefitsFlipCards() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-insta-blue via-insta-pink to-insta-yellow/80">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow mb-2">
          Benefits of Buying Live Views
        </h2>
        <div className="text-xl text-white/90 font-semibold mb-3">It's More Than Numbers — It’s Leverage.</div>
        <p className="text-white/80 max-w-xl mx-auto mb-8">
          Buying live views isn’t about tricking your audience — it’s about jumpstarting visibility in a world where first impressions and social proof matter more than ever.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
        {benefits.map((b, i) => (
          <div
            key={b.title}
            className="perspective group"
          >
            <div className={"relative w-full h-64 transition-transform duration-700 transform-style-preserve-3d " +
              "group-hover:rotate-y-180"}
              style={{cursor: 'pointer'}}
            >
              {/* Front */}
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl shadow-xl bg-gradient-to-br from-insta-pink via-insta-yellow to-insta-blue/80 text-white p-6 backface-hidden">
                <div className="text-4xl mb-2 drop-shadow-lg">{b.icon}</div>
                <div className="font-bold text-lg mb-1">{b.front}</div>
              </div>
              {/* Back */}
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl shadow-xl bg-white/90 text-insta-blue p-6 rotate-y-180 backface-hidden">
                <div className="font-bold text-lg mb-2">{b.title}</div>
                <div className="text-base">{b.back}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <div className="text-white text-lg font-bold mb-2">Ready to unlock these advantages?</div>
        <div className="text-white/90 mb-4">It starts with one stream. One click. One crowd.</div>
        <a href="#" className="inline-block px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-r from-insta-pink via-insta-yellow to-insta-blue text-white border-0">
          👉 Buy Instagram Live Views Now
        </a>
      </div>
      <style>{`
        .perspective {
          perspective: 1200px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
