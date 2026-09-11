"use client";

import React from "react";

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
  return (
    <section id="training" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-24 border-t border-[#27272a]">
      <div className="max-w-2xl mb-12">
        <p className="uppercase tracking-[0.18em] text-xs text-[#10b981] font-medium mb-3">Training</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">Teaching the work</h2>
        <p className="mt-4 text-[#a1a1aa] text-sm sm:text-base">
          I run practical sessions in SQL, Power BI and Python for analysts and business teams at Timi Tech Digital Consult.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {photos.map((photo) => (
          <div key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#27272a] bg-[#111114]">
            <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
