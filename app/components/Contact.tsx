"use client";

import React, { useState } from "react";
import { Mail, Linkedin, Github, MapPin, ArrowRight } from "lucide-react";
import { SITE } from "../lib/site";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", role: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xgojzqwb", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setFormData({ name: "", email: "", role: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-24 border-t border-[#27272a]">
      <div className="grid lg:grid-cols-5 gap-x-14 gap-y-12">
        <div className="lg:col-span-2">
          <p className="uppercase tracking-[0.18em] text-xs text-[#10b981] font-medium mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">Let&apos;s talk about the role</h2>
          <p className="mt-6 text-[#a1a1aa] max-w-sm">Open to Data Analyst, Business Analyst, BI Analyst and Product Analyst roles. Remote or hybrid.</p>
          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 group">
                <span className="w-9 h-9 rounded-xl border border-[#27272a] flex items-center justify-center group-hover:border-[#10b981]"><Mail className="w-4 h-4" aria-hidden /></span>
                <span className="group-hover:text-[#10b981] break-all">{SITE.email}</span>
              </a>
            </li>
            <li>
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <span className="w-9 h-9 rounded-xl border border-[#27272a] flex items-center justify-center group-hover:border-[#10b981]"><Linkedin className="w-4 h-4" aria-hidden /></span>
                <span className="group-hover:text-[#10b981]">{SITE.linkedinLabel}</span>
              </a>
            </li>
            <li>
              <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <span className="w-9 h-9 rounded-xl border border-[#27272a] flex items-center justify-center group-hover:border-[#10b981]"><Github className="w-4 h-4" aria-hidden /></span>
                <span className="group-hover:text-[#10b981]">{SITE.githubLabel}</span>
              </a>
            </li>
            <li className="flex items-center gap-4 text-[#a1a1aa]">
              <span className="w-9 h-9 rounded-xl border border-[#27272a] flex items-center justify-center"><MapPin className="w-4 h-4" aria-hidden /></span>
              {SITE.location} — remote-ready
            </li>
          </ul>
        </div>
        <div className="lg:col-span-3">
          {status === "sent" ? (
            <div className="card rounded-3xl p-10 text-center">
              <p className="text-[#10b981] text-sm uppercase tracking-[0.16em] mb-3">Sent</p>
              <h3 className="text-2xl font-semibold tracking-tight">Thanks. I have the message.</h3>
              <p className="mt-3 text-[#a1a1aa]">I usually reply within 24–48 hours.</p>
              <button className="mt-6 text-sm text-[#10b981] underline" onClick={() => setStatus("idle")}>Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs tracking-widest text-[#71717a] mb-2">Your name</label>
                  <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} required autoComplete="name" className="w-full bg-[#16161b] border border-[#27272a] rounded-2xl px-5 py-3.5 text-base placeholder:text-[#52525b]" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs tracking-widest text-[#71717a] mb-2">Work email</label>
                  <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required autoComplete="email" className="w-full bg-[#16161b] border border-[#27272a] rounded-2xl px-5 py-3.5 text-base placeholder:text-[#52525b]" placeholder="you@company.com" />
                </div>
              </div>
              <div>
                <label htmlFor="role" className="block text-xs tracking-widest text-[#71717a] mb-2">What is this about?</label>
                <select id="role" name="role" value={formData.role} onChange={handleChange} required className="w-full bg-[#16161b] border border-[#27272a] rounded-2xl px-5 py-3.5 text-base text-[#f4f4f5]">
                  <option value="">Select an option</option>
                  <option value="Data Analyst Role">Data Analyst role</option>
                  <option value="Business Analyst Role">Business Analyst role</option>
                  <option value="BI / Product Analyst Role">BI or Product Analyst role</option>
                  <option value="Consulting">Consulting or project work</option>
                  <option value="Other">Something else</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs tracking-widest text-[#71717a] mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full resize-y min-h-[120px] bg-[#16161b] border border-[#27272a] rounded-2xl px-5 py-4 text-base placeholder:text-[#52525b]" placeholder="Role, team, or the problem you want help with." />
              </div>
              {status === "error" && (
                <p className="text-sm text-red-400" role="alert">The form did not send. Email me directly at {SITE.email}.</p>
              )}
              <button type="submit" disabled={status === "sending"} className="btn-primary w-full flex items-center justify-center gap-3 h-12 rounded-2xl text-base font-semibold disabled:opacity-70">
                {status === "sending" ? "Sending…" : "Send message"}
                {status !== "sending" && <ArrowRight className="w-4 h-4" aria-hidden />}
              </button>
              <p className="text-center text-xs text-[#71717a]">Usually replies within 24–48 hours.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
