"use client";

import React from "react";

const metrics = [
  { value: "10+", label: "Interactive Dashboards Built", detail: "Power BI and Tableau reports for product, sales and leadership teams. Count is from roles at Timi Tech and earlier positions." },
  { value: "40%", label: "Reduction in Manual Reporting", detail: "Observed on recurring extract and refresh tasks after moving them from manual rebuilds to SQL and Python. Applies to the tasks measured, not all reporting." },
  { value: "100+", label: "Professionals Trained", detail: "SQL, Power BI and Python sessions for analysts and business colleagues, including FIRS officers in Uyo on data integrity and privacy." },
];

const outcomes = [
  { title: "Interactive dashboards", text: "Built Power BI and Tableau reports that product, sales and leadership teams could use without a new request for every chart." },
  { title: "Reporting workflows", text: "Automated recurring extracts and refreshes with SQL and Python so analysts spent less time on manual prep for those tasks." },
  { title: "Analysis on large files", text: "Prepared and modelled 100,000+ records for downstream reporting, including quality checks before the data reached a dashboard." },
  { title: "Analytics training", text: "Taught SQL, Python and Power BI sessions for analysts and business colleagues at Timi Tech Digital Consult." },
];

export default function Impact() {
  return (
    <section id="impact" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-24 border-t border-[#27272a]">
      <div className="max-w-2xl mb-12">
        <p className="uppercase tracking-[0.18em] text-xs text-[#10b981] font-medium mb-3">Impact</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">What the work produced</h2>
        <p className="mt-4 text-[#a1a1aa] text-sm sm:text-base">
          Figures below describe work that was measured or counted. They do not claim company-wide financial outcomes unless a specific before-and-after result is shown on a project page.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {metrics.map((item) => (
          <div key={item.label} className="card rounded-2xl p-6 sm:p-8 text-center">
            <div className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#10b981]">{item.value}</div>
            <p className="mt-3 text-sm font-medium text-[#f4f4f5]">{item.label}</p>
            <p className="mt-2 text-xs text-[#a1a1aa] leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {outcomes.map((item) => (
          <div key={item.title} className="card rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-semibold tracking-tight mb-2">{item.title}</h3>
            <p className="text-[#a1a1aa] text-sm sm:text-[15px] leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
