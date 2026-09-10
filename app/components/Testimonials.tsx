"use client";

import React from "react";

const points = [
  { title: "Start with the decision", text: "I ask what the team needs to choose before I open a notebook. The analysis is built around that decision, not around a chart type." },
  { title: "Show the method", text: "SQL, Python, Power BI or Excel — the tool is secondary. I can walk through how the number was produced and what would change it." },
  { title: "Write for the room", text: "Findings are written so a product manager or operations lead can use them without a translator sitting next to the dashboard." },
];

export default function Testimonials() {
  return (
    <section id="approach" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-24 border-t border-[#27272a]">
      <div className="max-w-2xl mb-12">
        <p className="uppercase tracking-[0.18em] text-xs text-[#10b981] font-medium mb-3">Working style</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">What you can expect</h2>
        <p className="mt-4 text-[#a1a1aa] text-sm sm:text-base">
          Named testimonials are not shown here. The quotes previously on this page could not be verified with a public profile, so they have been removed.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {points.map((item) => (
          <div key={item.title} className="card rounded-2xl p-6 sm:p-8">
            <h3 className="font-semibold text-lg tracking-tight mb-3">{item.title}</h3>
            <p className="text-[#a1a1aa] text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
