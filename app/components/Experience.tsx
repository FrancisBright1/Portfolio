"use client";

import React from 'react';
import { Calendar, Users, BarChart3, Target } from 'lucide-react';

const experiences = [
  {
    role: "Lead Product & Growth Data Analyst",
    company: "Timi Tech Digital Consult",
    period: "Sept 2023 — Present",
    location: "Uyo, Nigeria",
    highlights: [
      { icon: BarChart3, text: "Designed and maintained product funnel dashboards tracking acquisition, activation, retention & churn — weekly KPI visibility for PMs and leadership." },
      { icon: Target, text: "Led hypothesis-driven A/B & multivariate experiments across product features. Calculated statistical significance with SciPy and delivered post-launch impact analyses." },
      { icon: Users, text: "Built 10+ autonomous Power BI & Tableau dashboards reducing ad-hoc data requests by 40% and accelerating team decision cycles." },
      { icon: Target, text: "Applied K-Means clustering, regression & supervised learning (Scikit-learn) to segment users and predict engagement drop-off for targeted retention interventions." },
      { icon: Users, text: "Trained 100+ analysts and business professionals in SQL, Python and Power BI — driving organisation-wide data literacy." },
    ]
  },
  {
    role: "Senior Data Analyst",
    company: "Carnation Consult",
    period: "2021 — 2023",
    location: "Nigeria",
    highlights: [
      { icon: BarChart3, text: "Analyzed business and operational data to identify trends, performance gaps, and opportunities for improvement across key business functions." },
      { icon: Target, text: "Collected, cleaned, transformed, and validated datasets to ensure accuracy and reliability for analysis and reporting." },
      { icon: Users, text: "Developed and maintained analytical reports and dashboards that gave stakeholders clear visibility into key performance indicators." },
      { icon: BarChart3, text: "Conducted ad-hoc and recurring analyses to support strategic and operational decision-making." },
      { icon: Target, text: "Translated complex datasets into clear, actionable insights and presented findings to management and other stakeholders." },
      { icon: Users, text: "Monitored KPIs, investigated anomalies and performance trends, and collaborated with cross-functional teams to deliver data-driven solutions." },
      { icon: BarChart3, text: "Automated repetitive reporting and data-processing tasks, improving efficiency and reducing manual effort while supporting business planning and resource allocation." },
    ]
  },
  {
    role: "Junior Data Analyst",
    company: "Data Science Nigeria",
    period: "Jan 2020 — Aug 2022",
    location: "Uyo, Nigeria",
    highlights: [
      { icon: BarChart3, text: "Automated reporting workflows with Python & SQL, reducing manual data processing effort by 40% and freeing capacity for higher-value analysis." },
      { icon: BarChart3, text: "Built interactive Power BI dashboards for executive KPI monitoring enabling real-time performance visibility across product and business metrics." },
      { icon: Target, text: "Conducted statistical analyses (correlation, regression, trend) on sales and operational datasets using SPSS and Python to surface actionable insights." },
      { icon: Target, text: "Designed and maintained ETL workflows for large datasets ensuring clean, reliable data feeds into analytics and modelling environments." },
      { icon: Users, text: "Translated complex findings into clear narratives for non-technical stakeholders across product, sales and operations teams." },
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-24 border-t border-[#27272a]">
      <div className="max-w-2xl mb-14">
        <div className="uppercase tracking-[3px] text-xs text-[#10b981] font-medium mb-3">CHAPTER 02 — THE JOURNEY</div>
        <h2 className="text-5xl font-semibold tracking-[-2.5px]">Professional Experience</h2>
      </div>

      <div className="space-y-16">
        {experiences.map((exp, idx) => (
          <div key={idx} className="timeline-item pl-14">
            {/* Timeline Dot */}
            <div className="timeline-dot absolute left-0 top-1 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#10b981]" />
            </div>

            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                <h3 className="text-3xl font-semibold tracking-[-1px]">{exp.role}</h3>
                <div className="font-mono text-sm text-[#10b981] tracking-[1px]">{exp.period}</div>
              </div>
              <div className="flex items-center gap-3 text-lg text-[#a1a1aa] mb-8">
                {exp.company} <span className="text-[#71717a]">•</span> {exp.location}
              </div>

              <div className="space-y-5">
                {exp.highlights.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-4 group">
                      <div className="mt-1.5 shrink-0">
                        <Icon className="w-4 h-4 text-[#10b981] group-hover:scale-110 transition-transform" />
                      </div>
                      <p className="text-[15px] leading-relaxed text-[#d4d4d8]">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
