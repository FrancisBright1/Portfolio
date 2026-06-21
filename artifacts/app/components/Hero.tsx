"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Linkedin, Github, ArrowRight } from 'lucide-react';

const metrics = [
  { value: "4+", label: "Years Experience" },
  { value: "100+", label: "Professionals Trained" },
  { value: "10+", label: "Dashboards Built" },
  { value: "40%", label: "Reporting Time Saved" },
];

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="min-h-[100dvh] flex items-center pt-20 pb-16 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f2937_0.8px,transparent_1px)] bg-[length:4px_4px] opacity-40" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16161b] border border-[#27272a] text-sm text-[#a1a1aa]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
              Available for full-time opportunities
            </div>

            <div>
              <h1 className="hero-headline text-6xl lg:text-7xl font-semibold tracking-[-3.5px] leading-[0.92] text-balance">
                Product &amp;<br />Growth Data<br />Analyst
              </h1>
              <p className="mt-6 max-w-[38ch] text-2xl text-[#a1a1aa] tracking-[-0.3px] leading-tight">
                Turning product data into growth decisions.
              </p>
            </div>

            <p className="max-w-md text-lg text-[#71717a] leading-relaxed">
              I transform complex user behaviour and business data into measurable product growth 
              through rigorous experimentation, scalable analytics, and clear data storytelling.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={scrollToProjects}
                className="btn-primary group flex items-center justify-center gap-3 px-8 h-14 rounded-2xl text-base font-semibold"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button 
                onClick={scrollToContact}
                className="btn-secondary flex items-center justify-center gap-3 px-8 h-14 rounded-2xl text-base font-medium"
              >
                Get in Touch
              </button>
              <a 
                href="/Francis_Bright_CV.pdf" 
                download
                className="btn-secondary flex items-center justify-center gap-3 px-6 h-14 rounded-2xl text-base font-medium md:hidden"
              >
                Download CV
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 text-sm">
              <div className="flex items-center gap-2 text-[#a1a1aa]">
                <MapPin className="w-4 h-4" /> Uyo, Nigeria <span className="text-[#10b981]">• Remote Ready</span>
              </div>
              <a href="mailto:brightchibuikeaja@gmail.com" className="flex items-center gap-2 hover:text-[#10b981] transition-colors">
                <Mail className="w-4 h-4" /> brightchibuikeaja@gmail.com
              </a>
              <div className="flex items-center gap-4">
                <a href="https://linkedin.com/in/bright-francis" target="_blank" rel="noopener noreferrer" className="hover:text-[#10b981] transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://github.com/FrancisBright1" target="_blank" rel="noopener noreferrer" className="hover:text-[#10b981] transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Avatar + Metrics */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[380px]">
              {/* Avatar */}
              <div className="relative aspect-[4/3.2] rounded-3xl overflow-hidden border border-[#27272a] shadow-2xl">
                <img 
                  src="/avatar.jpg" 
                  alt="Francis Chibuike Bright - Professional headshot" 
                  className="object-cover w-full h-full grayscale-[0.15]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Floating Metrics Cards */}
              <div className="absolute -bottom-6 -right-6 hidden lg:grid grid-cols-2 gap-3 w-[280px]">
                {metrics.map((metric, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="glass rounded-2xl px-5 py-4 border border-[#27272a]"
                  >
                    <div className="font-mono text-3xl font-semibold tracking-[-1px] text-[#10b981]">{metric.value}</div>
                    <div className="text-xs uppercase tracking-[1px] text-[#71717a] mt-0.5">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 hidden lg:block -translate-x-1/2">
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[#71717a] text-xs tracking-[2px] flex flex-col items-center gap-1"
        >
          SCROLL TO EXPLORE <ArrowRight className="w-3 h-3 rotate-90" />
        </motion.div>
      </div>
    </section>
  );
}
