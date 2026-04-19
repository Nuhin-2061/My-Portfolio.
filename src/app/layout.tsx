import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({ subsets: ["latin"], variable: "--font-body" });
const displayFont = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: {
    default: "Al Sadique Nuhin | Portfolio",
    template: "%s | Al Sadique Nuhin"
  },
  description:
    "A modern scrollytelling portfolio for Al Sadique Nuhin, an undergraduate CSE student at BUP focused on cloud computing and scalable software systems.",
  keywords: [
    "Al Sadique Nuhin",
    "Portfolio",
    "Computer Science",
    "Cloud Computing",
    "BUP",
    "Software Engineering"
  ],
  openGraph: {
    title: "Al Sadique Nuhin | Portfolio",
    description:
      "Explore projects, skills, and career goals in a cinematic portfolio experience focused on cloud-first software engineering.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Sadique Nuhin | Portfolio",
    description:
      "Explore projects, skills, and career goals in a cinematic portfolio experience focused on cloud-first software engineering."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}