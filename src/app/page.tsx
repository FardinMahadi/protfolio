"use client";
import { AboutSection } from "@/components/LandingPage/AboutSection";
import { BlogSection } from "@/components/LandingPage/BlogSection";
import { ContactSection } from "@/components/LandingPage/ContactSection";
import { CursorEffect } from "@/components/LandingPage/CursorEffect";
import { Footer } from "@/components/LandingPage/Footer";
import { HeroSection } from "@/components/LandingPage/HeroSection";
import { Navigation } from "@/components/LandingPage/Navigaion";
import { ProjectsSection } from "@/components/LandingPage/ProjectsSection";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-slate-100 overflow-x-hidden cursor-none">
      <CursorEffect />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
