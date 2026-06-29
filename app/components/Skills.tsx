"use client";

import React, { useState } from 'react';
import { useInView } from 'framer-motion';

const skillCategories = [
  {
    title: "Analytics & Experimentation",
    skills: [
      { name: "SQL (Advanced)", level: 95 },
      { name: "Python (Pandas, NumPy, SciPy, Scikit-learn)", level: 92 },
      { name: "A/B Testing & Experiment Design", level: 90 },
      { name: "Statistical Modelling & Regression", level: 88 },
      { name: "Funnel & Cohort Analysis", level: 93 },
    ]
  },
  {
    title: "Business Intelligence & Visualisation",
    skills: [
      { name: "Power BI (DAX)", level: 94 },
      { name: "Tableau", level: 91 },
      { name: "Looker", level: 78 },
      { name: "Self-Service Dashboard Development", level: 95 },
    ]
  },
  {
    title: "Product Growth & Data Engineering",
    skills: [
      { name: "User Segmentation & Clustering", level: 89 },
      { name: "Retention Modelling & Churn Prediction", level: 87 },
      { name: "ETL Pipeline Design & Data Quality", level: 85 },
      { name: "Data Modelling for Analytics", level: 90 },
    ]
  }
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24 border-t border-[#27272a]">
      <div className="max-w-2xl mb-14">
        <div className="uppercase tracking-[3px] text-xs text-[#10b981] font-medium mb-3">CHAPTER 04 — CAPABILITIES</div>
        <h2 className="text-5xl font-semibold tracking-[-2.5px]">Skills &amp; Expertise</h2>
        <p className="mt-4 text-[#a1a1aa]">Proficiency levels reflect real-world project impact and production usage.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="card rounded-3xl p-8">
            <h3 className="font-semibold text-xl tracking-tight mb-8 text-[#f4f4f5]">{category.title}</h3>
            
            <div className="space-y-7">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex} 
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="group"
                >
                  <div className="flex justify-between items-baseline mb-2.5 text-sm">
                    <span className="font-medium text-[#e4e4e7]">{skill.name}</span>
                    <span className="font-mono text-xs text-[#10b981] tabular-nums">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ 
                        width: hoveredSkill === skill.name || hoveredSkill === null ? `${skill.level}%` : '0%',
                        transitionDelay: `${skillIndex * 40}ms`
                      }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-xs text-[#71717a] tracking-widest">ALSO PROFICIENT IN • SPSS • Jupyter • Data Storytelling • Stakeholder Communication</div>
    </section>
  );
}
