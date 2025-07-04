import React from "react";

const testimonials = [
  {
    name: "@influencer_jane",
    text: "InstaLiveViews helped me skyrocket my live engagement! The boost was instant and real.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "@brand_marketer",
    text: "Super easy to use, and my clients are loving the results! Highly recommended.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "@music_star",
    text: "My live concerts look so much more popular now. Thank you, InstaLiveViews!",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-tr from-insta-yellow via-insta-pink to-insta-blue/80 backdrop-blur-md">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center drop-shadow">
        What Our Users Say
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="bg-gradient-to-br from-insta-blue via-insta-pink to-insta-yellow rounded-2xl shadow-xl p-8 flex flex-col items-center w-full md:w-1/3 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-20 h-20 rounded-full border-4 border-white mb-4 shadow-lg"
            />
            <div className="text-lg font-semibold text-white mb-2">{t.name}</div>
            <p className="text-base text-white/90 italic">“{t.text}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}
