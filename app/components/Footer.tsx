import React from "react";
import { SITE } from "../lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-[#27272a] py-10 text-sm text-[#71717a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} {SITE.name}</p>
        <p className="max-w-sm md:text-right">Data Analyst · Business &amp; Product Analytics · {SITE.location}</p>
      </div>
    </footer>
  );
}
