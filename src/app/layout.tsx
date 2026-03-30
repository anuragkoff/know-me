import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/layout/hero/page";
import Card from "@/components/layout/card/card";
import data from "@/components/utils/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WhoIAm",
  description: "Developed with Love and next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cardData = data();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <HeroSection />
        <div className="flex flex-row justify-evenly gap-4 mt-10">
          {cardData.map((project) => (
            <Card key={project.projectName} name={project.projectName} description={project.description} github={project.github} />
          ))}
        </div>
        {children}
      </body>
    </html>
  );
}
