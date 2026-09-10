import Link from "next/link";
import { Download } from "lucide-react";
import { SITE } from "../lib/site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 glass border-b border-[#27272a]">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between" aria-label="Case study">
        <Link href="/" className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-xl bg-[#10b981] flex items-center justify-center text-[#0a0a0f] font-semibold">FB</span>
          <span className="font-semibold tracking-tight">{SITE.shortName}</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/#projects" className="text-sm text-[#a1a1aa] hover:text-white hidden sm:inline">All projects</Link>
          <a href={SITE.cvPath} download className="btn-secondary inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm">
            <Download className="w-4 h-4" aria-hidden />
            CV
          </a>
        </div>
      </nav>
    </header>
  );
}
