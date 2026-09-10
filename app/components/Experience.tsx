"use client";

import React from "react";

const experiences = [
  {
    role: "Lead Data Analyst",
    company: "Timi Tech Digital Consult",
    period: "Sept 2023 — Present",
    location: "Uyo, Nigeria",
    highlights: [
      "Build and maintain dashboards covering acquisition, activation, retention and other weekly KPIs for product and leadership.",
      "Analyse product and campaign performance in SQL, Power BI and Python, then write a short recommendation the team can act on.",
      "Support product tests by defining the success metric, checking the results, and summarising whether a change is worth keeping.",
      "Group users by behaviour to show which segments engage, drop off or convert.",
      "Train colleagues in SQL, Python and Power BI.",
    ],
  },
  {
    role: "Senior Data Analyst",
    company: "Carnation Consult",
    period: "2021 — 2023",
    location: "Nigeria",
    highlights: [
      "Analysed business and operations data to find performance gaps.",
      "Cleaned, transformed and checked datasets before they were used in reports.",
      "Built recurring dashboards and ad-hoc analyses for KPI monitoring.",
      "Investigated unusual movements in metrics and shared the findings with other teams.",
      "Automated repeat reporting so less time was spent on manual refreshes.",
    ],
  },
  {
    role: "Junior Data Analyst",
    company: "Data Science Nigeria",
    period: "Jan 2020 — Aug 2022",
    location: "Uyo, Nigeria",
    highlights: [
      "Supported reporting workflows with Python and SQL.",
      "Built Power BI dashboards for KPI monitoring.",
      "Ran trend, correlation and basic regression analysis on sales and operations data.",
      "Helped prepare and check datasets used in later analysis.",
      "Wrote findings in language that non-technical teammates could use.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-24 border-t border-[#27272a]">
      <div className="max-w-2xl mb-12">
        <p className="uppercase tracking-[0.18em] text-xs text-[#10b981] font-medium mb-3">Experience</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">Work history</h2>
        <p className="mt-4 text-[#a1a1aa] text-sm sm:text-base">
          Carnation Consult (2021—2023) and Data Science Nigeria (2020—2022) overlap as listed on the current CV. Update these dates if LinkedIn or the signed CV is different.
        </p>
      </div>
      <div className="space-y-14">
        {experiences.map((exp) => (
          <article key={exp.role} className="timeline-item pl-12 sm:pl-14">
            <div className="timeline-dot absolute left-0 top-1 rounded-full flex items-center justify-center" aria-hidden>
              <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">{exp.role}</h3>
              <p className="font-mono text-sm text-[#10b981]">{exp.period}</p>
            </div>
            <p className="text-[#a1a1aa] mb-5">
              {exp.company} <span className="text-[#71717a]">·</span> {exp.location}
            </p>
            <ul className="space-y-3">
              {exp.highlights.map((text) => (
                <li key={text} className="flex gap-3 text-[15px] leading-relaxed text-[#d4d4d8]">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#10b981] shrink-0" aria-hidden />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
