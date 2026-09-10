"use client";

import React, { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "../lib/site";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -45%" }
    );

    document.querySelectorAll("section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-[#27272a]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between" aria-label="Primary">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 group min-w-0"
        >
          <div className="w-9 h-9 rounded-xl bg-[#10b981] flex items-center justify-center shrink-0" aria-hidden>
            <span className="text-[#0a0a0f] font-semibold text-lg tracking-tight">FB</span>
          </div>
          <div className="min-w-0">
            <div className="font-semibold text-base sm:text-lg tracking-tight group-hover:text-[#10b981] transition-colors truncate">
              {SITE.shortName}
            </div>
            <div className="text-[10px] text-[#71717a] -mt-0.5 uppercase tracking-[0.12em]">Data Analyst</div>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`nav-link transition-colors ${
                activeSection === link.href.slice(1) ? "active text-[#10b981]" : "text-[#a1a1aa] hover:text-[#f4f4f5]"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href={SITE.cvPath} download className="btn-secondary flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium">
            <Download className="w-4 h-4" aria-hidden />
            Download CV
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
            className="btn-primary flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
          >
            Let&apos;s Talk
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center text-[#a1a1aa] hover:text-white"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-[#27272a] bg-[#0a0a0f] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4 text-base">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => scrollToSection(link.href)} className="text-left text-[#a1a1aa] hover:text-white py-1">
                  {link.label}
                </button>
              ))}
              <a href={SITE.cvPath} download className="btn-secondary flex items-center justify-center gap-2 py-3 rounded-2xl">
                <Download className="w-4 h-4" aria-hidden /> Download CV
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="btn-primary flex items-center justify-center py-3 rounded-2xl font-semibold"
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
