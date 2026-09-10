"use client";

import React from "react";
import { LineChart, Users, Wrench, MessageSquare } from "lucide-react";

const pillars = [
  { icon: LineChart, title: "Business & product analytics", desc: "Funnels, cohorts, KPIs and performance questions that help a team decide what to do next." },
  { icon: Users, title: "Customer analytics", desc: "Segmentation, retention and engagement analysis so customer behaviour is visible, not guessed." },
  { icon: Wrench, title: "Analysis-ready data", desc: "Cleaning, transformation, validation and modelling so dashboards and reports start from reliable tables." },
  { icon: MessageSquare, title: "Data storytelling", desc: "Clear charts and written findings that a non-technical stakeholder can use in a meeting." },
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-24 border-t border-[#27272a]">
      <div className="max-w-2xl mb-12">
        <p className="uppercase tracking-[0.18em] text-xs text-[#10b981] font-medium mb-3">About</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">How I work</h2>
      </div>
      <div className="max-w-3xl space-y-4 text-[#a1a1aa] text-[15px] sm:text-base leading-relaxed">
        <p>I am a Data Analyst. I spend most of my time answering practical questions: what is happening in the data, why it might be happening, and what a team should look at next.</p>
        <p>Day to day that means writing SQL, building Power BI and Tableau reports, working in Python and Excel, and explaining the result in plain language. I am comfortable sitting with product, operations and business stakeholders — not only other analysts.</p>
        <p>I currently lead analytics at Timi Tech Digital Consult. I am also completing an M.Sc. in Protein Biochemistry at the University of Uyo, which is where a lot of my habit of writing a clear question before touching the data comes from.</p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div key={pillar.title} className="card rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-[#10b981]" aria-hidden />
              </div>
              <h3 className="font-semibold text-lg tracking-tight mb-2">{pillar.title}</h3>
              <p className="text-[#a1a1aa] text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
