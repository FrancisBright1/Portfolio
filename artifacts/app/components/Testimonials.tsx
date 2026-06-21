"use client";

import React from 'react';

const testimonials = [
  {
    quote: "Francis transformed how we understand our users. His dashboards and experimentation framework gave the entire product team clarity and confidence. Retention improved measurably after his segmentation work.",
    name: "Adaeze Okoro",
    role: "Head of Product, Timi Tech Digital Consult",
    company: ""
  },
  {
    quote: "One of the best data minds I've worked with. Francis doesn't just deliver numbers — he translates them into clear product recommendations that leadership actually acts on. His training sessions also upskilled our entire team.",
    name: "Chukwudi Eze",
    role: "Lead Data Scientist, Data Science Nigeria",
    company: ""
  },
  {
    quote: "Working with Francis on growth experiments was a masterclass. He brings scientific rigour to A/B testing and always backs recommendations with solid statistical evidence. A true growth partner.",
    name: "Ifeoma Nwosu",
    role: "Growth Marketing Lead",
    company: ""
  }
];

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 border-t border-[#27272a] bg-[#111114]">
      <div className="max-w-2xl mb-14">
        <div className="uppercase tracking-[3px] text-xs text-[#10b981] font-medium mb-3">CHAPTER 07 — VOICES</div>
        <h2 className="text-5xl font-semibold tracking-[-2.5px]">What Colleagues Say</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, index) => (
          <div key={index} className="card rounded-3xl p-9 flex flex-col">
            <div className="text-6xl text-[#10b981] font-serif leading-none mb-6 select-none">“</div>
            <p className="text-[#d4d4d8] italic leading-relaxed flex-1 text-[15px]">“{t.quote}”</p>
            
            <div className="pt-8 mt-auto border-t border-[#27272a]">
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-[#71717a]">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
