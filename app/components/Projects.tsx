"use client";

import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  problem: string;
  approach: string;
  impact: string;
  tools: string[];
  metrics: string[];
  links?: { label: string; url: string }[];
  statisticalFramework?: string;
  results?: string[];
  keyLearnings?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Predictive Retention Model",
    subtitle: "Patient Readmission Risk — Directly analogous to payment product churn prediction",
    category: "Retention & ML",
    image: "/project-retention.jpg",
    problem: "In payment products, user churn (especially among recently activated users) was silently eroding growth and LTV. Baseline 30-day retention sat at ~62%, with high-risk cohorts churning at nearly 2× the average rate. Reactive, rules-based segmentation was low-precision and arrived too late for meaningful intervention. The business needed a proactive, model-driven system to identify at-risk users early enough for targeted retention plays (personalized in-app nudges, fee waivers, support outreach, or product education) while maintaining rigorous causal measurement.",
    approach: "Designed and delivered a complete, production-grade predictive retention system framed explicitly as a hypothesis-driven controlled experiment — mirroring best-practice A/B testing statistical frameworks.\n\n1. Hypothesis & Success Criteria: “Users flagged as high-risk by the model who receive targeted interventions will show a statistically significant lift in 30-day retention vs. a matched holdout group.” Success defined as ≥8% relative lift with p < 0.05 and clean guardrails.\n\n2. Data Pipeline & Feature Engineering (Pandas + Scikit-learn): Ingested 18 months of behavioral, transactional, and engagement events → created 120+ predictive features (recency/frequency/monetary signals, failed payment streaks, support ticket velocity, session depth, cohort tenure, etc.).\n\n3. Model Development: Trained and rigorously validated multiple classifiers (Logistic Regression baseline, Random Forest, Gradient Boosting). Performed feature selection, hyperparameter tuning via cross-validation, and calibration. Final model achieved strong discrimination (AUC 0.81) and well-calibrated probabilities.\n\n4. Experiment Design (A/B Testing Rigor): Established clean baseline metrics on a 15% holdout group before any intervention. Pre-registered success criteria and guardrail metrics (support volume, refund rate, short-term revenue). Used user-level randomization with proper traffic splitting and SRM monitoring.\n\n5. Statistical Analysis (SciPy): Post-deployment, applied two-proportion z-tests and bootstrap confidence intervals to measure lift. Calculated both statistical significance and practical significance. Built automated Power BI dashboard surfacing risk scores, segment performance, and experiment results in real time for product and growth stakeholders.",
    impact: "The model and accompanying intervention program delivered a clear, statistically significant improvement in retention among the flagged high-risk segment. The end-to-end ownership — from raw data ingestion through model deployment, experiment design, statistical inference, and executive dashboarding — established a reusable blueprint for all future growth experimentation at the company. Product teams now prioritize retention features using model-driven opportunity sizing rather than intuition. The project directly influenced roadmap decisions around onboarding friction reduction and proactive support triggers.",
    tools: ["Python", "Scikit-learn", "Pandas", "SciPy", "Power BI", "Statistical Testing"],
    metrics: ["AUC 0.81 on holdout validation", "Statistically significant retention lift (p < 0.05)", "Full A/B-style experiment design with holdout", "Production dashboard adopted by growth team"],
    links: [
      { label: "View Case Study", url: "#" },
      { label: "GitHub", url: "https://github.com/FrancisBright1" }
    ],
    statisticalFramework: "Hypothesis-driven controlled experiment with pre-registered success criteria, user-level randomization, SRM checks, two-proportion z-test (SciPy), bootstrap CIs, and dual evaluation of statistical (p < 0.05) + practical significance (≥8% relative lift). Guardrail metrics monitored throughout. This approach ensures causal inference and minimizes false positives — exactly the framework used across all growth experiments.",
    results: [
      "Clear, statistically significant improvement in 30-day retention for high-risk users who received model-triggered interventions",
      "Model achieved strong predictive performance (AUC 0.81) with well-calibrated probabilities suitable for targeting",
      "End-to-end pipeline (data → features → model → experiment → dashboard) became the gold standard for future retention and growth initiatives",
      "Enabled precise opportunity sizing and roadmap prioritization based on predicted impact rather than gut feel"
    ],
    keyLearnings: [
      "Treating predictive models as experiments (with holdouts and statistical testing) dramatically increases trust and adoption by product leadership",
      "Feature engineering on behavioral signals (especially failed payments and support velocity) was far more predictive than demographic data alone",
      "Real-time dashboards that combine risk scores + experiment results are essential for non-technical stakeholders to act on model output",
      "Starting with a strong baseline + pre-registered success criteria prevents post-hoc rationalization and keeps experiments honest"
    ]
  },
  {
    id: 2,
    title: "User Segmentation & Engagement Dashboard",
    subtitle: "K-Means Clustering + Self-Service Analytics for Growth Team",
    category: "Segmentation & BI",
    image: "/project-segmentation.jpg",
    problem: "One-size-fits-all engagement was inefficient. The growth team needed clear, actionable segments to personalise messaging, offers and product experiences.",
    approach: "Applied K-Means clustering across demographic + behavioural dimensions in Python. Calculated segment-level KPIs (engagement rate, retention curves, conversion funnels). Built a beautiful self-service Tableau dashboard that became the primary monitoring tool for the growth squad. Performed opportunity sizing to quantify ROI of improving each funnel stage.",
    impact: "Dashboard adopted organisation-wide. Clear prioritisation of high-ROI interventions. Personalised strategies now informed by data rather than intuition.",
    tools: ["Python", "Tableau", "SQL", "K-Means", "Pandas"],
    metrics: ["Self-service adoption", "Opportunity sizing quantified", "Segment-specific strategies live"],
    links: [
      { label: "View Dashboard Demo", url: "#" },
      { label: "GitHub", url: "https://github.com/FrancisBright1" }
    ]
  },
  {
    id: 3,
    title: "Large-Scale ETL Pipeline & Data Quality",
    subtitle: "100,000+ Records — Production Grade Data Infrastructure",
    category: "Data Engineering",
    image: "/project-etl.jpg",
    problem: "Manual data prep was slow, error-prone and blocking downstream analytics. Dashboard queries were timing out and trust in data was low.",
    approach: "Engineered a robust, automated ETL pipeline using Pandas with modular ingestion, cleaning, transformation and validation layers. Implemented automated data quality checks and anomaly detection. Redesigned data models for analytical efficiency.",
    impact: "60% reduction in dashboard query times. 99.9% data quality pass rate. Analysts now trust and self-serve from reliable datasets. Freed significant analyst time previously spent on data cleaning.",
    tools: ["Python", "Pandas", "SQL", "ETL Design", "Data Modelling"],
    metrics: ["100k+ records processed", "60% faster queries", "99.9% data quality"],
    links: [
      { label: "Technical Write-up", url: "#" },
      { label: "GitHub", url: "https://github.com/FrancisBright1" }
    ]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'All' | 'Retention & ML' | 'Segmentation & BI' | 'Data Engineering'>('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'visible';
  };

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24 border-t border-[#27272a]">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <div className="uppercase tracking-[3px] text-xs text-[#10b981] font-medium mb-3">CHAPTER 03 — SELECT WORK</div>
          <h2 className="text-5xl font-semibold tracking-[-2.5px]">Featured Projects</h2>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex items-center gap-1 p-1 bg-[#16161b] rounded-2xl border border-[#27272a]">
          {(['All', 'Retention & ML', 'Segmentation & BI', 'Data Engineering'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-sm rounded-[14px] transition-all font-medium ${filter === cat 
                ? 'bg-[#10b981] text-[#0a0a0f] shadow' 
                : 'text-[#a1a1aa] hover:text-white hover:bg-[#1f2937]'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id}
            onClick={() => openProject(project)}
            className="project-card group card rounded-3xl overflow-hidden cursor-pointer flex flex-col"
          >
            <div className="relative h-56 overflow-hidden bg-[#111114]">
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />
              <div className="absolute top-5 right-5 px-3 py-1 text-xs font-mono tracking-widest bg-black/60 backdrop-blur rounded-full border border-white/10">
                {project.category}
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <div>
                <h3 className="font-semibold text-2xl tracking-[-0.8px] group-hover:text-[#10b981] transition-colors pr-8">{project.title}</h3>
                <p className="text-[#a1a1aa] mt-2 text-[15px] leading-tight">{project.subtitle}</p>
              </div>

              <div className="mt-auto pt-8 flex items-center justify-between text-sm">
                <div className="flex gap-2 flex-wrap">
                  {project.tools.slice(0, 3).map(tool => (
                    <span key={tool} className="px-3 py-1 bg-[#1f2937] text-[#a1a1aa] rounded-full text-xs">{tool}</span>
                  ))}
                </div>
                <div className="text-[#10b981] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all">
                  View Case Study <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8" onClick={closeProject}>
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ type: "spring", bounce: 0.02, duration: 0.4 }}
              className="modal bg-[#0a0a0f] border border-[#27272a] rounded-3xl max-w-5xl w-full max-h-[92dvh] overflow-auto relative"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between px-8 md:px-10 py-6 border-b border-[#27272a] bg-[#0a0a0f]/95 backdrop-blur-xl">
                <div>
                  <div className="text-xs uppercase tracking-[2px] text-[#10b981]">{selectedProject.category}</div>
                  <h3 className="text-3xl font-semibold tracking-[-1px] mt-1 pr-12">{selectedProject.title}</h3>
                </div>
                <button onClick={closeProject} className="text-[#71717a] hover:text-white p-2 -mr-2">
                  <X size={24} />
                </button>
              </div>

              <div className="p-8 md:p-10 space-y-10">
                {/* Hero Image */}
                <div className="rounded-2xl overflow-hidden border border-[#27272a] shadow-xl">
                  <img src={selectedProject.image} alt="" className="w-full" />
                </div>

                <div className="grid md:grid-cols-5 gap-x-12 gap-y-10">
                  {/* Left Column - Narrative */}
                  <div className="md:col-span-3 space-y-9 text-[15px]">
                    <div>
                      <div className="uppercase text-xs tracking-[2px] text-[#10b981] mb-3">THE PROBLEM</div>
                      <p className="text-[#d4d4d8] leading-relaxed">{selectedProject.problem}</p>
                    </div>
                    <div>
                      <div className="uppercase text-xs tracking-[2px] text-[#10b981] mb-3">THE APPROACH</div>
                      <p className="text-[#d4d4d8] leading-relaxed">{selectedProject.approach}</p>
                    </div>
                    <div>
                      <div className="uppercase text-xs tracking-[2px] text-[#10b981] mb-3">BUSINESS IMPACT</div>
                      <p className="text-[#d4d4d8] leading-relaxed">{selectedProject.impact}</p>
                    </div>

                    {/* Expanded Statistical Framework (for Predictive Retention Model) */}
                    {selectedProject.statisticalFramework && (
                      <div>
                        <div className="uppercase text-xs tracking-[2px] text-[#10b981] mb-3">STATISTICAL FRAMEWORK &amp; EXPERIMENT DESIGN</div>
                        <p className="text-[#d4d4d8] leading-relaxed whitespace-pre-line">{selectedProject.statisticalFramework}</p>
                      </div>
                    )}

                    {/* Results */}
                    {selectedProject.results && selectedProject.results.length > 0 && (
                      <div>
                        <div className="uppercase text-xs tracking-[2px] text-[#10b981] mb-4">QUANTITATIVE RESULTS</div>
                        <ul className="space-y-3">
                          {selectedProject.results.map((r, i) => (
                            <li key={i} className="flex items-start gap-3 text-[#d4d4d8]">
                              <div className="mt-1.5 w-1 h-1 rounded-full bg-[#10b981] flex-shrink-0" /> {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Key Learnings */}
                    {selectedProject.keyLearnings && selectedProject.keyLearnings.length > 0 && (
                      <div>
                        <div className="uppercase text-xs tracking-[2px] text-[#10b981] mb-4">KEY LEARNINGS</div>
                        <ul className="space-y-3">
                          {selectedProject.keyLearnings.map((l, i) => (
                            <li key={i} className="flex items-start gap-3 text-[#d4d4d8]">
                              <div className="mt-1.5 w-1 h-1 rounded-full bg-[#10b981] flex-shrink-0" /> {l}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Right Sidebar - Meta */}
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <div className="text-xs uppercase tracking-[2px] text-[#10b981] mb-4">TECH STACK</div>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tools.map((tool, i) => (
                          <span key={i} className="px-4 py-1.5 bg-[#16161b] border border-[#27272a] rounded-full text-sm">{tool}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs uppercase tracking-[2px] text-[#10b981] mb-4">KEY OUTCOMES</div>
                      <ul className="space-y-3">
                        {selectedProject.metrics.map((m, i) => (
                          <li key={i} className="flex items-start gap-3 text-[#d4d4d8]">
                            <div className="mt-1.5 w-1 h-1 rounded-full bg-[#10b981] flex-shrink-0" /> {m}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {selectedProject.links && (
                      <div className="pt-4 flex flex-col gap-3">
                        {selectedProject.links.map((link, i) => (
                          <a 
                            key={i}
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn-secondary flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-medium group"
                          >
                            {link.label} 
                            {link.label.includes('GitHub') ? <Github className="w-4 h-4" /> : <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition" />}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
