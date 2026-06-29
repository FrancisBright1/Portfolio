"use client";

import React from 'react';
import { Target, TrendingUp, Database, FlaskConical } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: "Product Analytics",
    desc: "Funnel analysis, cohort tracking, and conversion optimisation that directly inform product roadmap decisions."
  },
  {
    icon: TrendingUp,
    title: "Growth Analytics",
    desc: "User acquisition, retention modelling, LTV prediction, and churn prevention strategies that move key business metrics."
  },
  {
    icon: Database,
    title: "Data Engineering",
    desc: "Robust ETL pipelines, data quality frameworks, and self-service data models that scale with the organisation."
  },
  {
    icon: FlaskConical,
    title: "Experimentation",
    desc: "Rigorous A/B and multivariate testing, statistical significance, and post-experiment impact analysis."
  }
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 border-t border-[#27272a]">
      <div className="max-w-2xl mb-16">
        <div className="uppercase tracking-[3px] text-xs text-[#10b981] font-medium mb-3">CHAPTER 01 — THE APPROACH</div>
        <h2 className="text-5xl font-semibold tracking-[-2.5px]">About Me</h2>
        <p className="mt-6 text-xl text-[#a1a1aa] leading-tight">
          Results-oriented Product &amp; Growth Data Analyst translating complex data into actionable insights 
          that accelerate user growth and optimise product performance at scale.
        </p>
      </div>

      <div className="prose prose-invert max-w-none text-[#a1a1aa] text-[15px] leading-relaxed max-w-3xl">
        <p>
          With over four years of hands-on experience, I specialise in bridging the gap between raw product data and 
          high-stakes business decisions. My work spans designing and running growth experiments, building executive-grade 
          self-service dashboards, and applying statistical modelling to uncover hidden opportunities in user behaviour.
        </p>
        <p className="mt-4">
          I have partnered closely with product, engineering, and growth teams to instrument tracking, define success metrics, 
          and deliver insights that have directly influenced feature prioritisation and roadmap direction. I am equally comfortable 
          writing production-grade SQL and Python as I am presenting findings to non-technical stakeholders.
        </p>
        <p className="mt-4">
          Currently leading analytics at Timi Tech Digital Consult while pursuing an M.Sc. in Protein Biochemistry — 
          a combination that sharpens both my quantitative rigour and scientific approach to hypothesis testing.
        </p>
      </div>

      {/* Four Pillars */}
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <div key={index} className="card rounded-3xl p-8 group">
              <div className="w-12 h-12 rounded-2xl bg-[#10b981]/10 flex items-center justify-center mb-6 group-hover:bg-[#10b981]/20 transition-colors">
                <Icon className="w-6 h-6 text-[#10b981]" />
              </div>
              <h3 className="font-semibold text-xl tracking-tight mb-3">{pillar.title}</h3>
              <p className="text-[#a1a1aa] text-[15px] leading-snug">{pillar.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
