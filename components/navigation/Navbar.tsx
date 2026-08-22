"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronRight, Github, Layout, Linkedin, Send, X } from "lucide-react";
import { useState } from "react";
import { PROFILE } from "@/data/profile";
import type { PortfolioView, Theme } from "@/types/portfolio";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar({ view, setView, theme, toggleTheme }: { view: PortfolioView; setView: (view: PortfolioView) => void; theme: Theme; toggleTheme: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = (next: PortfolioView) => { setView(next); setIsMenuOpen(false); };

  return (
    <nav className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center text-sm">
        <div className="flex items-center gap-4 sm:gap-8">
          <motion.button type="button" onClick={() => navigate("home")} whileHover={{ scale: 1.03 }} className="flex items-center gap-2 group rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="Show portfolio work">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center"><span className="text-bg text-lg font-bold italic tracking-tighter">S</span></div>
            <span className="font-mono text-[10px] uppercase font-bold tracking-widest hidden xs:block">Siraj</span>
          </motion.button>
          <div className="hidden sm:flex gap-6">
            {(["home", "contact"] as const).map((item) => (
              <button key={item} onClick={() => navigate(item)} className={`transition-all duration-300 font-mono uppercase text-[10px] tracking-widest px-2 py-1 rounded ${view === item ? "text-primary bg-primary/5 active-link" : "text-secondary hover:text-primary hover:bg-primary/5"}`}>
                {item === "home" ? "Work" : "Contact"}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-6">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" className="sm:hidden p-2 hover:bg-surface border border-transparent hover:border-border rounded-lg text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            <AnimatePresence mode="wait">{isMenuOpen ? <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X className="w-5 h-5" /></motion.div> : <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}><Layout className="w-5 h-5" /></motion.div>}</AnimatePresence>
          </button>
          <div className="hidden sm:flex gap-4 font-mono text-[10px] uppercase tracking-widest"><a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-all flex items-center gap-1">GitHub <ArrowUpRight className="w-2.5 h-2.5" /></a></div>
        </div>
      </div>
      <AnimatePresence>{isMenuOpen && <motion.div id="mobile-navigation" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="sm:hidden border-t border-border/40 bg-bg overflow-hidden"><div className="px-6 py-6 flex flex-col gap-5">
        {(["home", "contact"] as const).map((item) => <button key={item} onClick={() => navigate(item)} className={`flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] font-bold ${view === item ? "text-primary" : "text-secondary opacity-60"}`}>{item === "home" ? "Work" : "Contact"}<ChevronRight className={`w-4 h-4 transition-transform ${view === item ? "rotate-90" : ""}`} /></button>)}
        <div className="pt-5 border-t border-border/40 flex gap-4"><a aria-label="GitHub" href={PROFILE.github} className="text-secondary p-2.5 bg-surface border border-border rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><Github className="w-4 h-4" /></a><a aria-label="LinkedIn" href={PROFILE.linkedin} className="text-secondary p-2.5 bg-surface border border-border rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><Linkedin className="w-4 h-4" /></a><a aria-label="Telegram" href={PROFILE.telegram} className="text-secondary p-2.5 bg-surface border border-border rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><Send className="w-4 h-4" /></a></div>
      </div></motion.div>}</AnimatePresence>
    </nav>
  );
}
