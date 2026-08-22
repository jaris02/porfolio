"use client";

import { AnimatePresence } from "motion/react";
import { Globe, Monitor } from "lucide-react";
import { useState } from "react";
import { PROJECTS } from "@/data/projects";
import type { Project } from "@/types/portfolio";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return <><section id="projects" className="max-w-4xl mx-auto px-6 mt-32 space-y-16"><div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"><div className="space-y-4"><h2 className="text-4xl sm:text-5xl font-bold tracking-tighter">Selected Works</h2><div className="flex gap-4 text-[10px] font-mono text-secondary uppercase tracking-widest"><span className="flex items-center gap-2 py-1 px-2 border border-border rounded-md"><Monitor className="w-3.5 h-3.5" /> Systems</span><span className="flex items-center gap-2 py-1 px-2 border border-border rounded-md"><Globe className="w-3.5 h-3.5" /> Interfaces</span></div></div><p className="text-secondary text-sm font-mono max-w-[240px] italic leading-tight border-l border-primary pl-4 hidden sm:block">High-integrity engineering for business and educational institutional workflows.</p></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-10">{PROJECTS.map((project) => <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />)}</div></section><AnimatePresence>{selectedProject ? <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}</AnimatePresence></>;
}
