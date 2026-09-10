"use client";

import React from "react";

const education = [
  { degree: "M.Sc. Protein Biochemistry (in view)", school: "University of Uyo, Nigeria", period: "2025 — Present" },
  { degree: "B.Sc. Biochemistry", school: "University of Uyo, Nigeria", period: "2015 — 2019" },
];

const certifications = [
  "Data Analysis & Wrangling — Data Campus Africa",
  "Data Management & Governance — iCode Africa",
];

const development = [
  "Statistical modelling with Python — self-directed",
  "Tableau for product analytics — project-based learning",
  "A/B testing and experiment design — self-directed",
];

export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-24 border-t border-[#27272a]">
      <div className="max-w-2xl mb-12">
        <p className="uppercase tracking-[0.18em] text-xs text-[#10b981] font-medium mb-3">Education</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">Education and study</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-12">
        {education.map((edu) => (
          <article key={edu.degree} className="card rounded-2xl p-6 sm:p-8">
            <p className="uppercase tracking-widest text-xs text-[#10b981] mb-3">{edu.period}</p>
            <h3 className="text-xl font-semibold tracking-tight mb-1">{edu.degree}</h3>
            <p className="text-[#a1a1aa]">{edu.school}</p>
          </article>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="uppercase tracking-[0.18em] text-xs text-[#10b981] mb-4">Certifications</h3>
          <ul className="space-y-2 text-[#d4d4d8] text-sm sm:text-[15px]">
            {certifications.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1 h-1 rounded-full bg-[#10b981] shrink-0" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="uppercase tracking-[0.18em] text-xs text-[#10b981] mb-4">Professional development</h3>
          <ul className="space-y-2 text-[#d4d4d8] text-sm sm:text-[15px]">
            {development.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1 h-1 rounded-full bg-[#10b981] shrink-0" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
