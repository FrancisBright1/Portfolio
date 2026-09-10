"use client";

import React from "react";

const education = [
  { degree: "M.Sc. Protein Biochemistry (in view)", school: "University of Uyo, Nigeria", period: "2024 — Present", note: "Postgraduate research that keeps statistical reasoning and hypothesis design in regular use." },
  { degree: "B.Sc. Biochemistry", school: "University of Uyo, Nigeria", period: "2015 — 2019", note: "Quantitative coursework that sits underneath later work in analysis, experiments and modelling." },
];

const certifications = [
  "Data Analysis & Wrangling — Data Campus Africa",
  "Data Management & Governance — iCode Africa",
  "Statistical modelling with Python (SciPy, scikit-learn) — applied practitioner study",
  "Tableau for product analytics — applied practitioner study",
  "A/B testing and experiment design — self-directed, used on the job",
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
            <p className="text-[#a1a1aa] mb-4">{edu.school}</p>
            <p className="text-sm text-[#71717a] leading-relaxed">{edu.note}</p>
          </article>
        ))}
      </div>
      <div>
        <h3 className="uppercase tracking-[0.18em] text-xs text-[#10b981] mb-4">Certifications and professional development</h3>
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-[#d4d4d8] text-sm sm:text-[15px]">
          {certifications.map((cert) => (
            <li key={cert} className="flex items-start gap-3 py-1">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#10b981] shrink-0" aria-hidden />
              <span>{cert}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
