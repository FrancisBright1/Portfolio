"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { src: "/training-1.jpg", alt: "Francis facilitating a data training session" },
  { src: "/training-2.jpg", alt: "Classroom training in SQL and analytics" },
  { src: "/training-3.jpg", alt: "Workshop with analysts and business teams" },
  { src: "/training-4.jpg", alt: "Hands-on practice during a training session" },
  { src: "/training-5.jpg", alt: "Group session after an analytics workshop" },
  { src: "/training-6.jpg", alt: "Participants working through a live exercise" },
  { src: "/training-7.jpg", alt: "Training session on dashboards and reporting" },
  { src: "/training-8.jpg", alt: "Closing discussion at a data workshop" },
];

export default function Training() {
  const [index, setIndex] = useState(0);
  const total = photos.length;

  const prev = () => setIndex((current) => (current === 0 ? total - 1 : current - 1));
  const next = () => setIndex((current) => (current === total - 1 ? 0 : current + 1));

  return (
    <section id="training" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-24 border-t border-[#27272a]">
      <div className="max-w-2xl mb-10">
        <p className="uppercase tracking-[0.18em] text-xs text-[#10b981] font-medium mb-3">Training</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
          Data Analytics Training &amp; Capacity Building
        </h2>
        <p className="mt-4 text-[#a1a1aa] text-sm sm:text-base">
          Training FIRS officers on data integrity and privacy, alongside practical SQL, Power BI, and Python sessions for analysts and operations teams.
        </p>
      </div>

      <div className="relative">
        <div className="overflow-hidden rounded-3xl border border-[#27272a] bg-[#111114]">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {photos.map((photo) => (
              <div key={photo.src} className="min-w-full">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-[260px] sm:h-[380px] md:h-[460px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 border border-white/10 text-white flex items-center justify-center hover:bg-black/90"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 border border-white/10 text-white flex items-center justify-center hover:bg-black/90"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-[#10b981]" : "w-2 bg-[#3f3f46]"}`}
          />
        ))}
      </div>
    </section>
  );
}
