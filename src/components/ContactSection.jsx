import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-gradient-to-tr from-insta-yellow via-insta-pink to-insta-blue text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h2>
      <form className="max-w-xl mx-auto bg-white/20 rounded-2xl shadow-lg p-8 flex flex-col gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="rounded-full px-6 py-3 bg-white/80 text-insta-pink placeholder-insta-pink focus:outline-none focus:ring-2 focus:ring-insta-yellow"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="rounded-full px-6 py-3 bg-white/80 text-insta-pink placeholder-insta-pink focus:outline-none focus:ring-2 focus:ring-insta-yellow"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="rounded-2xl px-6 py-3 bg-white/80 text-insta-pink placeholder-insta-pink focus:outline-none focus:ring-2 focus:ring-insta-yellow"
        ></textarea>
        <button
          type="submit"
          className="rounded-full px-8 py-4 bg-gradient-to-r from-insta-pink via-insta-yellow to-insta-blue text-white font-bold shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
