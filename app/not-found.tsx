import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center px-6 py-24 text-center">
        <div>
          <p className="text-[#10b981] text-sm uppercase tracking-[0.16em] mb-3">404</p>
          <h1 className="text-3xl font-semibold tracking-tight">This page is not here</h1>
          <p className="mt-3 text-[#a1a1aa]">The link may be old. Head back to the portfolio.</p>
          <Link href="/" className="btn-primary inline-flex mt-6 px-5 py-2.5 rounded-full text-sm">Back home</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
