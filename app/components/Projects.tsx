"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { projects, type Project } from "../lib/projects";

const filters = ["All", ...Array.from(new Set(projects.map((p) => p.category)))] as const;

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-24 border-t border-[#27272a]">
      <div className="flex flex-col gap-6 mb-10">
        <div>
          <p className="uppercase tracking-[0.18em] text-xs text-[#10b981] font-medium mb-3">Projects</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">Selected work</h2>
          <p className="mt-3 max-w-2xl text-[#a1a1aa] text-sm sm:text-base">
            Each project is written so a hiring manager can see the question, the data, the method and the recommendation. Where a live app or repository exists, the link is included. Where it does not, that is stated.
          </p>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1" role="tablist" aria-label="Filter projects">
          {filters.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              role="tab"
              aria-selected={filter === cat}
              className={`shrink-0 px-4 py-2 text-sm rounded-full border transition-colors ${
                filter === cat ? "bg-[#10b981] text-[#0a0a0f] border-[#10b981]" : "border-[#27272a] text-[#a1a1aa] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card rounded-3xl overflow-hidden flex flex-col">
      <div className="relative h-48 sm:h-56 bg-[#111114]">
        <img src={project.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16161b] via-black/30 to-black/20" />
        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-black/60 rounded-full border border-white/10">{project.category}</span>
      </div>
      <div className="p-6 sm:p-7 flex-1 flex flex-col gap-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-2 text-[#a1a1aa] text-sm leading-relaxed">{project.problem}</p>
        </div>
        <p className="text-xs font-mono text-[#10b981]">{project.tools.join(" · ")}</p>
        <p className="text-sm text-[#d4d4d8] leading-relaxed">
          <span className="text-[#71717a]">What I analysed. </span>
          {project.analysed}
        </p>
        <p className="text-sm text-[#d4d4d8] leading-relaxed">
          <span className="text-[#71717a]">Recommendation. </span>
          {project.recommendation}
        </p>
        <div className="mt-auto pt-2 flex flex-wrap gap-2">
          <Link href={`/projects/${project.slug}`} className="btn-primary inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm">
            View case study <ArrowUpRight className="w-4 h-4" aria-hidden />
          </Link>
          {project.links.map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm">
              {link.label.toLowerCase().includes("github") ? <Github className="w-3.5 h-3.5" aria-hidden /> : <ExternalLink className="w-3.5 h-3.5" aria-hidden />}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
