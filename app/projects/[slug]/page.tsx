import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { getProject, projects } from "../../lib/projects";
import { SITE } from "../../lib/site";
import SiteHeader from "../../components/SiteHeader";
import Footer from "../../components/Footer";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.problem,
    openGraph: {
      title: `${project.title} | ${SITE.shortName}`,
      description: project.problem,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const sections = [
    { label: "Business problem", body: project.problem },
    { label: "Data", body: project.data },
    { label: "Approach", body: project.approach },
    { label: "What I analysed", body: project.analysed },
    { label: "Why it matters", body: project.implication },
    { label: "Recommendation", body: project.recommendation },
  ];

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main id="main" className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4" aria-hidden />
          Back to projects
        </Link>
        <p className="text-xs uppercase tracking-[0.16em] text-[#10b981] mb-3">{project.category}</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">{project.title}</h1>
        <p className="mt-3 text-lg text-[#a1a1aa]">{project.subtitle}</p>
        <p className="mt-4 font-mono text-sm text-[#10b981]">{project.tools.join(" · ")}</p>
        <div className="mt-8 rounded-2xl overflow-hidden border border-[#27272a]">
          <img src={project.image} alt="" className="w-full" />
        </div>
        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.label}>
              <h2 className="text-xs uppercase tracking-[0.16em] text-[#10b981] mb-2">{section.label}</h2>
              <p className="text-[#d4d4d8] leading-relaxed">{section.body}</p>
            </section>
          ))}
          <section>
            <h2 className="text-xs uppercase tracking-[0.16em] text-[#10b981] mb-3">Findings</h2>
            <ul className="space-y-3">
              {project.findings.map((item) => (
                <li key={item} className="flex gap-3 text-[#d4d4d8] leading-relaxed">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#10b981] shrink-0" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="flex flex-wrap gap-3 pt-2">
            {project.links.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm">
                {link.label.toLowerCase().includes("github") ? <Github className="w-4 h-4" aria-hidden /> : <ExternalLink className="w-4 h-4" aria-hidden />}
                {link.label}
              </a>
            ))}
            <a href={`mailto:${SITE.email}?subject=${encodeURIComponent("Question about " + project.title)}`} className="btn-primary inline-flex items-center px-5 py-2.5 rounded-full text-sm">
              Ask about this project
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
