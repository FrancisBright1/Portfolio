import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Francis Chibuike Bright | Product & Growth Data Analyst",
  description: "Turning product data into growth decisions. Product & Growth Data Analyst with 4+ years experience in experimentation, analytics, and building scalable dashboards that drive user acquisition, retention, and product performance.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Francis Chibuike Bright | Product & Growth Data Analyst",
    description: "I transform user behaviour and business data into measurable product growth through experimentation, analytics, and data storytelling.",
    images: [{ url: "/avatar.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-[#f4f4f5]">{children}</body>
    </html>
  );
}
