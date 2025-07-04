import React from "react";

const stats = [
  {
    icon: "📈",
    value: "+75%",
    label: "Increase in Engagement Rate",
    desc: "after consistent live view boosts"
  },
  {
    icon: "🎥",
    value: "1.2M+",
    label: "Live Views Delivered",
    desc: "in the past 6 months"
  },
  {
    icon: "🔁",
    value: "97%",
    label: "Repeat Customers",
    desc: "who trust us for every stream"
  }
];

export default function ResultsStats() {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-tr from-insta-yellow via-insta-pink to-insta-blue/80">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex flex-col items-center mb-8">
          <span className="text-4xl md:text-5xl mb-2 animate-pulse">🧾</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow mb-2 bg-gradient-to-r from-insta-pink via-insta-yellow to-insta-blue text-transparent bg-clip-text inline-block">Results That Speak for Themselves</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-white/80 shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 animate-fade-in">
              <div className="text-3xl mb-2 drop-shadow-lg">{s.icon}</div>
              <div className="text-4xl font-extrabold text-insta-pink mb-1">{s.value}</div>
              <div className="text-lg font-bold text-insta-blue mb-1">{s.label}</div>
              <div className="text-sm text-gray-700">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
