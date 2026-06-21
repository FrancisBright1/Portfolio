"use client";

import React from 'react';

const education = [
  {
    degree: "M.Sc. Protein Biochemistry (In View)",
    school: "University of Uyo, Nigeria",
    period: "2024 — Present",
    note: "Postgraduate research strengthening statistical reasoning, hypothesis design and data-driven scientific thinking."
  },
  {
    degree: "B.Sc. Biochemistry",
    school: "University of Uyo, Nigeria",
    period: "2015 — 2019",
    note: "Strong quantitative and analytical foundation that directly underpins advanced data modelling, experimental design and statistical analysis."
  }
];

const certifications = [
  "Data Analysis & Wrangling — Data Campus Africa",
  "Data Management & Governance — iCode Africa",
  "Statistical Modelling with Python (SciPy, Scikit-learn) — Applied Practitioner",
  "Tableau for Product Analytics — Applied Practitioner",
  "A/B Testing & Experimentation Design — Self-directed (applied across projects)"
];

export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-24 border-t border-[#27272a]">
      <div className="max-w-2xl mb-14">
        <div className="uppercase tracking-[3px] text-xs text-[#10b981] font-medium mb-3">CHAPTER 06 — FOUNDATION</div>
        <h2 className="text-5xl font-semibold tracking-[-2.5px]">Education &amp; Continuous Learning</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {education.map((edu, index) => (
          <div key={index} className="card rounded-3xl p-9">
            <div className="uppercase tracking-widest text-xs text-[#10b981] mb-4">{edu.period}</div>
            <h3 className="text-2xl font-semibold tracking-tight leading-tight mb-2">{edu.degree}</h3>
            <div className="text-[#a1a1aa] mb-5">{edu.school}</div>
            <p className="text-sm text-[#71717a] leading-relaxed">{edu.note}</p>
          </div>
        ))}
      </div>

      <div>
        <div className="uppercase tracking-[3px] text-xs text-[#10b981] mb-5">CERTIFICATIONS &amp; PROFESSIONAL DEVELOPMENT</div>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-[#d4d4d8]">
          {certifications.map((cert, i) => (
            <div key={i} className="flex items-start gap-3 py-1">
              <div className="mt-2 w-1 h-1 rounded-full bg-[#10b981] flex-shrink-0" />
              <span>{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
