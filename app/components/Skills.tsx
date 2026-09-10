"use client";

import React from "react";

const skillCategories = [
  { title: "Data analysis", items: ["Exploratory data analysis", "Statistical analysis", "Data cleaning", "Data transformation", "Data storytelling"] },
  { title: "SQL", items: ["Joins", "CTEs", "Subqueries", "Window functions", "Aggregations", "Data transformation"] },
  { title: "Power BI", items: ["Data modelling", "DAX", "Power Query", "KPI development", "Dashboard development"] },
  { title: "Python", items: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Exploratory data analysis"] },
  { title: "Excel", items: ["Pivot tables", "Lookup functions", "Data cleaning", "Dashboards", "Reporting"] },
  { title: "Data foundations", items: ["ETL", "Data validation", "Data transformation", "Relational databases", "Pipeline concepts"] },
];

const also = ["Tableau", "Looker — working knowledge", "SPSS", "Jupyter", "Streamlit"];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-24 border-t border-[#27272a]">
      <div className="max-w-2xl mb-12">
        <p className="uppercase tracking-[0.18em] text-xs text-[#10b981] font-medium mb-3">Skills</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">Tools I use</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category) => (
          <div key={category.title} className="card rounded-2xl p-6">
            <h3 className="font-semibold text-lg tracking-tight mb-4">{category.title}</h3>
            <ul className="space-y-2">
              {category.items.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-[#d4d4d8]">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-[#10b981] shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm text-[#71717a]">Also used in projects: {also.join(" · ")}</p>
    </section>
  );
}
