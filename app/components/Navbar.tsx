"use client";

import React, { useState } from 'react';
import { Menu, X, Download, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#impact', label: 'Impact' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Simple scroll spy
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -20%' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-[#27272a]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 group"
        >
          <div className="w-9 h-9 rounded-xl bg-[#10b981] flex items-center justify-center">
            <span className="text-[#0a0a0f] font-semibold text-xl tracking-[-1.5px]">FB</span>
          </div>
          <div>
            <div className="font-semibold text-lg tracking-[-0.5px] group-hover:text-[#10b981] transition-colors">Francis Bright</div>
            <div className="text-[10px] text-[#71717a] -mt-1">PRODUCT &amp; GROWTH</div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`nav-link transition-colors ${activeSection === link.href.slice(1) ? 'active text-[#10b981]' : 'text-[#a1a1aa] hover:text-[#f4f4f5]'}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/Francis_Bright_CV.pdf"
            download
            className="btn-secondary flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
            className="btn-primary flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-[#a1a1aa] hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[#27272a] bg-[#0a0a0f]"
          >
            <div className="px-6 py-8 flex flex-col gap-6 text-lg">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-[#a1a1aa] hover:text-white transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-[#27272a] flex flex-col gap-3">
                <a
                  href="/Francis_Bright_CV.pdf"
                  download
                  className="btn-secondary flex items-center justify-center gap-2 py-3 rounded-2xl text-base"
                >
                  <Download className="w-4 h-4" /> Download CV
                </a>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                  className="btn-primary flex items-center justify-center gap-2 py-3 rounded-2xl text-base font-semibold"
                >
                  Let&apos;s Talk Growth
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
