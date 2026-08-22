"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Globe, Layout, Monitor } from "lucide-react";
import type { Project } from "@/types/portfolio";

export function ProjectCard({ project, onSelect }: { project: Project; onSelect: (project: Project) => void }) {
  return (
    <motion.div whileHover={{ y: -8 }} className="group space-y-6">
      <button type="button" aria-label={`View details for ${project.title}`} onClick={() => onSelect(project)} className="card-hover p-0 overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-surface relative block w-full text-left isolation-auto grayscale hover:grayscale-0 transition-all duration-700 dashed-border shadow-2xl shadow-primary/5 cursor-pointer group/item rounded-xl">
        {project.image ? <Image src={project.image} alt={project.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-700" /> : <div className="absolute inset-0 dotted-bg bg-surface" />}
        <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/10 to-transparent p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start opacity-0 group-hover/item:opacity-100 transition-all -translate-y-[10px] group-hover/item:translate-y-0 duration-500"><div className="p-2 bg-bg/80 backdrop-blur-md rounded-lg border border-border shadow-xl">{project.type === "Desktop Application" ? <Monitor className="w-4 h-4 text-primary" /> : <Layout className="w-4 h-4 text-primary" />}</div><span className="text-[9px] font-mono bg-primary text-bg px-2.5 py-1 rounded-full tracking-[0.2em] uppercase font-bold shadow-lg">{project.tag}</span></div>
          <div className="space-y-2 translate-y-[20px] group-hover/item:translate-y-0 transition-transform duration-500"><div className="flex justify-between items-end"><div><h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tighter drop-shadow-md">{project.title}</h3><div className="flex gap-2 mt-1">{project.tech.slice(0, 2).map((tech) => <span key={tech} className="text-[8px] font-mono text-white/60 uppercase tracking-widest">{tech}</span>)}</div></div><div className="bg-white text-primary p-2 rounded-full -rotate-45 group-hover/item:rotate-0 transition-transform duration-500 shadow-xl border-4 border-primary/10"><ArrowUpRight className="w-4 h-4" /></div></div></div>
        </div>
      </button>
      <div className="space-y-4 px-1 sm:px-2"><p className="text-secondary text-sm leading-relaxed line-clamp-2 h-10 font-mono tracking-tight opacity-80">{project.description}</p><div className="flex items-center justify-between pt-2"><div className="flex gap-4">{project.tech.map((tech) => <span key={tech} className="text-[9px] font-mono text-primary/60 font-bold uppercase tracking-wider">#{tech}</span>)}</div>{project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title}`} className="p-2.5 border border-border rounded-full hover:border-primary hover:bg-primary hover:text-bg transition-all text-secondary"><Globe className="w-4 h-4" /></a>}</div></div>
    </motion.div>
  );
}
