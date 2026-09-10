"use client";

import React from "react";
import { MapPin, Mail, Linkedin, Github, ArrowRight } from "lucide-react";
import { SITE } from "../lib/site";

const facts = [
  { value: "4+", label: "Years analysing data" },
  { value: "SQL · BI · Python", label: "Core working stack" },
  { value: "Remote-ready", label: "Based in Uyo, Nigeria" },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-[100dvh] flex items-center pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#1f2937_0.8px,transparent_1px)] bg-[length:4px_4px] opacity-30" aria-hidden />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-12 items-center">
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16161b] border border-[#27272a] text-sm text-[#a1a1aa]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" aria-hidden />
              Available for full-time analyst roles
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[#10b981] mb-3">{SITE.name}</p>
              <h1 className="hero-headline text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-balance">
                Data Analyst
              </h1>
              <p className="mt-3 text-xl sm:text-2xl text-[#e4e4e7] tracking-tight">Business &amp; Product Analytics</p>
              <p className="mt-4 font-mono text-sm sm:text-base text-[#10b981]">SQL · Power BI · Python · Excel · Tableau</p>
            </div>

            <p className="max-w-xl text-base sm:text-lg text-[#a1a1aa] leading-relaxed">
              I turn business data into insights that support better decisions, improve performance and uncover opportunities for growth.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <button onClick={() => scrollTo("projects")} className="btn-primary group inline-flex items-center justify-center gap-2 px-6 h-12 rounded-2xl text-sm sm:text-base">
                View projects
                <ArrowRight className="w-4 h-4" aria-hidden />
              </button>
              <button onClick={() => scrollTo("contact")} className="btn-secondary inline-flex items-center justify-center px-6 h-12 rounded-2xl text-sm sm:text-base">
                Get in touch
              </button>
              <a href={SITE.cvPath} download className="btn-secondary inline-flex items-center justify-center px-5 h-12 rounded-2xl text-sm sm:text-base lg:hidden">
                Download CV
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-2 text-sm text-[#a1a1aa]">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" aria-hidden />
                {SITE.location} <span className="text-[#10b981]">· Remote ready</span>
              </span>
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 hover:text-[#10b981] break-all">
                <Mail className="w-4 h-4 shrink-0" aria-hidden />
                {SITE.email}
              </a>
              <span className="inline-flex items-center gap-3">
                <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="hover:text-[#10b981]">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={SITE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="hover:text-[#10b981]">
                  <Github className="w-4 h-4" />
                </a>
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[400px]">
              <div className="relative aspect-[4/3.15] rounded-3xl overflow-hidden border border-[#27272a]">
                <img src="/avatar.jpg" alt={`${SITE.name}, Data Analyst`} className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" aria-hidden />
              </div>
              <dl className="mt-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                {facts.map((fact) => (
                  <div key={fact.label} className="rounded-2xl border border-[#27272a] bg-[#16161b] px-4 py-3">
                    <dt className="text-xs uppercase tracking-[0.12em] text-[#71717a]">{fact.label}</dt>
                    <dd className="mt-1 text-[#f4f4f5] font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
