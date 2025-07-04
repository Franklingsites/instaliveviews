import React from "react";

const tips = [
  {
    icon: "📅",
    title: "Go Live at the Right Time",
    desc: "Use Instagram Insights to find when your followers are most active. Going live during peak hours increases organic attendance and engagement."
  },
  {
    icon: "📣",
    title: "Promote Before You Go Live",
    desc: "Post a story, reel, or countdown sticker to build anticipation. Let your audience know what to expect — a giveaway, Q&A, product drop, or big reveal."
  },
  {
    icon: "🎯",
    title: "Stick to a Theme or Topic",
    desc: "Don’t just “go live” for the sake of it. Give people a reason to watch and stay. Plan content — even if it’s casual — around value or entertainment."
  },
  {
    icon: "💬",
    title: "Engage With Viewers in Real Time",
    desc: "Shout out names, reply to comments, or ask questions. The more interaction, the longer people stick around — and the better your ranking in the live feed."
  },
  {
    icon: "🎁",
    title: "Save & Repurpose the Replay",
    desc: "Once your live ends, save it to your profile or IGTV. Use that content later as clips, quotes, or highlights — maximizing reach even after the stream is over."
  },
  {
    icon: "🧲",
    title: "Combine Live Views with Follower Growth",
    desc: "More viewers = more chances to get discovered. But if your profile isn’t optimized (bio, highlights, content), you may lose that momentum. Use our growth bundles to cover all fronts."
  }
];

export default function ProTipsSection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-insta-pink via-insta-yellow to-insta-blue/80 overflow-visible">
      <div className="max-w-4xl mx-auto text-center mb-10 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow mb-2">
          Pro Tips to Maximize Your Instagram Live Reach
        </h2>
        <div className="text-xl text-white/90 font-semibold mb-3">Going Live Is Good — Going Live Strategically Is Better</div>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Buying live views gives you the jumpstart, but to really maximize your results, pair it with smart habits. Here are some quick, actionable tips to take your live sessions to the next level.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
        {tips.map((tip, i) => (
          <div
            key={tip.title}
            className="group relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-7 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300 border-2 border-white/30"
          >
            <span className="text-4xl mb-2 drop-shadow-lg bg-gradient-to-tr from-insta-pink via-insta-yellow to-insta-blue bg-clip-text text-transparent animate-float">
              {tip.icon}
            </span>
            <div className="font-bold text-lg text-insta-blue mb-1 text-center">
              {tip.title}
            </div>
            <div className="text-base text-gray-700 text-center">
              {tip.desc}
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-3xl mx-auto text-center text-white/90 text-lg bg-white/10 rounded-xl p-6 animate-fade-in">
        <span className="font-bold text-insta-pink">Smart strategy + InstaLiveViews = unstoppable results.</span><br/>
        Apply these tips during your next live — and watch the difference.
      </div>
      <style>{`
        .text-insta-pink { color: #C13584; }
        .text-insta-blue { color: #405DE6; }
        .text-insta-yellow { color: #FCAF45; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
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
