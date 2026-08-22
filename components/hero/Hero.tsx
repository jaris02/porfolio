"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BookOpen, Github, Linkedin, MapPin, Send, Twitter, Zap } from "lucide-react";
import { PROFILE } from "@/data/profile";

export function Hero() {
  return (
    <header id="hero-section" className="max-w-4xl mx-auto px-6 mt-8 sm:mt-12 md:mt-24 space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6 flex-1 order-2 md:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-tight pb-2">Siraj Mohammed</h1>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] sm:text-xs font-mono text-secondary uppercase tracking-[0.1em]">
            <span className="px-2 py-0.5 bg-surface border border-border rounded whitespace-nowrap">Full-Stack Developer</span><span className="hidden xs:inline text-border">/</span>
            <span className="px-2 py-0.5 bg-surface border border-border rounded whitespace-nowrap">Backend-Focused</span><span className="hidden sm:inline text-border">/</span>
            <span className="flex items-center gap-1.5 px-2 py-0.5 bg-surface border border-border rounded"><MapPin className="w-3 h-3" /> {PROFILE.location}</span>
          </div>
          <div className="space-y-4 text-base sm:text-lg md:text-xl text-secondary max-w-2xl leading-relaxed">
            <p className="font-bold text-primary border-l-2 border-primary pl-4 py-2 bg-primary/5">I build software that moves real workflows.</p>
            <p>Full-stack developer with a strong backend focus, building API-driven systems with Go, TypeScript, Python, PostgreSQL, and modern web technologies.</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="relative order-1 md:order-2 self-start md:self-auto">
          <div className="relative group"><div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur opacity-40 group-hover:opacity-100 transition-opacity" />
            <Image src="/images/profile.jpg" alt="Siraj Mohammed" width={160} height={160} sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px" priority className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover filter grayscale ring-1 sm:ring-2 ring-border hover:grayscale-0 transition-all duration-700 shadow-2xl relative" />
            <div className="absolute -bottom-1 -right-1 sm:bottom-2 sm:right-2 p-2 sm:p-3 bg-primary rounded-full ring-2 sm:ring-4 ring-bg shadow-lg z-10 flex items-center justify-center"><Zap className="w-3 h-3 sm:w-4 sm:h-4 text-bg fill-current" /></div>
          </div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-8 py-8 border-y border-border/40 text-[10px] font-mono text-secondary uppercase tracking-tighter">
        <a href={PROFILE.github} className="flex items-center gap-1.5 hover:text-primary transition-colors"><Github className="w-3 h-3" /> GitHub</a><a href={PROFILE.linkedin} className="flex items-center gap-1.5 hover:text-primary transition-colors"><Linkedin className="w-3 h-3" /> LinkedIn</a><a href={PROFILE.telegram} className="flex items-center gap-1.5 hover:text-primary transition-colors"><Send className="w-3 h-3" /> Telegram</a><a href={PROFILE.substack} className="flex items-center gap-1.5 hover:text-primary transition-colors"><BookOpen className="w-3 h-3" /> Substack</a><a href={PROFILE.x} className="flex items-center gap-1.5 hover:text-primary transition-colors"><Twitter className="w-3 h-3" /> X</a>
      </motion.div>
    </header>
  );
}
