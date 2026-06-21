"use client";

import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', role: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call / email send
    await new Promise(resolve => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset after showing success
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', role: '', message: '' });
    }, 2800);
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24 border-t border-[#27272a]">
      <div className="grid lg:grid-cols-5 gap-x-16 gap-y-14">
        {/* Left Info */}
        <div className="lg:col-span-2">
          <div className="uppercase tracking-[3px] text-xs text-[#10b981] font-medium mb-3">CHAPTER 08 — NEXT STEP</div>
          <h2 className="text-6xl font-semibold tracking-[-3px] leading-none">Let&apos;s Build<br />Smarter Products</h2>
          
          <p className="mt-8 text-lg text-[#a1a1aa] max-w-sm">
            I&apos;m currently open to Product Analytics, Growth Analytics, Data Analyst and Experimentation roles at ambitious teams.
          </p>

          <div className="mt-10 space-y-4 text-sm">
            <a href="mailto:brightchibuikeaja@gmail.com" className="flex items-center gap-4 group">
              <div className="w-9 h-9 rounded-xl border border-[#27272a] flex items-center justify-center group-hover:border-[#10b981] transition-colors"><Mail className="w-4 h-4" /></div>
              <span className="group-hover:text-[#10b981] transition-colors">brightchibuikeaja@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/bright-francis" target="_blank" className="flex items-center gap-4 group">
              <div className="w-9 h-9 rounded-xl border border-[#27272a] flex items-center justify-center group-hover:border-[#10b981] transition-colors"><Linkedin className="w-4 h-4" /></div>
              <span className="group-hover:text-[#10b981] transition-colors">linkedin.com/in/bright-francis</span>
            </a>
            <a href="https://github.com/FrancisBright1" target="_blank" className="flex items-center gap-4 group">
              <div className="w-9 h-9 rounded-xl border border-[#27272a] flex items-center justify-center group-hover:border-[#10b981] transition-colors"><Github className="w-4 h-4" /></div>
              <span className="group-hover:text-[#10b981] transition-colors">github.com/FrancisBright1</span>
            </a>
            <div className="flex items-center gap-4 pt-1 text-[#a1a1aa]">
              <div className="w-9 h-9 rounded-xl border border-[#27272a] flex items-center justify-center"><MapPin className="w-4 h-4" /></div>
              Uyo, Nigeria — Remote-first, globally open
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs tracking-widest text-[#71717a] mb-2">YOUR NAME</label>
                  <input 
                    type="text" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full bg-[#16161b] border border-[#27272a] rounded-2xl px-6 py-4 text-base placeholder:text-[#52525b] focus:outline-none focus:border-[#10b981]" 
                    placeholder="Jane Doe" 
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest text-[#71717a] mb-2">WORK EMAIL</label>
                  <input 
                    type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full bg-[#16161b] border border-[#27272a] rounded-2xl px-6 py-4 text-base placeholder:text-[#52525b] focus:outline-none focus:border-[#10b981]" 
                    placeholder="you@company.com" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest text-[#71717a] mb-2">I&apos;M HIRING FOR / INTERESTED IN</label>
                <select 
                  name="role" value={formData.role} onChange={handleChange} required
                  className="w-full bg-[#16161b] border border-[#27272a] rounded-2xl px-6 py-4 text-base text-[#f4f4f5] focus:outline-none focus:border-[#10b981]"
                >
                  <option value="">Select an option</option>
                  <option value="Product Analytics Role">Product Analytics Role</option>
                  <option value="Growth / Retention Analyst">Growth / Retention Analyst</option>
                  <option value="Data Analyst (Experimentation)">Data Analyst (Experimentation focus)</option>
                  <option value="Senior / Lead Analytics">Senior / Lead Analytics Position</option>
                  <option value="Consulting / Advisory">Consulting or Advisory Engagement</option>
                  <option value="Other">Other / Just exploring</option>
                </select>
              </div>

              <div>
                <label className="block text-xs tracking-widest text-[#71717a] mb-2">MESSAGE / CONTEXT</label>
                <textarea 
                  name="message" value={formData.message} onChange={handleChange} required rows={5}
                  className="w-full resize-y min-h-[120px] bg-[#16161b] border border-[#27272a] rounded-3xl px-6 py-5 text-base placeholder:text-[#52525b] focus:outline-none focus:border-[#10b981]" 
                  placeholder="Tell me about the role, team, or challenge you're working on..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-3 h-14 rounded-2xl text-base font-semibold disabled:opacity-70 mt-2"
              >
                {isSubmitting ? "SENDING YOUR MESSAGE..." : "SEND MESSAGE"} 
                {!isSubmitting && <ArrowRight className="w-4 h-4" />}
              </button>
              <p className="text-center text-xs text-[#71717a]">I typically respond within 24–48 hours.</p>
            </form>
          ) : (
            <div className="card rounded-3xl p-14 text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-[#10b981]/10 flex items-center justify-center mb-6">
                <div className="text-[#10b981] text-4xl">✓</div>
              </div>
              <h3 className="text-3xl font-semibold tracking-tight">Thank you. Message received.</h3>
              <p className="mt-3 text-[#a1a1aa]">I&apos;ll get back to you personally very soon.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
