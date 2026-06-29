import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-[#27272a] py-12 text-center text-xs tracking-widest text-[#71717a]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-y-4">
        <div>© {new Date().getFullYear()} Francis Chibuike Bright. All rights reserved.</div>
        <div className="font-mono">DATA-DRIVEN DECISIONS CREATE SUSTAINABLE GROWTH.</div>
        <div>Built with precision in Nigeria • Deployable on Vercel</div>
      </div>
    </footer>
  );
}
