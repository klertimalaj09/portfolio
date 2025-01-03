"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function Home() {
  useEffect(() => {
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.2 }
    );
    gsap.fromTo(
      ".hero-button",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-8">
      <section className="text-center mb-6">
        <h1 className="text-5xl font-bold hero-text">Mirë se vini!</h1>
        <p className="text-xl mt-4 hero-text">
          Një ekspozitë e projekteve dhe aftësive të mia.
        </p>
      </section>

      <div className="flex justify-center space-x-6">
        <a
          href="/about"
          className="hero-button bg-green-600 text-white px-8 py-4 text-lg rounded shadow-lg hover:bg-green-700 transform transition-transform hover:scale-105"
        >
          Rreth Meje
        </a>

        <a
          href="/projects"
          className="hero-button bg-blue-600 text-white px-8 py-4 text-lg rounded shadow-lg hover:bg-blue-700 transform transition-transform hover:scale-105"
        >
          Projektet
        </a>
      </div>
    </div>
  );
}
