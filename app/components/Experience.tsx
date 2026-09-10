"use client";

import React from "react";

const experiences = [
  {
    role: "Lead Product & Growth Data Analyst",
    company: "Timi Tech Digital Consult",
    period: "Sept 2023 — Present",
    location: "Uyo, Nigeria",
    highlights: [
      "Built and maintained funnel dashboards covering acquisition, activation, retention and churn so product and leadership had a weekly view of the same KPIs.",
      "Designed A/B and multivariate tests on product features, used SciPy to check whether results were statistically meaningful, and wrote up what changed after launch.",
      "Delivered Power BI and Tableau dashboards that teams could use without sending a new request for every chart.",
      "Used SQL, Python and clustering methods to group users and flag engagement drop-off for retention work.",
      "Ran SQL, Python and Power BI training sessions for analysts and business colleagues.",
    ],
  },
  {
    role: "Senior Data Analyst",
    company: "Carnation Consult",
    period: "2021 — 2023",
    location: "Nigeria",
    highlights: [
      "Analysed business and operations data to find performance gaps and questions worth acting on.",
      "Cleaned, transformed and checked datasets before they were used in reports.",
      "Built recurring dashboards and ad-hoc analyses that gave stakeholders a clear view of KPIs.",
      "Investigated unusual movements in metrics and worked with other teams on the follow-up.",
      "Automated repeat reporting and data-prep tasks so less time was spent on manual refreshes.",
    ],
  },
  {
    role: "Junior Data Analyst",
    company: "Data Science Nigeria",
    period: "Jan 2020 — Aug 2022",
    location: "Uyo, Nigeria",
    highlights: [
      "Automated reporting workflows with Python and SQL so recurring extracts did not have to be rebuilt by hand.",
      "Built Power BI dashboards for KPI monitoring across product and business metrics.",
      "Ran correlation, regression and trend analysis on sales and operations data in SPSS and Python.",
      "Maintained ETL workflows that fed later analysis and modelling work.",
      "Wrote findings in language that product, sales and operations teams could use.",
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
          Dates below are taken from the current CV. The Carnation Consult and Data Science Nigeria periods overlap as listed; they are shown here as they appear on the CV, not adjusted.
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
