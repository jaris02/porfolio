"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { AboutSection } from "@/components/about/AboutSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { Footer } from "@/components/footer/Footer";
import { GitHubActivity } from "@/components/github/GitHubActivity";
import { Hero } from "@/components/hero/Hero";
import { Navbar } from "@/components/navigation/Navbar";
import { ProjectSection } from "@/components/projects/ProjectSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import type { PortfolioView, Theme } from "@/types/portfolio";

export default function Home() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [view, setView] = useState<PortfolioView>("home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const savedTheme = localStorage.getItem("theme") as Theme | null;
      if (savedTheme) setTheme(savedTheme);
    } catch (error) {
      console.warn("localStorage not accessible", error);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    } catch {
      // Preserve the existing fallback for restricted embedded environments.
    }
  }, [theme, mounted]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-bg selection:bg-primary selection:text-bg pb-24 dotted-bg overflow-x-hidden">
      <Navbar view={view} setView={setView} theme={theme} toggleTheme={() => setTheme((current) => current === "dark" ? "light" : "dark")} />
      <AnimatePresence mode="wait">
        {view === "home" ? (
          <motion.div key="home" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} transition={{ duration: 0.3 }}>
            <Hero />
            <GitHubActivity />
            <AboutSection />
            <main id="main-content" className="max-w-4xl mx-auto px-6 mt-24 md:mt-32 flex flex-col md:grid md:grid-cols-[1fr_280px] gap-16 md:gap-24">
              <ExperienceSection />
              <SkillsSection />
            </main>
            <ProjectSection />
          </motion.div>
        ) : (
          <ContactSection />
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}
