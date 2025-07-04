import React from "react";

const features = [
  {
    title: "Real-Time Live Views",
    desc: "Instantly boost your live videos with real, authentic viewers to increase engagement and credibility.",
    icon: "📈",
  },
  {
    title: "Safe & Secure",
    desc: "Your privacy is our priority. We use encrypted processes to keep your account safe.",
    icon: "🔒",
  },
  {
    title: "Easy to Use",
    desc: "Get started in seconds with our intuitive, user-friendly platform.",
    icon: "⚡",
  },
  {
    title: "24/7 Support",
    desc: "Our team is always here to help you with any questions or issues.",
    icon: "💬",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 bg-white/70 backdrop-blur-md">
      <h2 className="text-3xl md:text-4xl font-bold text-insta-pink mb-10 text-center">
        Why Choose InstaLiveViews?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="rounded-3xl shadow-xl p-8 flex flex-col items-center bg-gradient-to-br from-insta-pink via-insta-yellow to-insta-blue text-white hover:scale-105 transition-transform duration-300"
          >
            <div className="text-5xl mb-4 drop-shadow-lg">{f.icon}</div>
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-base text-white/90">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
