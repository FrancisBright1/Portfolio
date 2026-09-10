import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "./lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${SITE.name} | Data Analyst | Business & Product Analytics`;
const description =
  "Francis Chibuike Bright is a Data Analyst focused on business and product analytics. He uses SQL, Power BI, Python, Excel and Tableau to analyse data, explain what it means, and help teams make better decisions.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: title,
    template: `%s | ${SITE.shortName}`,
  },
  description,
  keywords: [
    "Data Analyst",
    "Business Analyst",
    "Product Analyst",
    "BI Analyst",
    "SQL",
    "Power BI",
    "Python",
    "Tableau",
    "Excel",
    "Francis Bright",
    "Francis Chibuike Bright",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    title,
    description,
    siteName: `${SITE.shortName} — Data Analyst`,
    locale: "en_GB",
    images: [{ url: "/avatar.jpg", width: 800, height: 800, alt: `${SITE.name} — Data Analyst` }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/avatar.jpg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: "Data Analyst",
  description,
  email: SITE.email,
  telephone: SITE.phone,
  address: { "@type": "PostalAddress", addressLocality: "Uyo", addressCountry: "NG" },
  url: SITE.url,
  sameAs: [SITE.linkedin, SITE.github],
  knowsAbout: ["Data Analysis", "Business Intelligence", "Product Analytics", "SQL", "Power BI", "Python", "Tableau", "Excel"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-[#f4f4f5]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:bg-[#10b981] focus:text-[#0a0a0f] focus:px-4 focus:py-2 focus:rounded-lg">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
