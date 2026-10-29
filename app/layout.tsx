import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "./sitemap";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const description =
  "MBT TechSphere Solutions helps organizations automate processes, build business applications, create insightful dashboards, and modernize digital workplaces using Microsoft Power Platform, SharePoint, Power BI and AI.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "MBT TechSphere Solutions | Intelligent Digital Solutions for Business",
  description,
  alternates: { canonical: "/" },
  verification: { google: "GpBGu96S95YXo6i7ae37tlsigszE6n4y-kmpJprQqUE" },
  openGraph: {
    type: "website",
    siteName: "MBT TechSphere Solutions",
    title: "MBT TechSphere Solutions | Digital Solutions for a Smarter Tomorrow",
    description,
    url: "/",
    locale: "en_ZA",
    images: [{ url: "/images/logo-full.png", width: 1774, height: 887, alt: "MBT TechSphere Solutions" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} h-full scroll-smooth`}>
      <body className="flex min-h-full flex-col bg-white text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
