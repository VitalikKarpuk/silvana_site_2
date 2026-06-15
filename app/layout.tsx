import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: { icon: "/favicon.svg" },
  title: "Silvana — the agent interaction layer for tokenized assets",
  description:
    "Deploy agents that trade, settle, and prove on Canton. Private execution, atomic settlement, full asset control — from your first transaction to your millionth.",
  openGraph: {
    title: "Silvana — the agent interaction layer for tokenized assets",
    description:
      "Agents trade. Agents settle. Agents prove. Silvana is the execution platform for tokenized assets on Canton.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
